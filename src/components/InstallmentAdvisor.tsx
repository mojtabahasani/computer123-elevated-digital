import { motion } from "framer-motion";
import { Calculator, ChevronLeft } from "lucide-react";

const InstallmentAdvisor = () => {
  return (
    <section id="installment" className="section-padding relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-glow-amber/5 rounded-full blur-[120px]" />

      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold text-glow-amber tracking-wider">مشاوره هوشمند</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-5">
              خرید اقساطی
              <span className="block text-gradient-amber mt-1">متناسب با شما</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              با سیستم هوشمند مشاوره خرید اقساطی، بر اساس بودجه، نوع استفاده و شرایط شما
              بهترین پلن پرداخت پیشنهاد می‌شود. بدون پیچیدگی، بدون هزینه پنهان.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "تحلیل بودجه و پیشنهاد بهینه",
                "اقساط ۳ تا ۲۴ ماهه",
                "بدون ضامن برای اعضای باشگاه مشتریان",
                "پیش‌پرداخت منعطف",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-glow-amber" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold bg-glow-amber text-primary-foreground hover:opacity-90 transition-all glow-amber text-base"
            >
              شروع مشاوره رایگان
              <ChevronLeft className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Calculator visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-glow-amber/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-glow-amber" />
                </div>
                <span className="font-bold text-lg">محاسبه‌گر اقساط</span>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">مبلغ محصول (تومان)</label>
                  <div className="h-12 rounded-lg bg-secondary border border-border flex items-center px-4 text-foreground font-medium">
                    ۴۵,۰۰۰,۰۰۰
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">تعداد اقساط</label>
                  <div className="flex gap-3">
                    {["۳", "۶", "۱۲", "۲۴"].map((n, i) => (
                      <div
                        key={n}
                        className={`flex-1 h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                          i === 2
                            ? "bg-glow-amber/20 border-2 border-glow-amber text-glow-amber"
                            : "bg-secondary border border-border text-muted-foreground hover:border-glow-amber/30"
                        }`}
                      >
                        {n} ماه
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground text-sm">پیش‌پرداخت</span>
                    <span className="font-bold text-foreground">۱۵,۰۰۰,۰۰۰ تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">هر قسط</span>
                    <span className="font-black text-xl text-glow-amber">۲,۵۰۰,۰۰۰ تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallmentAdvisor;
