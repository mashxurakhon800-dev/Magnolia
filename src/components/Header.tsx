import React from 'react';
import { Language } from '../types/menu';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const navText = {
    ru: {
      menu: 'Все меню',
      chuchvara: 'Чучвара',
      manti: 'Манты',
      soups: 'Первые блюда',
      mains: 'Вторые блюда',
      pan_asian: 'Паназия',
      drinks: 'Напитки',
      book: 'Карта меню',
    },
    uz: {
      menu: 'Barcha menyu',
      chuchvara: 'Chuchvaralar',
      manti: 'Manti',
      soups: 'Birinchi ovqat',
      mains: 'Qo’yiq o’vqatlar',
      pan_asian: 'Pan Osiyo',
      drinks: 'Napitki',
      book: 'Menyu varag’i',
    },
    en: {
      menu: 'All Menu',
      chuchvara: 'Chuchvara',
      manti: 'Manti',
      soups: 'First Courses',
      mains: 'Main Dishes',
      pan_asian: 'Pan Asian',
      drinks: 'Beverages',
      book: 'Menu Card',
    },
  }[currentLanguage];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#180A0D]/95 backdrop-blur-md border-b border-[#3D1A21] px-4 md:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone - Single line wordmark */}
        <a
          href="#top"
          className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] text-[#F5EBE1] hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
          <span>MAGNOLIA</span>
        </a>

        {/* Zone 2: Concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-medium text-[#C7B7A3]">
          <a
            href="#chuchvara-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.chuchvara}
          </a>
          <a
            href="#manti-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.manti}
          </a>
          <a
            href="#soups-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.soups}
          </a>
          <a
            href="#mains-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.mains}
          </a>
          <a
            href="#pan_asian-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.pan_asian}
          </a>
          <a
            href="#drinks-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.drinks}
          </a>
          <a
            href="#card-view"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.book}
          </a>
        </nav>

        {/* Zone 3: 1 clean primary control - Language switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-[#281116] border border-[#4D222A] rounded-xl p-0.5 text-xs text-[#D8C7B4]">
            <button
              onClick={() => onLanguageChange('uz')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                currentLanguage === 'uz' ? 'bg-[#6B2329] text-white font-semibold' : 'hover:text-white'
              }`}
              title="O'zbekcha"
            >
              UZ
            </button>
            <button
              onClick={() => onLanguageChange('ru')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                currentLanguage === 'ru' ? 'bg-[#6B2329] text-white font-semibold' : 'hover:text-white'
              }`}
              title="Русский"
            >
              RU
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                currentLanguage === 'en' ? 'bg-[#6B2329] text-white font-semibold' : 'hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
