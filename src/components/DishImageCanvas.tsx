import React from 'react';
import { CULINARY_PRESETS } from '../utils/dishImageProvider';

interface DishImageCanvasProps {
  dishId: string;
  placeholderType: string;
  image?: string | null;
  dishTitle: string;
  portion: string;
  className?: string;
}

export const DishImageCanvas: React.FC<DishImageCanvasProps> = ({
  placeholderType,
  image,
  dishTitle,
  portion,
  className = '',
}) => {
  const [hasError, setHasError] = React.useState(false);

  const preset = CULINARY_PRESETS[placeholderType] || {
    bgGradient: 'from-[#3A141A] via-[#2A0E13] to-[#1A080B]',
    accentColor: '#E5C07B',
    plateColor: '#242129',
    garnishEmoji: '🍽️',
    badgeLabel: 'Magnolia Kitchen',
    ambientLight: 'rgba(229, 192, 123, 0.25)',
  };

  return (
    <div
      className={`relative w-full h-48 md:h-52 overflow-hidden select-none bg-gradient-to-br ${preset.bgGradient} ${className}`}
    >
      {image && !hasError ? (
        /* Display photo */
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={dishTitle}
            onError={() => setHasError(true)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Bottom contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>
      ) : (
        /* High-fidelity gourmet culinary illustration canvas */
        <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden">
          {/* Ambient lighting halo */}
          <div
            className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: preset.ambientLight }}
          />

          {/* Background subtle oriental dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${preset.accentColor} 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top metadata badge */}
          <div className="relative z-10 flex items-center justify-between text-[10px]">
            <span
              className="font-mono tracking-widest uppercase font-semibold px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10"
              style={{ color: preset.accentColor }}
            >
              {preset.badgeLabel}
            </span>
          </div>

          {/* Center culinary presentation: Artisanal Stoneware Plate */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {/* Stoneware plate with soft rim shadow */}
            <div
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105 border border-white/10"
              style={{
                backgroundColor: preset.plateColor,
                boxShadow: `0 10px 25px -5px ${preset.ambientLight}, 0 8px 10px -6px rgba(0, 0, 0, 0.5)`,
              }}
            >
              {/* Concentric inner ceramic glaze circle */}
              <div className="w-[84%] h-[84%] rounded-full border border-white/5 flex items-center justify-center bg-black/20">
                <span className="text-3xl md:text-4xl filter drop-shadow">
                  {preset.garnishEmoji}
                </span>
              </div>

              {/* Gentle steam wisps simulation */}
              <div className="absolute -top-2 flex gap-1 opacity-60">
                <span className="animate-pulse text-xs text-white/50">~</span>
                <span className="animate-pulse delay-100 text-xs text-white/40">~</span>
              </div>
            </div>

            {/* Dish caption */}
            <span className="mt-2 text-xs font-cinzel tracking-wider text-[#FAF5EE] font-semibold text-center line-clamp-1 max-w-[200px]">
              {dishTitle}
            </span>
          </div>

          {/* Bottom portion hint */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-[#A89280]">
            <span>{portion}</span>
          </div>
        </div>
      )}
    </div>
  );
};
