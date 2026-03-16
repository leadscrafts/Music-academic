import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useContactModal } from "@/hooks/useContactModal";

const events = [
  {
    id: 1,
    title: "Carnatic Summer Workshop",
    date: "Jun 15 - Jun 18, 2025",
    location: "Main Hall, Academy",
    desc: "A 3-day intensive vocal workshop focusing on rare krithis.",
    gradient: "from-blue-500/20 to-primary/80"
  },
  {
    id: 2,
    title: "Veena Masterclass",
    date: "July 20, 2025",
    location: "Studio B",
    desc: "Advanced veena techniques and gamakas by Vidushi Lakshmi Devi.",
    gradient: "from-accent/40 to-primary/80"
  },
  {
    id: 3,
    title: "Annual Arangetram 2025",
    date: "August 10, 2025",
    location: "City Auditorium",
    desc: "Debut performances by our senior most graduating students.",
    gradient: "from-purple-500/20 to-primary/80"
  },
  {
    id: 4,
    title: "Classical Music Festival",
    date: "September 5, 2025",
    location: "Open Air Theatre",
    desc: "Grand classical music festival featuring artists across India.",
    gradient: "from-orange-500/20 to-primary/80"
  }
];

export function Workshops() {
  const { openContact } = useContactModal();

  return (
    <section id="workshops" className="bg-card py-24 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Calendar</h2>
          <h3 className="text-4xl font-bold text-primary md:text-5xl">
            Workshops & Events
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl bg-background border border-border shadow-md hover:shadow-xl transition-all"
            >
              {/* Image/Date Block */}
              <div className={`relative sm:w-2/5 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br ${event.gradient}`}>
                <div className="bg-background/90 backdrop-blur rounded-xl p-4 w-full shadow-lg transform group-hover:scale-105 transition-transform">
                  <span className="block text-primary font-bold text-sm uppercase">{event.date.split(',')[0]}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{event.date.split(',')[1] || "2025"}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>{event.location}</span>
                </div>
                <p className="text-foreground/80 text-sm mb-6">
                  {event.desc}
                </p>
                <button
                  onClick={openContact}
                  className="text-primary font-semibold text-sm hover:underline text-left"
                >
                  Register Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
