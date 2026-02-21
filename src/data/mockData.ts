export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expiresIn?: number; // days
}

export interface StorePrice {
  store: string;
  item: string;
  price: number;
  onSale: boolean;
  snapEligible: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
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
  { store: "SaveMart", item: "Chicken Breast (per lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Chicken Breast (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Chicken Breast (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Brown Rice (2 lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Brown Rice (2 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Brown Rice (2 lb)", price: 1.98, onSale: true, snapEligible: true },
  { store: "SaveMart", item: "Eggs (dozen)", price: 3.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Eggs (dozen)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Eggs (dozen)", price: 2.98, onSale: true, snapEligible: true },
  { store: "SaveMart", item: "Whole Wheat Bread", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Whole Wheat Bread", price: 3.99, onSale: false, snapEligible: false },
  { store: "Walmart", item: "Whole Wheat Bread", price: 1.68, onSale: true, snapEligible: true },
];

export const mockChatHistory: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "👋 Hi! I'm your **Smart Meal Planner**. I can help you create budget-friendly meals from what's already in your pantry, find the best grocery deals, and make sure everything fits your dietary needs and SNAP budget.\n\nWhat would you like help with today?",
    timestamp: new Date(),
  },
];
