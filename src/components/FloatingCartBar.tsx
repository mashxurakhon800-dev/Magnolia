import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Language } from '../types/menu';

interface FloatingCartBarProps {
  totalCount: number;
  totalSum: number;
  onOpenCart: () => void;
  currentLanguage: Language;
}

export const FloatingCartBar: React.FC<FloatingCartBarProps> = ({
  totalCount,
  totalSum,
  onOpenCart,
  currentLanguage,
}) => {
  if (totalCount === 0) return null;

  return (
    <aside aria-label="Корзина заказа" className="fixed bottom-4 left-4 right-4 z-40 max-w-lg mx-auto animate-in slide-in-from-bottom-6 duration-300">
      <div 
        onClick={onOpenCart}
        className="bg-gradient-to-r from-[#8C2D38] via-[#A63D49] to-[#6B2329] text-white p-3.5 px-5 rounded-2xl shadow-2xl border border-[#D4AF37]/50 flex items-center justify-between gap-3 cursor-pointer hover:brightness-110 active:scale-[0.99] transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-black/25 flex items-center justify-center text-[#F4D185] shadow-inner shrink-0">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-black font-mono font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalCount}
            </span>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#FFE8C2] uppercase tracking-wider">
              {currentLanguage === 'uz' ? 'Buyurtma savati' : 'Ваш заказ'}
            </div>
            <div className="font-mono text-base font-bold text-white leading-tight">
              {totalSum.toLocaleString('ru-RU')} <span className="text-xs text-[#D4AF37]">UZS</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-bold text-white shadow-sm border border-white/20 transition-colors">
          <span>{currentLanguage === 'uz' ? 'Ko\'rish' : 'Заказ'}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </aside>
  );
};
