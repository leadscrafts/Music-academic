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
];

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 py-3 shadow-md backdrop-blur-md border-b border-border/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent shadow-lg transition-transform group-hover:scale-105">
            <span className="text-2xl italic font-bold">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight text-primary">
              Nada Brahma
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-widest text-accent">
              Music Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location === "/"
                  : location.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent after:transition-all ${
                      isActive
                        ? "text-accent after:w-full"
                        : "text-foreground/80 hover:text-accent after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={onOpenContact}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Enroll Button Desktop */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContact}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-primary/90"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="p-2 text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium text-foreground hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}
                  className="block w-full text-left text-lg font-medium text-foreground hover:text-accent"
                >
                  Contact
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}
                  className="block w-full rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-md"
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
