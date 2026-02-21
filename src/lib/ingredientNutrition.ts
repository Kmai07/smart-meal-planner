// Per-serving nutrition estimates for common ingredients
// Values are approximate per typical amount used in a single serving of a meal

export interface IngredientNutrition {
  calories: number;
  protein: number;  // grams
  carbs: number;    // grams
  fat: number;      // grams
  fiber: number;    // grams
  vitaminA: number; // %DV
  vitaminC: number; // %DV
  iron: number;     // %DV
  calcium: number;  // %DV
}

// Nutrition per typical serving portion used in a recipe (not per 100g)
const nutritionDB: Record<string, IngredientNutrition> = {
  // === PROTEINS ===
  "chicken breast": { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 5, calcium: 1 },
  "chicken": { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 5, calcium: 1 },
  "chicken thighs": { calories: 180, protein: 26, carbs: 0, fat: 8, fiber: 0, vitaminA: 1, vitaminC: 0, iron: 6, calcium: 1 },
  "ground beef": { calories: 250, protein: 26, carbs: 0, fat: 17, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 15, calcium: 2 },
  "beef sirloin": { calories: 200, protein: 30, carbs: 0, fat: 8, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 15, calcium: 1 },
  "pork": { calories: 200, protein: 27, carbs: 0, fat: 10, fiber: 0, vitaminA: 0, vitaminC: 1, iron: 6, calcium: 1 },
  "pork shoulder": { calories: 240, protein: 24, carbs: 0, fat: 16, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 1 },
  "pork sausage": { calories: 300, protein: 18, carbs: 2, fat: 25, fiber: 0, vitaminA: 0, vitaminC: 1, iron: 8, calcium: 1 },
  "bacon": { calories: 180, protein: 12, carbs: 0, fat: 14, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 0 },
  "pancetta": { calories: 180, protein: 12, carbs: 0, fat: 14, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 0 },
  "ground lamb": { calories: 280, protein: 25, carbs: 0, fat: 20, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 12, calcium: 2 },
  "lamb": { calories: 250, protein: 25, carbs: 0, fat: 17, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 12, calcium: 2 },
  "shrimp": { calories: 100, protein: 24, carbs: 0, fat: 1, fiber: 0, vitaminA: 2, vitaminC: 3, iron: 15, calcium: 7 },
  "white fish": { calories: 100, protein: 22, carbs: 0, fat: 1, fiber: 0, vitaminA: 1, vitaminC: 0, iron: 2, calcium: 1 },
  "salmon": { calories: 200, protein: 25, carbs: 0, fat: 11, fiber: 0, vitaminA: 1, vitaminC: 0, iron: 4, calcium: 1 },
  "tuna": { calories: 130, protein: 28, carbs: 0, fat: 1, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 6, calcium: 1 },
  "eggs": { calories: 140, protein: 12, carbs: 1, fat: 10, fiber: 0, vitaminA: 6, vitaminC: 0, iron: 6, calcium: 4 },
  "egg": { calories: 70, protein: 6, carbs: 0.5, fat: 5, fiber: 0, vitaminA: 3, vitaminC: 0, iron: 3, calcium: 2 },
  "tofu": { calories: 80, protein: 9, carbs: 2, fat: 4.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 20 },
  "tempeh": { calories: 160, protein: 18, carbs: 8, fat: 9, fiber: 5, vitaminA: 0, vitaminC: 0, iron: 12, calcium: 8 },

  // === GRAINS & STARCHES ===
  "rice": { calories: 200, protein: 4, carbs: 45, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "brown rice": { calories: 216, protein: 5, carbs: 45, fat: 1.8, fiber: 3.5, vitaminA: 0, vitaminC: 0, iron: 5, calcium: 2 },
  "arborio rice": { calories: 200, protein: 4, carbs: 45, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "jasmine rice": { calories: 200, protein: 4, carbs: 45, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "sticky rice": { calories: 200, protein: 4, carbs: 45, fat: 0.3, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "basmati rice": { calories: 200, protein: 4, carbs: 45, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "spaghetti": { calories: 200, protein: 7, carbs: 42, fat: 1.2, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 1 },
  "penne": { calories: 200, protein: 7, carbs: 42, fat: 1.2, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 1 },
  "pasta": { calories: 200, protein: 7, carbs: 42, fat: 1.2, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 1 },
  "noodles": { calories: 200, protein: 7, carbs: 40, fat: 1, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 1 },
  "rice noodles": { calories: 190, protein: 3, carbs: 44, fat: 0.3, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "egg noodles": { calories: 220, protein: 8, carbs: 40, fat: 3, fiber: 2, vitaminA: 2, vitaminC: 0, iron: 10, calcium: 2 },
  "udon noodles": { calories: 200, protein: 7, carbs: 42, fat: 1, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 1 },
  "ramen noodles": { calories: 190, protein: 5, carbs: 40, fat: 1, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 1 },
  "bread": { calories: 130, protein: 4, carbs: 24, fat: 1.5, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 4 },
  "baguette": { calories: 140, protein: 5, carbs: 28, fat: 1, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 3 },
  "flour tortilla": { calories: 150, protein: 4, carbs: 26, fat: 3.5, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 4 },
  "corn tortillas": { calories: 100, protein: 3, carbs: 21, fat: 1.5, fiber: 3, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 4 },
  "tortillas": { calories: 150, protein: 4, carbs: 26, fat: 3.5, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 4 },
  "tortilla chips": { calories: 140, protein: 2, carbs: 18, fat: 7, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 2 },
  "tostada shells": { calories: 100, protein: 1.5, carbs: 14, fat: 5, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 2 },
  "pizza dough": { calories: 200, protein: 6, carbs: 38, fat: 3, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 2 },
  "masa harina": { calories: 180, protein: 4, carbs: 38, fat: 2, fiber: 3, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 8 },
  "pre-cooked cornmeal": { calories: 180, protein: 4, carbs: 38, fat: 2, fiber: 3, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 8 },
  "empanada dough": { calories: 200, protein: 4, carbs: 28, fat: 9, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 2 },
  "phyllo dough": { calories: 80, protein: 2, carbs: 14, fat: 2, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "breadcrumbs": { calories: 60, protein: 2, carbs: 11, fat: 1, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 2 },
  "panko breadcrumbs": { calories: 60, protein: 2, carbs: 12, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "flour": { calories: 50, protein: 1.5, carbs: 11, fat: 0.2, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "pita bread": { calories: 170, protein: 6, carbs: 33, fat: 1, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 4 },
  "flatbread": { calories: 170, protein: 5, carbs: 30, fat: 3, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 3 },
  "injera": { calories: 120, protein: 4, carbs: 24, fat: 0.5, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 12, calcium: 6 },
  "potatoes": { calories: 130, protein: 3, carbs: 30, fat: 0.2, fiber: 3, vitaminA: 0, vitaminC: 30, iron: 6, calcium: 2 },
  "sweet potatoes": { calories: 110, protein: 2, carbs: 26, fat: 0.1, fiber: 4, vitaminA: 120, vitaminC: 30, iron: 4, calcium: 3 },
  "french fries": { calories: 200, protein: 3, carbs: 30, fat: 10, fiber: 2, vitaminA: 0, vitaminC: 10, iron: 4, calcium: 1 },
  "couscous": { calories: 180, protein: 6, carbs: 36, fat: 0.3, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "quinoa": { calories: 180, protein: 7, carbs: 32, fat: 3, fiber: 4, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 3 },
  "oats": { calories: 150, protein: 5, carbs: 27, fat: 3, fiber: 4, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 4 },

  // === LEGUMES ===
  "black beans": { calories: 120, protein: 8, carbs: 20, fat: 0.5, fiber: 7, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 4 },
  "refried beans": { calories: 120, protein: 7, carbs: 20, fat: 2, fiber: 6, vitaminA: 0, vitaminC: 0, iron: 8, calcium: 4 },
  "cannellini beans": { calories: 110, protein: 8, carbs: 20, fat: 0.5, fiber: 6, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 6 },
  "chickpeas": { calories: 130, protein: 7, carbs: 22, fat: 2, fiber: 6, vitaminA: 1, vitaminC: 2, iron: 10, calcium: 4 },
  "lentils": { calories: 120, protein: 9, carbs: 20, fat: 0.4, fiber: 8, vitaminA: 0, vitaminC: 2, iron: 18, calcium: 2 },
  "red lentils": { calories: 120, protein: 9, carbs: 20, fat: 0.4, fiber: 5, vitaminA: 0, vitaminC: 2, iron: 18, calcium: 2 },
  "pigeon peas": { calories: 120, protein: 8, carbs: 22, fat: 1, fiber: 5, vitaminA: 1, vitaminC: 0, iron: 10, calcium: 4 },
  "hominy": { calories: 60, protein: 1, carbs: 12, fat: 0.5, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 2 },
  "peanuts": { calories: 160, protein: 7, carbs: 5, fat: 14, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 2 },
  "peanut butter": { calories: 190, protein: 7, carbs: 7, fat: 16, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 2 },

  // === VEGETABLES ===
  "onion": { calories: 20, protein: 0.5, carbs: 5, fat: 0, fiber: 1, vitaminA: 0, vitaminC: 6, iron: 1, calcium: 1 },
  "red onion": { calories: 20, protein: 0.5, carbs: 5, fat: 0, fiber: 1, vitaminA: 0, vitaminC: 6, iron: 1, calcium: 1 },
  "garlic": { calories: 5, protein: 0.2, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 2, iron: 1, calcium: 0 },
  "tomato": { calories: 20, protein: 1, carbs: 4, fat: 0.2, fiber: 1, vitaminA: 10, vitaminC: 20, iron: 2, calcium: 1 },
  "tomatoes": { calories: 30, protein: 1.5, carbs: 6, fat: 0.3, fiber: 2, vitaminA: 15, vitaminC: 25, iron: 3, calcium: 1 },
  "canned tomatoes": { calories: 30, protein: 1.5, carbs: 6, fat: 0.3, fiber: 2, vitaminA: 10, vitaminC: 15, iron: 4, calcium: 4 },
  "san marzano tomatoes": { calories: 30, protein: 1.5, carbs: 6, fat: 0.3, fiber: 2, vitaminA: 10, vitaminC: 15, iron: 4, calcium: 4 },
  "tomato sauce": { calories: 30, protein: 1, carbs: 6, fat: 0.2, fiber: 1.5, vitaminA: 8, vitaminC: 15, iron: 4, calcium: 2 },
  "tomato paste": { calories: 15, protein: 0.5, carbs: 3, fat: 0.1, fiber: 0.5, vitaminA: 4, vitaminC: 5, iron: 2, calcium: 1 },
  "marinara sauce": { calories: 60, protein: 2, carbs: 10, fat: 2, fiber: 2, vitaminA: 8, vitaminC: 12, iron: 4, calcium: 3 },
  "bell pepper": { calories: 25, protein: 1, carbs: 6, fat: 0.2, fiber: 1.5, vitaminA: 15, vitaminC: 100, iron: 2, calcium: 1 },
  "green pepper": { calories: 20, protein: 1, carbs: 5, fat: 0.2, fiber: 1.5, vitaminA: 4, vitaminC: 80, iron: 2, calcium: 1 },
  "cucumber": { calories: 15, protein: 0.5, carbs: 3, fat: 0, fiber: 0.5, vitaminA: 2, vitaminC: 5, iron: 1, calcium: 2 },
  "lettuce": { calories: 5, protein: 0.5, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 25, vitaminC: 5, iron: 2, calcium: 2 },
  "spinach": { calories: 10, protein: 1.5, carbs: 1.5, fat: 0.2, fiber: 1, vitaminA: 50, vitaminC: 15, iron: 8, calcium: 6 },
  "cabbage": { calories: 15, protein: 1, carbs: 3, fat: 0, fiber: 1.5, vitaminA: 2, vitaminC: 30, iron: 2, calcium: 3 },
  "carrots": { calories: 25, protein: 0.5, carbs: 6, fat: 0.1, fiber: 2, vitaminA: 100, vitaminC: 6, iron: 2, calcium: 2 },
  "celery": { calories: 10, protein: 0.5, carbs: 2, fat: 0, fiber: 1, vitaminA: 5, vitaminC: 5, iron: 1, calcium: 3 },
  "zucchini": { calories: 20, protein: 1.5, carbs: 3, fat: 0.2, fiber: 1, vitaminA: 4, vitaminC: 20, iron: 2, calcium: 2 },
  "eggplant": { calories: 35, protein: 1, carbs: 8, fat: 0.2, fiber: 3, vitaminA: 1, vitaminC: 3, iron: 2, calcium: 1 },
  "broccoli": { calories: 30, protein: 2.5, carbs: 6, fat: 0.3, fiber: 2.5, vitaminA: 10, vitaminC: 90, iron: 4, calcium: 4 },
  "cauliflower": { calories: 25, protein: 2, carbs: 5, fat: 0.2, fiber: 2, vitaminA: 0, vitaminC: 50, iron: 2, calcium: 2 },
  "corn on the cob": { calories: 90, protein: 3, carbs: 19, fat: 1.5, fiber: 2, vitaminA: 4, vitaminC: 10, iron: 3, calcium: 1 },
  "corn": { calories: 70, protein: 2.5, carbs: 15, fat: 1, fiber: 2, vitaminA: 4, vitaminC: 8, iron: 3, calcium: 1 },
  "peas": { calories: 60, protein: 4, carbs: 10, fat: 0.3, fiber: 4, vitaminA: 20, vitaminC: 30, iron: 6, calcium: 2 },
  "green beans": { calories: 30, protein: 2, carbs: 7, fat: 0.2, fiber: 3, vitaminA: 10, vitaminC: 20, iron: 4, calcium: 3 },
  "mushrooms": { calories: 20, protein: 3, carbs: 3, fat: 0.3, fiber: 1, vitaminA: 0, vitaminC: 3, iron: 4, calcium: 0 },
  "bean sprouts": { calories: 15, protein: 1.5, carbs: 3, fat: 0.1, fiber: 1, vitaminA: 0, vitaminC: 10, iron: 3, calcium: 1 },
  "bamboo shoots": { calories: 10, protein: 1, carbs: 2, fat: 0.1, fiber: 1, vitaminA: 0, vitaminC: 3, iron: 2, calcium: 1 },
  "radish": { calories: 5, protein: 0.3, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 0, vitaminC: 10, iron: 1, calcium: 1 },
  "daikon": { calories: 10, protein: 0.5, carbs: 2, fat: 0, fiber: 1, vitaminA: 0, vitaminC: 15, iron: 1, calcium: 2 },
  "scallions": { calories: 5, protein: 0.5, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 5, vitaminC: 8, iron: 1, calcium: 1 },
  "green onions": { calories: 5, protein: 0.5, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 5, vitaminC: 8, iron: 1, calcium: 1 },
  "bok choy": { calories: 10, protein: 1, carbs: 1.5, fat: 0.1, fiber: 1, vitaminA: 40, vitaminC: 35, iron: 4, calcium: 8 },
  "napa cabbage": { calories: 10, protein: 1, carbs: 2, fat: 0, fiber: 1, vitaminA: 10, vitaminC: 20, iron: 2, calcium: 4 },
  "okra": { calories: 30, protein: 2, carbs: 7, fat: 0.2, fiber: 3, vitaminA: 8, vitaminC: 20, iron: 4, calcium: 6 },
  "plantain": { calories: 120, protein: 1, carbs: 31, fat: 0.4, fiber: 2, vitaminA: 18, vitaminC: 20, iron: 3, calcium: 1 },
  "scotch bonnet pepper": { calories: 5, protein: 0.2, carbs: 1, fat: 0, fiber: 0.3, vitaminA: 5, vitaminC: 60, iron: 1, calcium: 0 },
  "jalapeño": { calories: 5, protein: 0.2, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 4, vitaminC: 20, iron: 1, calcium: 0 },
  "poblano peppers": { calories: 20, protein: 1, carbs: 4, fat: 0.2, fiber: 1.5, vitaminA: 10, vitaminC: 60, iron: 2, calcium: 1 },
  "pineapple": { calories: 40, protein: 0.5, carbs: 10, fat: 0, fiber: 1, vitaminA: 1, vitaminC: 50, iron: 2, calcium: 1 },

  // === FRUITS ===
  "avocados": { calories: 120, protein: 1.5, carbs: 6, fat: 11, fiber: 5, vitaminA: 3, vitaminC: 10, iron: 3, calcium: 1 },
  "avocado": { calories: 80, protein: 1, carbs: 4, fat: 7, fiber: 3, vitaminA: 2, vitaminC: 6, iron: 2, calcium: 1 },
  "lime": { calories: 10, protein: 0.2, carbs: 3, fat: 0, fiber: 0.5, vitaminA: 0, vitaminC: 20, iron: 1, calcium: 1 },
  "lemon": { calories: 10, protein: 0.3, carbs: 3, fat: 0, fiber: 0.5, vitaminA: 0, vitaminC: 30, iron: 1, calcium: 1 },
  "lemon juice": { calories: 5, protein: 0.1, carbs: 1.5, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 15, iron: 0, calcium: 0 },
  "orange": { calories: 60, protein: 1, carbs: 15, fat: 0.2, fiber: 3, vitaminA: 4, vitaminC: 80, iron: 1, calcium: 4 },
  "mango": { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.5, vitaminA: 10, vitaminC: 50, iron: 1, calcium: 1 },
  "banana": { calories: 100, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3, vitaminA: 1, vitaminC: 15, iron: 2, calcium: 1 },
  "coconut milk": { calories: 120, protein: 1, carbs: 3, fat: 12, fiber: 0, vitaminA: 0, vitaminC: 2, iron: 4, calcium: 2 },
  "coconut cream": { calories: 140, protein: 1.5, carbs: 3, fat: 14, fiber: 0, vitaminA: 0, vitaminC: 1, iron: 4, calcium: 2 },
  "tamarind paste": { calories: 30, protein: 0.3, carbs: 7, fat: 0, fiber: 0.5, vitaminA: 1, vitaminC: 3, iron: 3, calcium: 2 },
  "raisins": { calories: 40, protein: 0.5, carbs: 11, fat: 0, fiber: 0.5, vitaminA: 0, vitaminC: 1, iron: 2, calcium: 1 },
  "dates": { calories: 70, protein: 0.5, carbs: 18, fat: 0, fiber: 2, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 2 },

  // === DAIRY & CHEESE ===
  "cheese": { calories: 110, protein: 7, carbs: 0.5, fat: 9, fiber: 0, vitaminA: 6, vitaminC: 0, iron: 1, calcium: 20 },
  "mozzarella": { calories: 90, protein: 7, carbs: 1, fat: 6, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 1, calcium: 20 },
  "fresh mozzarella": { calories: 90, protein: 7, carbs: 1, fat: 6, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 1, calcium: 20 },
  "parmesan": { calories: 60, protein: 5, carbs: 0.5, fat: 4, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 1, calcium: 20 },
  "pecorino romano": { calories: 60, protein: 5, carbs: 0.5, fat: 4, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 1, calcium: 18 },
  "feta cheese": { calories: 75, protein: 4, carbs: 1, fat: 6, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 1, calcium: 10 },
  "feta": { calories: 75, protein: 4, carbs: 1, fat: 6, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 1, calcium: 10 },
  "cotija cheese": { calories: 60, protein: 4, carbs: 0.5, fat: 5, fiber: 0, vitaminA: 2, vitaminC: 0, iron: 1, calcium: 10 },
  "cream": { calories: 50, protein: 0.5, carbs: 1, fat: 5, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 0, calcium: 2 },
  "sour cream": { calories: 50, protein: 0.5, carbs: 1, fat: 5, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 0, calcium: 2 },
  "butter": { calories: 50, protein: 0, carbs: 0, fat: 6, fiber: 0, vitaminA: 3, vitaminC: 0, iron: 0, calcium: 0 },
  "lard": { calories: 60, protein: 0, carbs: 0, fat: 7, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "yogurt": { calories: 60, protein: 5, carbs: 7, fat: 2, fiber: 0, vitaminA: 1, vitaminC: 1, iron: 1, calcium: 15 },
  "milk": { calories: 60, protein: 3, carbs: 5, fat: 3, fiber: 0, vitaminA: 5, vitaminC: 0, iron: 0, calcium: 15 },
  "mayo": { calories: 60, protein: 0, carbs: 0, fat: 7, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "paneer": { calories: 120, protein: 8, carbs: 2, fat: 9, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 1, calcium: 25 },

  // === OILS & FATS ===
  "olive oil": { calories: 40, protein: 0, carbs: 0, fat: 5, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "sesame oil": { calories: 40, protein: 0, carbs: 0, fat: 5, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "vegetable oil": { calories: 40, protein: 0, carbs: 0, fat: 5, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "coconut oil": { calories: 40, protein: 0, carbs: 0, fat: 5, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "ghee": { calories: 50, protein: 0, carbs: 0, fat: 6, fiber: 0, vitaminA: 3, vitaminC: 0, iron: 0, calcium: 0 },

  // === CONDIMENTS & SAUCES ===
  "soy sauce": { calories: 10, protein: 1, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "fish sauce": { calories: 10, protein: 1, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "oyster sauce": { calories: 15, protein: 0.5, carbs: 3, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "hoisin sauce": { calories: 30, protein: 0.5, carbs: 7, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "salsa": { calories: 15, protein: 0.5, carbs: 3, fat: 0, fiber: 1, vitaminA: 4, vitaminC: 10, iron: 1, calcium: 1 },
  "enchilada sauce": { calories: 25, protein: 0.5, carbs: 4, fat: 1, fiber: 1, vitaminA: 4, vitaminC: 5, iron: 2, calcium: 1 },
  "red salsa": { calories: 15, protein: 0.5, carbs: 3, fat: 0, fiber: 1, vitaminA: 4, vitaminC: 10, iron: 1, calcium: 1 },
  "red chile sauce": { calories: 20, protein: 0.5, carbs: 4, fat: 0.5, fiber: 1, vitaminA: 8, vitaminC: 8, iron: 2, calcium: 1 },
  "sriracha": { calories: 10, protein: 0, carbs: 2, fat: 0, fiber: 0, vitaminA: 2, vitaminC: 4, iron: 1, calcium: 0 },
  "sweet chili sauce": { calories: 30, protein: 0, carbs: 7, fat: 0, fiber: 0, vitaminA: 1, vitaminC: 3, iron: 0, calcium: 0 },
  "balsamic vinegar": { calories: 10, protein: 0, carbs: 3, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "rice vinegar": { calories: 5, protein: 0, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "vinegar": { calories: 5, protein: 0, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "miso paste": { calories: 25, protein: 2, carbs: 3, fat: 1, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 3, calcium: 2 },
  "tahini": { calories: 90, protein: 3, carbs: 3, fat: 8, fiber: 1.5, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 6 },
  "curry paste": { calories: 15, protein: 0.5, carbs: 2, fat: 0.5, fiber: 0.5, vitaminA: 2, vitaminC: 3, iron: 2, calcium: 1 },
  "red curry paste": { calories: 15, protein: 0.5, carbs: 2, fat: 0.5, fiber: 0.5, vitaminA: 2, vitaminC: 3, iron: 2, calcium: 1 },
  "green curry paste": { calories: 15, protein: 0.5, carbs: 2, fat: 0.5, fiber: 0.5, vitaminA: 2, vitaminC: 3, iron: 2, calcium: 1 },
  "yellow curry paste": { calories: 15, protein: 0.5, carbs: 2, fat: 0.5, fiber: 0.5, vitaminA: 2, vitaminC: 3, iron: 2, calcium: 1 },
  "curry powder": { calories: 5, protein: 0.3, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 1, vitaminC: 1, iron: 4, calcium: 2 },
  "garam masala": { calories: 5, protein: 0.3, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 1, vitaminC: 1, iron: 4, calcium: 2 },
  "achiote paste": { calories: 10, protein: 0.3, carbs: 2, fat: 0.3, fiber: 0.5, vitaminA: 2, vitaminC: 1, iron: 2, calcium: 1 },
  "chipotle peppers": { calories: 10, protein: 0.5, carbs: 2, fat: 0, fiber: 1, vitaminA: 5, vitaminC: 8, iron: 2, calcium: 1 },
  "dried chiles": { calories: 15, protein: 0.5, carbs: 3, fat: 0.3, fiber: 1, vitaminA: 15, vitaminC: 5, iron: 3, calcium: 1 },
  "gochujang": { calories: 20, protein: 1, carbs: 4, fat: 0.3, fiber: 0.5, vitaminA: 2, vitaminC: 2, iron: 2, calcium: 1 },
  "doenjang": { calories: 20, protein: 1.5, carbs: 3, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 3, calcium: 2 },
  "ketchup": { calories: 15, protein: 0, carbs: 4, fat: 0, fiber: 0, vitaminA: 2, vitaminC: 3, iron: 1, calcium: 0 },
  "mustard": { calories: 5, protein: 0.3, carbs: 0.5, fat: 0.3, fiber: 0.3, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "béchamel sauce": { calories: 80, protein: 2, carbs: 5, fat: 6, fiber: 0, vitaminA: 4, vitaminC: 0, iron: 1, calcium: 8 },

  // === SPICES & HERBS ===
  "cilantro": { calories: 2, protein: 0.2, carbs: 0.4, fat: 0, fiber: 0.2, vitaminA: 5, vitaminC: 5, iron: 1, calcium: 1 },
  "parsley": { calories: 2, protein: 0.2, carbs: 0.4, fat: 0, fiber: 0.2, vitaminA: 10, vitaminC: 10, iron: 2, calcium: 1 },
  "basil": { calories: 2, protein: 0.2, carbs: 0.3, fat: 0, fiber: 0.1, vitaminA: 5, vitaminC: 3, iron: 1, calcium: 1 },
  "dill": { calories: 2, protein: 0.2, carbs: 0.3, fat: 0, fiber: 0.1, vitaminA: 5, vitaminC: 5, iron: 2, calcium: 1 },
  "mint": { calories: 2, protein: 0.2, carbs: 0.3, fat: 0, fiber: 0.2, vitaminA: 3, vitaminC: 3, iron: 2, calcium: 1 },
  "oregano": { calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0.2, vitaminA: 1, vitaminC: 1, iron: 2, calcium: 2 },
  "thyme": { calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0.2, vitaminA: 1, vitaminC: 2, iron: 3, calcium: 2 },
  "cumin": { calories: 5, protein: 0.3, carbs: 1, fat: 0.3, fiber: 0.2, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 2 },
  "paprika": { calories: 5, protein: 0.2, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 10, vitaminC: 3, iron: 2, calcium: 1 },
  "turmeric": { calories: 5, protein: 0.2, carbs: 1, fat: 0.1, fiber: 0.3, vitaminA: 0, vitaminC: 2, iron: 4, calcium: 1 },
  "cinnamon": { calories: 5, protein: 0.1, carbs: 1.5, fat: 0, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 2 },
  "ginger": { calories: 5, protein: 0.1, carbs: 1, fat: 0, fiber: 0.1, vitaminA: 0, vitaminC: 2, iron: 1, calcium: 0 },
  "lemongrass": { calories: 5, protein: 0.2, carbs: 1, fat: 0, fiber: 0.2, vitaminA: 0, vitaminC: 3, iron: 2, calcium: 1 },
  "galangal": { calories: 5, protein: 0.1, carbs: 1, fat: 0, fiber: 0.2, vitaminA: 0, vitaminC: 2, iron: 1, calcium: 0 },
  "kaffir lime leaves": { calories: 2, protein: 0.1, carbs: 0.3, fat: 0, fiber: 0.1, vitaminA: 1, vitaminC: 3, iron: 1, calcium: 0 },
  "saffron": { calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 1, iron: 2, calcium: 0 },
  "bay leaf": { calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0.2, vitaminA: 2, vitaminC: 1, iron: 2, calcium: 1 },
  "star anise": { calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1, fiber: 0.2, vitaminA: 0, vitaminC: 1, iron: 2, calcium: 1 },
  "chili powder": { calories: 5, protein: 0.2, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 10, vitaminC: 3, iron: 3, calcium: 1 },
  "red pepper flakes": { calories: 5, protein: 0.2, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 6, vitaminC: 2, iron: 2, calcium: 0 },
  "black pepper": { calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0.2, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "salt": { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "berbere spice": { calories: 5, protein: 0.3, carbs: 1, fat: 0.2, fiber: 0.5, vitaminA: 8, vitaminC: 3, iron: 4, calcium: 2 },
  "five-spice powder": { calories: 5, protein: 0.2, carbs: 1, fat: 0.2, fiber: 0.3, vitaminA: 1, vitaminC: 1, iron: 3, calcium: 2 },
  "allspice": { calories: 3, protein: 0.1, carbs: 0.8, fat: 0.1, fiber: 0.2, vitaminA: 0, vitaminC: 1, iron: 2, calcium: 2 },
  "jerk seasoning": { calories: 5, protein: 0.2, carbs: 1, fat: 0.2, fiber: 0.3, vitaminA: 2, vitaminC: 3, iron: 3, calcium: 1 },

  // === MISC ===
  "olives": { calories: 30, protein: 0.3, carbs: 2, fat: 3, fiber: 1, vitaminA: 2, vitaminC: 1, iron: 4, calcium: 2 },
  "pine nuts": { calories: 90, protein: 2, carbs: 2, fat: 9, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "sesame seeds": { calories: 50, protein: 2, carbs: 2, fat: 4, fiber: 1, vitaminA: 0, vitaminC: 0, iron: 6, calcium: 8 },
  "cashews": { calories: 80, protein: 2.5, carbs: 5, fat: 6, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "wonton wrappers": { calories: 60, protein: 2, carbs: 12, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "dumpling wrappers": { calories: 60, protein: 2, carbs: 12, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 4, calcium: 1 },
  "spring roll wrappers": { calories: 40, protein: 1, carbs: 8, fat: 0.2, fiber: 0.3, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "rice paper": { calories: 30, protein: 0.5, carbs: 7, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 0 },
  "nori": { calories: 5, protein: 0.5, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 3, vitaminC: 3, iron: 2, calcium: 1 },
  "seaweed": { calories: 5, protein: 0.5, carbs: 1, fat: 0, fiber: 0.5, vitaminA: 3, vitaminC: 3, iron: 2, calcium: 1 },
  "sushi rice": { calories: 200, protein: 4, carbs: 45, fat: 0.5, fiber: 0.5, vitaminA: 0, vitaminC: 0, iron: 2, calcium: 1 },
  "kimchi": { calories: 15, protein: 1, carbs: 2, fat: 0.3, fiber: 1, vitaminA: 5, vitaminC: 15, iron: 2, calcium: 3 },
  "pickled ginger": { calories: 5, protein: 0.1, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 1, iron: 0, calcium: 0 },
  "wasabi": { calories: 5, protein: 0.2, carbs: 1, fat: 0, fiber: 0.2, vitaminA: 0, vitaminC: 3, iron: 1, calcium: 1 },
  "dashi": { calories: 5, protein: 0.5, carbs: 0.5, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "chicken broth": { calories: 15, protein: 2, carbs: 1, fat: 0.5, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "vegetable broth": { calories: 10, protein: 0.5, carbs: 2, fat: 0, fiber: 0, vitaminA: 2, vitaminC: 1, iron: 1, calcium: 0 },
  "white wine": { calories: 25, protein: 0, carbs: 1, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 0 },
  "sugar": { calories: 30, protein: 0, carbs: 8, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "brown sugar": { calories: 30, protein: 0, carbs: 8, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "honey": { calories: 30, protein: 0, carbs: 8, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 0 },
  "palm sugar": { calories: 30, protein: 0, carbs: 8, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 1, calcium: 1 },
  "curtido (cabbage slaw)": { calories: 15, protein: 1, carbs: 3, fat: 0, fiber: 1.5, vitaminA: 2, vitaminC: 20, iron: 2, calcium: 3 },
  "corn husks": { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0 },
  "water chestnuts": { calories: 20, protein: 0.5, carbs: 5, fat: 0, fiber: 1, vitaminA: 0, vitaminC: 3, iron: 1, calcium: 1 },
};

/**
 * Calculate total nutrition for a meal based on its ingredients,
 * divided by the number of servings.
 */
export function calculateMealNutrition(
  ingredients: string[],
  servings: number
): IngredientNutrition {
  const totals: IngredientNutrition = {
    calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0,
    vitaminA: 0, vitaminC: 0, iron: 0, calcium: 0,
  };

  for (const ing of ingredients) {
    const key = ing.toLowerCase();
    const match = nutritionDB[key];
    if (match) {
      totals.calories += match.calories;
      totals.protein += match.protein;
      totals.carbs += match.carbs;
      totals.fat += match.fat;
      totals.fiber += match.fiber;
      totals.vitaminA += match.vitaminA;
      totals.vitaminC += match.vitaminC;
      totals.iron += match.iron;
      totals.calcium += match.calcium;
    } else {
      // Default fallback for unknown ingredients
      totals.calories += 30;
      totals.protein += 1;
      totals.carbs += 5;
      totals.fat += 1;
      totals.fiber += 0.5;
    }
  }

  // Divide by servings
  return {
    calories: Math.round(totals.calories / servings),
    protein: Math.round(totals.protein / servings * 10) / 10,
    carbs: Math.round(totals.carbs / servings * 10) / 10,
    fat: Math.round(totals.fat / servings * 10) / 10,
    fiber: Math.round(totals.fiber / servings * 10) / 10,
    vitaminA: Math.min(Math.round(totals.vitaminA / servings), 100),
    vitaminC: Math.min(Math.round(totals.vitaminC / servings), 100),
    iron: Math.min(Math.round(totals.iron / servings), 100),
    calcium: Math.min(Math.round(totals.calcium / servings), 100),
  };
}
