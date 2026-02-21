import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, ChefHat, Users, Tag } from "lucide-react";
import { mockMeals } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BudgetFinder = () => {
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const budgetNum = parseFloat(budget) || 0;
  const results = mockMeals
    .filter((m) => m.totalCost <= budgetNum)
    .sort((a, b) => a.totalCost - b.totalCost);

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
              What's your meal budget?
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
              {results.map((meal, i) => (
                <motion.div
                  key={meal.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                        {meal.name}
                        {meal.chefPick && (
                          <ChefHat className="h-4 w-4 text-accent" />
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {meal.ingredients.join(", ")}
                      </p>
                    </div>
                    <span className="font-display text-2xl font-bold text-savings">
                      ${meal.totalCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {meal.servings} servings •{" "}
                      <span className="font-medium text-foreground">
                        ${(meal.totalCost / meal.servings).toFixed(2)}/serving
                      </span>
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
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default BudgetFinder;
