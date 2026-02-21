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
  { name: "Hy-Vee", lat: 0, lng: 0, address: "" },
  { name: "Cub Foods", lat: 0, lng: 0, address: "" },
  { name: "Walmart", lat: 0, lng: 0, address: "" },
  { name: "Aldi", lat: 0, lng: 0, address: "" },
  { name: "Target", lat: 0, lng: 0, address: "" },
  { name: "Costco", lat: 0, lng: 0, address: "" },
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
// Uses a simple seeded random so different locations produce different distances
function seededRandom(seed: number) {
  let s = Math.sin(seed) * 10000;
  return s - Math.floor(s);
}

export function generateNearbyStores(lat: number, lng: number): StoreLocation[] {
  const baseSeed = Math.round(lat * 1000) + Math.round(lng * 1000) * 7919;
  const baseOffsets = [
    { dLat: 0.008, dLng: 0.012 },   // ~0.8 mi base
    { dLat: -0.022, dLng: 0.035 },  // ~2.8 mi base
    { dLat: 0.045, dLng: -0.018 },  // ~3.3 mi base
    { dLat: -0.058, dLng: -0.042 }, // ~5.0 mi base
    { dLat: 0.072, dLng: 0.055 },   // ~6.2 mi base
    { dLat: -0.11, dLng: 0.08 },    // ~9.5 mi base
  ];
  return storeLocations.map((store, i) => {
    const r1 = seededRandom(baseSeed + i * 13);
    const r2 = seededRandom(baseSeed + i * 31 + 7);
    // Add variation: ±0.03 degrees (~2 miles) based on location seed
    const jitterLat = (r1 - 0.5) * 0.06;
    const jitterLng = (r2 - 0.5) * 0.06;
    return {
      ...store,
      lat: lat + baseOffsets[i].dLat + jitterLat,
      lng: lng + baseOffsets[i].dLng + jitterLng,
    };
  });
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
  ingredientAmounts?: string[];
  totalCost: number;
  servings: number;
  chefPick?: boolean;
  tags: string[];
  instructions: string[];
  prepTime?: string;
  cookTime?: string;
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
  { store: "Hy-Vee", item: "Onions (3 lb bag)", price: 0.99, onSale: true, snapEligible: true },
  { store: "Cub Foods", item: "Onions (3 lb bag)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Onions (3 lb bag)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Onions (3 lb bag)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Onions (3 lb bag)", price: 1.39, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Tomatoes (per lb)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Tomatoes (per lb)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tomatoes (per lb)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tomatoes (per lb)", price: 0.99, onSale: true, snapEligible: true },
  { store: "Hy-Vee", item: "Bell Peppers (each)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bell Peppers (each)", price: 0.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bell Peppers (each)", price: 0.49, onSale: true, snapEligible: true },
  { store: "Cub Foods", item: "Bell Peppers (each)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Bananas (per lb)", price: 0.59, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bananas (per lb)", price: 0.52, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bananas (per lb)", price: 0.44, onSale: false, snapEligible: true },
  { store: "Target", item: "Bananas (per lb)", price: 0.69, onSale: false, snapEligible: true },
  { store: "Costco", item: "Bananas (per lb)", price: 0.39, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Potatoes (5 lb bag)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Potatoes (5 lb bag)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Potatoes (5 lb bag)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Potatoes (5 lb bag)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Costco", item: "Potatoes (5 lb bag)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Carrots (2 lb bag)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Carrots (2 lb bag)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Carrots (2 lb bag)", price: 0.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Carrots (2 lb bag)", price: 1.59, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Apples (3 lb bag)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Apples (3 lb bag)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Apples (3 lb bag)", price: 2.99, onSale: true, snapEligible: true },
  { store: "Costco", item: "Apples (3 lb bag)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Apples (3 lb bag)", price: 4.49, onSale: false, snapEligible: true },

  // === Fresh Meat ===
  { store: "Hy-Vee", item: "Chicken Breast (per lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "Cub Foods", item: "Chicken Breast (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Chicken Breast (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Chicken Breast (per lb)", price: 2.79, onSale: true, snapEligible: true },
  { store: "Costco", item: "Chicken Breast (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Ground Beef 80/20 (per lb)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ground Beef 80/20 (per lb)", price: 3.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ground Beef 80/20 (per lb)", price: 3.79, onSale: true, snapEligible: true },
  { store: "Costco", item: "Ground Beef 80/20 (per lb)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Ground Beef 80/20 (per lb)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Ground Beef 80/20 (per lb)", price: 5.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Pork Chops (per lb)", price: 3.29, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Pork Chops (per lb)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Pork Chops (per lb)", price: 2.69, onSale: false, snapEligible: true },
  { store: "Costco", item: "Pork Chops (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Pork Chops (per lb)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Ground Turkey (per lb)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ground Turkey (per lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ground Turkey (per lb)", price: 3.29, onSale: true, snapEligible: true },
  { store: "Target", item: "Ground Turkey (per lb)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Ground Turkey (per lb)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Chicken Thighs (per lb)", price: 1.99, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Chicken Thighs (per lb)", price: 1.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Chicken Thighs (per lb)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Chicken Thighs (per lb)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Chicken Thighs (per lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Bacon (16 oz)", price: 5.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Bacon (16 oz)", price: 4.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Bacon (16 oz)", price: 3.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Bacon (16 oz)", price: 5.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Bacon (16 oz)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Hot Dogs (8 ct)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hot Dogs (8 ct)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hot Dogs (8 ct)", price: 1.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Hot Dogs (8 ct)", price: 3.29, onSale: false, snapEligible: true },

  // === Dairy ===
  { store: "Hy-Vee", item: "Eggs (dozen)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Eggs (dozen)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Eggs (dozen)", price: 2.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Eggs (dozen)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Costco", item: "Eggs (dozen)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Milk (gallon)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Milk (gallon)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Milk (gallon)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Costco", item: "Milk (gallon)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Milk (gallon)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Butter (1 lb)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Butter (1 lb)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Butter (1 lb)", price: 2.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Butter (1 lb)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Butter (1 lb)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Cheddar Cheese (8 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cheddar Cheese (8 oz)", price: 2.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cheddar Cheese (8 oz)", price: 2.29, onSale: true, snapEligible: true },
  { store: "Target", item: "Cheddar Cheese (8 oz)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Cheddar Cheese (8 oz)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Cheddar Cheese (8 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Shredded Mozzarella (8 oz)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Shredded Mozzarella (8 oz)", price: 2.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Shredded Mozzarella (8 oz)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Shredded Mozzarella (8 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Cream Cheese (8 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cream Cheese (8 oz)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cream Cheese (8 oz)", price: 1.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Cream Cheese (8 oz)", price: 2.69, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Sour Cream (16 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Sour Cream (16 oz)", price: 1.88, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Sour Cream (16 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Sour Cream (16 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Yogurt (32 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Yogurt (32 oz)", price: 2.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Yogurt (32 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Costco", item: "Yogurt (32 oz)", price: 2.29, onSale: false, snapEligible: true },

  // === Grains & Bread ===
  { store: "Hy-Vee", item: "Brown Rice (2 lb)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Brown Rice (2 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Brown Rice (2 lb)", price: 1.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Brown Rice (2 lb)", price: 1.89, onSale: false, snapEligible: true },
  { store: "Target", item: "Brown Rice (2 lb)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Whole Wheat Bread", price: 2.49, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Whole Wheat Bread", price: 3.99, onSale: false, snapEligible: false },
  { store: "Walmart", item: "Whole Wheat Bread", price: 1.68, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Whole Wheat Bread", price: 1.45, onSale: false, snapEligible: true },
  { store: "Target", item: "Whole Wheat Bread", price: 2.89, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Pasta (box)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Pasta (box)", price: 0.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Pasta (box)", price: 0.85, onSale: false, snapEligible: true },
  { store: "Target", item: "Pasta (box)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Tortillas (10 ct)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tortillas (10 ct)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tortillas (10 ct)", price: 1.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Tortillas (10 ct)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Hamburger Buns (8 ct)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hamburger Buns (8 ct)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hamburger Buns (8 ct)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Hamburger Buns (8 ct)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Oatmeal (42 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Oatmeal (42 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Oatmeal (42 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Oatmeal (42 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Cereal (18 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cereal (18 oz)", price: 2.98, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Cereal (18 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Cereal (18 oz)", price: 3.49, onSale: false, snapEligible: true },

  // === Canned & Non-Perishable ===
  { store: "Hy-Vee", item: "Black Beans (can)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Walmart", item: "Black Beans (can)", price: 0.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Black Beans (can)", price: 0.65, onSale: false, snapEligible: true },
  { store: "Target", item: "Black Beans (can)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Corn (15 oz)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Corn (15 oz)", price: 0.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Corn (15 oz)", price: 0.59, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Corn (15 oz)", price: 0.89, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Green Beans (14 oz)", price: 0.89, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Green Beans (14 oz)", price: 0.62, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Green Beans (14 oz)", price: 0.55, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Green Beans (14 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Tuna (5 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Tuna (5 oz)", price: 0.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Tuna (5 oz)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Tuna (5 oz)", price: 1.19, onSale: false, snapEligible: true },
  { store: "Costco", item: "Canned Tuna (5 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Chicken (12.5 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Chicken (12.5 oz)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Chicken (12.5 oz)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Chicken (12.5 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Diced Tomatoes (14 oz can)", price: 1.09, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Diced Tomatoes (14 oz can)", price: 0.78, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Diced Tomatoes (14 oz can)", price: 0.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Diced Tomatoes (14 oz can)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Tomato Sauce (8 oz can)", price: 0.59, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Tomato Sauce (8 oz can)", price: 0.42, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Tomato Sauce (8 oz can)", price: 0.35, onSale: false, snapEligible: true },
  { store: "Target", item: "Tomato Sauce (8 oz can)", price: 0.55, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Soup - Chicken Noodle", price: 1.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Soup - Chicken Noodle", price: 1.28, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Canned Soup - Chicken Noodle", price: 0.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Canned Soup - Chicken Noodle", price: 1.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Canned Soup - Tomato", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Canned Soup - Tomato", price: 1.08, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Canned Soup - Tomato", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Canned Soup - Tomato", price: 1.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Spam (12 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Spam (12 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Spam (12 oz)", price: 2.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Spam (12 oz)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Peanut Butter (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Peanut Butter (16 oz)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Peanut Butter (16 oz)", price: 1.89, onSale: false, snapEligible: true },
  { store: "Target", item: "Peanut Butter (16 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Costco", item: "Peanut Butter (16 oz)", price: 1.69, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Mac & Cheese Box", price: 1.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mac & Cheese Box", price: 0.88, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Mac & Cheese Box", price: 0.69, onSale: false, snapEligible: true },
  { store: "Target", item: "Mac & Cheese Box", price: 1.19, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Ramen Noodles (6 pk)", price: 1.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ramen Noodles (6 pk)", price: 1.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ramen Noodles (6 pk)", price: 1.19, onSale: true, snapEligible: true },
  { store: "Target", item: "Ramen Noodles (6 pk)", price: 1.79, onSale: false, snapEligible: true },

  // === Sauces & Condiments ===
  { store: "Hy-Vee", item: "Ketchup (20 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ketchup (20 oz)", price: 1.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ketchup (20 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "Ketchup (20 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Mustard (14 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mustard (14 oz)", price: 0.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Mustard (14 oz)", price: 0.79, onSale: false, snapEligible: true },
  { store: "Target", item: "Mustard (14 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Mayo (30 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Mayo (30 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Mayo (30 oz)", price: 2.49, onSale: true, snapEligible: true },
  { store: "Target", item: "Mayo (30 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Soy Sauce (15 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Soy Sauce (15 oz)", price: 1.68, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Soy Sauce (15 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Target", item: "Soy Sauce (15 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Pasta Sauce (24 oz jar)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Pasta Sauce (24 oz jar)", price: 2.18, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Pasta Sauce (24 oz jar)", price: 1.69, onSale: false, snapEligible: true },
  { store: "Target", item: "Pasta Sauce (24 oz jar)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Cub Foods", item: "Pasta Sauce (24 oz jar)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Hot Sauce (5 oz)", price: 1.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Hot Sauce (5 oz)", price: 1.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Hot Sauce (5 oz)", price: 0.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Hot Sauce (5 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "BBQ Sauce (18 oz)", price: 2.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "BBQ Sauce (18 oz)", price: 1.78, onSale: true, snapEligible: true },
  { store: "Aldi", item: "BBQ Sauce (18 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Target", item: "BBQ Sauce (18 oz)", price: 2.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Salsa (16 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Salsa (16 oz)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Salsa (16 oz)", price: 1.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Salsa (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Ranch Dressing (16 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Ranch Dressing (16 oz)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Ranch Dressing (16 oz)", price: 1.79, onSale: false, snapEligible: true },
  { store: "Target", item: "Ranch Dressing (16 oz)", price: 2.79, onSale: false, snapEligible: true },

  // === Frozen ===
  { store: "Hy-Vee", item: "Frozen Mixed Veggies (16 oz)", price: 1.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Mixed Veggies (16 oz)", price: 1.08, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Frozen Mixed Veggies (16 oz)", price: 0.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Frozen Mixed Veggies (16 oz)", price: 1.29, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Frozen Pizza", price: 4.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Pizza", price: 3.98, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Frozen Pizza", price: 2.99, onSale: true, snapEligible: true },
  { store: "Target", item: "Frozen Pizza", price: 4.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Frozen Chicken Nuggets (32 oz)", price: 6.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Frozen Chicken Nuggets (32 oz)", price: 5.48, onSale: true, snapEligible: true },
  { store: "Aldi", item: "Frozen Chicken Nuggets (32 oz)", price: 4.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Frozen Chicken Nuggets (32 oz)", price: 6.49, onSale: false, snapEligible: true },
  { store: "Costco", item: "Frozen Chicken Nuggets (32 oz)", price: 4.49, onSale: false, snapEligible: true },

  // === Beverages & Snacks ===
  { store: "Hy-Vee", item: "Orange Juice (64 oz)", price: 3.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Orange Juice (64 oz)", price: 3.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Orange Juice (64 oz)", price: 2.69, onSale: true, snapEligible: true },
  { store: "Target", item: "Orange Juice (64 oz)", price: 3.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Cooking Oil (48 oz)", price: 4.49, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Cooking Oil (48 oz)", price: 3.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Cooking Oil (48 oz)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Target", item: "Cooking Oil (48 oz)", price: 4.29, onSale: false, snapEligible: true },
  { store: "Costco", item: "Cooking Oil (48 oz)", price: 2.79, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Sugar (4 lb)", price: 3.29, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Sugar (4 lb)", price: 2.48, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Sugar (4 lb)", price: 2.19, onSale: false, snapEligible: true },
  { store: "Target", item: "Sugar (4 lb)", price: 3.49, onSale: false, snapEligible: true },
  { store: "Hy-Vee", item: "Flour (5 lb)", price: 2.99, onSale: false, snapEligible: true },
  { store: "Walmart", item: "Flour (5 lb)", price: 2.28, onSale: false, snapEligible: true },
  { store: "Aldi", item: "Flour (5 lb)", price: 1.89, onSale: true, snapEligible: true },
  { store: "Target", item: "Flour (5 lb)", price: 2.79, onSale: false, snapEligible: true },
];

export const mockMeals: MealOption[] = [
  // === Budget (under $3) ===
  { id: "m1", name: "Rice & Beans Classic", ingredients: ["Rice", "Black Beans"], totalCost: 1.20, servings: 2, chefPick: true, tags: ["Chef Pick", "Budget", "SNAP"], prepTime: "5 min", cookTime: "20 min", instructions: ["Rinse 1 cup rice and add to pot with 2 cups water. Bring to boil, reduce heat, cover and simmer 18 min.", "Drain and rinse one can of black beans. Heat in a small saucepan over medium heat.", "Season beans with salt, cumin, and garlic powder to taste.", "Serve beans over rice. Top with hot sauce if desired."] },
  { id: "m2", name: "Simple Omelette", ingredients: ["Eggs", "Bell Peppers", "Onions"], totalCost: 1.50, servings: 1, tags: ["Quick", "SNAP", "Budget"], prepTime: "5 min", cookTime: "5 min", instructions: ["Beat 3 eggs in a bowl with salt and pepper.", "Dice ¼ bell pepper and ¼ onion finely.", "Heat butter or oil in a non-stick pan over medium heat. Sauté veggies 2 min.", "Pour in eggs, tilt pan to spread evenly. Cook until edges set, fold in half, serve."] },
  { id: "m3", name: "French Toast", ingredients: ["Bread", "Eggs", "Milk"], totalCost: 1.80, servings: 2, chefPick: true, tags: ["Chef Pick", "Quick", "Budget"], prepTime: "5 min", cookTime: "10 min", instructions: ["Whisk 2 eggs, ¼ cup milk, ½ tsp cinnamon, and a pinch of sugar in a shallow bowl.", "Heat butter in a skillet over medium heat.", "Dip each bread slice in egg mixture, coating both sides.", "Cook 2–3 min per side until golden brown. Serve with syrup or fruit."] },
  { id: "m4", name: "Tomato & Egg Scramble", ingredients: ["Eggs", "Tomatoes", "Onions", "Bread"], totalCost: 2.20, servings: 2, tags: ["Quick", "SNAP", "Budget"], prepTime: "5 min", cookTime: "8 min", instructions: ["Dice 2 tomatoes and ½ onion.", "Heat oil in a skillet. Sauté onion until soft, about 3 min.", "Add tomatoes, cook 2 min until they start to break down.", "Push veggies to side, scramble 4 eggs in the pan, then mix together. Season with salt and pepper. Serve with toast."] },
  { id: "m5", name: "Oatmeal with Bananas", ingredients: ["Oatmeal", "Bananas", "Milk"], totalCost: 1.40, servings: 2, tags: ["Quick", "Budget", "SNAP"], prepTime: "2 min", cookTime: "5 min", instructions: ["Bring 2 cups milk (or water) to a simmer.", "Stir in 1 cup oats. Cook 3–5 min, stirring occasionally.", "Slice 1 banana. Top oatmeal with banana slices.", "Add honey or brown sugar to taste."] },
  { id: "m6", name: "PB&J Sandwich", ingredients: ["Bread", "Peanut Butter"], totalCost: 0.90, servings: 1, tags: ["Quick", "Budget", "SNAP"], prepTime: "2 min", cookTime: "0 min", instructions: ["Spread 2 tbsp peanut butter on one slice of bread.", "Add jelly or jam if you have it on the other slice.", "Press slices together and cut diagonally. Done!"] },
  { id: "m7", name: "Ramen Veggie Bowl", ingredients: ["Ramen Noodles", "Eggs", "Frozen Mixed Veggies"], totalCost: 1.60, servings: 2, tags: ["Quick", "Budget", "SNAP"], prepTime: "2 min", cookTime: "8 min", instructions: ["Boil 3 cups water. Add ramen noodles and seasoning packet.", "Add 1 cup frozen mixed veggies, cook 3 min.", "Crack an egg into the boiling broth, stir gently to create egg ribbons.", "Serve hot in bowls. Add soy sauce or hot sauce if desired."] },
  { id: "m8", name: "Mac & Cheese", ingredients: ["Mac & Cheese Box", "Milk", "Butter"], totalCost: 1.50, servings: 2, tags: ["Quick", "Budget", "Comfort Food"], prepTime: "2 min", cookTime: "10 min", instructions: ["Boil water and cook macaroni per box directions. Drain.", "Add butter and milk as directed on box.", "Stir in cheese powder until smooth and creamy.", "Season with pepper and serve hot."] },
  { id: "m9", name: "Bean & Cheese Quesadilla", ingredients: ["Tortillas", "Black Beans", "Cheddar Cheese"], totalCost: 2.10, servings: 2, tags: ["Quick", "SNAP", "Budget"], prepTime: "5 min", cookTime: "6 min", instructions: ["Drain and mash ½ can black beans lightly with a fork.", "Place a tortilla in a dry skillet over medium heat.", "Spread beans on half, top with shredded cheese, fold over.", "Cook 2–3 min per side until golden and cheese melts. Cut into wedges."] },
  { id: "m10", name: "Banana Pancakes", ingredients: ["Bananas", "Eggs", "Flour"], totalCost: 1.30, servings: 2, tags: ["Quick", "Budget", "SNAP"], prepTime: "5 min", cookTime: "10 min", instructions: ["Mash 1 ripe banana in a bowl. Beat in 2 eggs.", "Add ½ cup flour and stir until just combined. Don't overmix.", "Heat a lightly oiled skillet over medium heat.", "Pour ¼ cup batter per pancake. Cook 2 min each side until golden. Serve with syrup."] },
  { id: "m11", name: "Corn & Black Bean Salad", ingredients: ["Canned Corn", "Black Beans", "Tomatoes", "Onions"], totalCost: 1.80, servings: 3, tags: ["Vegetarian", "SNAP", "Budget"], prepTime: "10 min", cookTime: "0 min", instructions: ["Drain and rinse one can each of corn and black beans.", "Dice 1 tomato and ¼ onion.", "Combine all in a bowl. Add lime juice, salt, and cumin.", "Toss well and serve cold or at room temperature."] },
  { id: "m12", name: "Egg Drop Soup", ingredients: ["Eggs", "Canned Soup - Chicken Noodle"], totalCost: 1.70, servings: 2, tags: ["Quick", "Budget", "SNAP"], prepTime: "3 min", cookTime: "8 min", instructions: ["Pour canned chicken noodle soup into a pot with ½ can water. Heat to a simmer.", "Beat 2 eggs in a small bowl.", "Slowly drizzle beaten eggs into simmering soup while stirring gently.", "Cook 1 min more. Season with pepper and serve."] },

  // === Mid-range ($3-$5) ===
  { id: "m13", name: "Bean & Rice Burrito Bowl", ingredients: ["Black Beans", "Rice", "Tomatoes", "Onions", "Salsa", "Sour Cream"], totalCost: 3.20, servings: 2, chefPick: true, tags: ["Chef Pick", "Vegetarian", "SNAP"], prepTime: "5 min", cookTime: "20 min", instructions: ["Cook 1 cup rice according to package directions.", "Heat black beans in a saucepan with cumin and garlic powder.", "Dice tomatoes and onions for topping.", "Assemble bowls: rice, beans, tomatoes, onions, salsa, and a dollop of sour cream."] },
  { id: "m14", name: "Black Bean Tacos", ingredients: ["Black Beans", "Tomatoes", "Onions", "Tortillas", "Cheddar Cheese", "Salsa"], totalCost: 3.80, servings: 3, tags: ["Vegetarian", "SNAP", "Quick"], prepTime: "10 min", cookTime: "5 min", instructions: ["Heat black beans in a pan, mash slightly. Season with cumin, chili powder, salt.", "Warm tortillas in a dry skillet or microwave.", "Dice tomatoes and onions.", "Fill tortillas with beans, top with cheese, tomatoes, onions, and salsa."] },
  { id: "m15", name: "Egg Fried Rice", ingredients: ["Eggs", "Rice", "Bell Peppers", "Onions", "Soy Sauce"], totalCost: 2.90, servings: 2, tags: ["Vegetarian", "Quick", "SNAP"], prepTime: "5 min", cookTime: "10 min", instructions: ["Cook rice and let it cool (day-old rice works best).", "Dice bell peppers and onions. Scramble 2 eggs in a hot wok, set aside.", "Add oil to wok, stir-fry veggies 2 min on high heat.", "Add rice, soy sauce, and eggs back. Toss everything together 2–3 min."] },
  { id: "m16", name: "Pasta Primavera", ingredients: ["Pasta", "Tomatoes", "Bell Peppers", "Onions", "Cooking Oil"], totalCost: 3.50, servings: 3, tags: ["Vegetarian", "SNAP"], prepTime: "10 min", cookTime: "15 min", instructions: ["Cook pasta according to package directions. Reserve ½ cup pasta water before draining.", "Dice tomatoes, bell peppers, and onions.", "Sauté veggies in olive oil over medium-high heat, 5–6 min.", "Toss with drained pasta, adding pasta water to create a light sauce. Season with salt, pepper, and red pepper flakes."] },
  { id: "m17", name: "Tuna Pasta Salad", ingredients: ["Pasta", "Canned Tuna", "Mayo", "Onions"], totalCost: 3.40, servings: 3, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "12 min", instructions: ["Cook pasta, drain, and rinse with cold water to cool.", "Drain canned tuna and flake with a fork.", "Dice ¼ onion finely.", "Combine pasta, tuna, onion, and 3 tbsp mayo. Season with salt, pepper, and a squeeze of lemon if available."] },
  { id: "m18", name: "Creamy Pasta Alfredo", ingredients: ["Pasta", "Milk", "Butter", "Cream Cheese"], totalCost: 4.00, servings: 3, tags: ["Comfort Food", "SNAP"], prepTime: "5 min", cookTime: "15 min", instructions: ["Cook pasta according to package directions. Drain.", "In the same pot, melt 2 tbsp butter over medium heat.", "Add 2 oz cream cheese and ½ cup milk. Stir until smooth.", "Add pasta back to sauce, toss to coat. Season with salt, pepper, and garlic powder."] },
  { id: "m19", name: "Spaghetti with Meat Sauce", ingredients: ["Pasta", "Ground Beef", "Pasta Sauce", "Onions"], totalCost: 4.80, servings: 4, chefPick: true, tags: ["Chef Pick", "High Protein", "SNAP"], prepTime: "5 min", cookTime: "25 min", instructions: ["Cook spaghetti according to package. Drain.", "Brown ½ lb ground beef in a skillet, breaking into crumbles. Drain excess fat.", "Add diced onion to beef, cook 3 min. Pour in pasta sauce.", "Simmer sauce 10 min. Serve over spaghetti."] },
  { id: "m20", name: "Loaded Baked Potato", ingredients: ["Potatoes", "Butter", "Sour Cream", "Cheddar Cheese", "Bacon"], totalCost: 3.50, servings: 2, tags: ["Comfort Food", "SNAP"], prepTime: "5 min", cookTime: "45 min", instructions: ["Preheat oven to 400°F. Wash and poke potatoes with a fork.", "Bake potatoes directly on oven rack 40–45 min until tender.", "While potatoes bake, cook 2 strips bacon until crispy. Crumble.", "Split potatoes open, add butter, sour cream, shredded cheese, and bacon bits."] },
  { id: "m21", name: "Turkey Taco Bowl", ingredients: ["Ground Turkey", "Rice", "Black Beans", "Salsa", "Cheddar Cheese"], totalCost: 4.90, servings: 3, tags: ["High Protein", "SNAP"], prepTime: "5 min", cookTime: "20 min", instructions: ["Cook rice according to package directions.", "Brown ground turkey in a skillet. Season with chili powder, cumin, garlic powder, and salt.", "Heat black beans in a small pot.", "Assemble bowls: rice, turkey, beans, salsa, and shredded cheese."] },
  { id: "m22", name: "Grilled Cheese & Tomato Soup", ingredients: ["Bread", "Cheddar Cheese", "Butter", "Canned Soup - Tomato"], totalCost: 3.20, servings: 2, tags: ["Comfort Food", "Quick", "SNAP"], prepTime: "3 min", cookTime: "10 min", instructions: ["Heat tomato soup in a saucepan according to can directions.", "Butter 4 slices of bread on one side each.", "Place cheese between 2 slices (butter-side out). Cook in skillet over medium heat.", "Flip when golden, about 3 min per side. Serve with hot soup for dipping."] },
  { id: "m23", name: "Tuna Melt", ingredients: ["Bread", "Canned Tuna", "Cheddar Cheese", "Mayo"], totalCost: 3.00, servings: 2, tags: ["Quick", "High Protein", "SNAP"], prepTime: "5 min", cookTime: "5 min", instructions: ["Drain tuna and mix with 2 tbsp mayo, salt, and pepper.", "Spread tuna mixture on 2 slices of bread. Top with sliced cheese.", "Broil in oven or toaster oven 3–5 min until cheese is bubbly and golden.", "Serve open-faced or with a second slice of bread."] },
  { id: "m24", name: "Veggie Stir-Fry", ingredients: ["Frozen Mixed Veggies", "Rice", "Soy Sauce", "Cooking Oil"], totalCost: 3.10, servings: 2, tags: ["Vegetarian", "SNAP", "Quick"], prepTime: "5 min", cookTime: "12 min", instructions: ["Cook rice according to package directions.", "Heat oil in a large skillet or wok over high heat.", "Add frozen veggies directly to hot pan. Stir-fry 5–6 min until hot and slightly charred.", "Add 2 tbsp soy sauce, toss, and serve over rice."] },
  { id: "m25", name: "Pork Chop with Potatoes", ingredients: ["Pork Chops", "Potatoes", "Onions", "Cooking Oil"], totalCost: 4.50, servings: 2, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "25 min", instructions: ["Season pork chops with salt, pepper, and garlic powder.", "Dice potatoes into ½-inch cubes. Slice onion.", "Heat oil in skillet. Sear pork chops 4 min per side. Remove and set aside.", "In same skillet, cook potatoes and onions 12–15 min until golden. Return pork chops to warm through."] },
  { id: "m26", name: "BBQ Chicken Rice", ingredients: ["Chicken Breast", "Rice", "BBQ Sauce", "Onions"], totalCost: 4.20, servings: 2, tags: ["High Protein", "SNAP"], prepTime: "5 min", cookTime: "20 min", instructions: ["Cook rice according to package directions.", "Cut chicken breast into strips. Season with salt and pepper.", "Cook chicken in oiled skillet 5–6 min per side until cooked through.", "Brush generously with BBQ sauce, cook 1 more min. Serve sliced over rice with diced onion."] },
  { id: "m27", name: "Hot Dog & Beans", ingredients: ["Hot Dogs", "Black Beans", "Onions", "Ketchup", "Mustard"], totalCost: 3.30, servings: 3, tags: ["Quick", "SNAP", "Budget"], prepTime: "5 min", cookTime: "10 min", instructions: ["Slice hot dogs into coins.", "Sauté diced onion in a pot until soft, about 3 min.", "Add hot dogs and black beans. Stir in ketchup and mustard.", "Simmer 5 min until heated through. Serve in bowls or on bread."] },
  { id: "m28", name: "Cheesy Bean Burritos", ingredients: ["Tortillas", "Black Beans", "Cheddar Cheese", "Salsa", "Sour Cream"], totalCost: 3.60, servings: 3, tags: ["Vegetarian", "SNAP"], prepTime: "5 min", cookTime: "8 min", instructions: ["Heat and mash black beans with cumin and salt.", "Warm tortillas in microwave 15 seconds each.", "Spread beans down center of each tortilla. Add cheese, salsa, and sour cream.", "Roll up tightly, tucking in the sides. Optional: toast seam-side down in a dry skillet."] },

  // === Heartier meals ($5-$8) ===
  { id: "m29", name: "Chicken & Rice Bowl", ingredients: ["Chicken Breast", "Rice", "Black Beans", "Onions", "Bell Peppers"], totalCost: 5.20, servings: 2, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "25 min", instructions: ["Cook rice according to package directions.", "Season chicken breast with salt, pepper, paprika, and cumin.", "Cook chicken in oiled skillet 6 min per side. Let rest 5 min, then slice.", "Sauté diced onions and bell peppers 4 min. Assemble bowls with rice, chicken, beans, and veggies."] },
  { id: "m30", name: "Chicken Stir-Fry", ingredients: ["Chicken Breast", "Bell Peppers", "Onions", "Rice", "Soy Sauce"], totalCost: 6.10, servings: 2, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "15 min", instructions: ["Cook rice. Cut chicken into thin strips.", "Heat oil in wok or large skillet over high heat.", "Stir-fry chicken 4–5 min until cooked. Remove.", "Add sliced peppers and onions, cook 3 min. Return chicken, add soy sauce, toss 1 min. Serve over rice."] },
  { id: "m31", name: "Chef's Pantry Soup", ingredients: ["Chicken Breast", "Tomatoes", "Onions", "Black Beans", "Bell Peppers", "Carrots"], totalCost: 4.70, servings: 4, chefPick: true, tags: ["Chef Pick", "High Protein", "SNAP"], prepTime: "10 min", cookTime: "30 min", instructions: ["Dice chicken, onions, bell peppers, carrots, and tomatoes.", "Sauté onions and chicken in a large pot with oil until chicken is browned.", "Add all veggies, beans, and 4 cups water or broth.", "Season with salt, pepper, cumin, and garlic powder. Simmer 20 min until veggies are tender."] },
  { id: "m32", name: "Beef Tacos", ingredients: ["Ground Beef", "Tortillas", "Cheddar Cheese", "Tomatoes", "Onions", "Salsa", "Sour Cream"], totalCost: 6.50, servings: 4, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "15 min", instructions: ["Brown ground beef in a skillet, breaking into crumbles. Drain fat.", "Season with chili powder, cumin, garlic powder, and salt.", "Warm tortillas in a dry skillet or microwave.", "Fill tortillas with beef, diced tomatoes, onions, cheese, salsa, and sour cream."] },
  { id: "m33", name: "Bacon Cheeseburger Bowl", ingredients: ["Ground Beef", "Bacon", "Cheddar Cheese", "Onions", "Ketchup", "Mustard"], totalCost: 7.20, servings: 3, tags: ["High Protein", "Comfort Food"], prepTime: "10 min", cookTime: "20 min", instructions: ["Cook bacon until crispy. Remove, crumble, and reserve drippings.", "Brown ground beef with diced onions in bacon drippings. Season with salt and pepper.", "Drain excess fat. Mix in ketchup and mustard.", "Top with crumbled bacon and shredded cheese. Serve over rice or with buns."] },
  { id: "m34", name: "Chicken Quesadilla", ingredients: ["Chicken Breast", "Tortillas", "Cheddar Cheese", "Bell Peppers", "Salsa"], totalCost: 5.80, servings: 3, tags: ["High Protein", "SNAP", "Quick"], prepTime: "10 min", cookTime: "12 min", instructions: ["Cook and dice chicken breast (or use leftover chicken).", "Place tortilla in a dry skillet over medium heat.", "Layer chicken, diced bell peppers, and cheese on one half. Fold over.", "Cook 3 min per side until golden. Cut into wedges and serve with salsa."] },
  { id: "m35", name: "Beef & Potato Skillet", ingredients: ["Ground Beef", "Potatoes", "Onions", "Cheddar Cheese", "Cooking Oil"], totalCost: 5.90, servings: 3, tags: ["High Protein", "Comfort Food", "SNAP"], prepTime: "10 min", cookTime: "25 min", instructions: ["Dice potatoes into small cubes. Dice onion.", "Heat oil in a large skillet. Cook potatoes 12–15 min until golden, stirring occasionally.", "Push potatoes to side, add ground beef and onion. Cook until beef is browned.", "Mix everything together, top with cheese, cover 2 min to melt. Season with salt and pepper."] },
  { id: "m36", name: "Turkey Burger Patties", ingredients: ["Ground Turkey", "Hamburger Buns", "Tomatoes", "Onions", "Ketchup", "Mustard"], totalCost: 5.40, servings: 4, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "12 min", instructions: ["Mix ground turkey with salt, pepper, garlic powder, and a splash of soy sauce.", "Form into 4 patties about ½ inch thick.", "Cook in oiled skillet over medium-high heat, 5–6 min per side until internal temp reaches 165°F.", "Serve on buns with sliced tomato, onion, ketchup, and mustard."] },
  { id: "m37", name: "Chicken Thigh & Veggie Bake", ingredients: ["Chicken Thighs", "Potatoes", "Carrots", "Onions", "Cooking Oil"], totalCost: 4.80, servings: 3, chefPick: true, tags: ["Chef Pick", "High Protein", "SNAP"], prepTime: "10 min", cookTime: "40 min", instructions: ["Preheat oven to 425°F.", "Cut potatoes and carrots into chunks. Quarter the onion.", "Toss veggies and chicken thighs with oil, salt, pepper, and paprika on a sheet pan.", "Roast 35–40 min until chicken reaches 165°F and veggies are golden."] },
  { id: "m38", name: "Pork Fried Rice", ingredients: ["Pork Chops", "Rice", "Eggs", "Frozen Mixed Veggies", "Soy Sauce"], totalCost: 5.60, servings: 3, tags: ["High Protein", "SNAP"], prepTime: "10 min", cookTime: "20 min", instructions: ["Cook rice ahead and let cool (or use leftover rice).", "Dice pork chop into small cubes. Cook in hot wok 5 min until browned.", "Push pork to side, scramble 2 eggs in the wok.", "Add frozen veggies and rice. Stir-fry 3–4 min, add soy sauce, and toss everything together."] },
  { id: "m39", name: "Chili Con Carne", ingredients: ["Ground Beef", "Black Beans", "Diced Tomatoes", "Onions", "Bell Peppers", "Hot Sauce"], totalCost: 6.80, servings: 5, chefPick: true, tags: ["Chef Pick", "High Protein", "SNAP", "Comfort Food"], prepTime: "10 min", cookTime: "35 min", instructions: ["Brown ground beef in a large pot. Drain excess fat.", "Add diced onions and bell peppers. Cook 4 min.", "Add canned diced tomatoes, drained black beans, chili powder, cumin, and hot sauce.", "Simmer uncovered 25 min, stirring occasionally. Season with salt. Serve with cheese or sour cream."] },
  { id: "m40", name: "Chicken Pasta with Sauce", ingredients: ["Chicken Breast", "Pasta", "Pasta Sauce", "Onions"], totalCost: 5.30, servings: 3, tags: ["High Protein", "SNAP"], prepTime: "5 min", cookTime: "20 min", instructions: ["Cook pasta according to package. Drain.", "Cut chicken into bite-size pieces. Season with salt, pepper, and Italian seasoning.", "Cook chicken in oiled skillet 6 min. Add diced onion, cook 3 more min.", "Pour in pasta sauce, simmer 5 min. Toss with cooked pasta and serve."] },
  { id: "m41", name: "Breakfast for Dinner", ingredients: ["Eggs", "Bacon", "Bread", "Butter", "Orange Juice"], totalCost: 5.50, servings: 3, tags: ["Quick", "Comfort Food"], prepTime: "5 min", cookTime: "15 min", instructions: ["Cook bacon in a skillet until crispy. Set aside on paper towels.", "In bacon grease or butter, fry eggs to your preference (sunny-side up, scrambled, etc.).", "Toast bread and butter it.", "Serve eggs, bacon, and toast together with a glass of orange juice."] },
  { id: "m42", name: "Cheesy Potato Soup", ingredients: ["Potatoes", "Cheddar Cheese", "Milk", "Butter", "Onions"], totalCost: 4.60, servings: 4, tags: ["Vegetarian", "Comfort Food", "SNAP"], prepTime: "10 min", cookTime: "25 min", instructions: ["Peel and dice 3 potatoes. Dice 1 onion.", "Melt butter in a pot. Sauté onion 3 min. Add potatoes and 3 cups water.", "Boil then simmer 15 min until potatoes are very tender.", "Mash some potatoes in the pot for thickness. Stir in milk and cheese until melted. Season with salt and pepper."] },
  { id: "m43", name: "Spam & Rice", ingredients: ["Spam", "Rice", "Eggs", "Soy Sauce"], totalCost: 4.40, servings: 3, tags: ["Quick", "SNAP", "Budget"], prepTime: "5 min", cookTime: "15 min", instructions: ["Cook rice according to package directions.", "Slice Spam into ¼-inch thick pieces.", "Pan-fry Spam slices 2–3 min per side until golden and crispy.", "Fry eggs sunny-side up. Serve Spam and egg over rice with a drizzle of soy sauce."] },
  { id: "m44", name: "Chicken Nugget Dinner", ingredients: ["Frozen Chicken Nuggets", "Potatoes", "Ketchup", "BBQ Sauce"], totalCost: 5.20, servings: 4, tags: ["Quick", "SNAP"], prepTime: "5 min", cookTime: "25 min", instructions: ["Preheat oven to 400°F.", "Cut potatoes into wedges. Toss with oil, salt, and pepper.", "Spread nuggets and potato wedges on a baking sheet.", "Bake 20–25 min, flipping halfway. Serve with ketchup and BBQ sauce for dipping."] },
  { id: "m45", name: "Pizza Night (Frozen)", ingredients: ["Frozen Pizza", "Ranch Dressing"], totalCost: 4.50, servings: 3, tags: ["Quick", "Comfort Food"], prepTime: "2 min", cookTime: "15 min", instructions: ["Preheat oven per pizza package directions (usually 400–425°F).", "Remove pizza from packaging and place directly on oven rack or a baking sheet.", "Bake 12–15 min until cheese is bubbly and crust is golden.", "Let cool 2 min, slice, and serve with ranch for dipping."] },
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
