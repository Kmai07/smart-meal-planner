import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { worldMeals } from "@/data/worldMeals";

// Categorize tags
const CUISINE_TAGS = [
  "Mexican", "Italian", "Chinese", "Japanese", "Korean", "Indian", "Thai",
  "Vietnamese", "French", "British", "German", "Greek", "Mediterranean",
  "Lebanese", "Turkish", "Ethiopian", "Nigerian", "Moroccan", "Cuban",
  "Brazilian", "Filipino", "Jamaican", "Hawaiian", "Malaysian", "Singaporean",
  "Georgian", "Jordanian", "Egyptian", "Ghanaian", "South African", "Peruvian",
  "Argentine", "Venezuelan", "Salvadoran", "Puerto Rican", "Trinidadian",
  "Sri Lankan", "Russian", "Spanish", "Israeli", "Mozambican",
  "West African", "North African", "Latin American", "Southeast Asian", "Caribbean",
  "Chinese-American", "Italian-American", "Asian-Fusion", "Asian", "Fusion",
  "Portuguese-African", "Sichuan", "Northern Thai", "South Indian", "North Indian",
  "Punjabi", "Goan", "Mughlai", "Mumbai",
];

const DIETARY_TAGS = [
  "Vegetarian", "Vegan", "High Protein", "SNAP", "Low Carb", "Healthy", "Dairy Free", "Gluten Free",
];

const MEAL_TYPE_TAGS = [
  "Breakfast", "Snack", "Appetizer", "Side Dish", "Dessert", "Drink", "Soup",
  "Comfort Food", "Street Food", "Quick", "No Cook", "One-Pot", "Budget",
  "Classic", "Traditional", "Special", "Trending", "Baking", "Zero Waste",
];

// Only include tags that actually exist in data
function getAvailableTags(category: string[]) {
  const allTags = new Set(worldMeals.flatMap((m) => m.tags));
  return category.filter((t) => allTags.has(t));
}

const availableCuisine = getAvailableTags(CUISINE_TAGS);
const availableDietary = getAvailableTags(DIETARY_TAGS);
const availableMealType = getAvailableTags(MEAL_TYPE_TAGS);

interface DropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  multiSelect?: boolean;
}

function Dropdown({ label, options, selected, onToggle, multiSelect = true }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm font-medium hover:bg-accent/50 transition-colors"
      >
        {label}
        {selected.length > 0 && (
          <Badge variant="default" className="text-xs px-1.5 py-0">
            {selected.length}
          </Badge>
        )}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 w-56 max-h-64 overflow-y-auto rounded-lg border bg-card shadow-lg p-2">
          {options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onToggle(opt);
                  if (!multiSelect) setOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/50 text-foreground"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface FilterDropdownsProps {
  selectedCuisine: string[];
  selectedDietary: string[];
  selectedMealType: string[];
  onToggleCuisine: (tag: string) => void;
  onToggleDietary: (tag: string) => void;
  onToggleMealType: (tag: string) => void;
  onClearAll: () => void;
}

export function FilterDropdowns({
  selectedCuisine,
  selectedDietary,
  selectedMealType,
  onToggleCuisine,
  onToggleDietary,
  onToggleMealType,
  onClearAll,
}: FilterDropdownsProps) {
  const totalFilters = selectedCuisine.length + selectedDietary.length + selectedMealType.length;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Dropdown
          label="🌍 Cuisine"
          options={availableCuisine}
          selected={selectedCuisine}
          onToggle={onToggleCuisine}
        />
        <Dropdown
          label="🥗 Dietary"
          options={availableDietary}
          selected={selectedDietary}
          onToggle={onToggleDietary}
        />
        <Dropdown
          label="🍽️ Meal Type"
          options={availableMealType}
          selected={selectedMealType}
          onToggle={onToggleMealType}
        />
        {totalFilters > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Clear all ({totalFilters})
          </button>
        )}
      </div>
      {totalFilters > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {[...selectedCuisine, ...selectedDietary, ...selectedMealType].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs gap-1 cursor-pointer hover:bg-destructive/10"
              onClick={() => {
                if (selectedCuisine.includes(tag)) onToggleCuisine(tag);
                else if (selectedDietary.includes(tag)) onToggleDietary(tag);
                else onToggleMealType(tag);
              }}
            >
              {tag}
              <X className="h-3 w-3" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
