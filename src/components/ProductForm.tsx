'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { CategorySelector } from './CategorySelector';
import { ImageUploader } from './ImageUploader';
import type { CategorySlug, ProductFormData } from '@/lib/types';
import type { Product } from '@/db/schema';

interface ProductFormProps {
  initialCategory?: CategorySlug;
  product?: Product;
  onSubmit: (data: ProductFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ProductForm({ 
  initialCategory, 
  product, 
  onSubmit, 
  onCancel,
  isLoading = false 
}: ProductFormProps) {
  const [step, setStep] = useState<'category' | 'image' | 'details'>(
    product ? 'details' : initialCategory ? 'image' : 'category'
  );
  const [formData, setFormData] = useState<ProductFormData>({
    name: product?.name || '',
    description: product?.description || '',
    category: (product?.category || initialCategory || '') as CategorySlug,
    priceCode: product?.priceCode || '',
    price: product?.price || '',
    stockQuantity: product?.stockQuantity || 0,
    comments: product?.comments || '',
    imageUrl: product?.imageUrl || '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ProductFormData, string>>>({});

  useEffect(() => {
    if (initialCategory && !product) {
      setFormData(prev => ({ ...prev, category: initialCategory }));
      setStep('image');
    }
  }, [initialCategory, product]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ProductFormData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.priceCode.trim()) newErrors.priceCode = 'Price code is required';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (formData.stockQuantity < 0) newErrors.stockQuantity = 'Stock cannot be negative';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      await onSubmit(formData);
    }
  };

  const handleCategorySelect = (category: CategorySlug) => {
    setFormData(prev => ({ ...prev, category }));
    setStep('image');
  };

  const handleImageChange = (imageUrl: string | null) => {
    setFormData(prev => ({ ...prev, imageUrl: imageUrl || '' }));
  };

  const handleInputChange = (field: keyof ProductFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Step 1: Category Selection
  if (step === 'category') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Select Category</h2>
          <p className="text-gray-500 mt-1">Choose a category for your product</p>
        </div>
        <CategorySelector 
          selectedCategory={formData.category || null} 
          onSelect={handleCategorySelect} 
        />
        <Button variant="ghost" onClick={onCancel} fullWidth>
          Cancel
        </Button>
      </div>
    );
  }

  // Step 2: Image Upload
  if (step === 'image') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Add Product Image</h2>
          <p className="text-gray-500 mt-1">Take a photo or upload from gallery</p>
        </div>
        <ImageUploader 
          currentImage={formData.imageUrl || null} 
          onImageChange={handleImageChange} 
        />
        <div className="flex gap-3 mt-6">
          <Button variant="secondary" onClick={() => setStep('category')} fullWidth>
            Back
          </Button>
          <Button onClick={() => setStep('details')} fullWidth>
            {formData.imageUrl ? 'Continue' : 'Skip Image'}
          </Button>
        </div>
      </div>
    );
  }

  // Step 3: Product Details Form
  return (
    <div className="space-y-5">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          {product ? 'Edit Product' : 'Product Details'}
        </h2>
        <p className="text-gray-500 mt-1">Fill in the product information</p>
      </div>

      {/* Image Preview */}
      {formData.imageUrl && (
        <div className="relative h-40 rounded-xl overflow-hidden bg-gray-100 mb-4">
          <img
            src={formData.imageUrl}
            alt="Product"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setStep('image')}
            className="absolute bottom-2 right-2 px-3 py-1.5 bg-black/60 rounded-full text-white text-sm hover:bg-black/80 transition-colors"
          >
            Change Image
          </button>
        </div>
      )}

      {/* Category Display */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
        <CategorySelector 
          selectedCategory={formData.category || null} 
          onSelect={(cat) => handleInputChange('category', cat)}
          compact 
        />
      </div>

      {/* Form Fields */}
      <Input
        label="Product Name"
        placeholder="Enter product name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        error={errors.name}
        required
      />

      <TextArea
        label="Description"
        placeholder="Describe your product..."
        value={formData.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
        error={errors.description}
        rows={3}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Price Code"
          placeholder="e.g., SKU-001"
          value={formData.priceCode}
          onChange={(e) => handleInputChange('priceCode', e.target.value)}
          error={errors.priceCode}
          required
        />
        <Input
          label="Price (৳)"
          type="number"
          placeholder="0.00"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
          error={errors.price}
          required
        />
      </div>

      <Input
        label="Stock Quantity"
        type="number"
        placeholder="0"
        min="0"
        value={formData.stockQuantity}
        onChange={(e) => handleInputChange('stockQuantity', parseInt(e.target.value) || 0)}
        error={errors.stockQuantity}
        required
      />

      <TextArea
        label="Comments"
        placeholder="Additional notes (optional)"
        value={formData.comments}
        onChange={(e) => handleInputChange('comments', e.target.value)}
        rows={2}
      />

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button 
          variant="secondary" 
          onClick={product ? onCancel : () => setStep('image')} 
          fullWidth
        >
          {product ? 'Cancel' : 'Back'}
        </Button>
        <Button onClick={handleSubmit} isLoading={isLoading} fullWidth>
          {product ? 'Save Changes' : 'Add Product'}
        </Button>
      </div>
    </div>
  );
}
