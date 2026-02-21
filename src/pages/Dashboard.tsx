import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Leaf, DollarSign, BookOpen, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { mockStorePrices } from "@/data/mockData";

const Dashboard = () => {
  const { user } = useAuth();

  const { data: pantryItems = [], isLoading: pantryLoading } = useQuery({
    queryKey: ["pantry-dashboard", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pantry_items")
        .select("*")
        .eq("user_id", user!.id)
        .order("expires_in", { ascending: true, nullsFirst: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: blogPosts = [], isLoading: blogLoading } = useQuery({
    queryKey: ["blog-dashboard", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["profile-dashboard", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const isLoading = pantryLoading || blogLoading || profileLoading;

  const expiringItems = pantryItems.filter((i) => i.expires_in !== null && i.expires_in <= 5);
  const totalPantryItems = pantryItems.length;
  const expiringSoonCount = expiringItems.length;

  const bestDeals = mockStorePrices
    .filter((p) => p.onSale)
    .sort((a, b) => a.price - b.price)
    .slice(0, 5);

  const displayName = profile?.display_name || user?.email?.split("@")[0] || "there";

  const statCards = [
    {
      label: "Pantry Items",
      value: String(totalPantryItems),
      sub: `${expiringSoonCount} expiring soon`,
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
      value: bestDeals.length > 0 ? `$${bestDeals[0].price.toFixed(2)}` : "—",
      sub: bestDeals.length > 0 ? `${bestDeals[0].item.split("(")[0].trim()} at ${bestDeals[0].store}` : "No deals",
      icon: TrendingDown,
      color: "bg-accent/10 text-accent",
    },
    {
      label: "Blog Posts",
      value: String(blogPosts.length),
      sub: blogPosts.length > 0 ? `Latest: ${blogPosts[0].title.slice(0, 20)}…` : "No posts yet",
      icon: BookOpen,
      color: "bg-warning/10 text-warning",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl font-bold">Good morning, {displayName} 👋</h1>
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
            {expiringItems.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">No items expiring soon. Add items to your pantry!</p>
            ) : (
              expiringItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity} {item.unit}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    (item.expires_in ?? 0) <= 3
                      ? "bg-destructive/10 text-destructive"
                      : "bg-warning/10 text-warning"
                  }`}>
                    {item.expires_in}d left
                  </span>
                </div>
              ))
            )}
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
