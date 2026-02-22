import { motion } from "framer-motion";
import { Laptop, Monitor, Cpu, Headphones, Smartphone, HardDrive } from "lucide-react";

const products = [
  {
    icon: Laptop,
    title: "لپ‌تاپ‌های حرفه‌ای",
    description: "مدل‌های منتخب برای حرفه‌ای‌ها و کاربران خاص",
    badge: "ویژه",
    priceHint: "از ۴۵ میلیون تومان",
  },
  {
    icon: Monitor,
    title: "مانیتورهای گیمینگ",
    description: "نمایشگرهای حرفه‌ای با نرخ نوسازی بالا",
    badge: "محبوب",
    priceHint: "از ۱۲ میلیون تومان",
  },
  {
    icon: Cpu,
    title: "سیستم‌های اسمبل",
    description: "پیکربندی سفارشی متناسب با نیاز شما",
    badge: "سفارشی",
    priceHint: "از ۳۰ میلیون تومان",
  },
  {
    icon: Headphones,
    title: "لوازم جانبی پریمیوم",
    description: "اکسسوری‌های برند از نمایندگی‌های رسمی",
    badge: null,
    priceHint: "از ۲ میلیون تومان",
  },
  {
    icon: Smartphone,
    title: "موبایل و تبلت",
    description: "گوشی‌ها و تبلت‌های منتخب با گارانتی",
    badge: "جدید",
    priceHint: "از ۱۵ میلیون تومان",
  },
  {
    icon: HardDrive,
    title: "ذخیره‌سازی و شبکه",
    description: "راهکارهای ذخیره‌سازی و تجهیزات شبکه",
    badge: null,
    priceHint: "از ۵ میلیون تومان",
  },
];

const CuratedProducts = () => {
  return (
    <section id="products" className="section-padding relative" dir="rtl">
      <div className="container-content">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-bold tracking-wider">محصولات منتخب</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
            فقط <span className="text-gradient-primary">بهترین‌ها</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ما بازار انبوه نیستیم. هر محصول با دقت انتخاب و تضمین شده است.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  {product.badge && (
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{product.priceHint}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    مشاهده ←
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedProducts;
