import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { products } from '@/db/schema';
import { desc, eq, asc } from 'drizzle-orm';
import type { CategorySlug } from '@/lib/types';

// GET all products with optional category filter
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') as CategorySlug | null;
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    let query = db.select().from(products);
    
    if (category) {
      query = query.where(eq(products.category, category)) as typeof query;
    }

    // Apply sorting
    const orderFn = sortOrder === 'asc' ? asc : desc;
    let result;
    
    switch (sortBy) {
      case 'name':
        result = await query.orderBy(orderFn(products.name));
        break;
      case 'price':
        result = await query.orderBy(orderFn(products.price));
        break;
      case 'stockQuantity':
        result = await query.orderBy(orderFn(products.stockQuantity));
        break;
      default:
        result = await query.orderBy(orderFn(products.createdAt));
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, description, category, priceCode, price, stockQuantity, comments, imageUrl } = body;

    // Validate required fields
    if (!name || !description || !category || !priceCode || price === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProduct = await db.insert(products).values({
      name,
      description,
      category,
      priceCode,
      price: String(price),
      stockQuantity: stockQuantity || 0,
      comments: comments || '',
      imageUrl: imageUrl || null,
    }).returning();

    return NextResponse.json({ success: true, data: newProduct[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
