import { motion } from "framer-motion";
import { Heart, GraduationCap, Wrench } from "lucide-react";
import charityImg from "@/assets/charity-impact.jpg";

const stats = [
  { icon: Wrench, value: "۲۵۰+", label: "دستگاه بازسازی شده" },
  { icon: GraduationCap, value: "۱۵", label: "مدرسه تجهیز شده" },
  { icon: Heart, value: "۸۰+", label: "اهداکننده فعال" },
];

const CharityImpact = () => {
  return (
    <section className="section-padding relative" dir="rtl">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={charityImg}
              alt="تأثیر اجتماعی — دانش‌آموزان با لپ‌تاپ بازسازی شده"
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6">
              <div className="flex gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex-1 bg-glass rounded-xl p-3 text-center">
                    <stat.icon className="w-5 h-5 text-glow-amber mx-auto mb-1" />
                    <div className="text-lg font-black text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-sm font-bold text-glow-amber tracking-wider">تأثیر اجتماعی</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-5">
              فناوری برای
              <span className="block text-gradient-amber mt-1">آینده‌سازان</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              سخت‌افزارهای اهدایی را تعمیر و ارتقا می‌دهیم و به مدارس محروم اطراف کرمان
              تحویل می‌دهیم. هر اهداکننده می‌تواند مسیر تأثیر خود را پیگیری کند.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "تعمیر و بازسازی حرفه‌ای سخت‌افزار",
                "ردیابی تأثیر برای هر اهداکننده",
                "نصب و آموزش در مدارس",
                "گزارش شفاف سالانه",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-glow-amber" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="px-6 py-3 rounded-lg font-bold bg-glow-amber text-primary-foreground hover:opacity-90 transition-all text-sm"
              >
                می‌خواهم کمک کنم
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-lg font-bold border border-glow bg-glass text-foreground hover:border-primary/40 transition-all text-sm"
              >
                مشاهده گزارش تأثیر
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharityImpact;
