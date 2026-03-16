import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-primary pt-20 pb-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12">

          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                <span className="text-2xl italic font-bold">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">
                  Nada Brahma
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-widest text-accent">
                  Music Academy
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Preserving the divine heritage of Indian Classical Music through dedicated training, devotion, and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/gurus" className="hover:text-accent transition-colors">Our Gurus</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/workshops" className="hover:text-accent transition-colors">Workshops</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <button onClick={onOpenContact} className="hover:text-accent transition-colors">
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-accent shrink-0 text-base mt-0.5" />
                <span>123 Music Street, Cultural District<br />Chennai, Tamil Nadu - 600001</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-accent shrink-0" />
                <span>info@nadabrahmaacademy.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-3 h-48 rounded-xl overflow-hidden border-2 border-white/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5826998782414!2d80.2443!3d13.0617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266155694c92b%3A0x6b2ab87019f20e8b!2sMusic%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Nada Brahma Music Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
