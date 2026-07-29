import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ARTISTS', href: '#artists' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'MERCH', href: '#merch' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark border-b border-[#1A1A1A] py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} className="flex items-center gap-3">
            <img src="assets/logo/MADKID_PTS_LOGO.png" alt="Palawan Tattoo Studio" className="h-10 md:h-12 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="font-display text-lg md:text-xl tracking-widest text-white hidden sm:block">
              PALAWAN <span className="text-gold">TATTOO</span> STUDIO
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-xs font-medium tracking-widest text-[#A6A6A6] hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://www.facebook.com/PalawanTattooStudio" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/palawantattoostudioofficial?igsh=OXE0aDJyOGpjNWRz" target="_blank" rel="noopener noreferrer" className="text-[#A6A6A6] hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <button
              onClick={() => handleNav('#contact')}
              className="hidden md:inline-flex items-center px-5 py-2 bg-gold text-black font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
            >
              Book Now
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-studio-dark z-40 lg:hidden border-l border-[#1A1A1A] flex flex-col"
          >
            <div className="pt-24 px-6 flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="w-full text-left py-3 text-lg font-display tracking-widest text-[#A6A6A6] hover:text-gold border-b border-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://www.facebook.com/PalawanTattooStudio?rdid=90SE1z2np0uTIkgB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17bv3LiLGZ%2F#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-[#2a2a2a] text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/palawantattoostudioofficial?igsh=OXE0aDJyOGpjNWRz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-[#2a2a2a] text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <button
                onClick={() => handleNav('#contact')}
                className="w-full py-4 bg-gold text-black font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/70 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
