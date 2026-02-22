import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="فناوری پیشرفته"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-glow-amber/5 rounded-full blur-[100px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container-content section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full border border-glow bg-glass text-primary">
            مرجع هوشمند فناوری کرمان
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="block text-foreground">آینده فناوری</span>
          <span className="block text-gradient-primary mt-2">از کرمان آغاز می‌شود</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          کامپیوتر ۱۲۳ — ترکیبی از محصولات منتخب، مشاوره هوشمند خرید اقساطی،
          و تعهد اجتماعی برای ساختن فردای دیجیتال ایران
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <a
            href="#products"
            className="px-8 py-4 rounded-lg font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all glow-primary text-base"
          >
            مشاهده محصولات ویژه
          </a>
          <a
            href="#installment"
            className="px-8 py-4 rounded-lg font-bold border border-glow bg-glass text-foreground hover:border-primary/40 transition-all text-base"
          >
            مشاوره اقساطی هوشمند
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
