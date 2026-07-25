'use client';

import { categories, type CategorySlug } from '@/lib/types';
import type { Product } from '@/db/schema';

interface DashboardProps {
  products: Product[];
  onCategoryClick: (category: CategorySlug) => void;
}

export function Dashboard({ products, onCategoryClick }: DashboardProps) {
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + parseFloat(p.price) * p.stockQuantity, 0);
  const lowStockCount = products.filter(p => p.stockQuantity > 0 && p.stockQuantity <= 10).length;
  const outOfStockCount = products.filter(p => p.stockQuantity === 0).length;

  const getCategoryStats = (categorySlug: CategorySlug) => {
    const categoryProducts = products.filter(p => p.category === categorySlug);
    return {
      count: categoryProducts.length,
      value: categoryProducts.reduce((sum, p) => sum + parseFloat(p.price) * p.stockQuantity, 0),
    };
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-emerald-100 text-sm">Total Products</span>
            <span className="text-2xl">📦</span>
          </div>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-100 text-sm">Inventory Value</span>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-2xl font-bold">৳{totalValue.toLocaleString()}</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-amber-100 text-sm">Low Stock</span>
            <span className="text-2xl">⚠️</span>
          </div>
          <p className="text-3xl font-bold">{lowStockCount}</p>
        </div>
        
        <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-100 text-sm">Out of Stock</span>
            <span className="text-2xl">❌</span>
          </div>
          <p className="text-3xl font-bold">{outOfStockCount}</p>
        </div>
      </div>

      {/* Quick Add Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Add by Category</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => {
            const stats = getCategoryStats(category.slug);
            return (
              <button
                key={category.slug}
                onClick={() => onCategoryClick(category.slug)}
                className={`
                  relative overflow-hidden rounded-2xl p-4 border-2 transition-all duration-200
                  ${category.bgColor} hover:scale-[1.02] active:scale-[0.98]
                `}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-3xl mb-2 block">{category.icon}</span>
                    <h4 className={`font-semibold text-sm ${category.color}`}>{category.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{stats.count} items</p>
                  </div>
                  <div className="p-2 rounded-full bg-white/60">
                    <svg className={`w-5 h-5 ${category.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Products */}
      {products.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Recently Added</h3>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => {
              const category = categories.find(c => c.slug === product.category);
              return (
                <div 
                  key={product.id}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl">
                        {category?.icon || '📦'}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{product.name}</p>
                    <p className="text-sm text-gray-500">{category?.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-600">৳{parseFloat(product.price).toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Qty: {product.stockQuantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
