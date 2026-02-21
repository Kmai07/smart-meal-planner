import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Flame, Beef, Wheat, Droplets } from "lucide-react";
import { mockNutrition, NutritionEntry } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const MacroBar = ({ label, value, max, color, icon: Icon }: { label: string; value: number; max: number; color: string; icon: React.ElementType }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      <span className="font-semibold">{value}g</span>
    </div>
    <Progress value={Math.min((value / max) * 100, 100)} className={`h-2 ${color}`} />
  </div>
);

const NutritionCard = ({ entry }: { entry: NutritionEntry }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="rounded-xl border bg-card p-6 shadow-sm"
  >
    <div className="flex items-start justify-between">
      <div>
        <Badge variant="secondary" className="text-xs mb-2">
          {entry.category === "dish" ? "🍽️ Dish" : "🥬 Ingredient"}
        </Badge>
        <h3 className="font-display text-xl font-bold">{entry.name}</h3>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1 text-2xl font-bold text-accent">
          <Flame className="h-5 w-5" />
          {entry.calories}
        </div>
        <span className="text-xs text-muted-foreground">calories</span>
      </div>
    </div>

    <div className="mt-5 space-y-3">
      <MacroBar label="Protein" value={entry.protein} max={50} color="[&>div]:bg-destructive" icon={Beef} />
      <MacroBar label="Carbs" value={entry.carbs} max={80} color="[&>div]:bg-accent" icon={Wheat} />
      <MacroBar label="Fat" value={entry.fat} max={40} color="[&>div]:bg-snap" icon={Droplets} />
      <MacroBar label="Fiber" value={entry.fiber} max={25} color="[&>div]:bg-primary" icon={Wheat} />
    </div>

    <div className="mt-5 grid grid-cols-4 gap-3">
      {[
        { label: "Vit A", value: entry.vitaminA },
        { label: "Vit C", value: entry.vitaminC },
        { label: "Iron", value: entry.iron },
        { label: "Calcium", value: entry.calcium },
      ].map((v) => (
        <div key={v.label} className="rounded-lg bg-muted/50 p-2 text-center">
          <span className="text-xs text-muted-foreground">{v.label}</span>
          <p className="font-semibold text-sm">{v.value}%</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Nutrition = () => {
  const [search, setSearch] = useState("");

  const results = search.trim()
    ? mockNutrition.filter((n) =>
        n.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Nutrition Lookup</h1>
        <p className="mt-1 text-muted-foreground">
          Search any ingredient or dish for nutritional info
        </p>
      </motion.div>

      <div className="mt-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search e.g. Chicken Breast, Pasta Primavera..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="mt-6">
        {search.trim() && results.length === 0 && (
          <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
            No results found for "{search}"
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((entry) => (
            <NutritionCard key={entry.name} entry={entry} />
          ))}
        </div>
        {!search.trim() && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 text-center text-muted-foreground">
              <p className="text-lg mb-2">🔍</p>
              <p>Start typing to look up nutritional values</p>
              <p className="text-xs mt-2">Try: Eggs, Rice, Chicken & Rice Bowl</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nutrition;
