import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Grid, List } from 'lucide-react';
import { categories, sampleProducts } from '../data/sampleData';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const category = categories.find(cat => cat.id === categoryName);
  const products = sampleProducts.filter(product => product.category === categoryName);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold luxury-text font-calligraphy mb-4">
            الفئة غير موجودة
          </h1>
          <Link to="/" className="luxury-button">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name, 'ar');
    }
  });

  const filteredProducts = sortedProducts.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 rtl:space-x-reverse mb-8 text-luxury-gold-300">
          <Link to="/" className="hover:text-arabic-gold transition-colors font-arabic">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="luxury-text font-arabic">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold luxury-text font-calligraphy mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-luxury-gold-300 font-arabic mb-6">
            {category.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-arabic-gold to-luxury-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Filters and Controls */}
        <div className="luxury-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-luxury-gold-300 font-arabic">عرض:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-arabic-gold text-luxury-dark-900'
                    : 'text-luxury-gold-300 hover:text-arabic-gold'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-arabic-gold text-luxury-dark-900'
                    : 'text-luxury-gold-300 hover:text-arabic-gold'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-luxury-gold-300 font-arabic">ترتيب حسب:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
                className="bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded-lg px-3 py-2 font-arabic"
              >
                <option value="name">الاسم</option>
                <option value="price">السعر</option>
                <option value="rating">التقييم</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-luxury-gold-300 font-arabic">السعر:</span>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded px-2 py-1 text-sm"
                  placeholder="من"
                />
                <span className="text-luxury-gold-300">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                  className="w-20 bg-luxury-dark-800 border border-luxury-gold-600 text-luxury-gold-300 rounded px-2 py-1 text-sm"
                  placeholder="إلى"
                />
                <span className="text-luxury-gold-300 font-arabic">ر.س</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`luxury-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group ${
                viewMode === 'list' ? 'flex items-center space-x-6 rtl:space-x-reverse' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`${
                viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'aspect-square mb-4'
              } bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg flex items-center justify-center`}>
                <div className={`${
                  viewMode === 'list' ? 'w-16 h-16' : 'w-20 h-20'
                } bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center`}>
                  <span className={`${
                    viewMode === 'list' ? 'text-xl' : 'text-2xl'
                  } text-luxury-dark-900 font-bold font-calligraphy`}>
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className={`${
                  viewMode === 'list' ? 'text-xl' : 'text-lg'
                } font-semibold luxury-text font-calligraphy mb-2`}>
                  {product.name}
                </h3>

                {viewMode === 'list' && (
                  <p className="text-luxury-gold-300 font-arabic text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-arabic-gold fill-current'
                            : 'text-luxury-gold-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-luxury-gold-400 mr-2 rtl:mr-0 rtl:ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className={`${
                      viewMode === 'list' ? 'text-2xl' : 'text-xl'
                    } font-bold luxury-text`}>
                      {product.price} ر.س
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-luxury-gold-600 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                </div>

                <div className={`flex ${viewMode === 'list' ? 'space-x-2 rtl:space-x-reverse' : 'flex-col space-y-2'}`}>
                  <Link
                    to={`/product/${product.id}`}
                    className={`${
                      viewMode === 'list' ? 'flex-1' : 'w-full'
                    } luxury-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse`}
                  >
                    <span className="font-arabic">عرض التفاصيل</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <button className={`${
                    viewMode === 'list' ? 'luxury-button p-3' : 'w-full luxury-button p-3'
                  }`}>
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold-600 to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-luxury-dark-900 font-bold text-3xl font-calligraphy">!</span>
            </div>
            <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-4">
              لا توجد منتجات
            </h3>
            <p className="text-luxury-gold-300 font-arabic mb-6">
              لم نجد منتجات تطابق معايير البحث الخاصة بك
            </p>
            <button
              onClick={() => setPriceRange([0, 500])}
              className="luxury-button"
            >
              إعادة تعيين الفلاتر
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-arabic">العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
