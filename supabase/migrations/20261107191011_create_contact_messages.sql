/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the person contacting the club
  - `email` (text, not null) — email address to reply to
  - `phone` (text, nullable) — optional phone number
  - `subject` (text, not null) — subject line of the message
  - `message` (text, not null) — the body of the message
  - `is_read` (boolean, default false) — whether the club has read the message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` + `authenticated` so the public contact form can submit messages.
- Allow anon + authenticated INSERT because contact submissions are intentionally public (no sign-in).
- No SELECT/UPDATE/DELETE grants for anon: only the form writes; reading/managing messages happens server-side.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);
