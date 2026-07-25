// Category type definition
export type CategorySlug = 
  | 'art_crafts'
  | 'stationery_education'
  | 'fashion_clothing'
  | 'beauty_personal_care'
  | 'daily_grocery_snacks'
  | 'electronics_computers';

// Product form data
export interface ProductFormData {
  name: string;
  description: string;
  category: CategorySlug;
  priceCode: string;
  price: string;
  stockQuantity: number;
  comments: string;
  imageUrl: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Category info for UI
export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const categories: CategoryInfo[] = [
  { 
    slug: 'art_crafts', 
    name: 'Art & Crafts', 
    icon: '🎨',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
  },
  { 
    slug: 'stationery_education', 
    name: 'Stationery & Education', 
    icon: '📚',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
  },
  { 
    slug: 'fashion_clothing', 
    name: 'Fashion & Clothing', 
    icon: '👗',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100 border-pink-200'
  },
  { 
    slug: 'beauty_personal_care', 
    name: 'Beauty & Personal Care', 
    icon: '💄',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 hover:bg-rose-100 border-rose-200'
  },
  { 
    slug: 'daily_grocery_snacks', 
    name: 'Daily Grocery & Snacks', 
    icon: '🛒',
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100 border-green-200'
  },
  { 
    slug: 'electronics_computers', 
    name: 'Electronics & Computers', 
    icon: '💻',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 hover:bg-slate-100 border-slate-200'
  },
];

export function getCategoryInfo(slug: CategorySlug): CategoryInfo | undefined {
  return categories.find(c => c.slug === slug);
}
