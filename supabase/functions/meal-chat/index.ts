import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, pantryItems } = await req.json();

    const pantryContext = pantryItems?.length
      ? `The user has these items in their pantry: ${pantryItems.map((i: any) => `${i.name} (${i.quantity} ${i.unit})`).join(", ")}.`
      : "The user's pantry is empty.";

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `You are NourishAI, a friendly budget meal planning assistant. You help users:
- Create meals from what they have in their pantry
- Find budget-friendly meal plans ($5, $10, $15 budgets)
- Suggest chef-quality meals that are simple and cheap
- Provide nutritional info
- Recommend cheapest stores for ingredients
- Help with SNAP-eligible meal planning

${pantryContext}

Keep responses concise with emojis. Use **bold** for key info. Include estimated costs. Format meal suggestions clearly with ingredients and steps.`,
          },
          { role: "user", content: message },
        ],
        max_tokens: 800,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again!";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ reply: "Sorry, something went wrong. Please try again!" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
