import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, ChefHat, Users, Tag, Clock, CookingPot, ChevronDown, ChevronUp } from "lucide-react";
import { mockMeals } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BudgetFinder = () => {
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);

  const budgetNum = parseFloat(budget) || 0;
  const results = mockMeals
    .filter((m) => m.totalCost <= budgetNum)
    .sort((a, b) => a.totalCost - b.totalCost);

  const toggleMeal = (id: string) => {
    setExpandedMeal((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Budget Meal Finder</h1>
        <p className="mt-1 text-muted-foreground">
          Enter your budget and discover meals you can afford
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
          </p>

          {results.length === 0 ? (
            <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
              No meals found under that budget. Try increasing it a bit!
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((meal, i) => {
                const isExpanded = expandedMeal === meal.id;
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
                          <div className="px-5 pb-5 border-t pt-4">
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
                            {(meal.prepTime || meal.cookTime) && (
                              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
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
