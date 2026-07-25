-- ============================================================
-- Amar eMart Goods — Data Server Schema
-- Auto-executed by the PostgreSQL container on first startup
-- (mounted at /docker-entrypoint-initdb.d via docker-compose.yml)
--
-- Mirrors src/db/schema.ts (Drizzle ORM). If you change the
-- Drizzle schema, update this file to match, or simply run
-- `npx drizzle-kit push` against the running data server instead.
-- ============================================================

CREATE TYPE category AS ENUM (
  'art_crafts',
  'stationery_education',
  'fashion_clothing',
  'beauty_personal_care',
  'daily_grocery_snacks',
  'electronics_computers'
);

CREATE TABLE IF NOT EXISTS products (
  id                SERIAL PRIMARY KEY,
  name              VARCHAR(255) NOT NULL,
  description        TEXT NOT NULL,
  category          category NOT NULL,
  price_code        VARCHAR(100) NOT NULL,
  price             DECIMAL(10, 2) NOT NULL,
  stock_quantity    INTEGER NOT NULL DEFAULT 0,
  comments          TEXT,
  image_url         TEXT,
  created_at        TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
