import { motion } from "framer-motion";
import { Trophy, Users, GraduationCap, Globe, Music, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function BentoGrid() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">At a Glance</p>
          <h2 className="text-4xl font-bold text-foreground">
            Why <span className="text-primary italic">Nada Brahma?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto"
        >

          {/* ── BIG CARD: Gurus ─────── col-span-7, row-span-2 */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-7 overflow-hidden rounded-3xl bg-primary p-10 shadow-2xl hover:shadow-accent/10 transition-all duration-300 min-h-[360px] flex flex-col justify-between"
          >
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl group-hover:bg-accent/25 transition-colors duration-500" />
            <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-white/5" />

            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <Music className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Learn from <br />
                <span className="italic text-accent">Legendary Masters</span>
              </h3>
              <p className="text-primary-foreground/70 text-base max-w-md leading-relaxed">
                Every guru at Nada Brahma is a practitioner with decades of stage experience, national recognition, and a deep lineage from the guru-shishya parampara.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <Link
                href="/gurus"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
              >
                Meet the Gurus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* ── STAT: Awards ──────── col-span-5 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-5 relative overflow-hidden rounded-3xl bg-accent p-8 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[170px] flex flex-col justify-between"
          >
            <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-primary/10" />
            <Trophy className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
            <div>
              <p className="text-5xl font-black text-primary leading-none mb-1">100<span className="text-3xl">+</span></p>
              <p className="text-sm font-bold text-primary/70 uppercase tracking-widest">State & National Awards</p>
            </div>
          </motion.div>

          {/* ── STAT: Students ──────── col-span-5 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-5 relative overflow-hidden rounded-3xl bg-card border border-border p-8 shadow-sm hover:border-accent hover:shadow-xl transition-all duration-300 min-h-[170px] flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-3xl" />
            <Users className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
            <div>
              <p className="text-5xl font-black text-foreground leading-none mb-1">2,400<span className="text-3xl text-accent">+</span></p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Students Trained</p>
            </div>
          </motion.div>

          {/* ── CARD: Online Classes ──── col-span-4 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-4 relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/20 p-8 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 min-h-[200px] flex flex-col justify-between"
          >
            <Globe className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Global Online Classes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn from anywhere in the world with live, interactive sessions via our digital studio.
              </p>
            </div>
          </motion.div>

          {/* ── BIG CARD: Image + Performance ─── col-span-8 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-8 relative overflow-hidden rounded-3xl shadow-xl min-h-[280px]"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80"
              alt="Classical performance"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Annual Performance</span>
              <h3 className="text-3xl font-bold text-white mb-3">Arangetram 2024</h3>
              <p className="text-primary-foreground/70 text-sm max-w-xs">
                Our graduating class graced the stage of the City Auditorium to a standing ovation.
              </p>
              <Link href="/gallery" className="mt-4 inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:underline">
                Watch Performances <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* ── STAT: Pass Rate ──── col-span-4 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-4 relative overflow-hidden rounded-3xl bg-card border border-border p-8 shadow-sm hover:border-accent hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-3xl" />
            <GraduationCap className="h-8 w-8 text-accent mb-4" strokeWidth={1.5} />
            <div>
              <p className="text-5xl font-black text-foreground leading-none mb-1">100<span className="text-3xl text-accent">%</span></p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">Exam Pass Rate</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Distinction honours every year in university grade examinations.</p>
            </div>
          </motion.div>

          {/* ── CARD: Masterclasses ─── col-span-4 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-4 relative overflow-hidden rounded-3xl bg-primary p-8 shadow-lg min-h-[200px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/10" />
            <Sparkles className="h-8 w-8 text-accent mb-4" strokeWidth={1.5} />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Weekend Masterclasses</h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                Intensive sessions with visiting national artists every month.
              </p>
              <button className="mt-4 text-accent text-sm font-semibold hover:underline flex items-center gap-1">
                View Calendar <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* ── CARD: Admissions ──── col-span-4 */}
          <motion.div
            variants={itemVariants}
            className="group md:col-span-4 relative overflow-hidden rounded-3xl bg-accent/10 border border-accent/30 p-8 shadow-sm hover:bg-accent/20 hover:border-accent transition-all duration-300 min-h-[200px] flex flex-col justify-between"
          >
            <div>
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary mb-4">Now Open</span>
              <h3 className="text-xl font-bold text-foreground mb-2">Fall 2025 Admissions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Registrations open for the upcoming batch — limited seats for all disciplines.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-accent transition-colors"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
