import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, ArrowRight, Award } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import artistsData from '@/data/artists.json';

interface ArtistsProps {
  onArtistSelect: (artistId: string) => void;
}

export default function Artists({ onArtistSelect }: ArtistsProps) {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const artist = artistsData.find((a) => a.id === selectedArtist);

  return (
    <section id="artists" className="section-padding bg-studio-black relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Meet The Team" title="OUR" titleGold="ARTISTS" subtitle="A roster of award-winning, DOH-certified tattoo artists dedicated to their craft." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artistsData.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <FallbackImage
                  src={artist.profile}
                  alt={artist.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent" />
                {artist.isFounder && (
                  <span className="absolute top-3 left-3 text-[10px] font-display tracking-widest text-gold border border-gold/40 px-2 py-1 bg-black/60">
                    FOUNDER
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl text-white leading-tight">{artist.name}</h3>
                  <p className="text-gold text-xs tracking-wide">{artist.specialty}</p>
                </div>
              </div>

              <div className="p-4 flex gap-2">
                <button
                  onClick={() => setSelectedArtist(artist.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2.5 border border-gold/30 text-gold text-[10px] tracking-widest uppercase hover:bg-gold/10 transition-all rounded-sm"
                >
                  <Eye size={14} />
                  Profile
                </button>
                <button
                  onClick={() => onArtistSelect(artist.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2.5 bg-gold text-black text-[10px] tracking-widest uppercase hover:bg-gold-bright transition-all rounded-sm"
                >
                  Gallery
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {artist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtist(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-studio-card border border-gold/30 rounded-sm max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[3/4] md:aspect-auto">
                  <FallbackImage src={artist.profile} alt={artist.name} className="w-full h-full" />
                </div>
                <div className="p-6 md:p-8">
                  <button
                    onClick={() => setSelectedArtist(null)}
                    className="absolute top-4 right-4 p-2 text-[#A6A6A6] hover:text-gold transition-colors"
                  >
                    <X size={22} />
                  </button>
                  {artist.isFounder && (
                    <span className="inline-block text-xs font-display tracking-widest text-gold border border-gold/40 px-3 py-1 mb-3">
                      
                    </span>
                  )}
                  <h3 className="font-display text-3xl text-white mb-1">{artist.name}</h3>
                  <p className="text-gold text-sm mb-4">{artist.role}</p>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed mb-6">{artist.bio}</p>

                  <div className="mb-6">
                    <button
  onClick={() => {
    setSelectedArtist(null);

    setTimeout(() => {
      document
        .getElementById("achievements")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 250);
  }}
  className="text-xs font-display tracking-widest text-gold mb-3 flex items-center gap-2 hover:text-white transition-colors"
>
  <Award size={16} />
  ACHIEVEMENTS
</button>
                    <ul className="space-y-2">
                      {artist.achievements.map((ach, ai) => (
                        <li key={ai} className="text-xs text-[#A6A6A6] flex items-start gap-2">
                          <span className="text-gold mt-0.5">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => { onArtistSelect(artist.id); setSelectedArtist(null); }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold text-black text-xs tracking-widest uppercase hover:bg-gold-bright transition-all rounded-sm"
                  >
                    View Gallery
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
