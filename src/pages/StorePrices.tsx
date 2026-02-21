import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpDown, Trophy, Tag, MapPin, Navigation, Loader2, MapPinned } from "lucide-react";
import { mockStorePrices, generateNearbyStores, type StoreLocation } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Simple city lookup for typed locations (no external API needed)
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  "new york": { lat: 40.7128, lng: -74.006 },
  "nyc": { lat: 40.7128, lng: -74.006 },
  "los angeles": { lat: 34.0522, lng: -118.2437 },
  "la": { lat: 34.0522, lng: -118.2437 },
  "chicago": { lat: 41.8781, lng: -87.6298 },
  "houston": { lat: 29.7604, lng: -95.3698 },
  "phoenix": { lat: 33.4484, lng: -112.074 },
  "philadelphia": { lat: 39.9526, lng: -75.1652 },
  "san antonio": { lat: 29.4241, lng: -98.4936 },
  "san diego": { lat: 32.7157, lng: -117.1611 },
  "dallas": { lat: 32.7767, lng: -96.797 },
  "san francisco": { lat: 37.7749, lng: -122.4194 },
  "sf": { lat: 37.7749, lng: -122.4194 },
  "seattle": { lat: 47.6062, lng: -122.3321 },
  "denver": { lat: 39.7392, lng: -104.9903 },
  "boston": { lat: 42.3601, lng: -71.0589 },
  "atlanta": { lat: 33.749, lng: -84.388 },
  "miami": { lat: 25.7617, lng: -80.1918 },
  "detroit": { lat: 42.3314, lng: -83.0458 },
  "minneapolis": { lat: 44.9778, lng: -93.265 },
  "portland": { lat: 45.5152, lng: -122.6784 },
  "austin": { lat: 30.2672, lng: -97.7431 },
  "nashville": { lat: 36.1627, lng: -86.7816 },
  "charlotte": { lat: 35.2271, lng: -80.8431 },
  "orlando": { lat: 28.5383, lng: -81.3792 },
  "washington": { lat: 38.9072, lng: -77.0369 },
  "dc": { lat: 38.9072, lng: -77.0369 },
  "las vegas": { lat: 36.1699, lng: -115.1398 },
  "memphis": { lat: 35.1495, lng: -90.049 },
  "baltimore": { lat: 39.2904, lng: -76.6122 },
  "milwaukee": { lat: 43.0389, lng: -87.9065 },
  "albuquerque": { lat: 35.0844, lng: -106.6504 },
  "tucson": { lat: 32.2226, lng: -110.9747 },
  "fresno": { lat: 36.7378, lng: -119.7871 },
  "sacramento": { lat: 38.5816, lng: -121.4944 },
  "kansas city": { lat: 39.0997, lng: -94.5786 },
  "mesa": { lat: 33.4152, lng: -111.8315 },
  "omaha": { lat: 41.2565, lng: -95.9345 },
  "cleveland": { lat: 41.4993, lng: -81.6944 },
  "pittsburgh": { lat: 40.4406, lng: -79.9959 },
  "raleigh": { lat: 35.7796, lng: -78.6382 },
  "indianapolis": { lat: 39.7684, lng: -86.1581 },
  "st louis": { lat: 38.627, lng: -90.1994 },
  "tampa": { lat: 27.9506, lng: -82.4572 },
  "louisville": { lat: 38.2527, lng: -85.7585 },
};

function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function kmToMiles(km: number) {
  return km * 0.621371;
}

const StorePrices = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyStores, setNearbyStores] = useState<StoreLocation[]>([]);
  const [locating, setLocating] = useState(false);
  const [sortBy, setSortBy] = useState<"price" | "distance">("price");
  const [manualLocation, setManualLocation] = useState("");

  const applyLocation = useCallback((lat: number, lng: number) => {
    setUserLocation({ lat, lng });
    setNearbyStores(generateNearbyStores(lat, lng));
    setSortBy("distance");
  }, []);

  const handleGetLocation = useCallback(() => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        applyLocation(pos.coords.latitude, pos.coords.longitude);
        setLocating(false);
        toast.success("Location found! Showing nearest stores.");
      },
      () => {
        setLocating(false);
        toast.error("Unable to get your location. Please allow location access.");
      }
    );
  }, [applyLocation]);

  const handleManualLocation = useCallback(() => {
    const query = manualLocation.trim().toLowerCase();
    if (!query) {
      toast.error("Please enter a city name");
      return;
    }
    const coords = CITY_COORDS[query];
    if (coords) {
      applyLocation(coords.lat, coords.lng);
      toast.success(`Location set to ${manualLocation.trim()}! Showing nearest stores.`);
    } else {
      toast.error("City not found. Try a major US city (e.g. Chicago, Miami, Denver).");
    }
  }, [manualLocation, applyLocation]);

  const getStoreDistance = (storeName: string) => {
    if (!userLocation || nearbyStores.length === 0) return null;
    const loc = nearbyStores.find((s) => s.name === storeName);
    if (!loc) return null;
    return kmToMiles(getDistanceKm(userLocation.lat, userLocation.lng, loc.lat, loc.lng));
  };

  const getStoreAddress = (storeName: string) => {
    const stores = nearbyStores.length > 0 ? nearbyStores : [];
    return stores.find((s) => s.name === storeName)?.address || "";
  };
  const filtered = mockStorePrices
    .filter(
      (p) =>
        p.item.toLowerCase().includes(search.toLowerCase()) ||
        p.store.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "distance" && userLocation) {
        const distA = getStoreDistance(a.store) ?? 999;
        const distB = getStoreDistance(b.store) ?? 999;
        return distA - distB;
      }
      return sortAsc ? a.price - b.price : b.price - a.price;
    });

  const grouped = filtered.reduce<Record<string, typeof mockStorePrices>>((acc, p) => {
    (acc[p.item] = acc[p.item] || []).push(p);
    return acc;
  }, {});

  const bestDeal = search.trim()
    ? filtered.length > 0
      ? filtered[0]
      : null
    : null;

  const averagePrice =
    bestDeal && filtered.length > 1
      ? filtered
          .filter((p) => p.item === bestDeal.item)
          .reduce((sum, p) => sum + p.price, 0) /
        filtered.filter((p) => p.item === bestDeal.item).length
      : 0;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Best Price Finder</h1>
        <p className="mt-1 text-muted-foreground">
          Search any food item to find the cheapest store in the city
        </p>
      </motion.div>

      {/* Location Bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border bg-card p-4"
      >
        <div className="flex items-center gap-2">
          <Button
            onClick={handleGetLocation}
            disabled={locating}
            variant={userLocation ? "secondary" : "default"}
            className="gap-2"
          >
            {locating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Navigation className="h-4 w-4" />
            )}
            {locating ? "Finding you…" : userLocation ? "Update" : "Use My Location"}
          </Button>
          <span className="text-sm text-muted-foreground">or</span>
          <div className="relative flex-1 min-w-[180px]">
            <MapPinned className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Type your city (e.g. Chicago)"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleManualLocation()}
              className="pl-10 text-sm"
              maxLength={50}
            />
          </div>
          <Button onClick={handleManualLocation} variant="outline" size="sm">
            Set
          </Button>
        </div>
        {userLocation && (
          <span className="text-sm text-muted-foreground">
            📍 Location set — distances shown below
          </span>
        )}
        {userLocation && (
          <div className="ml-auto flex gap-2">
            <Button
              size="sm"
              variant={sortBy === "price" ? "default" : "outline"}
              onClick={() => setSortBy("price")}
            >
              Sort by Price
            </Button>
            <Button
              size="sm"
              variant={sortBy === "distance" ? "default" : "outline"}
              onClick={() => setSortBy("distance")}
            >
              Sort by Nearest
            </Button>
          </div>
        )}
      </motion.div>

      <div className="mt-4 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="🔍 Find best price for... (e.g. Eggs, Chicken, Rice)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 text-base"
          />
        </div>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <ArrowUpDown className="h-4 w-4" />
          {sortAsc ? "Low → High" : "High → Low"}
        </button>
      </div>

      {/* Best Deal Hero Card */}
      {bestDeal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 rounded-xl border-2 border-savings/30 bg-savings/5 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 text-savings font-semibold text-sm mb-2">
            <Trophy className="h-5 w-5" />
            BEST PRICE FOUND
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-xl font-bold">{bestDeal.item}</h3>
              <p className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {bestDeal.store}
                {getStoreAddress(bestDeal.store) && (
                  <span className="text-xs"> — {getStoreAddress(bestDeal.store)}</span>
                )}
              </p>
              {getStoreDistance(bestDeal.store) !== null && (
                <p className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                  <Navigation className="h-3.5 w-3.5" />
                  {getStoreDistance(bestDeal.store)!.toFixed(1)} mi away
                </p>
              )}
              <div className="flex gap-2 mt-2">
                {bestDeal.onSale && (
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                    <Tag className="h-3 w-3 mr-1" /> ON SALE
                  </Badge>
                )}
                {bestDeal.snapEligible && (
                  <Badge variant="secondary" className="bg-snap/10 text-snap text-xs">
                    SNAP OK
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="font-display text-4xl font-bold text-savings">
                ${bestDeal.price.toFixed(2)}
              </span>
              {averagePrice > bestDeal.price && (
                <p className="text-sm text-muted-foreground mt-1">
                  Save{" "}
                  <span className="font-semibold text-savings">
                    ${(averagePrice - bestDeal.price).toFixed(2)}
                  </span>{" "}
                  vs avg
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 space-y-6">
        {Object.entries(grouped).map(([item, prices], i) => {
          const lowestPrice = Math.min(...prices.map((p) => p.price));
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold">{item}</h3>
              <div className="mt-3 space-y-2">
                {prices.map((price, j) => {
                  const dist = getStoreDistance(price.store);
                  return (
                    <div
                      key={j}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                        price.price === lowestPrice
                          ? "bg-savings/10 border border-savings/20"
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <span className="font-medium">{price.store}</span>
                          {getStoreAddress(price.store) && (
                            <p className="text-xs text-muted-foreground">
                              {getStoreAddress(price.store)}
                            </p>
                          )}
                        </div>
                        {dist !== null && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <Navigation className="h-3 w-3" />
                            {dist.toFixed(1)} mi
                          </Badge>
                        )}
                        <div className="flex gap-2">
                          {price.onSale && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                              SALE
                            </Badge>
                          )}
                          {price.snapEligible && (
                            <Badge variant="secondary" className="bg-snap/10 text-snap text-xs">
                              SNAP
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {price.price === lowestPrice && (
                          <span className="text-xs font-semibold text-savings">BEST PRICE</span>
                        )}
                        <span className={`font-display text-xl font-bold ${
                          price.price === lowestPrice ? "text-savings" : "text-foreground"
                        }`}>
                          ${price.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
        {Object.keys(grouped).length === 0 && (
          <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
            No items found. Try searching for something else.
          </div>
        )}
      </div>
    </div>
  );
};

export default StorePrices;
