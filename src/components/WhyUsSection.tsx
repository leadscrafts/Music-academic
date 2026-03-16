import { motion } from "framer-motion";
import { ShieldCheck, Wifi, BookOpen, HeartHandshake, Award, Clock } from "lucide-react";

const features = [
  {
    Icon: ShieldCheck,
    title: "Authentic Tradition",
    desc: "Every technique taught here traces directly back to classical lineages — no shortcuts, no dilution, no compromise on tradition.",
  },
  {
    Icon: Award,
    title: "Award-Winning Faculty",
    desc: "Our gurus hold national and state awards. Many are active performers who bring stage experience directly into your lessons.",
  },
  {
    Icon: Wifi,
    title: "Online & In-Person",
    desc: "Join from anywhere with live online sessions, or attend our campus studios in Thiruvanaikoil for the full immersive experience.",
  },
  {
    Icon: BookOpen,
    title: "Structured Curriculum",
    desc: "A graded system tied to university examinations — from beginner to concert-level performer, with clear milestones at every stage.",
  },
  {
    Icon: HeartHandshake,
    title: "Small Batch Learning",
    desc: "Intimate batches of 6–10 students ensure every learner gets personal attention and direct feedback from the guru.",
  },
  {
    Icon: Clock,
    title: "Flexible Scheduling",
    desc: "Morning, evening and weekend slots — designed to fit around school, college and work commitments without compromise.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-background px-6 py-24 border-t border-border">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Our Promise</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Nada Brahma <span className="text-primary italic">Difference</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We don't just teach music. We cultivate discipline, character and a lifelong connection to a living tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300 mt-0.5">
                <feat.Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
