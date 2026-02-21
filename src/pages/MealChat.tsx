import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { mockChatHistory, ChatMessage } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockResponses = [
  "Based on what's in your pantry, here's a great budget meal:\n\n**Chicken & Rice Bowl** 🍚\n- Sauté diced chicken breast with onions and bell peppers\n- Season with salt, pepper, and a pinch of cumin\n- Serve over rice with canned black beans on the side\n\n**Cost: ~$2.50 per serving** | Uses 4 pantry items | ~30 min prep",
  "I found some great deals that match your list!\n\n🏷️ **SaveMart** has onions on sale for **$0.99** (3 lb bag) — that's 34% off!\n🏷️ **Walmart** has eggs for **$2.98** per dozen — cheapest in your area\n\nBoth are **SNAP-eligible**. Want me to build a shopping list?",
  "Here's a **3-day meal plan** using mostly what you have:\n\n**Day 1:** Chicken stir-fry with peppers & rice\n**Day 2:** Black bean tacos with tomato salsa (just need tortillas — $1.29 at Walmart)\n**Day 3:** Egg fried rice with leftover veggies\n\n**Total additional cost: ~$3.80** | All SNAP-eligible 🎉",
];

const MealChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const responseIndex = useRef(0);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = mockResponses[responseIndex.current % mockResponses.length];
      responseIndex.current++;
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Meal Planner</h1>
        <p className="mt-1 text-muted-foreground">
          AI-powered meal suggestions based on your pantry & budget
        </p>
      </motion.div>

      <div className="mt-6 flex flex-1 flex-col rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i === messages.length - 1 ? 0.1 : 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                {msg.content.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j}>{part.slice(2, -2)}</strong>
                  ) : (
                    <span key={j}>{part}</span>
                  )
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

        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Ask about meals, budgets, or grocery deals..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!input.trim() || isTyping} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealChat;
