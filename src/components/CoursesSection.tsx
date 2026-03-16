import { motion } from "framer-motion";
import { Music, Mic2, Drum, Sparkles, Palette, BrainCircuit, Globe, Piano } from "lucide-react";
import { Link } from "wouter";

const courses = [
  { Icon: Mic2, title: "Carnatic Vocal", level: "All Levels", desc: "Master the nuances of Carnatic classical singing — from basic swaras to advanced krithis.", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { Icon: Music, title: "Saraswati Veena", level: "Beginner – Advanced", desc: "The queen of instruments, taught with emphasis on gamakas, sruti and classical compositions.", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
  { Icon: Drum, title: "Mridangam", level: "All Levels", desc: "Rhythmic precision and talam mastery through the ancient percussion art of South India.", color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  { Icon: Sparkles, title: "Bharatanatyam", level: "All Levels", desc: "Classical Indian dance rooted in the Kalakshetra tradition — adavus, mudras, abhinaya.", color: "bg-rose-500/10 text-rose-600 border-rose-200" },
  { Icon: Music, title: "Violin (Carnatic)", level: "Beginner – Advanced", desc: "Carnatic violin technique with emphasis on bowing, sruti alignment and concert preparation.", color: "bg-teal-500/10 text-teal-600 border-teal-200" },
  { Icon: Piano, title: "Keyboard", level: "Beginner", desc: "Western and Carnatic keyboard fundamentals taught in a structured, progressive curriculum.", color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
  { Icon: Palette, title: "Visual Arts", level: "All Ages", desc: "Pichwai, Bhil painting and traditional Indian craft — art as a form of devotional expression.", color: "bg-amber-500/10 text-amber-600 border-amber-200" },
  { Icon: BrainCircuit, title: "Abacus & Vedic Maths", level: "Children", desc: "Sharpen mental arithmetic and logical thinking through ancient Indian mathematical traditions.", color: "bg-green-500/10 text-green-600 border-green-200" },
  { Icon: Globe, title: "Online Classes", level: "All Courses", desc: "Join live, interactive sessions from anywhere in the world through our digital studio platform.", color: "bg-cyan-500/10 text-cyan-600 border-cyan-200" },
];

export function CoursesSection() {
  return (
    <section className="bg-card border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Disciplines</p>
            <h2 className="text-4xl font-bold text-foreground">
              Our <span className="text-primary italic">Courses</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Nine disciplines rooted in classical tradition, taught by masters who have dedicated their lives to these arts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border p-6 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${course.color} transition-all duration-300`}>
                <course.Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{course.level}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>

              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border-[8px] border-border/30 group-hover:border-accent/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
          >
            Enquire About Admissions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
