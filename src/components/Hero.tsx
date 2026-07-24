import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(./bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-studio-black/20" />
      {/* Stronger black on the left so text is readable, fades right to let the image breathe */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      {/* Subtle gold glow near center */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold font-display tracking-[0.4em] text-sm md:text-base mb-6"
          >
            INK YOUR STORY
          </motion.p>

          {/* Big headline — LEFT side */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[0.82] mb-8"
          >
            <span className="block text-white text-[clamp(4.5rem,12vw,9.5rem)]">PALAWAN</span>
            <span className="block gold-gradient-text text-[clamp(4.5rem,12vw,9.5rem)]">TATTOO</span>
            <span className="block text-white text-[clamp(4.5rem,12vw,9.5rem)]">STUDIO</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-1 mb-10"
          >
            <p className="text-[#D0D0D0] text-base md:text-lg font-light tracking-wide">
              Professional Tattoo Artist, Clean Work
            </p>
            <p className="text-[#A6A6A6] text-sm md:text-base">
              Custom Tattoo, Made in Palawan with Passion
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-all hover:scale-105"
            >
              <Calendar size={18} />
              Book Your Session
            </button>
            <button
              onClick={() => scrollTo('#gallery')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold text-gold font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold hover:text-black transition-all"
            >
              View Gallery
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-studio-black to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
