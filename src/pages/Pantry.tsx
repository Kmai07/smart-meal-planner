import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Search } from "lucide-react";
import { mockInventory, InventoryItem } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categoryColors: Record<string, string> = {
  Grains: "bg-secondary text-secondary-foreground",
  Canned: "bg-accent/10 text-accent",
  Protein: "bg-destructive/10 text-destructive",
  Vegetables: "bg-primary/10 text-primary",
  Dairy: "bg-snap/10 text-snap",
};

const categories = ["All", "Grains", "Canned", "Protein", "Vegetables", "Dairy"];

const Pantry = () => {
  const [items, setItems] = useState<InventoryItem[]>(mockInventory);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dialogOpen, setDialogOpen] = useState(false);

  // Add item form state
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newCategory, setNewCategory] = useState("Grains");
  const [newExpiry, setNewExpiry] = useState("");

  const filtered = items
    .filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
    .filter((i) => categoryFilter === "All" || i.category === categoryFilter);

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const addItem = () => {
    if (!newName.trim() || !newQty) return;
    const item: InventoryItem = {
      id: Date.now().toString(),
      name: newName.trim(),
      quantity: parseFloat(newQty),
      unit: newUnit || "pcs",
      category: newCategory,
      expiresIn: newExpiry ? parseInt(newExpiry) : undefined,
    };
    setItems((prev) => [...prev, item]);
    setNewName("");
    setNewQty("");
    setNewUnit("");
    setNewCategory("Grains");
    setNewExpiry("");
    setDialogOpen(false);
  };

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
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-display">Add Pantry Item</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div>
                <Label>Item Name</Label>
                <Input placeholder="e.g. Chicken Breast" value={newName} onChange={(e) => setNewName(e.target.value)} className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Quantity</Label>
                  <Input type="number" min="0" step="0.5" placeholder="e.g. 2" value={newQty} onChange={(e) => setNewQty(e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label>Unit</Label>
                  <Input placeholder="e.g. lbs, pcs, cans" value={newUnit} onChange={(e) => setNewUnit(e.target.value)} className="mt-1" />
                </div>
              </div>
              <div>
                <Label>Category</Label>
                <Select value={newCategory} onValueChange={setNewCategory}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.filter((c) => c !== "All").map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Days Until Expiry (optional)</Label>
                <Input type="number" min="0" placeholder="e.g. 7" value={newExpiry} onChange={(e) => setNewExpiry(e.target.value)} className="mt-1" />
              </div>
              <Button onClick={addItem} disabled={!newName.trim() || !newQty} className="w-full">
                Add to Pantry
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Category filter tabs */}
      <div className="mt-4 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant="secondary"
            className={`cursor-pointer transition-colors ${
              categoryFilter === cat
                ? cat === "All"
                  ? "bg-primary/10 text-primary"
                  : categoryColors[cat] || "bg-primary/10 text-primary"
                : "opacity-60"
            }`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      <motion.div
        className="mt-4 rounded-xl border bg-card shadow-sm"
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
