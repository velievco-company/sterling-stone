const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    const apiKey = Deno.env.get('TRELLO_API_KEY')!;
    const apiToken = Deno.env.get('TRELLO_API_TOKEN')!;

    // Get the first list on the board
    const listsRes = await fetch(
      `https://api.trello.com/1/boards/Q1YIV2qk/lists?key=${apiKey}&token=${apiToken}`
    );
    const lists = await listsRes.json();
    const listId = lists[0]?.id;

    if (!listId) {
      return new Response(JSON.stringify({ error: 'No list found on board' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create card
    const cardRes = await fetch(
      `https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idList: listId,
          name: `${subject} — ${name}`,
          desc: `**Name:** ${name}\n**Email:** ${email}\n**Subject:** ${subject}\n\n${message}`,
        }),
      }
    );

    const card = await cardRes.json();

    return new Response(JSON.stringify({ success: true, cardId: card.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
