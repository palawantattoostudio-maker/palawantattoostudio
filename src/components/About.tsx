import { motion } from 'framer-motion';
import { MapPin, Award, Shield } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';

const studioImages = [
  { src: 'assets/studio/studio-01.jpg', label: 'Studio Interior' },
  { src: 'assets/studio/studio-02.jpg', label: 'Workstation' },
  { src: 'assets/studio/studio-03.jpg', label: 'Studio Space' },
];

const stats = [
  { icon: Award, value: '5+', label: 'Years of Excellence' },
  { icon: Shield, value: '100%', label: 'DOH Certified' },
  { icon: MapPin, value: '2020', label: 'Established' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Our Studio"
          title="WE DON'T JUST TATTOO."
          titleGold="WE CREATE LEGACIES."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="col-span-2">
              <FallbackImage
                src={studioImages[0].src}
                alt={studioImages[0].label}
                className="aspect-[16/10] rounded-sm border border-[#1A1A1A]"
              />
            </div>
            <FallbackImage
              src={studioImages[1].src}
              alt={studioImages[1].label}
              className="aspect-square rounded-sm border border-[#1A1A1A]"
            />
            <FallbackImage
              src={studioImages[2].src}
              alt={studioImages[2].label}
              className="aspect-square rounded-sm border border-[#1A1A1A]"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#A6A6A6] text-base md:text-lg leading-relaxed mb-6">
              Located in the heart of <span className="text-gold">Puerto Princesa City</span>, near the iconic Puerto Princesa Baywalk, Palawan Tattoo Studio has been providing world-class tattoo artistry since 2020.
            </p>
            <p className="text-[#A6A6A6] text-base md:text-lg leading-relaxed mb-6">
              Our award-winning artists have proven their skills in local and international tattoo competitions and conventions, while our <span className="text-gold">DOH-certified artists and piercers</span> ensure every procedure is performed with the highest standards of safety, hygiene, and professionalism.
            </p>
            <p className="text-[#A6A6A6] text-base md:text-lg leading-relaxed mb-8">
              Despite being one of Palawan's younger tattoo studios, we have built our reputation through exceptional craftsmanship, dedication, and a passion for creating timeless tattoos.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 bg-studio-card border border-[#1A1A1A] rounded-sm"
                >
                  <stat.icon className="text-gold mx-auto mb-2" size={24} />
                  <p className="font-display text-2xl text-white">{stat.value}</p>
                  <p className="text-xs text-[#666] tracking-widest uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
