import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, ChefHat, Users, Tag, Clock, CookingPot, ChevronDown, ChevronUp, Globe, Loader2, TrendingDown, TrendingUp } from "lucide-react";
import { worldMeals } from "@/data/worldMeals";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { searchOpenPrices, type OpenPrice } from "@/lib/api/openPrices";

// Cache for live prices to avoid refetching
const livePriceCache = new Map<string, { min: number; max: number; avg: number; count: number; fetched: number }>();

async function fetchLivePriceForIngredient(ingredient: string): Promise<{ min: number; max: number; avg: number; count: number } | null> {
  // Normalize ingredient name for searching (strip quantities, etc.)
  const searchTerm = ingredient.replace(/\(.*?\)/g, "").replace(/\d+/g, "").trim().toLowerCase();
  if (searchTerm.length < 2) return null;

  const cached = livePriceCache.get(searchTerm);
  if (cached && Date.now() - cached.fetched < 5 * 60 * 1000) {
    return cached;
  }

  try {
    const result = await searchOpenPrices(searchTerm, { page_size: 10 });
    if (result.success && result.data && result.data.length > 0) {
      const prices = result.data.map((p) => p.price).filter((p) => p > 0);
      if (prices.length === 0) return null;
      const entry = {
        min: Math.min(...prices),
        max: Math.max(...prices),
        avg: prices.reduce((s, p) => s + p, 0) / prices.length,
        count: prices.length,
        fetched: Date.now(),
      };
      livePriceCache.set(searchTerm, entry);
      return entry;
    }
  } catch {}
  return null;
}

interface LivePriceData {
  totalMin: number;
  totalMax: number;
  totalAvg: number;
  ingredients: { name: string; min: number; max: number; avg: number; count: number }[];
  loading: boolean;
  fetched: boolean;
}

const BudgetFinder = () => {
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);
  const [livePrices, setLivePrices] = useState<Record<string, LivePriceData>>({});

  const budgetNum = parseFloat(budget) || 0;
  const results = worldMeals
    .filter((m) => m.totalCost <= budgetNum)
    .sort((a, b) => a.totalCost - b.totalCost);

  const toggleMeal = (id: string) => {
    setExpandedMeal((prev) => (prev === id ? null : id));
  };

  // Fetch live prices for a meal's key ingredients when expanded
  const fetchLivePrices = useCallback(async (mealId: string, ingredients: string[]) => {
    if (livePrices[mealId]?.fetched) return;
    
    setLivePrices((prev) => ({
      ...prev,
      [mealId]: { totalMin: 0, totalMax: 0, totalAvg: 0, ingredients: [], loading: true, fetched: false },
    }));

    // Fetch top 4 key ingredients (most impactful)
    const keyIngredients = ingredients.slice(0, 4);
    const results: { name: string; min: number; max: number; avg: number; count: number }[] = [];

    await Promise.all(
      keyIngredients.map(async (ing) => {
        const data = await fetchLivePriceForIngredient(ing);
        if (data) {
          results.push({ name: ing, ...data });
        }
      })
    );

    if (results.length > 0) {
      const totalMin = results.reduce((s, r) => s + r.min, 0);
      const totalMax = results.reduce((s, r) => s + r.max, 0);
      const totalAvg = results.reduce((s, r) => s + r.avg, 0);
      setLivePrices((prev) => ({
        ...prev,
        [mealId]: { totalMin, totalMax, totalAvg, ingredients: results, loading: false, fetched: true },
      }));
    } else {
      setLivePrices((prev) => ({
        ...prev,
        [mealId]: { totalMin: 0, totalMax: 0, totalAvg: 0, ingredients: [], loading: false, fetched: true },
      }));
    }
  }, [livePrices]);

  // Trigger live price fetch when a meal is expanded
  useEffect(() => {
    if (expandedMeal) {
      const meal = worldMeals.find((m) => m.id === expandedMeal);
      if (meal && !livePrices[expandedMeal]?.fetched) {
        fetchLivePrices(expandedMeal, meal.ingredients);
      }
    }
  }, [expandedMeal]);

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Budget Meal Finder</h1>
        <p className="mt-1 text-muted-foreground">
          Enter your budget and discover meals you can afford — with live price estimates
        </p>
      </motion.div>

      <motion.div
        className="mt-6 rounded-xl border bg-card p-6 shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex items-end gap-4"
        >
          <div className="flex-1">
            <label className="text-sm font-medium text-muted-foreground">
              What's your meal budget? (total ingredient cost)
            </label>
            <div className="relative mt-1">
              <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="number"
                min="0"
                step="0.50"
                placeholder="e.g. 10.00"
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value);
                  setSubmitted(false);
                }}
                className="pl-10 text-lg"
              />
            </div>
          </div>
          <Button type="submit" disabled={!budget || budgetNum <= 0} className="gap-2">
            Find Meals
          </Button>
        </form>
      </motion.div>

      {submitted && budgetNum > 0 && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} meal{results.length !== 1 ? "s" : ""} under{" "}
            <span className="font-bold text-foreground">${budgetNum.toFixed(2)}</span>
            <span className="ml-2 text-xs">• Expand a meal to see live price estimates</span>
          </p>

          {results.length === 0 ? (
            <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
              No meals found under that budget. Try increasing it a bit!
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((meal, i) => {
                const isExpanded = expandedMeal === meal.id;
                const lp = livePrices[meal.id];
                return (
                  <motion.div
                    key={meal.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <button
                      onClick={() => toggleMeal(meal.id)}
                      className="w-full text-left p-5"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                            {meal.name}
                            {meal.chefPick && (
                              <ChefHat className="h-4 w-4 text-accent shrink-0" />
                            )}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {meal.ingredients.join(", ")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="font-display text-2xl font-bold text-savings">
                            ${meal.totalCost.toFixed(2)}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {meal.servings} servings
                          </span>
                          <span className="font-medium text-foreground">
                            ${(meal.totalCost / meal.servings).toFixed(2)}/serving
                          </span>
                          {meal.prepTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {meal.prepTime}
                            </span>
                          )}
                          {meal.cookTime && (
                            <span className="flex items-center gap-1">
                              <CookingPot className="h-3.5 w-3.5" />
                              {meal.cookTime}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-1 flex-wrap justify-end">
                          {meal.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t pt-4 space-y-4">
                            {/* Live Price Estimate Section */}
                            <div className="rounded-lg border bg-muted/30 p-4">
                              <h4 className="font-semibold text-sm flex items-center gap-2 mb-3">
                                <Globe className="h-4 w-4 text-primary" />
                                Live Price Estimate
                                <span className="text-xs text-muted-foreground font-normal">(key ingredients)</span>
                              </h4>
                              {lp?.loading && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Checking live prices...
                                </div>
                              )}
                              {lp?.fetched && lp.ingredients.length > 0 && (
                                <div className="space-y-2">
                                  {lp.ingredients.map((ing) => (
                                    <div key={ing.name} className="flex items-center justify-between text-sm">
                                      <span className="text-muted-foreground">{ing.name}</span>
                                      <span className="font-medium">
                                        ${ing.min.toFixed(2)} – ${ing.max.toFixed(2)}
                                        <span className="text-xs text-muted-foreground ml-1">({ing.count} prices)</span>
                                      </span>
                                    </div>
                                  ))}
                                  <div className="border-t pt-2 mt-2 flex items-center justify-between text-sm font-semibold">
                                    <span>Live range (key ingredients)</span>
                                    <span className="flex items-center gap-2">
                                      ${lp.totalMin.toFixed(2)} – ${lp.totalMax.toFixed(2)}
                                      {lp.totalAvg < meal.totalCost ? (
                                        <Badge variant="secondary" className="bg-savings/10 text-savings text-xs gap-1">
                                          <TrendingDown className="h-3 w-3" /> Lower
                                        </Badge>
                                      ) : lp.totalAvg > meal.totalCost ? (
                                        <Badge variant="secondary" className="bg-destructive/10 text-destructive text-xs gap-1">
                                          <TrendingUp className="h-3 w-3" /> Higher
                                        </Badge>
                                      ) : null}
                                    </span>
                                  </div>
                                </div>
                              )}
                              {lp?.fetched && lp.ingredients.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                  No live prices found for these ingredients. Using estimated cost.
                                </p>
                              )}
                            </div>

                            {/* Cooking Instructions */}
                            <div>
                              <h4 className="font-semibold text-sm flex items-center gap-2 mb-3">
                                <CookingPot className="h-4 w-4 text-primary" />
                                How to Cook
                              </h4>
                              <ol className="space-y-2">
                                {meal.instructions.map((step, idx) => (
                                  <li key={idx} className="flex gap-3 text-sm">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                                      {idx + 1}
                                    </span>
                                    <span className="text-muted-foreground pt-0.5">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {(meal.prepTime || meal.cookTime) && (
                              <div className="flex gap-4 text-xs text-muted-foreground">
                                {meal.prepTime && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" /> Prep: {meal.prepTime}
                                  </span>
                                )}
                                {meal.cookTime && (
                                  <span className="flex items-center gap-1">
                                    <CookingPot className="h-3.5 w-3.5" /> Cook: {meal.cookTime}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default BudgetFinder;
