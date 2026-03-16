import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContactModal } from "@/hooks/useContactModal";

export function CTABanner() {
  const { openContact } = useContactModal();

  return (
    <section className="bg-accent px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-3">Start Today</p>
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Your musical journey <br className="hidden md:block" />
              begins with one <span className="italic">step.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <button
              onClick={openContact}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/about"
              className="flex items-center justify-center rounded-full border-2 border-primary/30 px-8 py-4 text-sm font-semibold text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
