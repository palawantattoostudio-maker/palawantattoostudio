import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import artistsData from '@/data/artists.json';

interface FoundersProps {
  onArtistSelect: (artistId: string) => void;
  onViewProfile: (artistId: string) => void;
}

export default function Founders({ onArtistSelect, onViewProfile }: FoundersProps) {
  const founders = artistsData.filter((a) => a.isFounder);

  return (
    <section id="founders" className="section-padding bg-studio-black relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader eyebrow="The Founders" title="THE" titleGold="FOUNDERS" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <FallbackImage
                  src={founder.profile}
                  alt={founder.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-display tracking-widest text-gold border border-gold/40 px-3 py-1 mb-3">
                    CO-FOUNDER
                  </span>
                  <h3 className="font-display text-3xl text-white mb-1">{founder.name}</h3>
                  <p className="text-gold text-sm tracking-wide mb-2">{founder.role}</p>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed line-clamp-3">{founder.bio}</p>
                </div>
              </div>

              <div className="flex gap-3 p-4 border-t border-[#1A1A1A]">
                <button
                  onClick={() => onViewProfile(founder.id)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-gold/40 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all rounded-sm"
                >
                  <Eye size={16} />
                  View Profile
                </button>
                <button
                  onClick={() => onArtistSelect(founder.id)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-gold text-black text-xs tracking-widest uppercase hover:bg-gold-bright transition-all rounded-sm"
                >
                  View Gallery
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
