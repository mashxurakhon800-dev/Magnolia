import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import { Dish, Language } from '../types/menu';
import { DishImageCanvas } from './DishImageCanvas';

interface DishCardProps {
  dish: Dish;
  currentLanguage: Language;
  onOpenDetails: (dish: Dish) => void;
  isFavorite: boolean;
  onToggleFavorite: (dishId: string) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  currentLanguage,
  onOpenDetails,
  isFavorite,
  onToggleFavorite,
}) => {
  const formattedPrice = dish.price.toLocaleString('ru-RU');

  return (
    <article
      onClick={() => onOpenDetails(dish)}
      className="group relative flex flex-col justify-between bg-[#200B0F] hover:bg-[#270E13] border border-[#441720] hover:border-[#8C3340] rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1"
    >
      {/* 1. Visual Dish Photo Canvas / Image */}
      <div className="relative">
        <DishImageCanvas
          dishId={dish.id}
          placeholderType={dish.defaultPlaceholderType}
          image={dish.image}
          dishTitle={dish.title[currentLanguage]}
          portion={dish.portion[currentLanguage]}
        />

        {/* Favorite button on Top Right of Image */}
        <div className="absolute top-3 right-3 z-20">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(dish.id);
            }}
            className={`p-2 rounded-full backdrop-blur-sm border transition-colors shadow-sm ${
              isFavorite
                ? 'bg-[#B33939] text-white border-[#B33939]'
                : 'bg-[#18080B]/80 text-[#C7B7A3] hover:text-white border-white/10 hover:bg-[#18080B]'
            }`}
            title="В избранное"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. Dish Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base md:text-lg font-bold text-[#FAF5EE] group-hover:text-[#F4D185] transition-colors leading-snug">
              {dish.title[currentLanguage]}
            </h3>
          </div>

          {/* Unboxed Metadata (Portion · Prep Time · Calories) */}
          <div className="mt-1 flex items-center gap-2 text-xs text-[#A89280]">
            <span>{dish.portion[currentLanguage]}</span>
            {dish.preparationTime && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{dish.preparationTime} мин</span>
              </>
            )}
            {dish.calories && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{dish.calories} ккал</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs text-[#C7B7A3] line-clamp-2 leading-relaxed">
            {dish.description[currentLanguage]}
          </p>
        </div>

        {/* Bottom Bar: Price & Details affordance */}
        <div className="mt-4 pt-3 border-t border-[#38131B] flex items-center justify-between gap-3">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-[10px] text-[#8C756B] uppercase tracking-wider font-mono">
              Стоимость
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-mono font-bold text-base md:text-lg text-[#FAF5EE] tabular-nums">
                {formattedPrice}
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold">
                UZS
              </span>
            </div>
          </div>

          {/* Details CTA */}
          <div className="flex items-center gap-1 text-xs font-medium text-[#D4AF37] group-hover:text-white transition-colors">
            <span>Подробнее</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
