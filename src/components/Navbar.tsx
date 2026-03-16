import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gurus", href: "/gurus" },
  { name: "Gallery", href: "/gallery" },
  { name: "Workshops", href: "/workshops" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  onEnroll: () => void;
}

export function Navbar({ onEnroll }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrolled = isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 py-3 shadow-md backdrop-blur-md border-b border-border/60"
          : "bg-primary/95 py-4 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all group-hover:scale-105 ${
            scrolled ? "bg-primary text-accent" : "bg-accent text-primary"
          }`}>
            <span className="text-xl italic font-bold">N</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-bold leading-none tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Nada Brahma
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-accent">
              Music Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? location === "/" : location.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative
                      after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent after:transition-all
                      ${isActive
                        ? "text-accent after:w-full"
                        : scrolled
                          ? "text-foreground/75 hover:text-accent after:w-0 hover:after:w-full"
                          : "text-primary-foreground/80 hover:text-accent after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Enroll Button Desktop */}
        <div className="hidden md:block">
          <button
            onClick={onEnroll}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-accent text-primary hover:bg-accent/90"
            }`}
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`p-2 md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-primary/98 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-5 space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? location === "/" : location.startsWith(link.href);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block text-base font-medium transition-colors ${
                        isActive ? "text-accent" : "text-primary-foreground/80 hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-white/10">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onEnroll(); }}
                  className="block w-full rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-primary shadow-md hover:bg-accent/90 transition-colors"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
