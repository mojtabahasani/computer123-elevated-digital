import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";

const PremiumFooter = () => {
  return (
    <footer className="relative border-t border-border" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container-content relative z-10 section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-gradient-primary mb-4">Computer123</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              مرجع هوشمند فناوری کرمان — ترکیبی از تخصص، اعتماد و نوآوری
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Send className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">دسترسی سریع</h4>
            <ul className="space-y-3">
              {["محصولات ویژه", "مشاوره اقساطی", "خدمات سازمانی", "فعال‌سازی گارانتی", "پنل مشتریان"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-foreground mb-4">درباره ما</h4>
            <ul className="space-y-3">
              {["داستان ما", "تأثیر اجتماعی", "همکاری و نمایندگی", "فرصت‌های شغلی", "اخبار و رویدادها"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">تماس با ما</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground" dir="ltr">034-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@computer123.ir</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  کرمان، خیابان شریعتی، مجتمع فناوری
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">
            © ۱۴۰۴ کامپیوتر ۱۲۳ — تمامی حقوق محفوظ است
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">حریم خصوصی</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
