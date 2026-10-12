import React, { useState } from 'react';
import { AsianCornerLattice } from './AsianCornerFrame';
import { MagnoliaLogo } from './MagnoliaLogo';
import { Dish, Language } from '../types/menu';
import { ChevronRight } from 'lucide-react';

interface MenuBookViewProps {
  dishes: Dish[];
  currentLanguage: Language;
  onOpenDetails: (dish: Dish) => void;
}

export const MenuBookView: React.FC<MenuBookViewProps> = ({
  dishes,
  currentLanguage,
  onOpenDetails,
}) => {
  const [activeSheet, setActiveSheet] = useState<'rolls' | 'traditional' | 'drinks'>('rolls');

  // Exact dishes categorized
  const rolls = dishes.filter((d) => d.categoryId === 'rolls');
  const chuchvara = dishes.filter((d) => d.categoryId === 'chuchvara');
  const manti = dishes.filter((d) => d.categoryId === 'manti');
  const soups = dishes.filter((d) => d.categoryId === 'soups');
  const mains = dishes.filter((d) => d.categoryId === 'mains');
  const drinks = dishes.filter((d) => d.categoryId === 'drinks');

  const sheetTabs = {
    ru: [
      { id: 'rolls', label: 'Лист 1: 🍣 Роллы и суши (Sushito)' },
      { id: 'traditional', label: 'Лист 2: Традиционная кухня' },
      { id: 'drinks', label: 'Лист 3: Напитки (NAPITKI)' },
    ],
    uz: [
      { id: 'rolls', label: '1-Varaq: 🍣 Rollar va sushi' },
      { id: 'traditional', label: '2-Varaq: Milliy oshxona' },
      { id: 'drinks', label: '3-Varaq: Napitki' },
    ],
    en: [
      { id: 'rolls', label: 'Sheet 1: 🍣 Rolls & Sushi' },
      { id: 'traditional', label: 'Sheet 2: Traditional Kitchen' },
      { id: 'drinks', label: 'Sheet 3: Beverages (NAPITKI)' },
    ],
  }[currentLanguage];

  const renderDishRow = (dish: Dish, customPriceText?: string) => {
    return (
      <div
        key={dish.id}
        onClick={() => onOpenDetails(dish)}
        className="group relative flex items-center justify-between py-2 px-3 hover:bg-[#8C2D38]/30 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-[#D4AF37]/30"
      >
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel tracking-wider text-sm md:text-base text-[#FAF5EE] group-hover:text-[#F4D185] font-medium transition-colors">
              {dish.title[currentLanguage]}
            </span>
          </div>
          <p className="text-[11px] text-[#C7B7A3] truncate max-w-sm">
            {dish.portion[currentLanguage]}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs md:text-sm font-semibold text-[#E5C07B] tabular-nums">
            {customPriceText || `${dish.price.toLocaleString('ru-RU')} UZS`}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#C7B7A3] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    );
  };

  return (
    <section id="card-view" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Sheet Tabs */}
      <div className="flex justify-center mb-6 overflow-x-auto no-scrollbar">
        <div className="inline-flex p-1 bg-[#1F080C] border border-[#521C26] rounded-xl gap-1 shrink-0">
          {sheetTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSheet(tab.id as any)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeSheet === tab.id
                  ? 'bg-[#6B2329] text-white shadow-sm font-semibold'
                  : 'text-[#A89280] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sheet Container styled after user's uploaded menu flyer */}
      <div className="relative bg-[#6B2329] text-[#FAF5EE] border-4 border-[#F2DEB9]/80 rounded-2xl p-6 md:p-12 shadow-2xl overflow-hidden min-h-[700px]">
        {/* Ornate corner Asian fretworks */}
        <AsianCornerLattice position="top-left" className="absolute top-2 left-2 md:top-4 md:left-4" size={64} color="#F2DEB9" />
        <AsianCornerLattice position="top-right" className="absolute top-2 right-2 md:top-4 md:right-4" size={64} color="#F2DEB9" />
        <AsianCornerLattice position="bottom-left" className="absolute bottom-2 left-2 md:bottom-4 md:left-4" size={64} color="#F2DEB9" />
        <AsianCornerLattice position="bottom-right" className="absolute bottom-2 right-2 md:bottom-4 md:right-4" size={64} color="#F2DEB9" />

        {/* Inner golden framing border */}
        <div className="absolute inset-4 md:inset-6 border border-[#F2DEB9]/40 pointer-events-none rounded-xl" />

        {/* Subtle white floral decorative dots */}
        <div className="absolute top-16 left-12 opacity-80 pointer-events-none text-[#F2DEB9] text-xl select-none">🌸</div>
        <div className="absolute top-16 right-12 opacity-80 pointer-events-none text-[#F2DEB9] text-xl select-none">🌸</div>
        <div className="absolute bottom-20 left-12 opacity-80 pointer-events-none text-[#F2DEB9] text-xl select-none">🌸</div>
        <div className="absolute bottom-20 right-12 opacity-80 pointer-events-none text-[#F2DEB9] text-xl select-none">🌸</div>

        {/* Card Header with Magnolia Flower & Title */}
        <div className="relative z-10 flex flex-col items-center text-center pb-6 border-b border-[#F2DEB9]/30">
          <MagnoliaLogo size="md" variant="light" showSubtitle={true} />
        </div>

        {/* Sheet 1: Rolls & Sushi (Sushito) */}
        {activeSheet === 'rolls' && (
          <div className="relative z-10 mt-6 space-y-6 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.25em] text-[#FFE8C2] uppercase">
                {currentLanguage === 'ru' ? 'Роллы и суши Sushito' : currentLanguage === 'uz' ? 'Sushito Rollari va Sushi' : 'Sushito Rolls & Sushi'}
              </h3>
              <p className="text-xs text-[#E5D7C7]/80 mt-1">
                {currentLanguage === 'ru' ? '33 вида роллов: классические маки, запеченные, темпура и филадельфия' : currentLanguage === 'uz' ? '33 turdagi rollar: maki, pishirilgan, tempura va filadelfiya' : '33 varieties: classic maki, baked, tempura and philadelphia'}
              </p>
              <div className="w-24 h-[1px] bg-[#F2DEB9]/60 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
              {rolls.map((dish) => renderDishRow(dish))}
            </div>
          </div>
        )}

        {/* Sheet 2: Traditional Card (Exact matching Image 1) */}
        {activeSheet === 'traditional' && (
          <div className="relative z-10 mt-8 space-y-8 max-w-2xl mx-auto">
            {/* CHUCHVARALAR */}
            <div>
              <div className="text-center mb-4">
                <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-[#FFE8C2] uppercase">
                  Chuchvaralar
                </h3>
                <div className="w-16 h-[1px] bg-[#F2DEB9]/60 mx-auto mt-1" />
              </div>
              <div className="space-y-1">
                {chuchvara.map((dish) => renderDishRow(dish))}
              </div>
            </div>

            {/* MANTI */}
            <div>
              <div className="text-center mb-4">
                <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-[#FFE8C2] uppercase">
                  Manti
                </h3>
                <div className="w-16 h-[1px] bg-[#F2DEB9]/60 mx-auto mt-1" />
              </div>
              <div className="space-y-1">
                {manti.map((dish) => renderDishRow(dish))}
              </div>
            </div>

            {/* BIRINCHI OVQAT */}
            <div>
              <div className="text-center mb-4">
                <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-[#FFE8C2] uppercase">
                  Birinchi Ovqat
                </h3>
                <div className="w-16 h-[1px] bg-[#F2DEB9]/60 mx-auto mt-1" />
              </div>
              <div className="space-y-1">
                {soups.map((dish) => renderDishRow(dish))}
              </div>
            </div>

            {/* QO'YIQ O'VQATLAR */}
            <div>
              <div className="text-center mb-4">
                <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-[0.25em] text-[#FFE8C2] uppercase">
                  Qo’yiq O’vqatlar
                </h3>
                <div className="w-16 h-[1px] bg-[#F2DEB9]/60 mx-auto mt-1" />
              </div>
              <div className="space-y-1">
                {mains.map((dish) => renderDishRow(dish))}
              </div>
            </div>
          </div>
        )}

        {/* Sheet 2: NAPITKI (Exact matching Image 2) */}
        {activeSheet === 'drinks' && (
          <div className="relative z-10 mt-8 space-y-8 max-w-xl mx-auto">
            <div>
              <div className="text-center mb-6">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.3em] text-[#A5E7F0] uppercase">
                  Napitki
                </h3>
                <div className="w-16 h-[1px] bg-[#A5E7F0]/60 mx-auto mt-2" />
              </div>

              <div className="space-y-3 bg-[#4F191E]/70 p-5 rounded-xl border border-[#F2DEB9]/30">
                {drinks.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => onOpenDetails(dish)}
                    className="flex items-center justify-between py-2 px-3 hover:bg-[#8C2D38]/40 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex-1">
                      <span className="font-cinzel tracking-wider text-base md:text-lg text-[#FAF5EE] font-semibold">
                        {dish.title[currentLanguage].toUpperCase()}
                      </span>
                      <span className="ml-3 text-xs font-mono text-[#A5E7F0]">
                        {dish.portion[currentLanguage]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#FFE8C2]">
                        {dish.price.toLocaleString('ru-RU')} UZS
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#C7B7A3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card Footer Note */}
        <div className="relative z-10 mt-10 pt-4 border-t border-[#F2DEB9]/20 text-center text-[10px] md:text-xs text-[#E5D7C7]/80 font-sans-body">
          Нажмите на любое блюдо, чтобы открыть фото, ингредиенты и подробную информацию.
        </div>
      </div>
    </section>
  );
};
