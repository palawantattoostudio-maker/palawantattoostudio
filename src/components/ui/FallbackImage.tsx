import { useState, useRef } from 'react';
import { ImageIcon } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export default function FallbackImage({ src, alt, className = '', placeholderClassName = '' }: FallbackImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {status === 'loading' && (
        <div className={`absolute inset-0 flex items-center justify-center bg-studio-card animate-pulse ${placeholderClassName}`}>
          <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
        </div>
      )}
      {status === 'error' && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-studio-card text-[#333] ${placeholderClassName}`}>
          <ImageIcon size={32} className="mb-2 text-[#2a2a2a]" />
          <span className="text-xs text-[#333] font-display tracking-widest">IMAGE COMING SOON</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  );
}
