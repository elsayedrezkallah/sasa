import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { categories, sampleProducts } from '../data/sampleData';

const HomePage: React.FC = () => {
  const featuredProducts = sampleProducts.slice(0, 4);
  const bestSellers = sampleProducts.filter(product => product.rating >= 4.7).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold luxury-text font-calligraphy mb-6 animate-fadeIn">
              عطور الشرق الفاخرة
            </h1>
            <p className="text-xl md:text-2xl text-luxury-gold-300 font-arabic mb-8 animate-slideInRight">
              Eastern Luxury Fragrances
            </p>
            <p className="text-lg text-luxury-gold-400 font-arabic max-w-3xl mx-auto leading-relaxed animate-slideInLeft">
              اكتشف عالم العطور والبخور الفاخرة من أجود المكونات الطبيعية. منتجات أصلية 100% من أفضل العلامات التجارية العالمية.
            </p>
            <div className="mt-8">
              <Link
                to="/category/incense"
                className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse mr-4"
              >
                <span className="font-arabic">تصفح البخور</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                to="/category/perfume"
                className="luxury-button inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span className="font-arabic">تصفح العطور</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              فئات المنتجات
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic">
              اختر من مجموعتنا المتنوعة من العطور والبخور الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group luxury-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-glow">
                    <span className="text-luxury-dark-900 font-bold text-3xl font-calligraphy">
                      {category.id === 'incense' ? 'ب' : 'ع'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold luxury-text font-calligraphy mb-3">
                    {category.name}
                  </h3>
                  <p className="text-luxury-gold-300 font-arabic mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-luxury-gold-400">
                    <span className="font-arabic">عرض المنتجات</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-luxury-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              منتجات مميزة
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic">
              أفضل المنتجات المختارة بعناية من مجموعتنا الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="luxury-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold luxury-text font-calligraphy mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
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
                    <span className="text-xl font-bold luxury-text">
                      {product.price} ر.س
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-luxury-gold-600 line-through">
                        {product.originalPrice} ر.س
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="w-full luxury-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span className="font-arabic">عرض التفاصيل</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-4">
              الأكثر مبيعاً
            </h2>
            <p className="text-lg text-luxury-gold-300 font-arabic">
              المنتجات الأكثر طلباً من عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="luxury-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group relative"
              >
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-arabic-gold to-luxury-gold-500 text-luxury-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    الأكثر مبيعاً
                  </div>
                )}
                
                <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold luxury-text font-calligraphy mb-3">
                  {product.name}
                </h3>
                
                <p className="text-luxury-gold-300 font-arabic text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <span className="text-lg font-bold luxury-text">
                    {product.price} ر.س
                  </span>
                </div>

                <div className="flex space-x-2 rtl:space-x-reverse">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 luxury-button text-center inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <span className="font-arabic">عرض</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <button className="luxury-button p-3">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-arabic-gold/10 to-luxury-gold-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold luxury-text font-calligraphy mb-6">
            ابدأ رحلتك في عالم العطور الفاخرة
          </h2>
          <p className="text-lg text-luxury-gold-300 font-arabic mb-8">
            اكتشف مجموعتنا المتنوعة من العطور والبخور الأصيلة، منتجات مختارة بعناية من أفضل المكونات الطبيعية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/category/incense"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span className="font-arabic">تصفح البخور</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              to="/category/perfume"
              className="luxury-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span className="font-arabic">تصفح العطور</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
