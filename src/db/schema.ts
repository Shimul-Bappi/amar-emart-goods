import { pgTable, serial, varchar, text, decimal, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// Define category enum for the 6 predefined categories
export const categoryEnum = pgEnum('category', [
  'art_crafts',
  'stationery_education',
  'fashion_clothing',
  'beauty_personal_care',
  'daily_grocery_snacks',
  'electronics_computers'
]);

// Products table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  category: categoryEnum('category').notNull(),
  priceCode: varchar('price_code', { length: 100 }).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  stockQuantity: integer('stock_quantity').notNull().default(0),
  comments: text('comments'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Type exports for TypeScript
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

// Category display mapping
export const categoryDisplayNames: Record<string, string> = {
  'art_crafts': 'Art & Crafts',
  'stationery_education': 'Stationery & Education',
  'fashion_clothing': 'Fashion & Clothing',
  'beauty_personal_care': 'Beauty & Personal Care',
  'daily_grocery_snacks': 'Daily Grocery & Snacks',
  'electronics_computers': 'Electronics & Computers',
};

export const categoryIcons: Record<string, string> = {
  'art_crafts': '🎨',
  'stationery_education': '📚',
  'fashion_clothing': '👗',
  'beauty_personal_care': '💄',
  'daily_grocery_snacks': '🛒',
  'electronics_computers': '💻',
};
