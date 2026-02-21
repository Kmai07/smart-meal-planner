import { Package, MessageSquare, ShoppingCart, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Package, label: "My Pantry", path: "/pantry" },
  { icon: MessageSquare, label: "Meal Planner", path: "/chat" },
  { icon: ShoppingCart, label: "Store Prices", path: "/prices" },
];

const AppSidebar = () => {
  const location = useLocation();

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

      <div className="mx-3 mb-4 rounded-lg bg-sidebar-accent p-4">
        <p className="text-xs font-semibold text-sidebar-primary">SNAP Budget</p>
        <p className="mt-1 font-display text-2xl font-bold text-sidebar-primary-foreground">$142.50</p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sidebar-border">
          <div className="h-full w-3/5 rounded-full bg-sidebar-primary transition-all" />
        </div>
        <p className="mt-1 text-xs text-sidebar-foreground/60">$85.50 of $228 used this month</p>
      </div>
    </aside>
  );
};

export default AppSidebar;
