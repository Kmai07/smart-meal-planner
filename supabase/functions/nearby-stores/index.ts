const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const OVERPASS_API = 'https://overpass-api.de/api/interpreter';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { lat, lng, radius } = await req.json();

    if (!lat || !lng) {
      return new Response(
        JSON.stringify({ success: false, error: 'lat and lng are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const searchRadius = radius || 8000; // default 8km (~5 miles)

    // Query Overpass API for grocery stores, supermarkets, convenience stores, Target, Walmart nearby
    const query = `
      [out:json][timeout:15];
      (
        node["shop"="supermarket"](around:${searchRadius},${lat},${lng});
        node["shop"="grocery"](around:${searchRadius},${lat},${lng});
        node["shop"="convenience"](around:${searchRadius},${lat},${lng});
        node["shop"="greengrocer"](around:${searchRadius},${lat},${lng});
        node["shop"="wholesale"](around:${searchRadius},${lat},${lng});
        node["shop"="department_store"]["brand"~"Target|Walmart"](around:${searchRadius},${lat},${lng});
        way["shop"="supermarket"](around:${searchRadius},${lat},${lng});
        way["shop"="grocery"](around:${searchRadius},${lat},${lng});
        way["shop"="department_store"]["brand"~"Target|Walmart"](around:${searchRadius},${lat},${lng});
      );
      out center body 40;
    `;

    console.log(`Overpass query for lat=${lat}, lng=${lng}, radius=${searchRadius}`);

    const response = await fetch(OVERPASS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(query)}`,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Overpass API error:', errorText);
      return new Response(
        JSON.stringify({ success: false, error: `Overpass API error: ${response.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    const stores = (data.elements || [])
      .map((el: any) => {
        const storeLat = el.lat ?? el.center?.lat;
        const storeLng = el.lon ?? el.center?.lon;
        const tags = el.tags || {};
        const name = tags.name || tags['brand'] || tags['operator'] || 'Unnamed Store';

        // Build address from OSM tags
        const addressParts = [
          tags['addr:housenumber'],
          tags['addr:street'],
        ].filter(Boolean);
        const cityParts = [
          tags['addr:city'],
          tags['addr:state'],
          tags['addr:postcode'],
        ].filter(Boolean);

        const address = addressParts.length > 0
          ? `${addressParts.join(' ')}${cityParts.length > 0 ? ', ' + cityParts.join(' ') : ''}`
          : cityParts.length > 0
            ? cityParts.join(', ')
            : '';

        return {
          name,
          lat: storeLat,
          lng: storeLng,
          address,
          type: tags.shop || 'store',
          brand: tags.brand || null,
          openingHours: tags.opening_hours || null,
        };
      })
      .filter((s: any) => s.lat && s.lng && s.name !== 'Unnamed Store');

    return new Response(
      JSON.stringify({ success: true, data: stores, total: stores.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in nearby-stores function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
