import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Leaf, DollarSign } from "lucide-react";
import { mockInventory, mockStorePrices } from "@/data/mockData";

const statCards = [
  {
    label: "Pantry Items",
    value: "10",
    sub: "3 expiring soon",
    icon: Leaf,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Weekly Budget Left",
    value: "$142.50",
    sub: "60% remaining",
    icon: DollarSign,
    color: "bg-savings/10 text-savings",
  },
  {
    label: "Best Deal Today",
    value: "$0.99",
    sub: "Onions at SaveMart",
    icon: TrendingDown,
    color: "bg-accent/10 text-accent",
  },
  {
    label: "Expiring Soon",
    value: "3",
    sub: "Chicken, Bread, Tomatoes",
    icon: AlertTriangle,
    color: "bg-warning/10 text-warning",
  },
];

const Dashboard = () => {
  const expiringItems = mockInventory
    .filter((i) => i.expiresIn !== undefined && i.expiresIn <= 5)
    .sort((a, b) => (a.expiresIn ?? 0) - (b.expiresIn ?? 0));

  const bestDeals = mockStorePrices
    .filter((p) => p.onSale)
    .sort((a, b) => a.price - b.price);

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl font-bold">Good morning 👋</h1>
        <p className="mt-1 text-muted-foreground">Here's your kitchen overview for today.</p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{card.label}</span>
              <div className={`rounded-lg p-2 ${card.color}`}>
                <card.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 font-display text-2xl font-bold">{card.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Expiring Soon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.35 }}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <h2 className="font-display text-lg font-semibold">⏰ Expiring Soon</h2>
          <p className="mb-4 text-sm text-muted-foreground">Use these up first to reduce waste</p>
          <div className="space-y-3">
            {expiringItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.quantity} {item.unit}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  (item.expiresIn ?? 0) <= 3
                    ? "bg-destructive/10 text-destructive"
                    : "bg-warning/10 text-warning"
                }`}>
                  {item.expiresIn}d left
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Deals */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <h2 className="font-display text-lg font-semibold">🏷️ Best Deals Right Now</h2>
          <p className="mb-4 text-sm text-muted-foreground">SNAP-eligible items on sale near you</p>
          <div className="space-y-3">
            {bestDeals.map((deal, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <div>
                  <p className="font-medium">{deal.item}</p>
                  <p className="text-xs text-muted-foreground">{deal.store}</p>
                </div>
                <div className="flex items-center gap-2">
                  {deal.snapEligible && (
                    <span className="rounded-full bg-snap/10 px-2 py-0.5 text-xs font-semibold text-snap">
                      SNAP
                    </span>
                  )}
                  <span className="font-display text-lg font-bold text-savings">
                    ${deal.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
