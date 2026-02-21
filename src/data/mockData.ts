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

// Twin Cities area zip codes with coordinates
export const twinCitiesZipCodes: Record<string, { lat: number; lng: number; label: string }> = {
  "55401": { lat: 44.9778, lng: -93.2650, label: "Minneapolis (Downtown)" },
  "55402": { lat: 44.9750, lng: -93.2780, label: "Minneapolis (Loring Park)" },
  "55403": { lat: 44.9690, lng: -93.2880, label: "Minneapolis (Lowry Hill)" },
  "55404": { lat: 44.9620, lng: -93.2610, label: "Minneapolis (Whittier)" },
  "55405": { lat: 44.9740, lng: -93.3040, label: "Minneapolis (Bryn Mawr)" },
  "55406": { lat: 44.9380, lng: -93.2270, label: "Minneapolis (Longfellow)" },
  "55407": { lat: 44.9370, lng: -93.2530, label: "Minneapolis (Powderhorn)" },
  "55408": { lat: 44.9480, lng: -93.2880, label: "Minneapolis (Uptown)" },
  "55409": { lat: 44.9290, lng: -93.2870, label: "Minneapolis (Kingfield)" },
  "55410": { lat: 44.9160, lng: -93.3200, label: "Minneapolis (Linden Hills)" },
  "55411": { lat: 44.9980, lng: -93.2980, label: "Minneapolis (Near North)" },
  "55412": { lat: 45.0250, lng: -93.3100, label: "Minneapolis (Camden)" },
  "55413": { lat: 44.9930, lng: -93.2400, label: "Minneapolis (NE Arts District)" },
  "55414": { lat: 44.9780, lng: -93.2240, label: "Minneapolis (University)" },
  "55415": { lat: 44.9740, lng: -93.2590, label: "Minneapolis (Elliot Park)" },
  "55416": { lat: 44.9480, lng: -93.3470, label: "St. Louis Park" },
  "55417": { lat: 44.9100, lng: -93.2360, label: "Minneapolis (Nokomis)" },
  "55418": { lat: 45.0130, lng: -93.2370, label: "Minneapolis (NE Columbia)" },
  "55419": { lat: 44.9080, lng: -93.2870, label: "Minneapolis (Tangletown)" },
  "55420": { lat: 44.8400, lng: -93.2780, label: "Bloomington" },
  "55421": { lat: 45.0530, lng: -93.2440, label: "Columbia Heights" },
  "55422": { lat: 45.0130, lng: -93.3500, label: "Golden Valley" },
  "55423": { lat: 44.8770, lng: -93.2820, label: "Richfield" },
  "55424": { lat: 44.9070, lng: -93.3430, label: "Edina" },
  "55425": { lat: 44.8560, lng: -93.2380, label: "Bloomington (MOA)" },
  "55426": { lat: 44.9480, lng: -93.3800, label: "St. Louis Park (West)" },
  "55427": { lat: 45.0120, lng: -93.3900, label: "Plymouth (East)" },
  "55428": { lat: 45.0580, lng: -93.3900, label: "New Hope" },
  "55429": { lat: 45.0580, lng: -93.3380, label: "Brooklyn Center" },
  "55430": { lat: 45.0680, lng: -93.2900, label: "Brooklyn Center (East)" },
  "55431": { lat: 44.8340, lng: -93.3120, label: "Bloomington (West)" },
  "55432": { lat: 45.0880, lng: -93.2460, label: "Fridley" },
  "55433": { lat: 45.1230, lng: -93.3200, label: "Coon Rapids" },
  "55434": { lat: 45.1230, lng: -93.2400, label: "Blaine" },
  "55435": { lat: 44.8700, lng: -93.3490, label: "Edina (South)" },
  "55436": { lat: 44.9000, lng: -93.3880, label: "Edina (West)" },
  "55437": { lat: 44.8470, lng: -93.3670, label: "Bloomington (SW)" },
  "55438": { lat: 44.8280, lng: -93.3500, label: "Bloomington (South)" },
  "55439": { lat: 44.8660, lng: -93.3920, label: "Edina (SW)" },
  "55441": { lat: 44.9900, lng: -93.4300, label: "Plymouth" },
  "55443": { lat: 45.0850, lng: -93.3700, label: "Brooklyn Park" },
  "55444": { lat: 45.0780, lng: -93.3300, label: "Brooklyn Park (East)" },
  "55445": { lat: 45.1100, lng: -93.3700, label: "Brooklyn Park (North)" },
  "55446": { lat: 45.0100, lng: -93.4700, label: "Plymouth (West)" },
  "55447": { lat: 44.9840, lng: -93.4900, label: "Plymouth (SW)" },
  "55101": { lat: 44.9537, lng: -93.0900, label: "St. Paul (Downtown)" },
  "55102": { lat: 44.9340, lng: -93.1130, label: "St. Paul (West 7th)" },
  "55103": { lat: 44.9680, lng: -93.1180, label: "St. Paul (North End)" },
  "55104": { lat: 44.9560, lng: -93.1550, label: "St. Paul (Hamline-Midway)" },
  "55105": { lat: 44.9350, lng: -93.1670, label: "St. Paul (Macalester-Groveland)" },
  "55106": { lat: 44.9540, lng: -93.0510, label: "St. Paul (Dayton's Bluff)" },
  "55107": { lat: 44.9280, lng: -93.0760, label: "St. Paul (West Side)" },
  "55108": { lat: 44.9810, lng: -93.1800, label: "St. Paul (St. Anthony Park)" },
  "55109": { lat: 45.0270, lng: -93.0340, label: "North St. Paul / Maplewood" },
  "55110": { lat: 45.0540, lng: -93.0120, label: "White Bear Lake" },
  "55112": { lat: 45.0700, lng: -93.1880, label: "Roseville / Shoreview" },
  "55113": { lat: 45.0100, lng: -93.1660, label: "Roseville" },
  "55114": { lat: 44.9650, lng: -93.1950, label: "St. Paul (Midway)" },
  "55116": { lat: 44.9100, lng: -93.1680, label: "St. Paul (Highland Park)" },
  "55117": { lat: 44.9910, lng: -93.0990, label: "St. Paul (Como)" },
  "55118": { lat: 44.8950, lng: -93.1010, label: "West St. Paul" },
  "55119": { lat: 44.9370, lng: -93.0050, label: "St. Paul (Battle Creek)" },
  "55120": { lat: 44.8580, lng: -93.1560, label: "South St. Paul / Inver Grove" },
  "55121": { lat: 44.8380, lng: -93.1640, label: "Eagan" },
  "55122": { lat: 44.8210, lng: -93.1940, label: "Eagan (West)" },
  "55123": { lat: 44.7970, lng: -93.1650, label: "Eagan (South)" },
  "55124": { lat: 44.7580, lng: -93.2200, label: "Apple Valley" },
  "55125": { lat: 44.8840, lng: -92.9790, label: "Woodbury" },
  "55126": { lat: 45.0680, lng: -93.1350, label: "Shoreview" },
  "55127": { lat: 45.0580, lng: -93.0770, label: "Vadnais Heights" },
  "55128": { lat: 44.9870, lng: -92.9490, label: "Oakdale" },
  "55129": { lat: 44.9050, lng: -92.9250, label: "Woodbury (South)" },
  "55130": { lat: 44.9690, lng: -93.0820, label: "St. Paul (Prosperity Heights)" },
  "55155": { lat: 44.9500, lng: -93.1020, label: "St. Paul (Capitol)" },
  "55337": { lat: 44.7640, lng: -93.2770, label: "Burnsville" },
  "55343": { lat: 44.8730, lng: -93.4440, label: "Hopkins / Minnetonka" },
  "55344": { lat: 44.8580, lng: -93.4540, label: "Eden Prairie" },
  "55345": { lat: 44.9130, lng: -93.4700, label: "Minnetonka" },
  "55346": { lat: 44.8800, lng: -93.4900, label: "Eden Prairie (West)" },
  "55347": { lat: 44.8500, lng: -93.4800, label: "Eden Prairie (South)" },
  "55369": { lat: 45.1050, lng: -93.4500, label: "Maple Grove" },
  "55372": { lat: 44.7300, lng: -93.3740, label: "Prior Lake" },
  "55378": { lat: 44.7800, lng: -93.3400, label: "Savage" },
  "55379": { lat: 44.7900, lng: -93.3900, label: "Shakopee" },
  "55386": { lat: 44.8200, lng: -93.5700, label: "Victoria" },
  "55391": { lat: 44.9400, lng: -93.5900, label: "Wayzata" },
  "55305": { lat: 44.9470, lng: -93.4520, label: "Hopkins" },
  "55311": { lat: 45.0500, lng: -93.4700, label: "Maple Grove (South)" },
  "55316": { lat: 45.1700, lng: -93.3000, label: "Champlin" },
  "55318": { lat: 44.7800, lng: -93.6100, label: "Chanhassen" },
  "55331": { lat: 44.8800, lng: -93.5700, label: "Excelsior" },
  "55340": { lat: 45.0700, lng: -93.5200, label: "Medina" },
  "55364": { lat: 44.9400, lng: -93.6200, label: "Mound" },
  "55387": { lat: 44.7600, lng: -93.5300, label: "Waconia (East)" },
};

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
  // === Produce ===
  { store: "SaveMart", item: "Onions (3 lb bag)", price: 0.99, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Onions (3 lb bag)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Onions (3 lb bag)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Onions (3 lb bag)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Onions (3 lb bag)", price: 1.39, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Tomatoes (per lb)", price: 1.29, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Tomatoes (per lb)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tomatoes (per lb)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tomatoes (per lb)", price: 0.99, onSale: true, snapEligible: true },
  { store: "SaveMart", item: "Bell Peppers (each)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bell Peppers (each)", price: 0.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bell Peppers (each)", price: 0.49, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Bell Peppers (each)", price: 1.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Bananas (per lb)", price: 0.59, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bananas (per lb)", price: 0.52, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bananas (per lb)", price: 0.44, onSale: false, snapEligible: true },
  { store: "Target", item: "Bananas (per lb)", price: 0.69, onSale: false, snapEligible: true },
  { store: "Costco", item: "Bananas (per lb)", price: 0.39, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Potatoes (5 lb bag)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Potatoes (5 lb bag)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Potatoes (5 lb bag)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Potatoes (5 lb bag)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Costco", item: "Potatoes (5 lb bag)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Carrots (2 lb bag)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Carrots (2 lb bag)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Carrots (2 lb bag)", price: 0.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Carrots (2 lb bag)", price: 1.59, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Apples (3 lb bag)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Apples (3 lb bag)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Apples (3 lb bag)", price: 2.99, onSale: true, snapEligible: true },
  { store: "Costco", item: "Apples (3 lb bag)", price: 2.79, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Apples (3 lb bag)", price: 4.49, onSale: false, snapEligible: true },

  // === Fresh Meat ===
  { store: "SaveMart", item: "Chicken Breast (per lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "FreshGrocer", item: "Chicken Breast (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Chicken Breast (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Chicken Breast (per lb)", price: 2.79, onSale: true, snapEligible: true },
  { store: "Costco", item: "Chicken Breast (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Ground Beef 80/20 (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ground Beef 80/20 (per lb)", price: 3.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ground Beef 80/20 (per lb)", price: 3.79, onSale: true, snapEligible: true },
  { store: "Costco", item: "Ground Beef 80/20 (per lb)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Ground Beef 80/20 (per lb)", price: 4.99, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Ground Beef 80/20 (per lb)", price: 5.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Pork Chops (per lb)", price: 3.29, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Pork Chops (per lb)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Pork Chops (per lb)", price: 2.69, onSale: false, snapEligible: true },
  { store: "Costco", item: "Pork Chops (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Pork Chops (per lb)", price: 3.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Ground Turkey (per lb)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ground Turkey (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ground Turkey (per lb)", price: 3.29, onSale: true, snapEligible: true },
  { store: "Target", item: "Ground Turkey (per lb)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Ground Turkey (per lb)", price: 2.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Chicken Thighs (per lb)", price: 1.99, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Chicken Thighs (per lb)", price: 1.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Chicken Thighs (per lb)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Chicken Thighs (per lb)", price: 1.29, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Chicken Thighs (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Bacon (16 oz)", price: 5.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bacon (16 oz)", price: 4.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bacon (16 oz)", price: 3.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Bacon (16 oz)", price: 5.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Bacon (16 oz)", price: 4.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Hot Dogs (8 ct)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hot Dogs (8 ct)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hot Dogs (8 ct)", price: 1.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Hot Dogs (8 ct)", price: 3.29, onSale: false, snapEligible: true },

  // === Dairy ===
  { store: "SaveMart", item: "Eggs (dozen)", price: 3.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Eggs (dozen)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Eggs (dozen)", price: 2.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Eggs (dozen)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Costco", item: "Eggs (dozen)", price: 2.19, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Milk (gallon)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Milk (gallon)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Milk (gallon)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Costco", item: "Milk (gallon)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Milk (gallon)", price: 3.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Butter (1 lb)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Butter (1 lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Butter (1 lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Butter (1 lb)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Butter (1 lb)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Cheddar Cheese (8 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cheddar Cheese (8 oz)", price: 2.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cheddar Cheese (8 oz)", price: 2.29, onSale: true, snapEligible: true },
  { store: "Target", item: "Cheddar Cheese (8 oz)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Cheddar Cheese (8 oz)", price: 1.99, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Cheddar Cheese (8 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Shredded Mozzarella (8 oz)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Shredded Mozzarella (8 oz)", price: 2.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Shredded Mozzarella (8 oz)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Shredded Mozzarella (8 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Cream Cheese (8 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cream Cheese (8 oz)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cream Cheese (8 oz)", price: 1.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Cream Cheese (8 oz)", price: 2.69, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Sour Cream (16 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Sour Cream (16 oz)", price: 1.88, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Sour Cream (16 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Sour Cream (16 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Yogurt (32 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Yogurt (32 oz)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Yogurt (32 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Costco", item: "Yogurt (32 oz)", price: 2.29, onSale: false, snapEligible: true },

  // === Grains & Bread ===
  { store: "SaveMart", item: "Brown Rice (2 lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Brown Rice (2 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Brown Rice (2 lb)", price: 1.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Brown Rice (2 lb)", price: 1.89, onSale: false, snapEligible: true },
  { store: "Target", item: "Brown Rice (2 lb)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Whole Wheat Bread", price: 2.49, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Whole Wheat Bread", price: 3.99, onSale: false, snapEligible: false },
  { store: "Walmart", item: "Whole Wheat Bread", price: 1.68, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Whole Wheat Bread", price: 1.45, onSale: false, snapEligible: true },
  { store: "Target", item: "Whole Wheat Bread", price: 2.89, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Pasta (box)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Pasta (box)", price: 0.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Pasta (box)", price: 0.85, onSale: false, snapEligible: true },
  { store: "Target", item: "Pasta (box)", price: 1.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Tortillas (10 ct)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tortillas (10 ct)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tortillas (10 ct)", price: 1.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Tortillas (10 ct)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Hamburger Buns (8 ct)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hamburger Buns (8 ct)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hamburger Buns (8 ct)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Hamburger Buns (8 ct)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Oatmeal (42 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Oatmeal (42 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Oatmeal (42 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Oatmeal (42 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Cereal (18 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cereal (18 oz)", price: 2.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Cereal (18 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Cereal (18 oz)", price: 3.49, onSale: false, snapEligible: true },

  // === Canned & Non-Perishable ===
  { store: "SaveMart", item: "Black Beans (can)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Black Beans (can)", price: 0.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Black Beans (can)", price: 0.65, onSale: false, snapEligible: true },
  { store: "Target", item: "Black Beans (can)", price: 0.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Corn (15 oz)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Corn (15 oz)", price: 0.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Corn (15 oz)", price: 0.59, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Corn (15 oz)", price: 0.89, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Green Beans (14 oz)", price: 0.89, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Green Beans (14 oz)", price: 0.62, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Green Beans (14 oz)", price: 0.55, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Green Beans (14 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Tuna (5 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Tuna (5 oz)", price: 0.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Tuna (5 oz)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Tuna (5 oz)", price: 1.19, onSale: false, snapEligible: true },
  { store: "Costco", item: "Canned Tuna (5 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Chicken (12.5 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Chicken (12.5 oz)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Chicken (12.5 oz)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Chicken (12.5 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Diced Tomatoes (14 oz can)", price: 1.09, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Diced Tomatoes (14 oz can)", price: 0.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Diced Tomatoes (14 oz can)", price: 0.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Diced Tomatoes (14 oz can)", price: 0.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Tomato Sauce (8 oz can)", price: 0.59, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tomato Sauce (8 oz can)", price: 0.42, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tomato Sauce (8 oz can)", price: 0.35, onSale: false, snapEligible: true },
  { store: "Target", item: "Tomato Sauce (8 oz can)", price: 0.55, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Soup - Chicken Noodle", price: 1.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Soup - Chicken Noodle", price: 1.28, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Canned Soup - Chicken Noodle", price: 0.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Soup - Chicken Noodle", price: 1.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Canned Soup - Tomato", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Soup - Tomato", price: 1.08, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Soup - Tomato", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Soup - Tomato", price: 1.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Spam (12 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Spam (12 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Spam (12 oz)", price: 2.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Spam (12 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Peanut Butter (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Peanut Butter (16 oz)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Peanut Butter (16 oz)", price: 1.89, onSale: false, snapEligible: true },
  { store: "Target", item: "Peanut Butter (16 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Costco", item: "Peanut Butter (16 oz)", price: 1.69, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Mac & Cheese Box", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mac & Cheese Box", price: 0.88, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Mac & Cheese Box", price: 0.69, onSale: false, snapEligible: true },
  { store: "Target", item: "Mac & Cheese Box", price: 1.19, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Ramen Noodles (6 pk)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ramen Noodles (6 pk)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ramen Noodles (6 pk)", price: 1.19, onSale: true, snapEligible: true },
  { store: "Target", item: "Ramen Noodles (6 pk)", price: 1.79, onSale: false, snapEligible: true },

  // === Sauces & Condiments ===
  { store: "SaveMart", item: "Ketchup (20 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ketchup (20 oz)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ketchup (20 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Ketchup (20 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Mustard (14 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mustard (14 oz)", price: 0.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Mustard (14 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Target", item: "Mustard (14 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Mayo (30 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mayo (30 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Mayo (30 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Mayo (30 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Soy Sauce (15 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Soy Sauce (15 oz)", price: 1.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Soy Sauce (15 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Soy Sauce (15 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Pasta Sauce (24 oz jar)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Pasta Sauce (24 oz jar)", price: 2.18, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Pasta Sauce (24 oz jar)", price: 1.69, onSale: false, snapEligible: true },
  { store: "Target", item: "Pasta Sauce (24 oz jar)", price: 2.79, onSale: false, snapEligible: true },
  { store: "FreshGrocer", item: "Pasta Sauce (24 oz jar)", price: 3.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Hot Sauce (5 oz)", price: 1.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hot Sauce (5 oz)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hot Sauce (5 oz)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Hot Sauce (5 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "BBQ Sauce (18 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "BBQ Sauce (18 oz)", price: 1.78, onSale: true, snapEligible: true },
  { store: "Aldi", item: "BBQ Sauce (18 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "BBQ Sauce (18 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Salsa (16 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Salsa (16 oz)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Salsa (16 oz)", price: 1.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Salsa (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Ranch Dressing (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ranch Dressing (16 oz)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ranch Dressing (16 oz)", price: 1.79, onSale: false, snapEligible: true },
  { store: "Target", item: "Ranch Dressing (16 oz)", price: 2.79, onSale: false, snapEligible: true },

  // === Frozen ===
  { store: "SaveMart", item: "Frozen Mixed Veggies (16 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Mixed Veggies (16 oz)", price: 1.08, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Frozen Mixed Veggies (16 oz)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Frozen Mixed Veggies (16 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Frozen Pizza", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Pizza", price: 3.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Frozen Pizza", price: 2.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Frozen Pizza", price: 4.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Frozen Chicken Nuggets (32 oz)", price: 6.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Chicken Nuggets (32 oz)", price: 5.48, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Frozen Chicken Nuggets (32 oz)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Frozen Chicken Nuggets (32 oz)", price: 6.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Frozen Chicken Nuggets (32 oz)", price: 4.49, onSale: false, snapEligible: true },

  // === Beverages & Snacks ===
  { store: "SaveMart", item: "Orange Juice (64 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Orange Juice (64 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Orange Juice (64 oz)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Orange Juice (64 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Cooking Oil (48 oz)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cooking Oil (48 oz)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cooking Oil (48 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Cooking Oil (48 oz)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Cooking Oil (48 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Sugar (4 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Sugar (4 lb)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Sugar (4 lb)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Sugar (4 lb)", price: 3.49, onSale: false, snapEligible: true },
  { store: "SaveMart", item: "Flour (5 lb)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Flour (5 lb)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Flour (5 lb)", price: 1.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Flour (5 lb)", price: 2.79, onSale: false, snapEligible: true },
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
