import { motion } from "framer-motion";
import { TrendingUp, Handshake, Building2, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "فرصت سرمایه‌گذاری",
    description: "مشارکت در رشد اکوسیستم فناوری استان کرمان با بازدهی مطمئن",
    cta: "دریافت بروشور سرمایه‌گذاری",
  },
  {
    icon: Handshake,
    title: "نمایندگی برندها",
    description: "پل ارتباطی برندهای بزرگ تهران با بازار پرپتانسیل کرمان",
    cta: "درخواست همکاری",
  },
  {
    icon: Building2,
    title: "خدمات سازمانی",
    description: "تأمین تجهیزات، پشتیبانی و مشاوره IT برای سازمان‌ها و شرکت‌ها",
    cta: "مشاوره رایگان B2B",
  },
  {
    icon: BarChart3,
    title: "استارتاپ و استعداد",
    description: "جذب نیروی متخصص و حمایت از ایده‌های نوآورانه فناوری",
    cta: "پیوستن به تیم",
  },
];

const InvestorHub = () => {
  return (
    <section className="section-padding relative" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <div className="container-content relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-bold tracking-wider">همکاری و سرمایه‌گذاری</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
            با ما <span className="text-gradient-primary">بزرگ شوید</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            کامپیوتر ۱۲۳ فراتر از یک فروشگاه است — پلتفرمی برای رشد، همکاری و نوآوری
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {card.cta} ←
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorHub;
