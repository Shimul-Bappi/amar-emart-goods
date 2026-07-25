'use client';

import { getCategoryInfo } from '@/lib/types';
import type { Product } from '@/db/schema';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  const category = getCategoryInfo(product.category);
  const stockStatus = product.stockQuantity > 10 
    ? { label: 'In Stock', color: 'bg-emerald-100 text-emerald-700' }
    : product.stockQuantity > 0 
    ? { label: 'Low Stock', color: 'bg-amber-100 text-amber-700' }
    : { label: 'Out of Stock', color: 'bg-red-100 text-red-700' };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image Section */}
      <div className="relative aspect-[4/3] bg-gray-100">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">{category?.icon || '📦'}</span>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${category?.bgColor || 'bg-gray-100'} ${category?.color || 'text-gray-600'}`}>
            {category?.icon} {category?.name}
          </span>
        </div>
        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
            {stockStatus.label}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1 flex-1">{product.name}</h3>
          <span className="text-xs text-gray-400 ml-2">{product.priceCode}</span>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-emerald-600">৳{parseFloat(product.price).toLocaleString()}</span>
            <p className="text-xs text-gray-400">Qty: {product.stockQuantity}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="p-2 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-colors"
              title="Edit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(product)}
              className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-colors"
              title="Delete"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
