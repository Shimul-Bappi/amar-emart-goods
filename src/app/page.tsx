'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ProductForm } from '@/components/ProductForm';
import { ProductList } from '@/components/ProductList';
import { Dashboard } from '@/components/Dashboard';
import type { Product } from '@/db/schema';
import type { CategorySlug, ProductFormData } from '@/lib/types';

type ViewMode = 'dashboard' | 'products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<Product | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/products');
      const result = await response.json();
      if (result.success) {
        setProducts(result.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddProduct = (category?: CategorySlug) => {
    setEditingProduct(null);
    setSelectedCategory(category || null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (product: Product) => {
    setDeleteConfirm(product);
  };

  const confirmDelete = async () => {
    if (!deleteConfirm) return;
    
    try {
      const response = await fetch(`/api/products/${deleteConfirm.id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.success) {
        setProducts(prev => prev.filter(p => p.id !== deleteConfirm.id));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setDeleteConfirm(null);
    }
  };

  const handleSubmit = async (formData: ProductFormData) => {
    setIsSubmitting(true);
    try {
      const url = editingProduct 
        ? `/api/products/${editingProduct.id}` 
        : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        if (editingProduct) {
          setProducts(prev => 
            prev.map(p => p.id === editingProduct.id ? result.data : p)
          );
        } else {
          setProducts(prev => [result.data, ...prev]);
        }
        setIsModalOpen(false);
        setEditingProduct(null);
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white text-lg">🛒</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Amar eMart Goods</h1>
                <p className="text-xs text-gray-500">Inventory Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/mobile"
                className="px-2.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition-colors flex items-center gap-1"
                title="Mobile Launch Guide"
              >
                <span>📱</span>
                <span className="hidden sm:inline">Launch App</span>
              </Link>
              <Link
                href="/docs"
                className="px-2.5 py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold transition-colors flex items-center gap-1"
                title="Technical Specification"
              >
                <span>📋</span>
                <span className="hidden sm:inline">Specs</span>
              </Link>
              <Button 
                onClick={() => handleAddProduct()} 
                size="sm"
                className="flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200">
        <div className="max-w-lg mx-auto px-4">
          <div className="flex">
            <button
              onClick={() => setViewMode('dashboard')}
              className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                viewMode === 'dashboard'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Dashboard
              </span>
            </button>
            <button
              onClick={() => setViewMode('products')}
              className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                viewMode === 'products'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Products
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6 pb-24">
        {viewMode === 'dashboard' ? (
          <Dashboard 
            products={products} 
            onCategoryClick={(category) => handleAddProduct(category)} 
          />
        ) : (
          <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            isLoading={isLoading}
          />
        )}
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleAddProduct()}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/40 flex items-center justify-center hover:shadow-2xl hover:shadow-emerald-500/50 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Add/Edit Product Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
        size="lg"
      >
        <ProductForm
          initialCategory={selectedCategory || undefined}
          product={editingProduct || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
          isLoading={isSubmitting}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Delete Product"
        size="sm"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete "{deleteConfirm?.name}"?</h3>
          <p className="text-gray-500 mb-6">This action cannot be undone. The product will be permanently removed from your inventory.</p>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)} fullWidth>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete} fullWidth>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
