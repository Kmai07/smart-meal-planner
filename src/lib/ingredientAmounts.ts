// Default amounts for common ingredients when ingredientAmounts is not specified
const INGREDIENT_AMOUNTS: Record<string, string> = {
  // Proteins
  "chicken breast": "1 lb", "chicken thighs": "1 lb", "chicken thigh": "1 lb", "chicken": "1 lb",
  "chicken legs": "4 pcs", "ground beef": "1 lb", "ground pork": "½ lb", "ground lamb": "1 lb",
  "ground chicken": "1 lb", "beef sirloin": "1 lb", "beef chuck": "2 lbs", "beef shank": "1 lb",
  "pork shoulder": "1 lb", "pork belly": "½ lb", "pork loin": "1 lb", "pork cutlet": "2 pcs",
  "pork": "1 lb", "pork chop": "2 pcs", "pork ribs": "1.5 lbs", "lamb": "1 lb",
  "flank steak": "1.5 lbs", "shrimp": "1 lb", "white fish": "1 lb", "cod fillets": "1 lb",
  "canned tuna": "2 cans", "ahi tuna": "½ lb", "octopus": "½ lb", "salt cod": "½ lb",
  "spam": "1 can", "bacon": "4 slices", "pancetta": "4 oz", "ham": "4 slices",
  "italian sausage": "½ lb", "pork sausage": "½ lb", "chinese sausage": "2 links",
  "eggs": "4", "egg": "1", "tofu": "14 oz block", "firm tofu": "14 oz block", "soft tofu": "1 block",
  "paneer": "8 oz",

  // Grains & pasta
  "rice": "1 cup", "sushi rice": "1½ cups", "basmati rice": "1½ cups", "broken rice": "1 cup",
  "arborio rice": "1½ cups", "spaghetti": "12 oz", "penne": "12 oz", "pasta": "12 oz",
  "small pasta": "8 oz", "lasagna noodles": "12 oz", "linguine": "12 oz", "ziti pasta": "1 lb",
  "egg noodles": "12 oz", "noodles": "12 oz", "ramen noodles": "1 pack", "instant ramen": "1 pack",
  "udon noodles": "14 oz", "yakisoba noodles": "10 oz", "flat rice noodles": "8 oz",
  "sweet potato noodles": "8 oz", "rice noodles": "8 oz", "canton noodles": "8 oz",
  "rice cakes": "1 lb", "bread": "4 slices", "baguette": "1", "pita": "4 pcs", "pita bread": "2 pcs",
  "naan bread": "2 pcs", "tortillas": "8", "flour tortilla": "4", "corn tortillas": "12",
  "tortilla chips": "8 oz", "tostada shells": "8", "taco shells": "8",
  "oats": "1 cup", "bulgur wheat": "1 cup", "quinoa": "1 cup", "couscous": "1 cup",
  "flour": "2 cups", "whole wheat flour": "2 cups", "masa harina": "2 cups", "cornstarch": "2 tbsp",
  "breadcrumbs": "½ cup", "panko breadcrumbs": "1 cup", "panko": "1 cup",
  "pizza dough": "1 lb", "pie crust": "1", "phyllo dough": "½ lb",
  "empanada dough": "1 pack", "wonton wrappers": "1 pack", "gyoza wrappers": "1 pack",
  "spring roll wrappers": "1 pack", "shokupan bread": "4 slices", "bread rolls": "4",
  "croutons": "½ cup", "takoyaki flour": "1 cup",

  // Dairy
  "cheese": "1 cup shredded", "mozzarella": "8 oz", "fresh mozzarella": "8 oz",
  "mozzarella balls": "8 oz", "parmesan": "¼ cup grated", "pecorino romano": "¼ cup grated",
  "gruyère": "4 oz", "feta cheese": "4 oz", "feta": "4 oz", "cotija cheese": "¼ cup",
  "cheddar": "1 cup shredded", "ricotta": "1 cup", "cream cheese": "4 oz",
  "cream": "½ cup", "sour cream": "¼ cup", "butter": "2 tbsp", "ghee": "2 tbsp",
  "yogurt": "1 cup", "milk": "1 cup", "coconut milk": "1 can (14 oz)",
  "greek yogurt": "1 cup",

  // Vegetables
  "onion": "1 medium", "onions": "3 large", "red onion": "1", "green onions": "3 stalks",
  "garlic": "3 cloves", "ginger": "1 inch piece", "tomatoes": "2 medium", "tomato": "1 medium",
  "cherry tomatoes": "1 cup", "canned tomatoes": "1 can (14 oz)", "san marzano tomatoes": "1 can",
  "tomato paste": "2 tbsp", "tomato sauce": "1 cup", "bell pepper": "1", "bell peppers": "2",
  "green pepper": "1", "green peppers": "1", "poblano peppers": "4",
  "potatoes": "4 medium", "sweet potato": "1 large", "carrots": "2 medium", "carrot": "1",
  "celery": "2 stalks", "broccoli": "2 cups florets", "spinach": "4 cups",
  "cauliflower": "1 head", "cabbage": "¼ head", "zucchini": "1 medium", "eggplant": "1 medium",
  "cucumber": "1", "lettuce": "4 leaves", "romaine lettuce": "1 head",
  "kale": "4 cups", "snap peas": "1 cup", "peas": "1 cup", "green beans": "1 lb",
  "corn on the cob": "4 ears", "corn": "1 cup", "mushrooms": "8 oz",
  "bean sprouts": "1 cup", "radish": "3", "avocado": "1", "avocados": "2",
  "plantain": "2", "green plantains": "3", "frozen vegetables": "1 cup",
  "mixed vegetables": "2 cups", "edamame": "½ cup", "water chestnuts": "1 can",

  // Legumes
  "black beans": "1 can (15 oz)", "refried beans": "1 can", "chickpeas": "1 can (15 oz)",
  "cannellini beans": "1 can (15 oz)", "kidney beans": "1 can (15 oz)",
  "lentils": "1 cup dry", "red lentils": "1 cup dry", "yellow lentils": "1 cup dry",
  "hominy": "1 can",

  // Herbs & spices
  "cilantro": "¼ cup chopped", "parsley": "¼ cup chopped", "basil": "½ cup fresh",
  "mint": "2 tbsp", "thyme": "1 tsp", "dill": "2 tbsp", "bay leaf": "2 leaves",
  "oregano": "1 tsp", "cumin": "1 tsp", "cumin seeds": "1 tsp", "turmeric": "½ tsp",
  "paprika": "1 tsp", "smoked paprika": "1 tsp", "garam masala": "1 tsp",
  "cinnamon": "½ tsp", "allspice": "½ tsp", "cardamom": "3 pods",
  "red pepper flakes": "½ tsp", "black pepper": "1 tsp", "chili powder": "1 tsp",
  "chili flakes": "½ tsp", "curry powder": "1 tbsp", "biryani masala": "1 tbsp",
  "tandoori spice mix": "2 tbsp", "taco seasoning": "1 packet", "fajita seasoning": "1 packet",
  "pav bhaji masala": "1 tbsp", "berbere spice": "2 tbsp", "berbere": "2 tbsp",
  "herbes de provence": "1 tsp", "sumac": "1 tsp", "za'atar": "1 tbsp",
  "sichuan peppercorn": "1 tsp", "curry leaves": "8", "mustard seeds": "1 tsp",
  "achiote paste": "2 tbsp", "suya spice": "3 tbsp", "kasuri methi": "1 tsp",
  "lemongrass": "2 stalks", "harissa": "1 tbsp", "preserved lemons": "2",
  "curry roux": "½ box",

  // Sauces & condiments
  "soy sauce": "2 tbsp", "sesame oil": "1 tbsp", "olive oil": "2 tbsp", "oil": "2 tbsp",
  "vinegar": "1 tbsp", "balsamic vinegar": "1 tbsp", "malt vinegar": "2 tbsp",
  "fish sauce": "1 tbsp", "hoisin": "2 tbsp", "oyster sauce": "2 tbsp",
  "mirin": "2 tbsp", "doubanjiang": "1 tbsp", "gochujang": "2 tbsp", "gochugaru": "1 tbsp",
  "chili oil": "1 tbsp", "sesame paste": "2 tbsp", "tahini": "2 tbsp",
  "mayo": "2 tbsp", "ketchup": "2 tbsp", "salsa": "½ cup", "red salsa": "1 cup",
  "enchilada sauce": "1 can", "marinara sauce": "2 cups", "bbq sauce": "½ cup",
  "red chile sauce": "½ cup", "tonkatsu sauce": "2 tbsp",
  "okonomiyaki sauce": "2 tbsp", "yakisoba sauce": "2 tbsp", "takoyaki sauce": "2 tbsp",
  "peanut sauce": "¼ cup", "tzatziki": "½ cup", "caesar dressing": "¼ cup",
  "béchamel sauce": "1 cup", "chocolate sauce": "¼ cup", "maple syrup": "¼ cup",
  "honey": "2 tbsp", "sugar": "2 tbsp", "tamarind": "1 tbsp", "tamarind sauce": "1 tbsp",
  "lime": "1", "lemon": "1", "peanut butter": "2 tbsp", "jelly": "2 tbsp",

  // Others
  "peanuts": "¼ cup", "cashews": "¼ cup", "pine nuts": "2 tbsp", "almonds": "¼ cup",
  "walnuts": "1 cup chopped", "raisins": "2 tbsp", "olives": "¼ cup",
  "dried chiles": "4", "dried chilis": "4", "jalapeño": "1", "jalapeños": "2",
  "scotch bonnet": "1", "green chili": "1", "piri piri peppers": "4",
  "pineapple": "½", "banana": "1", "ripe bananas": "3", "mango": "1",
  "frozen açaí": "2 packs", "berries": "½ cup", "mixed berries": "½ cup",
  "coconut flakes": "2 tbsp", "nori": "2 sheets", "wakame seaweed": "1 tbsp",
  "corn husks": "12", "grape leaves": "20", "lard": "2 tbsp",
  "baking soda": "1 tsp", "yeast": "1 tsp", "vanilla": "1 tsp",
  "chia seeds": "¼ cup", "nutritional yeast": "2 tbsp", "granola": "¼ cup",
  "salt": "to taste", "dashi": "2 cups", "chicken broth": "4 cups", "broth": "4 cups",
  "beef broth": "4 cups", "white wine": "½ cup", "beer": "½ cup", "vodka": "¼ cup",
  "evaporated milk": "1 can", "condensed milk": "1 can",
  "powdered sugar": "2 tbsp", "french fries": "2 cups",
  "kimchi": "1 cup", "pickled ginger": "2 tbsp", "pickled vegetables": "¼ cup",
  "canned ackee": "1 can", "tempura bits": "2 tbsp", "tenkasu": "2 tbsp",
  "fish cakes": "4 oz", "pork cracklings": "¼ cup", "curtido (cabbage slaw)": "1 cup",
  "crayfish": "1 tbsp", "stockfish": "4 oz", "ground melon seeds": "1 cup",
  "palm oil": "3 tbsp", "cassava": "1 lb", "rice batter": "1 cup", "urad dal batter": "½ cup",
  "niter kibbeh": "2 tbsp", "chickpea flour": "1 cup", "jameed yogurt": "1 cup",
  "shrimp paste": "1 tsp", "flat bread": "4 pcs", "injera": "4 pcs",
  "pepper sauce": "to taste", "chives": "2 tbsp", "nuts": "2 tbsp",
  "lettuce cups": "6", "balsamic glaze": "1 tbsp",
  "sriracha": "1 tbsp", "red curry paste": "2 tbsp", "green curry paste": "2 tbsp",
  "coconut sugar": "1 tbsp", "tapioca starch": "2 tbsp",
  "crispy noodles": "½ cup", "shallots": "2", "bonito flakes": "1 tbsp",
  "fried onions": "½ cup", "chili": "1", "herbs": "¼ cup",
  "preserved vegetables": "2 tbsp", "banana blossom": "½ cup",
  "saffron": "pinch", "star anise": "2", "coriander": "1 tsp",
  "guacamole": "½ cup", "toppings of choice": "as desired",
  "toppings (banana, honey, nuts or egg, cheese)": "as desired",
  "any leftover vegetables": "1 cup",
};

/**
 * Get the amount for an ingredient, checking ingredientAmounts array first,
 * then falling back to the default amounts map.
 */
export function getIngredientAmount(ingredient: string, index: number, ingredientAmounts?: string[]): string {
  if (ingredientAmounts && ingredientAmounts[index]) {
    return ingredientAmounts[index];
  }
  const key = ingredient.toLowerCase().trim();
  return INGREDIENT_AMOUNTS[key] || "as needed";
}
