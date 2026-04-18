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

Troubleshooting:
- If save fails with `23505 duplicate key value violates unique constraint "..._pkey"` on `songs/designs/works/blogs`, your identity sequence is behind existing IDs.
- Run this once in Supabase SQL Editor:

```sql
select setval(
  pg_get_serial_sequence('public.songs', 'id'),
  coalesce((select max(id) from public.songs), 0) + 1,
  false
);
select setval(
  pg_get_serial_sequence('public.designs', 'id'),
  coalesce((select max(id) from public.designs), 0) + 1,
  false
);
select setval(
  pg_get_serial_sequence('public.works', 'id'),
  coalesce((select max(id) from public.works), 0) + 1,
  false
);
select setval(
  pg_get_serial_sequence('public.blogs', 'id'),
  coalesce((select max(id) from public.blogs), 0) + 1,
  false
);
```
