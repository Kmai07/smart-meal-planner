import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpDown, Trophy, Tag, MapPin, Navigation, Loader2, MapPinned, Globe, Database, TrendingDown, Calendar } from "lucide-react";
import { mockStorePrices, twinCitiesZipCodes } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { searchOpenPrices, type OpenPrice } from "@/lib/api/openPrices";
import { fetchNearbyStores, type RealStore } from "@/lib/api/nearbyStores";
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

// Unified price item that works for both local and live data
interface UnifiedPrice {
  id: string;
  item: string;
  store: string;
  price: number;
  source: "local" | "live";
  onSale?: boolean;
  snapEligible?: boolean;
  storeCity?: string;
  date?: string;
  productImage?: string;
  brands?: string;
  isDiscounted?: boolean;
  priceWithoutDiscount?: number | null;
  discountType?: string | null;
  storeLat?: number | null;
  storeLon?: number | null;
  storeAddress?: string;
}

const StorePrices = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyStores, setNearbyStores] = useState<RealStore[]>([]);
  const [loadingStores, setLoadingStores] = useState(false);
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

  // Live prices state
  const [liveResults, setLiveResults] = useState<OpenPrice[]>([]);
  const [liveLoading, setLiveLoading] = useState(false);
  const liveDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [expandedStoreId, setExpandedStoreId] = useState<string | null>(null);

  // Auto-fetch live prices when search changes (debounced)
  useEffect(() => {
    if (liveDebounceRef.current) clearTimeout(liveDebounceRef.current);
    if (!search.trim() || search.trim().length < 2) {
      setLiveResults([]);
      return;
    }
    liveDebounceRef.current = setTimeout(async () => {
      setLiveLoading(true);
      try {
        const result = await searchOpenPrices(search, { page_size: 30 });
        if (result.success && result.data) {
          setLiveResults(result.data);
        } else {
          setLiveResults([]);
        }
      } catch {
        setLiveResults([]);
      } finally {
        setLiveLoading(false);
      }
    }, 600);
    return () => { if (liveDebounceRef.current) clearTimeout(liveDebounceRef.current); };
  }, [search]);

  const applyLocation = useCallback(async (lat: number, lng: number, label?: string) => {
    setUserLocation({ lat, lng });
    setSortBy("distance");
    if (label) setManualLocation(label);
    setShowSuggestions(false);
    setSuggestions([]);
    // Fetch real nearby stores
    setLoadingStores(true);
    try {
      const stores = await fetchNearbyStores(lat, lng);
      setNearbyStores(stores);
      if (stores.length === 0) {
        toast.info("No grocery stores found nearby. Try a different location.");
      }
    } catch {
      toast.error("Failed to fetch nearby stores.");
    } finally {
      setLoadingStores(false);
    }
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

  // Find real Target & Walmart from Overpass results for chain price entries
  const targetStore = nearbyStores.find((s) => /target/i.test(s.name) || /target/i.test(s.brand || ""));
  const walmartStore = nearbyStores.find((s) => /walmart/i.test(s.name) || /walmart/i.test(s.brand || ""));

  const majorChains: RealStore[] = [];
  if (targetStore) majorChains.push(targetStore);
  if (walmartStore) majorChains.push(walmartStore);

  // Find a nearby store by name match for address/distance lookups (fuzzy)
  const findNearbyStore = (storeName: string): RealStore | undefined => {
    const lower = storeName.toLowerCase();
    // Exact match first
    const exact = nearbyStores.find(
      (s) => s.name.toLowerCase() === lower || s.brand?.toLowerCase() === lower
    );
    if (exact) return exact;
    // Partial match: store name contains search or vice versa
    const partial = nearbyStores.find(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        lower.includes(s.name.toLowerCase()) ||
        (s.brand && (s.brand.toLowerCase().includes(lower) || lower.includes(s.brand.toLowerCase())))
    );
    if (partial) return partial;
    // Fallback: find nearest store with an address
    if (userLocation && nearbyStores.length > 0) {
      const withAddress = nearbyStores.filter((s) => s.address);
      if (withAddress.length > 0) {
        return withAddress.reduce((closest, s) => {
          const dCurrent = getDistanceKm(userLocation.lat, userLocation.lng, s.lat, s.lng);
          const dClosest = getDistanceKm(userLocation.lat, userLocation.lng, closest.lat, closest.lng);
          return dCurrent < dClosest ? s : closest;
        });
      }
    }
    return undefined;
  };

  const getStoreDistance = (storeName: string) => {
    if (!userLocation) return null;
    const store = findNearbyStore(storeName);
    if (!store) return null;
    return kmToMiles(getDistanceKm(userLocation.lat, userLocation.lng, store.lat, store.lng));
  };

  // Build unified price list from local + live
  const localFiltered = mockStorePrices
    .filter(
      (p) =>
        p.item.toLowerCase().includes(search.toLowerCase()) ||
        p.store.toLowerCase().includes(search.toLowerCase())
    );

  const localUnified: UnifiedPrice[] = localFiltered.map((p, i) => {
    const nearby = findNearbyStore(p.store);
    return {
      id: `local-${i}`,
      item: p.item,
      store: p.store,
      price: p.price,
      source: "local" as const,
      onSale: p.onSale,
      snapEligible: p.snapEligible,
      storeCity: nearby?.address || "",
      storeAddress: nearby?.address || "",
      storeLat: nearby?.lat || null,
      storeLon: nearby?.lng || null,
    };
  });

  // Add Target & Walmart price entries only for items they DON'T already have in mock data
  const uniqueLocalItems = [...new Set(localFiltered.map((p) => p.item))];
  const chainPrices: UnifiedPrice[] = [];
  uniqueLocalItems.forEach((itemName) => {
    const itemPrices = localFiltered.filter((p) => p.item === itemName);
    const avgPrice = itemPrices.reduce((s, p) => s + p.price, 0) / itemPrices.length;
    majorChains.forEach((chain, ci) => {
      // Skip if this store already has a price for this item in mock data
      const alreadyExists = localFiltered.some(
        (p) => p.item === itemName && (
          p.store.toLowerCase() === chain.name.toLowerCase() ||
          p.store.toLowerCase() === (chain.brand || "").toLowerCase()
        )
      );
      if (alreadyExists) return;
      const variance = 0.9 + Math.random() * 0.2;
      chainPrices.push({
        id: `chain-${itemName}-${ci}`,
        item: itemName,
        store: chain.name,
        price: parseFloat((avgPrice * variance).toFixed(2)),
        source: "local" as const,
        storeCity: chain.address,
        storeAddress: chain.address,
        storeLat: chain.lat || null,
        storeLon: chain.lng || null,
        snapEligible: true,
      });
    });
  });

  // Filter live results to only show stores in the user's area (within ~80km / 50mi)
  const MAX_LIVE_DISTANCE_KM = 80;
  const filteredLiveResults = userLocation
    ? liveResults.filter((p) => {
        if (!p.storeLat || !p.storeLon) return false;
        return getDistanceKm(userLocation.lat, userLocation.lng, p.storeLat, p.storeLon) <= MAX_LIVE_DISTANCE_KM;
      })
    : liveResults;

  const liveUnified: UnifiedPrice[] = filteredLiveResults.map((p) => ({
    id: `live-${p.id}`,
    item: p.productName,
    store: p.storeName,
    price: p.price,
    source: "live" as const,
    storeCity: p.storeCity,
    date: p.date,
    productImage: p.productImage,
    brands: p.brands,
    isDiscounted: p.isDiscounted,
    priceWithoutDiscount: p.priceWithoutDiscount,
    discountType: p.discountType,
    storeLat: p.storeLat,
    storeLon: p.storeLon,
  }));

  const allPrices = [...localUnified, ...chainPrices, ...liveUnified].sort((a, b) => {
    if (sortBy === "distance" && userLocation && a.source === "local" && b.source === "local") {
      const distA = getStoreDistance(a.store) ?? 999;
      const distB = getStoreDistance(b.store) ?? 999;
      return distA - distB;
    }
    return sortAsc ? a.price - b.price : b.price - a.price;
  });

  // Group by item name
  // Group by item name, limit to 10 stores per product (lowest prices first)
  const grouped = allPrices.reduce<Record<string, UnifiedPrice[]>>((acc, p) => {
    const list = acc[p.item] = acc[p.item] || [];
    if (list.length < 10) list.push(p);
    return acc;
  }, {});

  // Always pick the cheapest price as best deal, regardless of sort order
  const bestDeal = search.trim() && allPrices.length > 0
    ? allPrices.reduce((best, p) => (p.price < best.price ? p : best), allPrices[0])
    : null;

  const averagePrice =
    bestDeal && allPrices.length > 1
      ? allPrices
          .filter((p) => p.item === bestDeal.item)
          .reduce((sum, p) => sum + p.price, 0) /
        allPrices.filter((p) => p.item === bestDeal.item).length
      : 0;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Best Price Finder</h1>
        <p className="mt-1 text-muted-foreground">
          Search any food item — we check local stores <span className="font-medium text-primary">and</span> live crowdsourced prices
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
            📍 Location set — {loadingStores ? "finding stores..." : `${nearbyStores.length} stores found`}
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

      {loadingStores && (
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Finding real grocery stores near you...
        </div>
      )}

      {/* Unified Search Bar */}
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

      {/* Quick search chips */}
      <div className="mt-2 flex gap-2 flex-wrap">
        {["eggs", "milk", "bread", "rice", "chicken", "butter", "cheese", "pasta"].map((q) => (
          <button
            key={q}
            onClick={() => setSearch(q)}
            className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors capitalize"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Loading indicator for live prices */}
      {liveLoading && search.trim().length >= 2 && (
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Fetching live crowdsourced prices...
        </div>
      )}

      {/* Source summary */}
      {search.trim() && (
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" />
            {localUnified.length} local
          </span>
          <span className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" />
            {liveUnified.length} live
            {liveLoading && " (loading...)"}
          </span>
        </div>
      )}

      {/* Best Deal Hero Card */}
      {bestDeal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 rounded-xl border-2 border-savings/30 bg-savings/5 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 text-savings font-semibold text-sm mb-2">
            <Trophy className="h-5 w-5" />
            BEST PRICE FOUND
            <Badge variant="outline" className="text-xs ml-2">
              {bestDeal.source === "live" ? (
                <><Globe className="h-3 w-3 mr-1" /> Live</>
              ) : (
                <><Database className="h-3 w-3 mr-1" /> Local</>
              )}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-xl font-bold">{bestDeal.item}</h3>
              <p className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {bestDeal.store}
                {bestDeal.source === "local" && bestDeal.storeCity && (
                   <span className="text-xs"> — {bestDeal.storeCity}</span>
                )}
                {bestDeal.source === "live" && bestDeal.storeCity && (
                  <span className="text-xs"> — {bestDeal.storeCity}</span>
                )}
              </p>
              {bestDeal.source === "local" && getStoreDistance(bestDeal.store) !== null && (
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
                {bestDeal.isDiscounted && (
                  <Badge variant="secondary" className="bg-savings/10 text-savings text-xs">
                    <TrendingDown className="h-3 w-3 mr-1" /> DISCOUNT
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

      {/* Grouped results */}
      <div className="mt-6 space-y-6">
        {Object.entries(grouped).map(([item, prices], i) => {
          const lowestPrice = Math.min(...prices.map((p) => p.price));
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold">{item}</h3>
              <div className="mt-3 space-y-2">
                {prices.map((price) => {
                  const dist = price.source === "local" ? getStoreDistance(price.store) : null;
                  const isExpanded = expandedStoreId === price.id;
                  const fullAddress = price.storeAddress || price.storeCity || "";
                  return (
                    <div
                      key={price.id}
                      onClick={() => setExpandedStoreId(isExpanded ? null : price.id)}
                      className={`rounded-lg px-4 py-3 transition-colors cursor-pointer hover:ring-2 hover:ring-primary/30 ${
                        price.price === lowestPrice
                          ? "bg-savings/10 border border-savings/20"
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-wrap">
                          <div>
                            <span className="font-medium">{price.store}</span>
                            {!isExpanded && price.storeCity && (
                              <p className="text-xs text-muted-foreground">{price.storeCity}</p>
                            )}
                          </div>
                          {dist !== null && (
                            <Badge variant="outline" className="text-xs gap-1">
                              <Navigation className="h-3 w-3" />
                              {dist.toFixed(1)} mi
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs gap-1">
                            {price.source === "live" ? (
                              <><Globe className="h-3 w-3" /> Live</>
                            ) : (
                              <><Database className="h-3 w-3" /> Local</>
                            )}
                          </Badge>
                          {price.date && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {price.date}
                            </span>
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
                            {price.isDiscounted && (
                              <Badge variant="secondary" className="bg-savings/10 text-savings text-xs">
                                <TrendingDown className="h-3 w-3 mr-1" /> SALE
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {price.price === lowestPrice && (
                            <span className="text-xs font-semibold text-savings">BEST</span>
                          )}
                          <span className={`font-display text-xl font-bold ${
                            price.price === lowestPrice ? "text-savings" : "text-foreground"
                          }`}>
                            ${price.price.toFixed(2)}
                          </span>
                          {price.priceWithoutDiscount && (
                            <span className="text-xs text-muted-foreground line-through">
                              ${price.priceWithoutDiscount.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {isExpanded && fullAddress && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 flex items-start gap-2 rounded-md bg-background/80 px-3 py-2 border text-sm">
                              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{fullAddress}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
        {Object.keys(grouped).length === 0 && search.trim() && !liveLoading && (
          <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
            No items found. Try searching for something else.
          </div>
        )}
        {!search.trim() && (
          <div className="rounded-xl border bg-card p-12 text-center text-muted-foreground">
            Start typing above to search across local stores and live crowdsourced prices.
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-center text-muted-foreground">
        Live prices sourced from <a href="https://prices.openfoodfacts.org" target="_blank" rel="noopener noreferrer" className="underline">Open Prices by Open Food Facts</a> — ODbL license
      </p>
    </div>
  );
};

export default StorePrices;
