import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, MapPin, Calendar, ChevronDown, Award } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FallbackImage from './ui/FallbackImage';
import Lightbox from './ui/Lightbox';
import achievementsData from '@/data/achievements.json';

export default function Achievements() {
  const [expandedId, setExpandedId] = useState<number | string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sortedAchievements = [...achievementsData].sort((a, b) =>
    b.year.localeCompare(a.year)
  );

  const achievements = showAll
    ? sortedAchievements
    : sortedAchievements.slice(0, 3);

  return (
    <section
      id="achievements"
      className="section-padding bg-studio-black relative"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          eyebrow="Awards & Recognition"
          title="OUR"
          titleGold="ACHIEVEMENTS"
          subtitle="Celebrating the talent and dedication of our award-winning artists in local and international competitions."
        />

        <div className="space-y-4">
          {achievements.map((item, i) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                className="bg-studio-card border border-[#1A1A1A] rounded-sm overflow-hidden hover:border-gold/30 transition-colors"
              >
                <button
  onClick={() =>
    setExpandedId(isExpanded ? null : item.id)
  }
  className="w-full flex items-center gap-4 p-5 text-left"
>
  {/* Trophy */}
  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 rounded-sm">
    <Trophy
      size={22}
      className="text-gold"
    />
  </div>

  {/* Main Info */}
  <div className="flex-1 min-w-0">

    {/* LOCATION + YEAR */}
    <div className="flex flex-wrap items-center gap-2 mb-1">
      <span className="text-gold text-[11px] font-display tracking-[0.18em] uppercase">
        {item.location}
      </span>

      <span className="text-[#444]">•</span>

      <span className="text-[#A6A6A6] text-xs">
        {item.year}
      </span>
    </div>

    {/* EVENT TITLE */}
    <h3 className="font-display text-lg text-white tracking-wide leading-tight uppercase">
      {item.competition}
    </h3>

    {/* ARTIST + CATEGORY */}
    <p className="text-[#A6A6A6] text-xs mt-1">
      {item.artist} • {item.category}
    </p>

  </div>

  <ChevronDown
    size={20}
    className={`text-[#A6A6A6] transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`}
  />
</button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-[#1A1A1A]">

                        {/* Competition + Location */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-4">

                          <div className="flex items-center gap-2 text-xs text-[#A6A6A6]">
                            <Award
                              size={14}
                              className="text-gold"
                            />

                            <span className="text-white">
                              {item.competition}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-[#A6A6A6]">
                            <MapPin
                              size={14}
                              className="text-gold"
                            />

                            {item.location}
                          </div>

                        </div>

                        {/* Year */}
                        <div className="flex items-center gap-2 text-xs text-[#A6A6A6] mb-4">
                          <Calendar
                            size={14}
                            className="text-gold"
                          />

                          {item.year}
                        </div>

                        {/* Achievement Image */}
                        {item.image && (
                          <button
                            onClick={() => {
                              const fullIndex =
                                sortedAchievements.findIndex(
                                  (achievement) =>
                                    achievement.id === item.id
                                );

                              setLightboxIndex(fullIndex);
                            }}
                            className="block relative w-full max-w-xs aspect-video rounded-sm overflow-hidden border border-[#1A1A1A] hover:border-gold/40 transition-colors"
                          >
                            <FallbackImage
                              src={item.image}
                              alt={item.award}
                              className="w-full h-full"
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <span className="text-gold text-xs tracking-widest uppercase">
                                View
                              </span>
                            </div>
                          </button>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* SHOW ALL / SHOW LESS BUTTON */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => {
                setShowAll((current) => !current);
                setExpandedId(null);
                setLightboxIndex(null);
              }}
              className="px-8 py-3 border border-gold text-gold rounded-sm font-display tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300"
            >
              {showAll
                ? 'SHOW LESS'
                : 'SHOW ALL ACHIEVEMENTS'}
            </button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={sortedAchievements.map((a) => ({
            image: a.image,
            title: a.award,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((p) =>
              p !== null && p > 0 ? p - 1 : p
            )
          }
          onNext={() =>
            setLightboxIndex((p) =>
              p !== null &&
              p < sortedAchievements.length - 1
                ? p + 1
                : p
            )
          }
        />
      )}
    </section>
  );
}