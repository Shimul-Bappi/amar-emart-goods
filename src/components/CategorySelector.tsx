'use client';

import { categories, type CategorySlug } from '@/lib/types';

interface CategorySelectorProps {
  selectedCategory: CategorySlug | null;
  onSelect: (category: CategorySlug) => void;
  compact?: boolean;
}

export function CategorySelector({ selectedCategory, onSelect, compact = false }: CategorySelectorProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onSelect(category.slug)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 border-2
              ${
                selectedCategory === category.slug
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                  : `${category.bgColor} ${category.color} border-transparent`
              }
            `}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onSelect(category.slug)}
          className={`
            flex flex-col items-center justify-center p-4 rounded-2xl
            transition-all duration-200 border-2 min-h-[120px]
            ${
              selectedCategory === category.slug
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30 scale-[1.02]'
                : `${category.bgColor} ${category.color} border-transparent hover:scale-[1.02]`
            }
          `}
        >
          <span className="text-4xl mb-2">{category.icon}</span>
          <span className="text-sm font-semibold text-center leading-tight">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
