import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpDown, Trophy, Tag, MapPin, Navigation, Loader2, MapPinned } from "lucide-react";
import { mockStorePrices, generateNearbyStores, twinCitiesZipCodes, type StoreLocation } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AddressSuggestion {
  display_name: string;
  lat: string;
  lon: string;
}

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
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchingAddress, setSearchingAddress] = useState(false);
  const [zipSearch, setZipSearch] = useState("");
  const [zipSuggestions, setZipSuggestions] = useState<{ zip: string; label: string }[]>([]);
  const [showZipSuggestions, setShowZipSuggestions] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const zipRef = useRef<HTMLDivElement>(null);

  const applyLocation = useCallback((lat: number, lng: number, label?: string) => {
    setUserLocation({ lat, lng });
    setNearbyStores(generateNearbyStores(lat, lng));
    setSortBy("distance");
    if (label) setManualLocation(label);
    setShowSuggestions(false);
    setSuggestions([]);
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

  // Debounced address search via Nominatim
  const searchAddress = useCallback((query: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    setSearchingAddress(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const encoded = encodeURIComponent(query.trim());
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encoded}&limit=5&addressdetails=1`,
          { headers: { "Accept-Language": "en" } }
        );
        const data: AddressSuggestion[] = await res.json();
        setSuggestions(data);
        setShowSuggestions(data.length > 0);
      } catch {
        setSuggestions([]);
      } finally {
        setSearchingAddress(false);
      }
    }, 350);
  }, []);

  const handleAddressInput = useCallback((value: string) => {
    setManualLocation(value);
    searchAddress(value);
  }, [searchAddress]);

  const handleSelectSuggestion = useCallback((s: AddressSuggestion) => {
    applyLocation(parseFloat(s.lat), parseFloat(s.lon), s.display_name);
    toast.success("Location set! Showing nearest stores.");
  }, [applyLocation]);

  // Zip code search for Twin Cities
  const handleZipInput = useCallback((value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 5);
    setZipSearch(cleaned);
    if (cleaned.length >= 3) {
      const matches = Object.entries(twinCitiesZipCodes)
        .filter(([zip]) => zip.startsWith(cleaned))
        .slice(0, 6)
        .map(([zip, data]) => ({ zip, label: data.label }));
      setZipSuggestions(matches);
      setShowZipSuggestions(matches.length > 0);
    } else {
      setZipSuggestions([]);
      setShowZipSuggestions(false);
    }
  }, []);

  const handleSelectZip = useCallback((zip: string) => {
    const data = twinCitiesZipCodes[zip];
    if (data) {
      applyLocation(data.lat, data.lng, `${zip} — ${data.label}`);
      setZipSearch(zip);
      setShowZipSuggestions(false);
      setZipSuggestions([]);
      toast.success(`Location set to ${data.label}`);
    }
  }, [applyLocation]);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
      if (zipRef.current && !zipRef.current.contains(e.target as Node)) {
        setShowZipSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
          <div className="relative min-w-[140px] max-w-[180px]" ref={zipRef}>
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Zip code"
              value={zipSearch}
              onChange={(e) => handleZipInput(e.target.value)}
              onFocus={() => zipSuggestions.length > 0 && setShowZipSuggestions(true)}
              className="pl-10 text-sm"
              maxLength={5}
              inputMode="numeric"
            />
            {showZipSuggestions && zipSuggestions.length > 0 && (
              <div className="absolute z-50 mt-1 w-[280px] rounded-lg border bg-popover shadow-lg max-h-60 overflow-auto">
                {zipSuggestions.map((s) => (
                  <button
                    key={s.zip}
                    onClick={() => handleSelectZip(s.zip)}
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-muted transition-colors border-b last:border-b-0"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-medium">{s.zip}</span>
                    <span className="text-muted-foreground truncate">{s.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm text-muted-foreground">or</span>
          <div className="relative flex-1 min-w-[220px]" ref={suggestionsRef}>
            <MapPinned className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search address..."
              value={manualLocation}
              onChange={(e) => handleAddressInput(e.target.value)}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
              className="pl-10 text-sm"
              maxLength={200}
            />
            {searchingAddress && (
              <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
            )}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-50 mt-1 w-full rounded-lg border bg-popover shadow-lg max-h-60 overflow-auto">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectSuggestion(s)}
                    className="flex w-full items-start gap-2 px-3 py-2.5 text-left text-sm hover:bg-muted transition-colors border-b last:border-b-0"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="line-clamp-2">{s.display_name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
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
