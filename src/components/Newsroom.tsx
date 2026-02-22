import { motion } from "framer-motion";
import { Newspaper, ArrowLeft } from "lucide-react";

const articles = [
  {
    category: "محصول",
    title: "معرفی سری جدید لپ‌تاپ‌های ایسوس ROG ۲۰۲۵",
    date: "اسفند ۱۴۰۴",
    readTime: "۳ دقیقه",
  },
  {
    category: "اجتماعی",
    title: "تجهیز ۵ مدرسه جدید در حومه کرمان با سخت‌افزار بازسازی شده",
    date: "بهمن ۱۴۰۴",
    readTime: "۴ دقیقه",
  },
  {
    category: "همکاری",
    title: "آغاز نمایندگی رسمی برند MSI در استان کرمان",
    date: "بهمن ۱۴۰۴",
    readTime: "۲ دقیقه",
  },
];

const Newsroom = () => {
  return (
    <section className="section-padding relative" dir="rtl">
      <div className="container-content">
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary text-sm font-bold tracking-wider">اخبار و رویدادها</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">آخرین خبرها</h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            همه اخبار
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-primary/10 text-primary">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4 leading-relaxed group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{article.readTime} مطالعه</span>
                <Newspaper className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
