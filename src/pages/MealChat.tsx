import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickActions = [
  { label: "🍳 What can I cook?", message: "What can I cook with what I have in my pantry?" },
  { label: "👨‍🍳 Chef picks", message: "Show me chef-recommended budget meals" },
  { label: "💰 $5 meal plan", message: "What meals can I make with a $5 budget?" },
  { label: "🔍 Cheapest for...", message: "Find the cheapest ingredients for chicken stir-fry" },
];

const MealChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "👋 Hi! I'm your **Smart Meal Planner**. I can help you create budget-friendly meals from what's already in your pantry, find the best grocery deals, and make sure everything fits your dietary needs and SNAP budget.\n\nWhat would you like help with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = text || input;
    if (!msg.trim() || isTyping) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // Fetch pantry items for context
      const { data: pantryItems } = await supabase.from("pantry_items").select("name, quantity, unit");

      const { data, error } = await supabase.functions.invoke("meal-chat", {
        body: { message: msg, pantryItems: pantryItems || [] },
      });

      const reply = error ? "Sorry, I couldn't respond right now. Please try again!" : data.reply;
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    }
    setIsTyping(false);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Meal Planner</h1>
        <p className="mt-1 text-muted-foreground">AI-powered meal suggestions based on your pantry & budget</p>
      </motion.div>

      <div className="mt-6 flex flex-1 flex-col rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i === messages.length - 1 ? 0.1 : 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md"}`}>
                {msg.content.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? <strong key={j}>{part.slice(2, -2)}</strong> : <span key={j}>{part}</span>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm text-muted-foreground">
                <span className="animate-pulse">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="border-t p-4 space-y-3">
          <div className="flex gap-2 flex-wrap">
            {quickActions.map((action) => (
              <button key={action.label} onClick={() => sendMessage(action.message)} disabled={isTyping} className="rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30 disabled:opacity-50">
                {action.label}
              </button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
            <Input placeholder="Ask about meals, budgets, or grocery deals..." value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" />
            <Button type="submit" disabled={!input.trim() || isTyping} size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealChat;
