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

    const apiKey = Deno.env.get('TRELLO_API_KEY') || '';
    const apiToken = Deno.env.get('TRELLO_API_TOKEN') || '';
    console.log('API Key length:', apiKey.length, 'first 4 chars:', apiKey.substring(0, 4));
    console.log('Token length:', apiToken.length, 'first 4 chars:', apiToken.substring(0, 4));

    // Get the first list on the board
    const boardId = 'Q1YIV2qk';
    const listsUrl = `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`;
    console.log('Fetching lists from board:', boardId);
    const listsRes = await fetch(listsUrl);
    const listsText = await listsRes.text();
    console.log('Lists response status:', listsRes.status, 'body:', listsText);
    if (!listsRes.ok) {
      return new Response(JSON.stringify({ error: `Trello API error: ${listsText}` }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const lists = JSON.parse(listsText);
    console.log('Found lists:', lists.length);
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

    if (!cardRes.ok) {
      const errText = await cardRes.text();
      console.error('Trello card error:', cardRes.status, errText);
      return new Response(JSON.stringify({ error: `Trello card error: ${errText}` }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

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
