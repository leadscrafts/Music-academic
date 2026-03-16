import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

const contactInfo = [
  {
    Icon: MapPin,
    label: "Address",
    value: "Near Thiruvanaikovil Temple, Thiruvanaikoil, Tiruchirappalli, Tamil Nadu 620005",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@nadabrahmaacademy.com",
  },
  {
    Icon: Clock,
    label: "Class Hours",
    value: "Mon – Sat: 7:00 AM – 8:00 PM\nSunday: 9:00 AM – 1:00 PM",
  },
];

const courses = [
  "Vocal (Carnatic)",
  "Saraswati Veena",
  "Violin",
  "Mridangam",
  "Bharatanatyam",
  "Visual Arts",
  "Abacus & Vedic Maths",
  "Online Classes",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Contact <span className="italic text-accent">Us</span></>}
        description="Have a question about our courses, fees, or schedule? We'd love to hear from you. Fill out the form or reach us directly."
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Details</p>
              <h2 className="text-3xl font-bold text-foreground">
                Find <span className="text-primary italic">Us</span>
              </h2>
            </div>

            {contactInfo.map(({ Icon, label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm"
            >
              <iframe
                title="Academy Location"
                src="https://maps.google.com/maps?q=Thiruvanaikovil+Temple,+Tiruchirappalli,+Tamil+Nadu&output=embed"
                width="100%"
                height="220"
                className="border-0 block"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Send className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-1">Enquire</p>
                    <h3 className="text-2xl font-bold text-foreground">
                      Send Us a <span className="text-primary italic">Message</span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Course of Interest
                        </label>
                        <select
                          name="course"
                          value={form.course}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        >
                          <option value="">Select a course</option>
                          {courses.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your experience level, preferred schedule, or any questions you have..."
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                    >
                      <Send className="h-4 w-4" strokeWidth={1.5} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </PageLayout>
  );
}
