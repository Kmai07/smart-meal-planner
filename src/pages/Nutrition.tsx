import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, Beef, Wheat, Droplets, ChefHat, Users, DollarSign } from "lucide-react";
import { worldMeals } from "@/data/worldMeals";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FilterDropdowns } from "@/components/budget/FilterDropdowns";
import { calculateMealNutrition, IngredientNutrition } from "@/lib/ingredientNutrition";
import type { MealOption } from "@/data/mockData";

const MacroBar = ({ label, value, max, color, icon: Icon, unit = "g" }: { label: string; value: number; max: number; color: string; icon: React.ElementType; unit?: string }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      <span className="font-semibold">{value}{unit}</span>
    </div>
    <Progress value={Math.min((value / max) * 100, 100)} className={`h-2 ${color}`} />
  </div>
);

const NutritionCard = ({ meal, nutrition }: { meal: MealOption; nutrition: IngredientNutrition }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="rounded-xl border bg-card p-6 shadow-sm"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl font-bold flex items-center gap-2">
          {meal.name}
          {meal.chefPick && <ChefHat className="h-4 w-4 text-accent shrink-0" />}
        </h3>
        <div className="mt-1.5 flex gap-1 flex-wrap">
          {meal.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {meal.servings} servings
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5" /> ${meal.totalCost.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="text-right shrink-0 ml-3">
        <div className="flex items-center gap-1 text-2xl font-bold text-accent">
          <Flame className="h-5 w-5" />
          {nutrition.calories}
        </div>
        <span className="text-xs text-muted-foreground">cal/serving</span>
      </div>
    </div>

    <div className="mt-5 space-y-3">
      <MacroBar label="Protein" value={nutrition.protein} max={50} color="[&>div]:bg-destructive" icon={Beef} />
      <MacroBar label="Carbs" value={nutrition.carbs} max={80} color="[&>div]:bg-accent" icon={Wheat} />
      <MacroBar label="Fat" value={nutrition.fat} max={40} color="[&>div]:bg-snap" icon={Droplets} />
      <MacroBar label="Fiber" value={nutrition.fiber} max={25} color="[&>div]:bg-primary" icon={Wheat} />
    </div>

    <div className="mt-5 grid grid-cols-4 gap-3">
      {[
        { label: "Vit A", value: nutrition.vitaminA },
        { label: "Vit C", value: nutrition.vitaminC },
        { label: "Iron", value: nutrition.iron },
        { label: "Calcium", value: nutrition.calcium },
      ].map((v) => (
        <div key={v.label} className="rounded-lg bg-muted/50 p-2 text-center">
          <span className="text-xs text-muted-foreground">{v.label}</span>
          <p className="font-semibold text-sm">{v.value}%</p>
        </div>
      ))}
    </div>

    {/* Ingredient breakdown */}
    <div className="mt-4 pt-4 border-t">
      <h4 className="text-xs font-semibold text-muted-foreground mb-2">INGREDIENTS ({meal.ingredients.length})</h4>
      <div className="flex flex-wrap gap-1">
        {meal.ingredients.map((ing, i) => (
          <Badge key={i} variant="outline" className="text-xs font-normal">
            {ing}
          </Badge>
        ))}
      </div>
    </div>
  </motion.div>
);

const Nutrition = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedMealType, setSelectedMealType] = useState<string[]>([]);

  const toggleIn = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const totalFilters = selectedCuisine.length + selectedDietary.length + selectedMealType.length;

  const results = useMemo(() => {
    let filtered = [...worldMeals];

    if (selectedCuisine.length > 0) {
      filtered = filtered.filter((m) =>
        selectedCuisine.some((c) => m.tags.some((t) => t.toLowerCase() === c.toLowerCase()))
      );
    }
    if (selectedDietary.length > 0) {
      filtered = filtered.filter((m) =>
        selectedDietary.every((d) => m.tags.some((t) => t.toLowerCase() === d.toLowerCase()))
      );
    }
    if (selectedMealType.length > 0) {
      filtered = filtered.filter((m) =>
        selectedMealType.some((mt) => m.tags.some((t) => t.toLowerCase() === mt.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCuisine, selectedDietary, selectedMealType]);

  // Pre-calculate nutrition for all results
  const mealsWithNutrition = useMemo(() => {
    return results.map((meal) => ({
      meal,
      nutrition: calculateMealNutrition(meal.ingredients, meal.servings),
    }));
  }, [results]);

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Nutrition Lookup</h1>
        <p className="mt-1 text-muted-foreground">
          Browse meal nutrition calculated from ingredients per serving
        </p>
      </motion.div>

      <motion.div
        className="mt-6 rounded-xl border bg-card p-4 shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <FilterDropdowns
          selectedCuisine={selectedCuisine}
          selectedDietary={selectedDietary}
          selectedMealType={selectedMealType}
          onToggleCuisine={(t) => setSelectedCuisine(toggleIn(selectedCuisine, t))}
          onToggleDietary={(t) => setSelectedDietary(toggleIn(selectedDietary, t))}
          onToggleMealType={(t) => setSelectedMealType(toggleIn(selectedMealType, t))}
          onClearAll={() => {
            setSelectedCuisine([]);
            setSelectedDietary([]);
            setSelectedMealType([]);
          }}
        />
      </motion.div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground mb-4">
          {mealsWithNutrition.length} meal{mealsWithNutrition.length !== 1 ? "s" : ""}
          {totalFilters > 0 ? " matching filters" : " available"}
        </p>

        {mealsWithNutrition.length === 0 ? (
          <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
            No meals found. Try adjusting your filters!
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {mealsWithNutrition.map(({ meal, nutrition }) => (
              <NutritionCard key={meal.id} meal={meal} nutrition={nutrition} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nutrition;
