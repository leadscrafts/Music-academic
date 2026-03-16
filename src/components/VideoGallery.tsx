import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "./ui/Modal";
import { PlayCircle, Clock3, Film, Music2, Star, Camera } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const categories = ["All", "Concerts", "Masterclasses", "Festivals", "Beginners"];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Annual Arangetram 2024 — Grand Vocal Recital", duration: "12:45", category: "Concerts", featured: true },
  { id: "jNQXAC9IVRw", title: "Veena Masterclass Highlights", duration: "08:20", category: "Masterclasses", featured: false },
  { id: "_OBlgSz8sSM", title: "Mridangam Solo by Guru Krishnamurthy", duration: "15:10", category: "Concerts", featured: false },
  { id: "9bZkp7q19f0", title: "Violin Duet — State Level Winners", duration: "06:30", category: "Masterclasses", featured: false },
  { id: "kJQP7kiw5Fk", title: "Thyagaraja Aradhana Celebration", duration: "45:00", category: "Festivals", featured: false },
  { id: "OPf0YbXqDm0", title: "Beginners Batch First Performance", duration: "04:15", category: "Beginners", featured: false },
];

const photos = [
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", alt: "Classical music performance" },
  { src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80", alt: "Violin performance" },
  { src: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=600&q=80", alt: "Stage performance" },
  { src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80", alt: "Music class" },
  { src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&q=80", alt: "Cultural event" },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  All: Film,
  Concerts: Music2,
  Masterclasses: Star,
  Festivals: Star,
  Beginners: Camera,
};

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const featured = videos.find((v) => v.featured)!;
  const filtered = videos.filter(
    (v) => !v.featured && (activeCategory === "All" || v.category === activeCategory)
  );

  return (
    <section id="gallery" className="bg-background">
      <PageHero
        eyebrow="Performances"
        title={<>Concerts & <span className="italic text-accent">Recitals</span></>}
        description="Witness the mastery of our students and faculty through live performances, annual concerts, and intimate recitals — every note a testament to years of dedicated practice."
      />

      {/* ── Featured Video ─────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-4">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Featured Performance</p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
          onClick={() => setSelectedVideo(featured.id)}
        >
          <div className="aspect-[21/9] relative">
            <img
              src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="h-10 w-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-3">
                {featured.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{featured.title}</h3>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock3 className="h-4 w-4" strokeWidth={1.5} />
                <span>{featured.duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Video Grid ─────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Section header + filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-1">Video Archive</p>
            <h2 className="text-3xl font-bold text-foreground">
              More <span className="text-primary italic">Performances</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const CatIcon = categoryIcons[cat] || Film;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card text-foreground/70 border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  <CatIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length > 0 ? filtered.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <PlayCircle className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 rounded-full bg-primary/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
                    {video.category}
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                    <Clock3 className="h-3 w-3" strokeWidth={1.5} />
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors text-sm leading-snug">
                    {video.title}
                  </h4>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-3 py-16 text-center text-muted-foreground">
                No videos in this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Photo Gallery ──────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-1">Moments</p>
          <h2 className="text-3xl font-bold text-foreground">
            Photo <span className="text-primary italic">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onClick={() => setSelectedPhoto(photo.src)}
              className={`group cursor-pointer overflow-hidden rounded-2xl ${idx === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? "h-64 md:h-full" : "h-40"}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <div className="aspect-video w-full bg-black">
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>

      {/* Photo Modal */}
      <Modal isOpen={!!selectedPhoto} onClose={() => setSelectedPhoto(null)}>
        {selectedPhoto && (
          <img src={selectedPhoto} alt="Gallery" className="w-full h-full object-contain" />
        )}
      </Modal>
    </section>
  );
}
