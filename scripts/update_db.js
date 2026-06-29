const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Parse .env manually
const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join('=').trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY; // Use service role to bypass RLS policies

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  console.log("Updating site_settings...");
  const { error: settingsError } = await supabase
    .from('site_settings')
    .update({
      hero_primary_text: "Graphic & UI/UX Designer - Product Designer crafting user experiences that increase conversion and simplify complex workflows.",
      hero_secondary_text: "Designing intuitive digital products through research, strategy, and collaboration.",
      contact_title: "Let's build something meaningful together.",
      contact_intro_text: "Let's chat over ideas, design, or coffee."
    })
    .eq('id', 1);

  if (settingsError) {
    console.error("Error updating site_settings:", settingsError);
  } else {
    console.log("Successfully updated site_settings!");
  }

  console.log("Updating designs table names...");
  const designUpdates = [
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "Product Design" },
    { id: 3, name: "Marketing Design" }
  ];

  for (const design of designUpdates) {
    const { error: designError } = await supabase
      .from('designs')
      .update({ name: design.name })
      .eq('id', design.id);
    
    if (designError) {
      console.error(`Error updating design ${design.id}:`, designError);
    } else {
      console.log(`Successfully updated design ${design.id} name to ${design.name}!`);
    }
  }

  console.log("Database update sequence finished.");
}

run();
