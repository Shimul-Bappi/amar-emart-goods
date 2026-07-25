# 🛒 Amar eMart Goods — Product Catalog & Inventory Manager

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.0-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![CI](https://github.com/Shimul-Bappi/amar-emart-goods/actions/workflows/ci.yml/badge.svg)](https://github.com/Shimul-Bappi/amar-emart-goods/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

**Amar eMart Goods** is a custom mobile-first product catalog and inventory management application designed specifically for small to medium retail and e-commerce businesses.

It streamlines inventory tracking by enabling business owners to quickly capture product photos via device camera or gallery, select from 6 standardized retail categories, and automatically catalog stock with real-time valuation and alerts.

---

## 🌟 Key Features & Highlights

- **⚡ Fast Category-First Workflow:** Jumpstart product entry by selecting one of 6 predefined retail categories with auto-populated form defaults.
- **📸 Device Camera & Photo Upload:** Zero-latency photo capture using HTML5 MediaDevices / native device cameras or drag-and-drop file upload.
- **📦 Live Inventory Dashboard:** Real-time stock counts, total financial inventory valuation ($/৳), low-stock warnings (≤10 qty), and out-of-stock indicators.
- **🔍 Instant Search & Filtering:** Horizontal scrolling category filters with real-time text query search across product names, SKUs, and descriptions.
- **📱 Mobile-First Responsive UI:** Designed with touch ergonomics (large >44px tap targets, swipe-friendly navigation, safe-area padding).
- **📋 Built-in Tech Specs & Mobile Roadmap:** Includes interactive Technical Specifications (`/docs`) and a native iOS/Android App Store Readiness Dashboard (`/mobile`) directly inside the app.
- **🌐 Progressive Web App (PWA):** Fully installable to iPhone/Android home screens without going through App Store review.
- **📱 Native Mobile Ready (Capacitor 7):** Pre-configured to compile into native `.ipa` (iOS) and `.apk/.aab` (Android) binaries.
- **🗄️ One-Command Data Server:** A dockerized PostgreSQL data server (with an Adminer admin UI) spins up locally with a single command — no manual database installation required.
- **🌱 Sample Data Seeder:** A ready-made seed script populates the catalog with realistic sample products across all six categories for instant testing.

---

## 🏷️ Standardized Retail Categories (Exact Match)

1. **🎨 Art & Crafts** (`art_crafts`)
2. **📚 Stationery & Education** (`stationery_education`)
3. **👗 Fashion & Clothing** (`fashion_clothing`)
4. **💄 Beauty & Personal Care** (`beauty_personal_care`)
5. **🛒 Daily Grocery & Snacks** (`daily_grocery_snacks`)
6. **💻 Electronics & Computers** (`electronics_computers`)

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Fullstack React framework with serverless API route handlers |
| **UI Library** | React 19 & TypeScript | Type-safe modern component architecture |
| **Styling** | Tailwind CSS 4 | Utility-first responsive design system with custom animations |
| **Database** | PostgreSQL | Relational SQL database for robust transactional storage |
| **ORM** | Drizzle ORM | Type-safe database query builder and schema management |
| **Mobile Runtime**| Capacitor 7 | Native iOS/Android SDK bridge with camera hardware plugins |
| **PWA** | Web App Manifest | Standalone offline-capable web installation support |
| **Data Server** | Docker Compose (Postgres + Adminer) | Self-contained, one-command local data server for development |
| **CI** | GitHub Actions | Lint, type-check, schema push, and build on every push/PR |

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Shimul-Bappi/amar-emart-goods.git
cd amar-emart-goods
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
cp .env.example .env
```
The default values already match the Docker data server below, so no edits are required for local development.

### 4. Start the Data Server
The easiest way to get a working PostgreSQL database is to launch the included Docker Compose stack (see [🗄️ Data Server](#️-data-server-postgresql-via-docker) below):
```bash
npm run docker:up
```

Alternatively, point `DATABASE_URL` in `.env` at any PostgreSQL instance you already have (local install, Supabase, Neon, Railway, RDS, etc.), then push the schema:
```bash
npm run db:push
```

### 5. (Optional) Seed Sample Data
```bash
npm run db:seed
```
This adds a couple of realistic sample products to each of the six categories so the app isn't empty on first run.

### 6. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application!

---

## 🗄️ Data Server (PostgreSQL via Docker)

This project ships with a self-contained **data server** — a `docker-compose.yml` stack that runs PostgreSQL (the actual data store) plus [Adminer](https://www.adminer.org/) (a lightweight web UI for browsing/editing rows) without needing to install Postgres on your machine.

### Start the data server
```bash
npm run docker:up
```
This starts three containers:

| Service | Container | Purpose | Default URL |
| :--- | :--- | :--- | :--- |
| `db` | `amar-emart-db` | PostgreSQL 16 data server — persists all product data to a named Docker volume | `localhost:5432` |
| `adminer` | `amar-emart-adminer` | Web-based database browser (System: `PostgreSQL`, Server: `db`, credentials from `.env`) | [http://localhost:8080](http://localhost:8080) |
| `app` | `amar-emart-app` | The Next.js app itself, built from the included `Dockerfile`, wired to talk to `db` automatically | [http://localhost:3000](http://localhost:3000) |

> 💡 If you'd rather run the Next.js app on your host machine with `npm run dev` (recommended for active development, since it supports hot reload), just leave the `app` service running or stop it with `docker compose stop app` — the `db` and `adminer` services are all you need.

On first boot, the `db` container automatically executes [`database/init/001_schema.sql`](database/init/001_schema.sql), which provisions the `products` table and category enum — no manual migration step required for a brand-new data server. If you change `src/db/schema.ts` later, keep it in sync by either:
- running `npm run db:push` (Drizzle applies the diff directly), or
- updating `database/init/001_schema.sql` to match (only affects brand-new data servers, since the init script only runs once per volume).

### Useful data server commands
```bash
npm run docker:up      # start db + adminer + app in the background
npm run docker:logs    # tail logs from all containers
npm run docker:down    # stop containers (data is preserved)
npm run docker:reset   # stop containers AND wipe the database volume (fresh start)
```

### Connecting to the data server directly
```bash
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/app_db"
```
Use this same URL with `psql`, a GUI client like TablePlus/DBeaver, or Drizzle Studio:
```bash
npm run db:studio
```

---

## 📱 How to Build & Deploy as a Native Mobile App

This project is pre-configured with **Capacitor 7** for seamless iOS and Android compilation.

### Step 1: Build the Web Bundle
```bash
npm run build
```

### Step 2: Add Native iOS & Android Platforms
```bash
npx cap add ios
npx cap add android
```

### Step 3: Sync Assets & Open in Native IDE
```bash
npx cap sync

# To open Xcode for Apple App Store submission (macOS required):
npx cap open ios

# To open Android Studio for Google Play Store APK/AAB creation:
npx cap open android
```

For a detailed walkthrough of Xcode `Info.plist` camera usage descriptions, Android permissions, and Store submission checklists, launch the app and navigate to **[http://localhost:3000/mobile](http://localhost:3000/mobile)**.

---

## 🔌 API Reference

The app includes full RESTful endpoints under `/api/products`:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Retrieve all products (supports `?category=slug`, `?sortBy=field`, `?sortOrder=asc/desc`) |
| `POST` | `/api/products` | Create a new catalog item |
| `GET` | `/api/products/:id` | Get details of a single product |
| `PUT` | `/api/products/:id` | Update an existing product |
| `DELETE` | `/api/products/:id` | Permanently remove a product from inventory |

---

## 📤 Pushing Updates to GitHub

This repository already lives at [github.com/Shimul-Bappi/amar-emart-goods](https://github.com/Shimul-Bappi/amar-emart-goods). To push further changes:

```bash
git add .
git commit -m "feat: add dockerized data server, seed script, and CI"
git push origin main
```

If you're setting this up as a brand-new repository elsewhere:
```bash
git init -b main
git add .
git commit -m "feat: initial commit of Amar eMart Goods fullstack inventory app"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### Deploying to production

The `db` service in `docker-compose.yml` is intended for **local development**. For production, point `DATABASE_URL` at a managed Postgres provider (Supabase, Neon, Railway, AWS RDS) and deploy the Next.js app itself to Vercel, a VM, or by building the included `Dockerfile` on any container host.

---

## 📁 Project Structure

```
amar-emart-goods/
├── docker-compose.yml         ← Data server stack (Postgres + Adminer + app)
├── Dockerfile                 ← Production container build for the Next.js app
├── database/
│   └── init/001_schema.sql    ← Auto-run schema for a fresh data server
├── scripts/
│   └── seed.ts                ← Sample data seeder
├── src/
│   ├── app/
│   │   ├── api/products/      ← REST API (GET/POST/PUT/DELETE)
│   │   ├── docs/               ← In-app technical specification viewer
│   │   ├── mobile/             ← In-app native launch/store-readiness guide
│   │   └── page.tsx            ← Main dashboard/product-list UI
│   ├── components/             ← Product form, list, dashboard, UI primitives
│   ├── db/                     ← Drizzle schema + connection pool
│   └── lib/types.ts            ← Shared TypeScript types & category metadata
├── public/                     ← PWA icons, manifest, robots.txt
└── .github/workflows/ci.yml    ← Lint, type-check, schema push, build on every push
```

---

## 📄 License

This project is licensed under the MIT License. Built with ❤️ for retail entrepreneurs and e-commerce managers.
