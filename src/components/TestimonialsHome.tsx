import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const featured = [
  {
    name: "Ananya S.",
    course: "Carnatic Vocal, Intermediate",
    avatar: "A",
    text: "The gurus here don't just teach notes — they transmit a feeling. My sruti purity and gamaka control improved beyond what I ever thought possible in 6 months.",
  },
  {
    name: "Meera K.",
    course: "Saraswati Veena, Advanced",
    avatar: "M",
    text: "This academy is truly a temple of learning. The masterclasses with visiting artists open up dimensions of the music I had never encountered before.",
  },
  {
    name: "Rahul T.",
    course: "Violin, Intermediate",
    avatar: "R",
    text: "Modern approach, traditional values. The annual performance gave me the confidence I needed. The faculty genuinely invests in every student's growth.",
  },
];

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={0} />
    ))}
  </div>
);

export function TestimonialsHome() {
  return (
    <section className="bg-card border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-foreground">
              Student <span className="text-primary italic">Stories</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "M", "R", "V"].map((l) => (
                <div key={l} className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-accent text-xs font-bold border-2 border-card">
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">2,400+</strong> students trained
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border p-7 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="flex items-start justify-between mb-5">
                  <StarRow />
                  <Quote className="h-5 w-5 text-accent/30 shrink-0" strokeWidth={1} />
                </div>
                <p className="text-sm text-foreground/80 italic leading-relaxed mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-accent text-sm font-bold shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
