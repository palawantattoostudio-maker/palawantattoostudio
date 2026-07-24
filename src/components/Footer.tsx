import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import FallbackImage from './ui/FallbackImage';
import partnersData from '@/data/partners.json';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Artists', href: '#artists' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Merch', href: '#merch' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-black border-t border-[#1A1A1A] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="./assets/logo/MADKID_PTS_LOGO.png" alt="Palawan Tattoo Studio" className="h-12 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <p className="text-[#A6A6A6] text-sm leading-relaxed mb-4">
              Premium tattoo artistry in the heart of Puerto Princesa City, Palawan. Custom tattoos, body piercing, and more since 2020.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/PalawanTattooStudio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-sm text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/palawantattoostudioofficial?igsh=OXE0aDJyOGpjNWRz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-sm text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.tiktok.com/@palawantattoostudio?_r=1&_t=ZS-98GErLSWl89" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-sm text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-gold tracking-widest text-sm mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNav(link.href)} className="text-[#A6A6A6] text-sm hover:text-gold transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold tracking-widest text-sm mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#A6A6A6] text-xs">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+639298895381" className="hover:text-gold transition-colors">(+63) 929 889 5381</a>
              </li>
              <li className="flex items-start gap-2 text-[#A6A6A6] text-xs">
                <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:palajuantattoostudio@gmail.com" className="hover:text-gold transition-colors break-all">palajuantattoostudio@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-[#A6A6A6] text-xs">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span>33-C Roxas Street (Baywalk Entrance), Bgy. San Isidro, Puerto Princesa City</span>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-display text-gold tracking-widest text-sm mb-4">PARTNERS</h4>
            <div className="grid grid-cols-2 gap-3">
              {partnersData.map((p) => (
                <div key={p.id} className="bg-studio-card border border-[#1A1A1A] rounded-sm p-3 flex items-center justify-center min-h-[60px]">
                  <FallbackImage src={p.logo} alt={p.name} className="w-full h-10 object-contain opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs tracking-wide text-center md:text-left">
            © 2026 Palawan Tattoo Studio. All Rights Reserved.
          </p>
          <p className="text-[#444] text-xs tracking-wide">
            Puerto Princesa City, Palawan, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
