import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Star, Heart, Share2 } from 'lucide-react';

const ShadcnDemo: React.FC = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToast = () => {
    toast({
      title: "تم الإضافة بنجاح!",
      description: "تم إضافة المنتج إلى سلة التسوق",
      variant: "luxury",
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold luxury-text font-calligraphy mb-4">
            مكونات shadcn/ui
          </h1>
          <p className="text-lg text-luxury-gold-300 font-arabic">
            عرض للمكونات الجاهزة مع التصميم العربي الفاخر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button Examples */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="luxury-text font-calligraphy">الأزرار</CardTitle>
              <CardDescription className="font-arabic">أنواع مختلفة من الأزرار</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full luxury-button">
                زر فاخر
              </Button>
              <Button variant="outline" className="w-full">
                زر عادي
              </Button>
              <Button variant="secondary" className="w-full">
                زر ثانوي
              </Button>
              <Button variant="ghost" className="w-full">
                زر شفاف
              </Button>
            </CardContent>
          </Card>

          {/* Badge Examples */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="luxury-text font-calligraphy">الشارات</CardTitle>
              <CardDescription className="font-arabic">شارات مختلفة للمنتجات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="luxury">فاخر</Badge>
                <Badge variant="default">جديد</Badge>
                <Badge variant="secondary">مخفض</Badge>
                <Badge variant="destructive">نفد</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Input Examples */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="luxury-text font-calligraphy">حقول الإدخال</CardTitle>
              <CardDescription className="font-arabic">نماذج الإدخال المختلفة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="البحث عن منتج..." className="font-arabic" />
              <Input placeholder="البريد الإلكتروني" type="email" className="font-arabic" />
              <Input placeholder="كود الخصم" className="font-arabic" />
            </CardContent>
          </Card>

          {/* Toast Demo */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="luxury-text font-calligraphy">الإشعارات</CardTitle>
              <CardDescription className="font-arabic">عرض الإشعارات الفاخرة</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleToast} className="w-full luxury-button">
                عرض إشعار
              </Button>
            </CardContent>
          </Card>

          {/* Dialog Demo */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="luxury-text font-calligraphy">النوافذ المنبثقة</CardTitle>
              <CardDescription className="font-arabic">نوافذ منبثقة للمنتجات</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full luxury-button">
                    فتح نافذة منبثقة
                  </Button>
                </DialogTrigger>
                <DialogContent className="luxury-card">
                  <DialogHeader>
                    <DialogTitle className="luxury-text font-calligraphy">
                      تفاصيل المنتج
                    </DialogTitle>
                    <DialogDescription className="font-arabic">
                      هذا مثال على نافذة منبثقة لعرض تفاصيل المنتج
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-16 h-16 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-lg flex items-center justify-center">
                        <span className="text-luxury-dark-900 font-bold text-xl font-calligraphy">ع</span>
                      </div>
                      <div>
                        <h3 className="font-semibold luxury-text font-calligraphy">عطر العود الملكي</h3>
                        <p className="text-luxury-gold-300 font-arabic">عطر فاخر من أجود المكونات</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold luxury-text">350 ر.س</span>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Button size="sm" variant="luxury">
                          <ShoppingCart className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                          إضافة للسلة
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Product Card Example */}
          <Card className="luxury-card hover:scale-105 transition-all duration-300 hover:shadow-xl group">
            <CardHeader>
              <div className="aspect-square bg-gradient-to-br from-luxury-dark-700 to-luxury-dark-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-arabic-gold to-luxury-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-luxury-dark-900 font-bold text-2xl font-calligraphy">ع</span>
                </div>
              </div>
              <CardTitle className="luxury-text font-calligraphy">عطر العود الملكي</CardTitle>
              <CardDescription className="font-arabic">
                عطر فاخر من أجود أنواع العود والزعفران
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'text-arabic-gold fill-current' : 'text-luxury-gold-600'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-luxury-gold-400 mr-2 rtl:mr-0 rtl:ml-2">
                    (203)
                  </span>
                </div>
                <Badge variant="luxury">الأكثر مبيعاً</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold luxury-text">350 ر.س</span>
                <span className="text-sm text-luxury-gold-600 line-through">450 ر.س</span>
              </div>

              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button className="flex-1 luxury-button">
                  <ShoppingCart className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  إضافة للسلة
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Instructions */}
        <Card className="luxury-card mt-12">
          <CardHeader>
            <CardTitle className="luxury-text font-calligraphy">كيفية الاستخدام</CardTitle>
            <CardDescription className="font-arabic">
              تعليمات استخدام مكونات shadcn/ui في المشروع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold luxury-text font-calligraphy">1. استيراد المكونات:</h4>
              <code className="block bg-luxury-dark-800 p-3 rounded text-luxury-gold-300 text-sm">
                {`import { Button } from '@/components/ui/button'`}
              </code>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold luxury-text font-calligraphy">2. استخدام الأزرار:</h4>
              <code className="block bg-luxury-dark-800 p-3 rounded text-luxury-gold-300 text-sm">
                {`<Button variant="luxury" className="luxury-button">زر فاخر</Button>`}
              </code>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold luxury-text font-calligraphy">3. استخدام البطاقات:</h4>
              <code className="block bg-luxury-dark-800 p-3 rounded text-luxury-gold-300 text-sm">
                {`<Card className="luxury-card">...</Card>`}
              </code>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold luxury-text font-calligraphy">4. استخدام الإشعارات:</h4>
              <code className="block bg-luxury-dark-800 p-3 rounded text-luxury-gold-300 text-sm">
                {`const { toast } = useToast();
toast({ title: "تم!", variant: "luxury" });`}
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShadcnDemo;

