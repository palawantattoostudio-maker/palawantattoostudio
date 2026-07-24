import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import merchandiseData from '@/data/merchandise.json';

export default function Merchandise() {
  const [selectedShirt, setSelectedShirt] = useState<string | null>(null);
  const [view, setView] = useState<'front' | 'back'>('front');

  const shirt = merchandiseData.find((s) => s.id === selectedShirt);

  return (
    <section id="merch" className="section-padding bg-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Shop" title="OFFICIAL" titleGold="MERCHANDISE" subtitle="Wear the art. Premium apparel featuring original Palawan Tattoo Studio designs." />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {merchandiseData.map((shirt, i) => (
            <motion.div
              key={shirt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => { setSelectedShirt(shirt.id); setView('front'); }}
              className="group relative bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden cursor-pointer hover:border-gold/40 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <FallbackImage
                  src={shirt.front}
                  alt={shirt.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-gold text-xs font-display tracking-widest px-2 py-1">
                  {shirt.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-white tracking-wide mb-1">{shirt.name}</h3>
                <p className="text-[#A6A6A6] text-xs line-clamp-2">{shirt.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {shirt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedShirt(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-studio-card border border-gold/30 rounded-sm max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedShirt(null)}
                className="absolute top-4 right-4 p-2 text-[#A6A6A6] hover:text-gold transition-colors z-10"
              >
                <X size={22} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative bg-studio-black">
                  <FallbackImage
                    src={view === 'front' ? shirt.front : shirt.back}
                    alt={`${shirt.name} ${view}`}
                    className="w-full aspect-square"
                  />
                  <div className="flex gap-2 p-4 justify-center">
                    
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-3xl text-white mb-2">{shirt.name}</h3>
                  <p className="text-gold text-xl mb-4">{shirt.price}</p>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed mb-6">{shirt.description}</p>
                  <button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      setSelectedShirt(null);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold text-black text-xs tracking-widest uppercase hover:bg-gold-bright transition-all rounded-sm"
                  >
                    <ShoppingBag size={16} />
                    Inquire to Order
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
