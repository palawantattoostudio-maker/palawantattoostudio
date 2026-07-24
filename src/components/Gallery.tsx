import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, User, ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import Lightbox from './ui/Lightbox';
import galleryData from '@/data/gallery.json';
import artistsData from '@/data/artists.json';
import artistGalleriesData from '@/data/artistGalleries.json';

type GalleryMode = 'choose' | 'main' | 'artist-directory' | 'artist-gallery';

interface GalleryProps {
  initialArtistId?: string | null;
  onClearArtist: () => void;
}

export default function Gallery({ initialArtistId, onClearArtist }: GalleryProps) {
  const [mode, setMode] = useState<GalleryMode>(initialArtistId ? 'artist-gallery' : 'choose');
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(initialArtistId || null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // If an artist was passed from outside, open their gallery directly
  useEffect(() => {
    if (initialArtistId) {
      setSelectedArtistId(initialArtistId);
      setMode('artist-gallery');
    }
  }, [initialArtistId]);

  const currentArtist = artistsData.find((a) => a.id === selectedArtistId);
  const currentArtistGallery = selectedArtistId
    ? (artistGalleriesData as Record<string, { image: string; title: string }[]>)[selectedArtistId] || []
    : [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null && prev < currentImages.length - 1 ? prev + 1 : prev));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  const currentImages =
    mode === 'main'
      ? galleryData.map((g) => ({ image: g.image, title: g.title }))
      : currentArtistGallery;

  const handleArtistSelect = (artistId: string) => {
    setSelectedArtistId(artistId);
    setMode('artist-gallery');
  };

  const resetToChoose = () => {
    setMode('choose');
    setSelectedArtistId(null);
    onClearArtist();
  };

  return (
    <section id="gallery" className="section-padding bg-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="THE" titleGold="GALLERY" subtitle="Explore our studio's finest tattoo work or browse individual artist portfolios." />

        <AnimatePresence mode="wait">
          {/* CHOOSE MODE */}
          {mode === 'choose' && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <button
                onClick={() => setMode('main')}
                className="group relative bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden p-10 text-center hover:border-gold/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
                <Images size={48} className="text-gold mx-auto mb-4 relative" />
                <h3 className="font-display text-3xl text-white mb-2 relative">MAIN GALLERY</h3>
                <p className="text-[#A6A6A6] text-sm relative">The studio's featured tattoo portfolio — our best work as a collective.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-gold text-xs tracking-widest uppercase relative">
                  Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => setMode('artist-directory')}
                className="group relative bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden p-10 text-center hover:border-gold/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
                <User size={48} className="text-gold mx-auto mb-4 relative" />
                <h3 className="font-display text-3xl text-white mb-2 relative">ARTIST GALLERY</h3>
                <p className="text-[#A6A6A6] text-sm relative">Browse by artist — select an artist to view their personal tattoo portfolio.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-gold text-xs tracking-widest uppercase relative">
                  Browse Artists <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          )}

          {/* MAIN GALLERY */}
          {mode === 'main' && (
            <motion.div
              key="main-gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={resetToChoose}
                  className="inline-flex items-center gap-2 text-[#A6A6A6] hover:text-gold transition-colors text-sm"
                >
                  <ArrowLeft size={18} /> Back to Gallery
                </button>
                <h3 className="font-display text-2xl text-gold tracking-widest">MAIN GALLERY</h3>
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryData.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="break-inside-avoid mb-4 group relative cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <FallbackImage
                      src={item.image}
                      alt={item.title}
                      className={`w-full rounded-sm border border-[#1A1A1A] ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-gold text-xs tracking-widest uppercase">{item.category}</p>
                        <p className="text-white text-sm font-display tracking-wide">{item.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ARTIST DIRECTORY */}
          {mode === 'artist-directory' && (
            <motion.div
              key="artist-directory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={resetToChoose}
                  className="inline-flex items-center gap-2 text-[#A6A6A6] hover:text-gold transition-colors text-sm"
                >
                  <ArrowLeft size={18} /> Back to Gallery
                </button>
                <h3 className="font-display text-2xl text-gold tracking-widest">ARTIST DIRECTORY</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {artistsData.map((artist, i) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
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
                        <h4 className="font-display text-xl text-white leading-tight">{artist.name}</h4>
                        <p className="text-gold text-xs">{artist.specialty}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[#A6A6A6] text-xs leading-relaxed line-clamp-2 mb-3">{artist.bio}</p>
                      <button
                        onClick={() => handleArtistSelect(artist.id)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-gold text-black text-[10px] tracking-widest uppercase hover:bg-gold-bright transition-all rounded-sm"
                      >
                        View Gallery
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* INDIVIDUAL ARTIST GALLERY */}
          {mode === 'artist-gallery' && currentArtist && (
            <motion.div
              key={`artist-gallery-${selectedArtistId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <button
                  onClick={() => { setMode('artist-directory'); onClearArtist(); }}
                  className="inline-flex items-center gap-2 text-[#A6A6A6] hover:text-gold transition-colors text-sm"
                >
                  <ArrowLeft size={18} /> Back to Artists
                </button>
                <div className="text-right">
                  <h3 className="font-display text-2xl text-gold tracking-widest">{currentArtist.name}</h3>
                  <p className="text-[#A6A6A6] text-xs">{currentArtist.specialty}</p>
                </div>
              </div>

              {currentArtistGallery.length > 0 ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {currentArtistGallery.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="break-inside-avoid mb-4 group relative cursor-pointer"
                      onClick={() => openLightbox(i)}
                    >
                      <FallbackImage
                        src={item.image}
                        alt={item.title}
                        className={`w-full rounded-sm border border-[#1A1A1A] ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-display tracking-wide">{item.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-[#A6A6A6]">Gallery images coming soon for {currentArtist.name}.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentImages.length > 0 && (
        <Lightbox
          images={currentImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
