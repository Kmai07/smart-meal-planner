import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Search } from "lucide-react";
import { mockInventory, InventoryItem } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categoryColors: Record<string, string> = {
  Grains: "bg-secondary text-secondary-foreground",
  Canned: "bg-accent/10 text-accent",
  Protein: "bg-destructive/10 text-destructive",
  Vegetables: "bg-primary/10 text-primary",
  Dairy: "bg-snap/10 text-snap",
};

const Pantry = () => {
  const [items, setItems] = useState<InventoryItem[]>(mockInventory);
  const [search, setSearch] = useState("");

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">My Pantry</h1>
        <p className="mt-1 text-muted-foreground">Track what you have at home</p>
      </motion.div>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add Item
        </Button>
      </div>

      <motion.div
        className="mt-6 rounded-xl border bg-card shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 border-b px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span>Item</span>
          <span>Qty</span>
          <span>Category</span>
          <span>Expires</span>
          <span />
        </div>
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-4 border-b px-6 py-4 last:border-0 hover:bg-muted/30 transition-colors"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-sm text-muted-foreground">
              {item.quantity} {item.unit}
            </span>
            <Badge variant="secondary" className={categoryColors[item.category] || ""}>
              {item.category}
            </Badge>
            <span className={`text-sm font-medium ${
              (item.expiresIn ?? 999) <= 5 ? "text-destructive" : "text-muted-foreground"
            }`}>
              {item.expiresIn ? `${item.expiresIn}d` : "—"}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="px-6 py-12 text-center text-muted-foreground">
            No items found.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Pantry;
