import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount] = useState(3); // This would come from context/state
  const location = useLocation();

  const navigationItems = [
    { name: 'الرئيسية', nameEn: 'Home', path: '/' },
    { name: 'البخور', nameEn: 'Incense', path: '/category/incense' },
    { name: 'العطور', nameEn: 'Perfumes', path: '/category/perfume' },
    { name: 'المكونات', nameEn: 'Components', path: '/demo' },
    { name: 'عنا', nameEn: 'About', path: '/about' },
    { name: 'اتصل بنا', nameEn: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark-900 via-luxury-dark-800 to-luxury-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-luxury-dark-900/95 backdrop-blur-sm border-b border-luxury-gold-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">ع</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold luxury-text font-calligraphy">عطور الشرق</h1>
                <p className="text-sm text-luxury-gold-300 font-arabic">Eastern Fragrances</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-arabic-gold bg-luxury-gold-600/20'
                      : 'text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10'
                  }`}
                >
                  <span className="font-arabic">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* Search */}
              <button className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* User */}
              <button className="p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors">
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-arabic-gold text-luxury-dark-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-luxury-gold-300 hover:text-arabic-gold transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark-800 border-t border-luxury-gold-600/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-arabic-gold bg-luxury-gold-600/20'
                      : 'text-luxury-gold-300 hover:text-arabic-gold hover:bg-luxury-gold-600/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-arabic">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark-900 border-t border-luxury-gold-600/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-lg flex items-center justify-center">
                  <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">ع</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold luxury-text font-calligraphy">عطور الشرق</h3>
                  <p className="text-luxury-gold-300 font-arabic">Eastern Fragrances</p>
                </div>
              </div>
              <p className="text-luxury-gold-300 font-arabic text-sm leading-relaxed mb-4">
                متجرنا يقدم أجود أنواع العطور والبخور العربي والأجنبي، منتجات أصلية 100% من أفضل المكونات الطبيعية.
              </p>
              <p className="text-luxury-gold-400 font-arabic text-sm">
                Our store offers the finest Arabic and foreign perfumes and incense, 100% original products from the best natural ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold luxury-text font-calligraphy mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link to="/category/incense" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">البخور</Link></li>
                <li><Link to="/category/perfume" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">العطور</Link></li>
                <li><Link to="/about" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">عنا</Link></li>
                <li><Link to="/contact" className="text-luxury-gold-300 hover:text-arabic-gold transition-colors font-arabic">اتصل بنا</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold luxury-text font-calligraphy mb-4">معلومات الاتصال</h4>
              <div className="space-y-2 text-luxury-gold-300 font-arabic text-sm">
                <p>📞 +966 50 123 4567</p>
                <p>✉️ info@easternfragrances.com</p>
                <p>📍 الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-gold-600/20 mt-8 pt-8 text-center">
            <p className="text-luxury-gold-400 font-arabic text-sm">
              © 2024 عطور الشرق. جميع الحقوق محفوظة.
            </p>
            <p className="text-luxury-gold-300 text-sm mt-1">
              © 2024 Eastern Fragrances. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
