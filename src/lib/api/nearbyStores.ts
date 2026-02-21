import { supabase } from "@/integrations/supabase/client";

export interface RealStore {
  name: string;
  lat: number;
  lng: number;
  address: string;
  type: string;
  brand: string | null;
  openingHours: string | null;
}

// Cache stores per location to avoid repeated calls
const storeCache = new Map<string, { data: RealStore[]; timestamp: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export async function fetchNearbyStores(
  lat: number,
  lng: number,
  radius?: number
): Promise<RealStore[]> {
  const cacheKey = `${lat.toFixed(3)},${lng.toFixed(3)},${radius || 8000}`;
  const cached = storeCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const { data, error } = await supabase.functions.invoke("nearby-stores", {
    body: { lat, lng, radius: radius || 8000 },
  });

  if (error) {
    console.error("Error fetching nearby stores:", error);
    return [];
  }

  if (data?.success && data.data) {
    storeCache.set(cacheKey, { data: data.data, timestamp: Date.now() });
    return data.data;
  }

  return [];
}
