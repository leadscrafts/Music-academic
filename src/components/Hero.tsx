import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yBg = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background pt-20 flex items-center">
      {/* Background Texture */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 opacity-40 z-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 md:flex-row relative z-10">

        {/* Text Content */}
        <motion.div
          style={{ y: yText }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Welcome to the Divine Sound
            </h2>
            <h1 className="mb-6 text-5xl leading-tight text-primary md:text-7xl">
              Preserving <br />
              <span className="italic text-accent">Classical</span> <br />
              Excellence.
            </h1>
            <p className="mb-10 max-w-lg text-lg text-muted-foreground mx-auto md:mx-0">
              Join Nada Brahma Music Academy to embark on a spiritual journey of classical music. Learn from renowned gurus and master your craft.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <button
                onClick={onOpenContact}
                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-20" />
              </button>
              <Link
                href="/about"
                className="rounded-full border-2 border-border bg-transparent px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="relative h-[400px] w-[400px] md:h-[600px] md:w-[600px]">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse" />

            <motion.img
              animate={{
                y: [-10, 10, -10],
                rotate: [-2, 2, -2]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              src={`${import.meta.env.BASE_URL}images/veena-ornament.png`}
              alt="Classical Indian Veena"
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
