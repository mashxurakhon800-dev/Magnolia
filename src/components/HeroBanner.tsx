import React from 'react';
import { Search, BookOpen, LayoutGrid, Clock } from 'lucide-react';
import { MagnoliaLogo } from './MagnoliaLogo';
import { AsianCornerLattice } from './AsianCornerFrame';
import { Language } from '../types/menu';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroBannerProps {
  currentLanguage: Language;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'book';
  onViewModeChange: (mode: 'grid' | 'book') => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLanguage,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}) => {
  const content = {
    ru: {
      searchPlaceholder: 'Поиск блюд (чучвара, манты, шурпа, креветки, напитки...)...',
      openStatus: 'Часы работы: 08:00 – 23:00',
      viewCards: 'Витрина с фото',
      viewBook: 'Печатное меню',
      welcome: 'Добро пожаловать в гастрономическое пространство восточного гостеприимства и авторских паназиатских блюд.',
    },
    uz: {
      searchPlaceholder: 'Taomlarni qidirish (chuchvara, manti, sho\'rva, krevetkalar, ichimliklar...)...',
      openStatus: 'Ish vaqti: 08:00 – 23:00',
      viewCards: 'Foto-vitrina',
      viewBook: 'Asl menyu varag\'i',
      welcome: 'Sharqona mehmondo\'stlik, nozik taomlar va mualliflik Pan Osiyo oshxonasiga xush kelibsiz.',
    },
    en: {
      searchPlaceholder: 'Search dishes (dumplings, manti, soups, prawns, drinks...)...',
      openStatus: 'Working hours: 08:00 – 23:00',
      viewCards: 'Photo Cards',
      viewBook: 'Menu Card',
      welcome: 'Welcome to Magnolia: where Pan Asian culinary precision meets Turkish hearth tradition.',
    },
  }[currentLanguage];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#340F15] via-[#4A151E] to-[#250B0F] border-b border-[#521C26] px-4 py-8 md:py-12 transition-all">
      {/* Background Asian textured pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative Ornate Frame Container */}
      <div className="relative max-w-5xl mx-auto border border-[#8C3A46]/40 bg-[#3F1119]/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl">
        {/* Four Authentic Asian Lattice Corners */}
        <AsianCornerLattice position="top-left" className="absolute top-2 left-2 md:top-3 md:left-3" size={48} color="#D4AF37" />
        <AsianCornerLattice position="top-right" className="absolute top-2 right-2 md:top-3 md:right-3" size={48} color="#D4AF37" />
        <AsianCornerLattice position="bottom-left" className="absolute bottom-2 left-2 md:bottom-3 md:left-3" size={48} color="#D4AF37" />
        <AsianCornerLattice position="bottom-right" className="absolute bottom-2 right-2 md:bottom-3 md:right-3" size={48} color="#D4AF37" />

        {/* Central Brand Identity & Logo */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <MagnoliaLogo size="lg" variant="light" showSubtitle={true} />

          <p className="mt-4 max-w-xl text-sm md:text-base text-[#D4C3B2] leading-relaxed font-sans-body">
            {content.welcome}
          </p>

          {/* Operating Hours */}
          <div className="mt-5 flex items-center justify-center text-xs text-[#E5D7C7]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#250B10] border border-[#6B2A34] rounded-lg text-[#C7B7A3]">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{content.openStatus}</span>
            </div>
          </div>

          {/* Search & Mode Switcher Row */}
          <div className="mt-7 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89280]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={content.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 bg-[#1F080C]/90 text-[#F5EBE1] placeholder-[#8C756B] text-sm rounded-xl border border-[#5E222D] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A89280] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Switcher: Interactive Grid vs Authentic Printed Menu Book */}
            <div className="flex items-center p-1 bg-[#1F080C] border border-[#5E222D] rounded-xl shrink-0">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  viewMode === 'grid'
                    ? 'bg-[#6B2329] text-white shadow-sm font-semibold'
                    : 'text-[#A89280] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#F4D185]" />
                <span>{content.viewCards}</span>
              </button>
              <button
                onClick={() => onViewModeChange('book')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  viewMode === 'book'
                    ? 'bg-[#6B2329] text-white shadow-sm font-semibold'
                    : 'text-[#A89280] hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F4D185]" />
                <span>{content.viewBook}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
