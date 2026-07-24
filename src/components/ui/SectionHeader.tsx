interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGold?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, titleGold, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-gold font-display tracking-[0.3em] text-sm mb-4 uppercase">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
        {title}{' '}
        {titleGold && <span className="text-gold">{titleGold}</span>}
      </h2>
      <div className="gold-divider w-24 my-6 mx-auto" />
      {subtitle && (
        <p className="text-[#A6A6A6] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
