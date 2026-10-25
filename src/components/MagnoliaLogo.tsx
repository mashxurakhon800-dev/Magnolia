import React from 'react';

interface MagnoliaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const MagnoliaLogo: React.FC<MagnoliaLogoProps> = ({
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  const logoDimensions = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28 md:w-36 md:h-36',
    lg: 'w-36 h-36 md:w-48 md:h-48',
    xl: 'w-48 h-48 md:w-60 md:h-60',
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Official circular gold embossed Magnolia emblem */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/30 via-[#F4D185]/40 to-[#D4AF37]/30 blur-md opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
        <img
          src="/magnolia-logo.png"
          alt="Magnolia Café & Restaurant"
          className={`${logoDimensions[size]} object-contain rounded-full shadow-2xl border-2 border-[#D4AF37]/50 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] relative z-10 transition-transform duration-300 hover:scale-105`}
        />
      </div>

      {/* Decorative hairline line with central golden diamond */}
      {showSubtitle && (
        <div className="w-full max-w-[220px] md:max-w-[280px] mt-3.5 mb-1 flex items-center justify-center gap-2 opacity-85">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      )}
    </div>
  );
};
