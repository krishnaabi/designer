# Supabase Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run [`supabase/schema.sql`](/c:/Users/HONEY%20-%20008%20-%20HTS100/Documents/Development/designer/supabase/schema.sql).
3. Copy `.env.example` to `.env.local` and fill:
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and optionally `ADMIN_PANEL_PASSWORD`.
4. Start the app with `npm run dev`.
5. Open `/admin`, load data, update sections, upload files, and click "Save All Changes".

Notes:
- If Supabase env vars are missing, the site falls back to local default content.
- Uploads are stored in the public bucket `portfolio-assets`.
