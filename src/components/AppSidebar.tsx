import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Package, MessageSquare, ShoppingCart, LayoutDashboard, Wallet, Apple, BookOpen, LogOut, MinusCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Package, label: "My Pantry", path: "/pantry" },
  { icon: MessageSquare, label: "Meal Planner", path: "/chat" },
  { icon: ShoppingCart, label: "Best Prices", path: "/prices" },
  { icon: Wallet, label: "Budget Finder", path: "/budget" },
  { icon: Apple, label: "Nutrition", path: "/nutrition" },
  { icon: BookOpen, label: "Community Blog", path: "/blog" },
];

const AppSidebar = () => {
  const location = useLocation();
  const { signOut, user } = useAuth();
  const [snapBalance, setSnapBalance] = useState(75.0);
  const [deductionInput, setDeductionInput] = useState("");

  const handleDeduction = () => {
    const amount = parseFloat(deductionInput);
    if (isNaN(amount) || amount <= 0) return;
    setSnapBalance((prev) => parseFloat((prev - amount).toFixed(2)));
    setDeductionInput("");
  };

  const totalBudget = 75.0;
  const used = parseFloat((totalBudget - snapBalance).toFixed(2));
  const percentRemaining = Math.max(0, snapBalance / totalBudget);

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
          <span className="text-lg font-bold text-sidebar-primary-foreground">🥗</span>
        </div>
        <div>
          <h1 className="font-display text-lg font-bold text-sidebar-primary">NourishAI</h1>
          <p className="text-xs text-sidebar-foreground/60">Smart Meal Planning</p>
        </div>
      </div>

      <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mx-3 mb-2 rounded-lg bg-sidebar-accent p-4">
        <p className="text-xs font-semibold text-sidebar-primary">SNAP Budget</p>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-xs text-sidebar-foreground/60">$</span>
          <Input
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={deductionInput}
            onChange={(e) => setDeductionInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleDeduction()}
            className="h-7 w-full bg-sidebar-border/50 text-xs border-sidebar-border"
          />
          <button
            onClick={handleDeduction}
            className="flex shrink-0 items-center gap-1 rounded-md bg-sidebar-primary px-2.5 py-1.5 text-xs font-medium text-sidebar-primary-foreground hover:bg-sidebar-primary/90 transition-colors"
          >
            <MinusCircle className="h-3 w-3" />
            Deduct
          </button>
        </div>
        <p className="mt-1 font-display text-2xl font-bold text-sidebar-primary-foreground">
          ${snapBalance.toFixed(2)}
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sidebar-border">
          <div
            className="h-full rounded-full bg-sidebar-primary transition-all"
            style={{ width: `${percentRemaining * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-sidebar-foreground/60">
          ${used.toFixed(2)} of ${totalBudget.toFixed(2)} used
        </p>
        {snapBalance < 0 && (
          <p className="mt-2 text-xs font-semibold text-destructive">
            ⚠️ Insufficient SNAP Funds
          </p>
        )}
      </div>

      <div className="mx-3 mb-4">
        <button
          onClick={signOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
        {user && (
          <p className="px-3 mt-1 text-xs text-sidebar-foreground/50 truncate">{user.email}</p>
        )}
      </div>
    </aside>
  );
};

export default AppSidebar;
