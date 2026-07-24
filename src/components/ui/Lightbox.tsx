import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FallbackImage from './FallbackImage';

interface LightboxProps {
  images: { image: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl max-h-[90vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <FallbackImage
            src={current.image}
            alt={current.title || 'Gallery image'}
            className="w-full max-h-[80vh] rounded-lg"
          />
          {current.title && (
            <p className="text-center text-[#A6A6A6] mt-4 font-display tracking-widest text-sm">{current.title}</p>
          )}
          <p className="text-center text-[#555] text-xs mt-1">{currentIndex + 1} / {images.length}</p>
        </motion.div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-[#2a2a2a] text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors"
        >
          <X size={24} />
        </button>
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#2a2a2a] text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#2a2a2a] text-[#A6A6A6] hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
