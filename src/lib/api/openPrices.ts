import { supabase } from "@/integrations/supabase/client";

export interface OpenPrice {
  id: number;
  productName: string;
  productCode: string;
  price: number;
  currency: string;
  date: string;
  isDiscounted: boolean;
  priceWithoutDiscount: number | null;
  discountType: string | null;
  storeName: string;
  storeCity: string;
  storeCountry: string;
  storeLat: number | null;
  storeLon: number | null;
  productImage: string | null;
  brands: string | null;
  categories: string[];
}

interface OpenPricesResponse {
  success: boolean;
  error?: string;
  data?: OpenPrice[];
  total?: number;
  page?: number;
  pages?: number;
}

export async function searchOpenPrices(
  query: string,
  options?: { currency?: string; page_size?: number; page?: number }
): Promise<OpenPricesResponse> {
  const { data, error } = await supabase.functions.invoke("open-prices", {
    body: {
      action: "search_prices",
      query,
      currency: options?.currency || "USD",
      page_size: options?.page_size || 20,
      page: options?.page || 1,
      order_by: "-date",
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return data;
}
