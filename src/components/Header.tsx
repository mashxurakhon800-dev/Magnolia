import React from 'react';
import { Tablet, Settings, ShoppingBag } from 'lucide-react';
import { Language } from '../types/menu';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenInstall?: () => void;
  isAdminMode?: boolean;
  onToggleAdminMode?: () => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenInstall,
  isAdminMode = false,
  onToggleAdminMode,
  cartCount = 0,
  onOpenCart,
}) => {
  const navText = {
    ru: {
      menu: 'Все меню',
      salads: 'Салаты',
      chuchvara: 'Чучвара',
      manti: 'Манты',
      soups: 'Первые блюда',
      mains: 'Вторые блюда',
      drinks: 'Напитки',
      book: 'Карта меню',
    },
    uz: {
      menu: 'Barcha menyu',
      salads: 'Salatlar',
      chuchvara: 'Chuchvaralar',
      manti: 'Manti',
      soups: 'Birinchi ovqat',
      mains: 'Qo’yiq o’vqatlar',
      drinks: 'Napitki',
      book: 'Menyu varag’i',
    },
    en: {
      menu: 'All Menu',
      salads: 'Salads',
      chuchvara: 'Chuchvara',
      manti: 'Manti',
      soups: 'First Courses',
      mains: 'Main Dishes',
      drinks: 'Beverages',
      book: 'Menu Card',
    },
  }[currentLanguage];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#180A0D]/95 backdrop-blur-md border-b border-[#3D1A21] px-4 md:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone - Logo & wordmark */}
        <a
          href="#top"
          className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] text-[#F5EBE1] hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <img
            src="/magnolia-logo.png"
            alt="Magnolia"
            className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-full shadow-md border border-[#D4AF37]/50"
          />
          <span>MAGNOLIA</span>
        </a>

        {/* Zone 2: Concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-medium text-[#C7B7A3]">
          <a
            href="#salads-section"
            className="hover:text-[#F5EBE1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {navText.salads}
          </a>
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

        {/* Zone 3: 1 clean primary control - Language switcher & Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenInstall && (
            <button
              onClick={onOpenInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#45161F] hover:bg-[#5E1F2A] text-[#FAF5EE] border border-[#7D2836] rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95"
              title="Установить приложение на планшет"
            >
              <Tablet className="w-3.5 h-3.5 text-[#F4D185]" />
              <span className="hidden sm:inline">На планшет</span>
            </button>
          )}

          {onToggleAdminMode && (
            <button
              onClick={onToggleAdminMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95 border ${
                isAdminMode
                  ? 'bg-[#D4AF37] text-black border-[#FFE082] shadow-[#D4AF37]/30 ring-2 ring-[#D4AF37]/50'
                  : 'bg-[#2E1015] hover:bg-[#45161F] text-[#FAF5EE] border-[#66202C]'
              }`}
              title="Narxlarni almashtirish va ovqatlarni o'chirish / tahrirlash (Admin)"
            >
              <Settings className={`w-3.5 h-3.5 ${isAdminMode ? 'animate-spin-slow' : 'text-[#D4AF37]'}`} />
              <span className="hidden sm:inline">
                {isAdminMode 
                  ? (currentLanguage === 'uz' ? 'Tahrirlash rejimi' : 'Режим правки') 
                  : (currentLanguage === 'uz' ? 'Boshqaruv' : 'Управление')
                }
              </span>
            </button>
          )}

          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8C2D38] hover:bg-[#A63D49] text-white border border-[#D4AF37]/50 text-xs font-bold transition-all shadow-md active:scale-95"
              title="Buyurtma savati / Корзина заказа"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F4D185]" />
              <span className="hidden sm:inline">
                {currentLanguage === 'uz' ? 'Buyurtma' : 'Заказ'}
              </span>
              {cartCount > 0 && (
                <span className="bg-[#D4AF37] text-black font-mono font-bold text-[10px] px-1.5 py-0.2 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          )}

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
