

# NourishAI Feature Expansion Plan

This plan adds six major features to the existing app. All use mock data for the hackathon demo -- no backend required.

---

## 1. Best Price Finder (Enhanced Store Prices)

**What it does:** User types a food item and instantly sees which store in the city has the cheapest price, highlighted clearly.

**Changes:**
- Enhance `StorePrices.tsx` with a prominent "Find Best Price" search bar at the top
- When a user searches, show a hero card with the best result: store name, price, sale/SNAP badges, and savings vs. average
- Expand `mockStorePrices` in `mockData.ts` with more items and stores (Aldi, Costco, Target, etc.)

---

## 2. Budget-Based Meal Finder

**What it does:** User enters a dollar budget (e.g. "$15") and gets a list of meals they can make within that budget, sorted by cost.

**Changes:**
- Create new page `src/pages/BudgetFinder.tsx` with a budget input form
- Add mock meal data (name, ingredients, total cost, servings) to `mockData.ts`
- Filter and display meals that fit under the entered budget, showing cost per serving
- Add route `/budget` and sidebar nav item

---

## 3. Nutritional Info Lookup

**What it does:** User searches for any ingredient or dish and sees calories, protein, carbs, fat, and key vitamins.

**Changes:**
- Create new page `src/pages/Nutrition.tsx` with a search bar
- Add mock nutrition data to `mockData.ts` for common ingredients and dishes
- Display results as a clean card with a macronutrient breakdown (bar chart or badges)
- Add route `/nutrition` and sidebar nav item

---

## 4. AI Meal Planner Chatbot (Enhanced)

**What it does:** Upgrade the existing chat to handle the new scenarios -- budget-based suggestions, "what can I cook with X," cheapest ingredients for a dish, and chef-recommended budget meals.

**Changes:**
- Expand `mockResponses` in `MealChat.tsx` with responses covering:
  - Budget-constrained meal plans
  - "Cook with what you have" suggestions
  - Cheapest ingredient sourcing for a requested dish
  - Chef-recommended simple meals
- Add quick-action chips below the input ("What can I cook?", "Chef picks", "Cheapest ingredients for...")

---

## 5. Inventory Tracker Improvements

**What it does:** Add the ability to actually add new items with a form (name, qty, unit, category, expiry), plus category filter tabs.

**Changes:**
- Add an "Add Item" dialog/modal in `Pantry.tsx` using the existing Dialog component
- Include form fields: name, quantity, unit, category (dropdown), days until expiry
- Add category filter tabs above the table (All, Grains, Protein, Vegetables, etc.)

---

## 6. Community Blog

**What it does:** A blog feed where users can read and post tips about cheap stores, SNAP benefits, and good deals.

**Changes:**
- Create `src/pages/Blog.tsx` with a feed of mock blog posts
- Add mock blog data to `mockData.ts` (title, author, date, content snippet, tags like "SNAP", "Deals", "Budget Tips")
- Include a "New Post" form (title, content, tags)
- Add route `/blog` and sidebar nav item

---

## Navigation Updates

- Add three new items to `AppSidebar.tsx`: Budget Finder, Nutrition, and Blog
- Use appropriate Lucide icons (Wallet, Apple, BookOpen)
- Add corresponding routes in `App.tsx`

---

## Technical Details

| Area | Files Modified | Files Created |
|------|---------------|---------------|
| Mock Data | `src/data/mockData.ts` | -- |
| New Pages | -- | `BudgetFinder.tsx`, `Nutrition.tsx`, `Blog.tsx` |
| Enhanced Pages | `StorePrices.tsx`, `MealChat.tsx`, `Pantry.tsx` | -- |
| Navigation | `AppSidebar.tsx`, `App.tsx` | -- |

All features use local state and mock data -- no backend, no API keys, fully demoable for the hackathon.
