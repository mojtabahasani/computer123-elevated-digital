import { motion } from "framer-motion";
import { Shield, Users, Award, Clock } from "lucide-react";

const metrics = [
  { icon: Clock, value: "۱۲+", label: "سال تجربه", sublabel: "در صنعت فناوری" },
  { icon: Users, value: "۱۵,۰۰۰+", label: "مشتری فعال", sublabel: "در سراسر کرمان" },
  { icon: Shield, value: "۱۰۰٪", label: "گارانتی معتبر", sublabel: "تضمین اصالت کالا" },
  { icon: Award, value: "۵۰+", label: "برند نمایندگی", sublabel: "همکاری مستقیم" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrustMetrics = () => {
  return (
    <section className="section-padding relative" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="container-content relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-foreground mb-0.5">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;
