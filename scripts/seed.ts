/**
 * Amar eMart Goods — Data Server Seed Script
 *
 * Populates the products table with realistic sample inventory
 * across all six retail categories, so a fresh data server has
 * something to look at immediately after setup.
 *
 * Usage:
 *   npm run db:seed
 *
 * Safe to re-run: it skips seeding if products already exist,
 * unless run with --force.
 */
import "dotenv/config";
import { db, pool } from "../src/db";
import { products } from "../src/db/schema";
import type { NewProduct } from "../src/db/schema";

const sampleProducts: NewProduct[] = [
  // Art & Crafts
  {
    name: "Acrylic Paint Set (12 Colors)",
    description: "Vibrant, fast-drying acrylic paint set ideal for canvas, wood, and crafts.",
    category: "art_crafts",
    priceCode: "ART-001",
    price: "450.00",
    stockQuantity: 24,
    comments: "Restock every 2 weeks from Dhaka wholesale market.",
    imageUrl: null,
  },
  {
    name: "Canvas Board 12x16 inch",
    description: "Pre-stretched cotton canvas board, ready to paint.",
    category: "art_crafts",
    priceCode: "ART-002",
    price: "220.00",
    stockQuantity: 6,
    comments: "Low stock — reorder soon.",
    imageUrl: null,
  },

  // Stationery & Education
  {
    name: "Spiral Notebook (200 pages)",
    description: "A4 ruled spiral notebook, durable cover, ideal for students.",
    category: "stationery_education",
    priceCode: "STA-001",
    price: "80.00",
    stockQuantity: 120,
    comments: "Popular during school reopening season.",
    imageUrl: null,
  },
  {
    name: "Geometry Box Set",
    description: "Complete geometry set with compass, protractor, and scale.",
    category: "stationery_education",
    priceCode: "STA-002",
    price: "150.00",
    stockQuantity: 35,
    comments: "",
    imageUrl: null,
  },

  // Fashion & Clothing
  {
    name: "Cotton Panjabi (Men's, White)",
    description: "Comfortable cotton panjabi, sizes M-XXL available.",
    category: "fashion_clothing",
    priceCode: "FAS-001",
    price: "1200.00",
    stockQuantity: 18,
    comments: "Best seller for Eid and festive season.",
    imageUrl: null,
  },
  {
    name: "Women's Printed Saree",
    description: "Lightweight printed cotton saree with matching blouse piece.",
    category: "fashion_clothing",
    priceCode: "FAS-002",
    price: "1850.00",
    stockQuantity: 0,
    comments: "Currently out of stock, awaiting new shipment.",
    imageUrl: null,
  },

  // Beauty & Personal Care
  {
    name: "Herbal Face Wash 100ml",
    description: "Gentle daily face wash with neem and tea tree extract.",
    category: "beauty_personal_care",
    priceCode: "BEA-001",
    price: "180.00",
    stockQuantity: 42,
    comments: "",
    imageUrl: null,
  },
  {
    name: "Sunscreen Lotion SPF 50",
    description: "Broad spectrum sun protection, non-greasy formula.",
    category: "beauty_personal_care",
    priceCode: "BEA-002",
    price: "320.00",
    stockQuantity: 9,
    comments: "Restock threshold is 10 units.",
    imageUrl: null,
  },

  // Daily Grocery & Snacks
  {
    name: "Basmati Rice 5kg",
    description: "Premium long-grain basmati rice, 5kg pack.",
    category: "daily_grocery_snacks",
    priceCode: "GRO-001",
    price: "650.00",
    stockQuantity: 60,
    comments: "High turnover item, check weekly.",
    imageUrl: null,
  },
  {
    name: "Mixed Nuts Snack Pack (200g)",
    description: "Roasted and lightly salted mixed nuts, resealable pack.",
    category: "daily_grocery_snacks",
    priceCode: "GRO-002",
    price: "260.00",
    stockQuantity: 15,
    comments: "",
    imageUrl: null,
  },

  // Electronics & Computers
  {
    name: "USB-C Cable 1m",
    description: "Durable braided USB-C charging and data cable.",
    category: "electronics_computers",
    priceCode: "ELE-001",
    price: "150.00",
    stockQuantity: 0,
    comments: "Out of stock — high demand item.",
    imageUrl: null,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic 2.4GHz wireless mouse with USB receiver.",
    category: "electronics_computers",
    priceCode: "ELE-002",
    price: "550.00",
    stockQuantity: 22,
    comments: "",
    imageUrl: null,
  },
];

async function seed() {
  const force = process.argv.includes("--force");

  const existing = await db.select().from(products).limit(1);
  if (existing.length > 0 && !force) {
    console.log(
      "Products table already has data. Skipping seed. Use `npm run db:seed -- --force` to seed anyway."
    );
    await pool.end();
    return;
  }

  console.log(`Seeding ${sampleProducts.length} sample products...`);
  await db.insert(products).values(sampleProducts);
  console.log("✅ Seed complete.");
  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
