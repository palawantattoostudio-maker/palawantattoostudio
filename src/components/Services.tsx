import { motion } from 'framer-motion';
import { Zap, Circle, Sparkles, RefreshCw, Leaf, Check, type LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import servicesData from '@/data/services.json';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Circle,
  Sparkles,
  RefreshCw,
  Leaf,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-studio-dark relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="What We Offer" title="OUR" titleGold="SERVICES" subtitle="Premium tattoo and body art services delivered with precision, safety, and artistry." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-studio-card border border-[#1A1A1A] p-8 rounded-sm hover:border-gold/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <Icon size={26} className="text-gold group-hover:text-black transition-colors duration-500" />
                  </div>

                  <h3 className="font-display text-2xl text-white mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-[#888]">
                        <Check size={14} className="text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
