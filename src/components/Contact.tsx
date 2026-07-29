import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Calendar } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const contactInfo = [
  { icon: Phone, label: 'Mobile', value: '(+63) 929 889 5381', href: 'tel:+639298895381' },
  { icon: MessageCircle, label: 'Messenger', value : 'Palawan Tattoo Studio', href: 'https://m.me/PalawanTattooStudio' },
  { icon: Mail, label: 'Email', value: 'palajuantattoostudio@gmail.com', href: 'mailto:palajuantattoostudio@gmail.com' },
  { icon: MapPin, label: 'Address', value: '33-C Roxas Street (Baywalk Entrance), Bgy. San Isidro (Seaside), Puerto Princesa City', href: 'https://maps.app.goo.gl/5g4n2ERXwoPRHMp26' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', value: 'Palawan Tattoo Studio', href: 'https://www.facebook.com/PalawanTattooStudio?rdid=90SE1z2np0uTIkgB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17bv3LiLGZ%2F#' },
  { icon: Instagram, label: 'Instagram', value: 'palawantattoostudioofficial', href: 'https://www.instagram.com/palawantattoostudioofficial?igsh=OXE0aDJyOGpjNWRz' },
  { icon: MessageCircle, label: 'TikTok', value: '@palawantattoostudio', href: 'https://www.tiktok.com/@palawantattoostudio?_r=1&_t=ZS-98PmDEjTbKz' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-studio-dark relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader eyebrow="Get In Touch" title="CONTACT" titleGold="US" subtitle="Ready to start your tattoo journey? Reach out and book your session today." />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-studio-card border border-[#1A1A1A] rounded-sm hover:border-gold/40 transition-all group"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/30 rounded-sm group-hover:bg-gold group-hover:border-gold transition-all">
                    <item.icon size={18} className="text-gold group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#666] tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-[#A6A6A6] text-sm group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#A6A6A6] hover:text-gold transition-colors text-sm"
                >
                  <social.icon size={18} className="text-gold" />
                  <span className="tracking-wide">{social.label}:</span>
                  <span>{social.value}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-all"
            >
              <Calendar size={18} />
              Book Now
            </button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[400px] rounded-sm overflow-hidden border border-[#1A1A1A]"
          >
            <iframe
              title="Palawan Tattoo Studio Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.27288599057!2d118.73066997502778!3d9.742936690349804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b563eeb1970c97%3A0x3844a9a575a11a72!2sPalawan%20Tattoo%20Studio!5e0!3m2!1sen!2sph!4v1785156758488!5m2!1sen!2sph"
  className="w-full h-full min-h-[400px] grayscale contrast-125"
  style={{
    border: 0,
    filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8)',
  }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-studio-black/90 backdrop-blur-md p-4 border border-gold/30 rounded-sm">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-gold" />
                <p className="text-gold text-xs font-display tracking-widest">PALAWAN TATTOO STUDIO</p>
              </div>
              <p className="text-[#A6A6A6] text-xs">Palawan Tattoo Studio
Roxas Street Baywalk Entrance, Puerto Princesa City, 5300 Palawan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
