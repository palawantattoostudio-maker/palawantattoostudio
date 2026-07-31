import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import partnersData from '@/data/partners.json';

export default function Partners() {
  return (
    <section
      id="partners"
      className="section-padding bg-studio-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Collaborations"
          title="OUR"
          titleGold="PARTNERS"
          subtitle="Trusted brands and organizations we proudly work with."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
  {partnersData.map((partner, i) => (
    <motion.div
      key={partner.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="group bg-studio-card border border-[#1A1A1A] rounded-sm p-4 hover:border-gold/40 transition-all duration-500"
    >
      <FallbackImage
        src={partner.logo}
        alt={partner.name}
        className="w-full object-contain"
      />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}