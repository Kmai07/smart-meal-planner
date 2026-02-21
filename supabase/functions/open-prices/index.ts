const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const OPEN_PRICES_BASE = 'https://prices.openfoodfacts.org/api/v1';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, query, currency, page_size, page, order_by, category_tag } = await req.json();

    if (!action) {
      return new Response(
        JSON.stringify({ success: false, error: 'Action is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let url: string;

    if (action === 'search_prices') {
      // Search for prices by product name
      const params = new URLSearchParams();
      if (query) params.set('product_name__like', query);
      if (currency) params.set('currency', currency);
      params.set('page_size', String(page_size || 20));
      params.set('page', String(page || 1));
      params.set('order_by', order_by || '-date');
      
      url = `${OPEN_PRICES_BASE}/prices?${params.toString()}`;
    } else if (action === 'search_products') {
      // Search for products
      const params = new URLSearchParams();
      if (query) params.set('product_name__like', query);
      params.set('source', 'off');
      params.set('page_size', String(page_size || 20));
      params.set('page', String(page || 1));
      
      url = `${OPEN_PRICES_BASE}/products?${params.toString()}`;
    } else if (action === 'get_locations') {
      // Get store locations
      const params = new URLSearchParams();
      params.set('osm_address_country_code', 'US');
      params.set('page_size', String(page_size || 20));
      
      url = `${OPEN_PRICES_BASE}/locations?${params.toString()}`;
    } else {
      return new Response(
        JSON.stringify({ success: false, error: `Unknown action: ${action}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Open Prices API request: ${url}`);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'NourishAI/1.0 (contact@nourishai.app)',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Open Prices API error:', errorText);
      return new Response(
        JSON.stringify({ success: false, error: `API error: ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    // Transform the data to a simpler format for the frontend
    if (action === 'search_prices') {
      const prices = (data.items || []).map((item: any) => ({
        id: item.id,
        productName: item.product_name || item.product?.product_name || 'Unknown Product',
        productCode: item.product_code,
        price: item.price,
        currency: item.currency,
        date: item.date,
        isDiscounted: item.price_is_discounted,
        priceWithoutDiscount: item.price_without_discount,
        discountType: item.discount_type,
        storeName: item.location?.osm_name || 'Unknown Store',
        storeCity: item.location?.osm_address_city || '',
        storeCountry: item.location?.osm_address_country || '',
        storeLat: item.location?.osm_lat,
        storeLon: item.location?.osm_lon,
        productImage: item.product?.image_url,
        brands: item.product?.brands,
        categories: item.product?.categories_tags || [],
      }));

      return new Response(
        JSON.stringify({
          success: true,
          data: prices,
          total: data.total,
          page: data.page,
          pages: data.pages,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: data.items, total: data.total }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in open-prices function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
