import React from 'react';
import { MagnoliaFlowerEmblem } from './AsianCornerFrame';

interface MagnoliaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const MagnoliaLogo: React.FC<MagnoliaLogoProps> = ({
  size = 'md',
  variant = 'light',
  className = '',
  showSubtitle = true,
}) => {
  const flowerSizes = {
    sm: 32,
    md: 52,
    lg: 84,
  };

  const titleSizes = {
    sm: 'text-lg tracking-[0.2em]',
    md: 'text-2xl md:text-3xl tracking-[0.25em]',
    lg: 'text-4xl md:text-5xl tracking-[0.3em]',
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Flower emblem */}
      <MagnoliaFlowerEmblem size={flowerSizes[size]} />

      {/* Brand title */}
      <div className="mt-1 flex items-center justify-center">
        <h1
          className={`font-cinzel font-bold uppercase transition-colors ${titleSizes[size]} ${
            isLight ? 'text-[#FAF5EE] drop-shadow-sm' : 'text-[#4A151E]'
          }`}
        >
          Magnolia
        </h1>
      </div>

      {/* Decorative hairline line with central golden diamond */}
      {showSubtitle && (
        <div className="w-full max-w-[260px] md:max-w-[320px] my-1 flex items-center justify-center gap-2 opacity-85">
          <div className={`h-[1px] flex-1 ${isLight ? 'bg-gradient-to-r from-transparent to-[#D4AF37]' : 'bg-[#C5A059]'}`} />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <div className={`h-[1px] flex-1 ${isLight ? 'bg-gradient-to-l from-transparent to-[#D4AF37]' : 'bg-[#C5A059]'}`} />
        </div>
      )}

      {/* Subtitles as in the printed menu cards */}
      {showSubtitle && (
        <div className="flex flex-col items-center gap-0.5">
          <span
            className={`font-cinzel font-semibold text-[10px] md:text-[11px] tracking-[0.22em] uppercase ${
              isLight ? 'text-[#E5C07B]' : 'text-[#8C2D38]'
            }`}
          >
            Pan Asian &amp; Turkish Kitchen
          </span>
          <span
            className={`text-[8px] md:text-[9px] tracking-[0.25em] uppercase font-medium ${
              isLight ? 'text-[#C7B7A3]' : 'text-[#7D5B61]'
            }`}
          >
            Breakfast · Lunch · Dinner
          </span>
        </div>
      )}
    </div>
  );
};
