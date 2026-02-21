import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpDown } from "lucide-react";
import { mockStorePrices } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const StorePrices = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = mockStorePrices
    .filter(
      (p) =>
        p.item.toLowerCase().includes(search.toLowerCase()) ||
        p.store.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));

  // Group by item
  const grouped = filtered.reduce<Record<string, typeof mockStorePrices>>((acc, p) => {
    (acc[p.item] = acc[p.item] || []).push(p);
    return acc;
  }, {});

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Store Prices</h1>
        <p className="mt-1 text-muted-foreground">Compare grocery prices & find the best deals</p>
      </motion.div>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search items or stores..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
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
                {prices.map((price, j) => (
                  <div
                    key={j}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      price.price === lowestPrice
                        ? "bg-savings/10 border border-savings/20"
                        : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{price.store}</span>
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
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StorePrices;
