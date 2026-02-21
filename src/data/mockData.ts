export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expiresIn?: number; // days
}

export interface StoreLocation {
  name: string;
  lat: number;
  lng: number;
  address: string;
}

export interface StorePrice {
  store: string;
  item: string;
  price: number;
  onSale: boolean;
  snapEligible: boolean;
}

export const storeLocations: StoreLocation[] = [
  { name: "SaveMart", lat: 0, lng: 0, address: "234 Main St" },
  { name: "FreshGrocer", lat: 0, lng: 0, address: "89 Market Ave" },
  { name: "Walmart", lat: 0, lng: 0, address: "600 Commerce Dr" },
  { name: "Aldi", lat: 0, lng: 0, address: "15 Oak Blvd" },
  { name: "Target", lat: 0, lng: 0, address: "1515 Broadway" },
  { name: "Costco", lat: 0, lng: 0, address: "32 Warehouse Way" },
];

// Generate store locations near a given point (within ~1-10 miles)
export function generateNearbyStores(lat: number, lng: number): StoreLocation[] {
  const offsets = [
    { dLat: 0.008, dLng: 0.012 },   // ~0.8 mi
    { dLat: -0.022, dLng: 0.035 },  // ~2.8 mi
    { dLat: 0.045, dLng: -0.018 },  // ~3.3 mi
    { dLat: -0.058, dLng: -0.042 }, // ~5.0 mi
    { dLat: 0.072, dLng: 0.055 },   // ~6.2 mi
    { dLat: -0.11, dLng: 0.08 },    // ~9.5 mi
  ];
  return storeLocations.map((store, i) => ({
    ...store,
    lat: lat + offsets[i].dLat,
    lng: lng + offsets[i].dLng,
  }));
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface MealOption {
  id: string;
  name: string;
  ingredients: string[];
  totalCost: number;
  servings: number;
  chefPick?: boolean;
  tags: string[];
}

export interface NutritionEntry {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitaminA: number; // %DV
  vitaminC: number;
  iron: number;
  calcium: number;
  category: "ingredient" | "dish";
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  likes: number;
}

export const mockInventory: InventoryItem[] = [
  { id: "1", name: "Rice", quantity: 2, unit: "lbs", category: "Grains", expiresIn: 90 },
  { id: "2", name: "Black Beans", quantity: 3, unit: "cans", category: "Canned", expiresIn: 365 },
  { id: "3", name: "Chicken Breast", quantity: 1.5, unit: "lbs", category: "Protein", expiresIn: 3 },
  { id: "4", name: "Onions", quantity: 2, unit: "pcs", category: "Vegetables", expiresIn: 14 },
  { id: "5", name: "Tomatoes", quantity: 4, unit: "pcs", category: "Vegetables", expiresIn: 5 },
  { id: "6", name: "Eggs", quantity: 6, unit: "pcs", category: "Dairy", expiresIn: 10 },
  { id: "7", name: "Bread", quantity: 1, unit: "loaf", category: "Grains", expiresIn: 4 },
  { id: "8", name: "Milk", quantity: 0.5, unit: "gal", category: "Dairy", expiresIn: 6 },
  { id: "9", name: "Bell Peppers", quantity: 3, unit: "pcs", category: "Vegetables", expiresIn: 7 },
  { id: "10", name: "Pasta", quantity: 2, unit: "boxes", category: "Grains", expiresIn: 180 },
];

export const mockStorePrices: StorePrice[] = [
  { store: "SaveMart", item: "Onions (3 lb bag)", price: 0.99, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Onions (3 lb bag)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Onions (3 lb bag)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Onions (3 lb bag)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Onions (3 lb bag)", price: 1.39, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Chicken Breast (per lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Chicken Breast (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Chicken Breast (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Chicken Breast (per lb)", price: 2.79, onSale: true, snapEligible: true },
  { store: "Costco", item: "Chicken Breast (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Brown Rice (2 lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Brown Rice (2 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Brown Rice (2 lb)", price: 1.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Brown Rice (2 lb)", price: 1.89, onSale: false, snapEligible: true },
  { store: "Target", item: "Brown Rice (2 lb)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Eggs (dozen)", price: 3.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Eggs (dozen)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Eggs (dozen)", price: 2.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Eggs (dozen)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Costco", item: "Eggs (dozen)", price: 2.19, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Whole Wheat Bread", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Whole Wheat Bread", price: 3.99, onSale: false, snapEligible: false },
  { store: "Walmart", item: "Whole Wheat Bread", price: 1.68, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Whole Wheat Bread", price: 1.45, onSale: false, snapEligible: true },
  { store: "Target", item: "Whole Wheat Bread", price: 2.89, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Tomatoes (per lb)", price: 1.29, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Tomatoes (per lb)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tomatoes (per lb)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tomatoes (per lb)", price: 0.99, onSale: true, snapEligible: true },
  { store: "SaveMart", item: "Black Beans (can)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Black Beans (can)", price: 0.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Black Beans (can)", price: 0.65, onSale: false, snapEligible: true },
  { store: "Target", item: "Black Beans (can)", price: 0.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Milk (gallon)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Milk (gallon)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Milk (gallon)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Costco", item: "Milk (gallon)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Pasta (box)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Pasta (box)", price: 0.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Pasta (box)", price: 0.85, onSale: false, snapEligible: true },
  { store: "Target", item: "Pasta (box)", price: 1.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Bell Peppers (each)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bell Peppers (each)", price: 0.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bell Peppers (each)", price: 0.49, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Bell Peppers (each)", price: 1.29, onSale: false, snapEligible: true },
];

export const mockMeals: MealOption[] = [
  { id: "m1", name: "Chicken & Rice Bowl", ingredients: ["Chicken Breast", "Rice", "Black Beans", "Onions", "Bell Peppers"], totalCost: 5.20, servings: 2, tags: ["High Protein", "SNAP"] },
  { id: "m2", name: "Black Bean Tacos", ingredients: ["Black Beans", "Tomatoes", "Onions", "Tortillas"], totalCost: 3.80, servings: 3, tags: ["Vegetarian", "SNAP", "Quick"] },
  { id: "m3", name: "Egg Fried Rice", ingredients: ["Eggs", "Rice", "Bell Peppers", "Onions"], totalCost: 2.90, servings: 2, tags: ["Vegetarian", "Quick", "SNAP"] },
  { id: "m4", name: "Pasta Primavera", ingredients: ["Pasta", "Tomatoes", "Bell Peppers", "Onions"], totalCost: 3.50, servings: 3, tags: ["Vegetarian", "SNAP"] },
  { id: "m5", name: "Chicken Stir-Fry", ingredients: ["Chicken Breast", "Bell Peppers", "Onions", "Rice"], totalCost: 6.10, servings: 2, tags: ["High Protein", "SNAP"] },
  { id: "m6", name: "Bean & Rice Burrito Bowl", ingredients: ["Black Beans", "Rice", "Tomatoes", "Onions"], totalCost: 2.50, servings: 2, chefPick: true, tags: ["Chef Pick", "Vegetarian", "SNAP", "Budget"] },
  { id: "m7", name: "French Toast", ingredients: ["Bread", "Eggs", "Milk"], totalCost: 1.80, servings: 2, chefPick: true, tags: ["Chef Pick", "Quick", "Budget"] },
  { id: "m8", name: "Tomato & Egg Scramble", ingredients: ["Eggs", "Tomatoes", "Onions", "Bread"], totalCost: 2.20, servings: 2, tags: ["Quick", "SNAP", "Budget"] },
  { id: "m9", name: "Creamy Pasta Alfredo", ingredients: ["Pasta", "Milk", "Eggs", "Bread"], totalCost: 4.00, servings: 3, tags: ["Comfort Food", "SNAP"] },
  { id: "m10", name: "Chef's Pantry Soup", ingredients: ["Chicken Breast", "Tomatoes", "Onions", "Black Beans", "Bell Peppers"], totalCost: 4.70, servings: 4, chefPick: true, tags: ["Chef Pick", "High Protein", "SNAP"] },
  { id: "m11", name: "Simple Omelette", ingredients: ["Eggs", "Bell Peppers", "Onions"], totalCost: 1.50, servings: 1, tags: ["Quick", "SNAP", "Budget"] },
  { id: "m12", name: "Rice & Beans Classic", ingredients: ["Rice", "Black Beans"], totalCost: 1.20, servings: 2, chefPick: true, tags: ["Chef Pick", "Budget", "SNAP"] },
];

export const mockNutrition: NutritionEntry[] = [
  { name: "Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, vitaminA: 0, vitaminC: 0, iron: 5, calcium: 1, category: "ingredient" },
  { name: "Brown Rice", calories: 216, protein: 5, carbs: 45, fat: 1.8, fiber: 3.5, vitaminA: 0, vitaminC: 0, iron: 5, calcium: 2, category: "ingredient" },
  { name: "Black Beans", calories: 227, protein: 15, carbs: 41, fat: 0.9, fiber: 15, vitaminA: 0, vitaminC: 0, iron: 20, calcium: 5, category: "ingredient" },
  { name: "Eggs", calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, vitaminA: 10, vitaminC: 0, iron: 10, calcium: 5, category: "ingredient" },
  { name: "Onions", calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7, vitaminA: 0, vitaminC: 12, iron: 1, calcium: 2, category: "ingredient" },
  { name: "Tomatoes", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, vitaminA: 17, vitaminC: 21, iron: 2, calcium: 1, category: "ingredient" },
  { name: "Bell Peppers", calories: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1, vitaminA: 11, vitaminC: 169, iron: 3, calcium: 1, category: "ingredient" },
  { name: "Whole Wheat Bread", calories: 247, protein: 13, carbs: 41, fat: 3.4, fiber: 7, vitaminA: 0, vitaminC: 0, iron: 15, calcium: 10, category: "ingredient" },
  { name: "Milk", calories: 149, protein: 8, carbs: 12, fat: 8, fiber: 0, vitaminA: 5, vitaminC: 0, iron: 0, calcium: 28, category: "ingredient" },
  { name: "Pasta", calories: 220, protein: 8, carbs: 43, fat: 1.3, fiber: 2.5, vitaminA: 0, vitaminC: 0, iron: 10, calcium: 1, category: "ingredient" },
  { name: "Chicken & Rice Bowl", calories: 420, protein: 35, carbs: 48, fat: 8, fiber: 5, vitaminA: 4, vitaminC: 15, iron: 12, calcium: 4, category: "dish" },
  { name: "Black Bean Tacos", calories: 310, protein: 14, carbs: 52, fat: 5, fiber: 12, vitaminA: 8, vitaminC: 18, iron: 15, calcium: 6, category: "dish" },
  { name: "Egg Fried Rice", calories: 380, protein: 16, carbs: 50, fat: 12, fiber: 3, vitaminA: 8, vitaminC: 30, iron: 10, calcium: 4, category: "dish" },
  { name: "Pasta Primavera", calories: 340, protein: 12, carbs: 58, fat: 6, fiber: 6, vitaminA: 15, vitaminC: 45, iron: 12, calcium: 3, category: "dish" },
];

export const mockBlogPosts: BlogPost[] = [
  { id: "b1", title: "Top 5 Budget-Friendly Stores in the City", author: "Maria G.", date: "2026-02-19", content: "After months of comparing prices, here are my top picks for saving on groceries. Aldi consistently beats every competitor on staples like rice, beans, and eggs. Costco is great if you can buy in bulk — their chicken breast price per pound is unbeatable. Walmart price-matches, which many people don't know! SaveMart has amazing weekly sales, especially on produce. And don't sleep on ethnic grocery stores for spices and specialty items.", tags: ["Deals", "Budget Tips"], likes: 24 },
  { id: "b2", title: "How I Feed My Family of 4 on $200/Month with SNAP", author: "James T.", date: "2026-02-17", content: "Planning is everything. Every Sunday I check what's in the pantry, look at what's on sale, and plan 7 dinners. I batch-cook rice and beans for the week. Breakfast is always eggs or oatmeal. Lunches are leftovers. My secret: I buy frozen veggies instead of fresh — they're cheaper, last longer, and just as nutritious. Also, the SNAP app shows you exactly which items qualify, so no surprises at checkout.", tags: ["SNAP", "Budget Tips"], likes: 42 },
  { id: "b3", title: "Aldi vs Walmart: Price Comparison on 20 Staples", author: "Sarah K.", date: "2026-02-15", content: "I went to both stores on the same day and compared prices on 20 items. Aldi won on 14 items, Walmart won on 4, and 2 were tied. The biggest savings at Aldi were on dairy products and canned goods. However, Walmart had better prices on brand-name cereals and cleaning supplies. If you're purely focused on food budget, Aldi is the clear winner in our area.", tags: ["Deals", "Budget Tips"], likes: 31 },
  { id: "b4", title: "SNAP Benefits: What You Need to Know in 2026", author: "NourishAI Team", date: "2026-02-12", content: "SNAP benefits have been updated for 2026. The maximum allotment for a family of 4 is now $973/month. New this year: you can use SNAP at participating farmers markets for double value on fruits and vegetables. Online ordering with SNAP is available at Walmart, Amazon, and Aldi. Make sure to recertify on time to avoid gaps in benefits.", tags: ["SNAP"], likes: 56 },
  { id: "b5", title: "5 Meals Under $2 Per Serving That Actually Taste Good", author: "Chef Marcus", date: "2026-02-10", content: "As a professional chef, I believe great food doesn't have to be expensive. Here are 5 of my favorite budget meals: Rice & Beans with sofrito ($0.80/serving), French Toast with cinnamon ($0.90/serving), Pasta Aglio e Olio ($1.10/serving), Egg Drop Soup ($0.75/serving), and Bean & Cheese Quesadillas ($1.30/serving). The key is seasoning — salt, pepper, garlic, and one acid (lime, vinegar) transform any dish.", tags: ["Budget Tips", "Chef Tips"], likes: 67 },
];

export const mockChatHistory: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "👋 Hi! I'm your **Smart Meal Planner**. I can help you create budget-friendly meals from what's already in your pantry, find the best grocery deals, and make sure everything fits your dietary needs and SNAP budget.\n\nWhat would you like help with today?",
    timestamp: new Date(),
  },
];
