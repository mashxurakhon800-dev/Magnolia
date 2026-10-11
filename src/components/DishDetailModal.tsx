import React from 'react';
import { X, Flame, Clock, Heart } from 'lucide-react';
import { Dish, Language } from '../types/menu';
import { DishImageCanvas } from './DishImageCanvas';

interface DishDetailModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  isFavorite: boolean;
  onToggleFavorite: (dishId: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  isOpen,
  onClose,
  currentLanguage,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!isOpen || !dish) return null;

  const labels = {
    ru: {
      options: 'Варианты порций и объемов',
      prepTime: 'Время подачи',
      calories: 'Калорийность',
      price: 'Стоимость',
    },
    uz: {
      options: 'Porsiya va hajm variantlari',
      prepTime: 'Tayyorlanish vaqti',
      calories: 'Kaloriya',
      price: 'Narxi',
    },
    en: {
      options: 'Portion & volume options',
      prepTime: 'Prep time',
      calories: 'Calories',
      price: 'Price',
    },
  }[currentLanguage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#220B10] border border-[#6B2329] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Visual Cover */}
        <div className="relative">
          <DishImageCanvas
            dishId={dish.id}
            placeholderType={dish.defaultPlaceholderType}
            image={dish.image}
            dishTitle={dish.title[currentLanguage]}
            portion={dish.portion[currentLanguage]}
            className="h-56 md:h-64"
          />

          {/* Close & Favorite Overlay */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            <button
              onClick={() => onToggleFavorite(dish.id)}
              className={`p-2 rounded-full border transition-colors ${
                isFavorite
                  ? 'bg-[#B33939] text-white border-[#B33939]'
                  : 'bg-[#18080B]/80 text-[#C7B7A3] hover:text-white border-white/10'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#18080B]/80 text-[#C7B7A3] hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#D4C3B2]">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {dish.categoryId.replace('_', ' ').toUpperCase()}
            </span>
            <h2 className="mt-1 font-serif text-xl md:text-2xl font-bold text-[#FAF5EE] leading-snug">
              {dish.title[currentLanguage]}
            </h2>
            <p className="mt-1 text-xs text-[#A89280]">
              {dish.portion[currentLanguage]}
            </p>
          </div>

          <div>
            <p className="leading-relaxed text-[#DFD0C0]">
              {dish.description[currentLanguage]}
            </p>
          </div>

          {/* Metadata strip */}
          <div className="flex items-center gap-3 text-xs text-[#A89280] py-2 border-y border-[#3A1218]">
            {dish.preparationTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{dish.preparationTime} мин</span>
              </span>
            )}
            {dish.calories && (
              <>
                <span aria-hidden="true">·</span>
                <span>{dish.calories} ккал</span>
              </>
            )}
            {dish.spiceLevel ? (
              <>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-[#F28B82]">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{dish.spiceLevel > 1 ? 'Острое блюдо' : 'Легкая острота'}</span>
                </span>
              </>
            ) : null}
          </div>

          {/* Options / Volume Breakdown */}
          {dish.options && dish.options.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-[#F4D185] uppercase tracking-wider mb-2">
                {labels.options}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dish.options.map((opt, idx) => {
                  const optPrice = dish.price + opt.priceModifier;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl border border-[#3D141C] bg-[#1A080C] text-xs"
                    >
                      <span className="text-[#C7B7A3] font-medium">{opt.name[currentLanguage]}</span>
                      <span className="font-mono tabular-nums text-[#F4D185] font-semibold">
                        {optPrice.toLocaleString('ru-RU')} UZS
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-[#1A070A] border-t border-[#3D1219] flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[#A89280] uppercase tracking-wider font-mono">
              {labels.price}
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-mono font-bold text-xl text-[#F4D185] tabular-nums">
                {dish.price.toLocaleString('ru-RU')}
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold">UZS</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#6B2329] hover:bg-[#8C2D38] text-white text-xs font-semibold rounded-xl transition-all"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
