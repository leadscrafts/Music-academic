import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContactModal } from "@/hooks/useContactModal";

const upcoming = [
  {
    month: "JUN", day: "15", title: "Carnatic Summer Workshop",
    location: "Main Hall, Academy", tag: "Intensive", color: "bg-blue-500",
  },
  {
    month: "JUL", day: "20", title: "Veena Masterclass by Vidushi Lakshmi Devi",
    location: "Studio B", tag: "Masterclass", color: "bg-accent",
  },
  {
    month: "AUG", day: "10", title: "Annual Arangetram 2025",
    location: "City Auditorium, Trichy", tag: "Public Event", color: "bg-purple-500",
  },
];

export function EventsPreview() {
  const { openContact } = useContactModal();

  return (
    <section className="bg-primary px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">What's On</p>
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Upcoming <span className="italic text-accent">Events</span>
            </h2>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8 max-w-sm">
              From intimate masterclasses to grand festivals — something meaningful at Nada Brahma every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openContact}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors shadow-lg"
              >
                Reserve a Spot
              </button>
              <Link
                href="/workshops"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-primary-foreground/80 hover:border-accent hover:text-accent transition-colors"
              >
                Full Calendar →
              </Link>
            </div>
          </motion.div>

          {/* Right – Event List */}
          <div className="space-y-4">
            {upcoming.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-stretch gap-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 overflow-hidden"
              >
                {/* Date pill */}
                <div className={`${ev.color} flex flex-col items-center justify-center px-5 py-4 shrink-0 min-w-[70px]`}>
                  <span className="text-[10px] font-black uppercase text-white/80 tracking-widest">{ev.month}</span>
                  <span className="text-3xl font-black text-white leading-none">{ev.day}</span>
                </div>
                {/* Info */}
                <div className="flex flex-col justify-center py-4 pr-5 flex-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{ev.tag}</span>
                  <h3 className="text-sm font-bold text-primary-foreground group-hover:text-accent transition-colors leading-snug mb-1.5">
                    {ev.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                    <MapPin className="h-3 w-3 text-accent shrink-0" strokeWidth={1.5} />
                    {ev.location}
                  </div>
                </div>
                <div className="flex items-center pr-5">
                  <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
