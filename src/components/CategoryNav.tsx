import React from 'react';
import { 
  UtensilsCrossed, 
  Soup, 
  CircleDot, 
  CookingPot, 
  Flame, 
  Sparkles, 
  CupSoda,
  Salad,
  Cake
} from 'lucide-react';
import { CategoryId, Language } from '../types/menu';
import { CATEGORIES } from '../data/menuData';

interface CategoryNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  currentLanguage: Language;
  counts: Record<CategoryId, number>;
}

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  UtensilsCrossed,
  Salad,
  Soup,
  CircleDot,
  CookingPot,
  Flame,
  Sparkles,
  Cake,
  CupSoda,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  currentLanguage,
  counts,
}) => {
  return (
    <nav aria-label="Категории меню" className="sticky top-[58px] z-30 w-full bg-[#180A0D]/95 backdrop-blur-md border-b border-[#3D1A21] py-2.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const Icon = ICONS[cat.iconName] || UtensilsCrossed;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-[#6B2329] text-white shadow-sm border border-[#A63D49]'
                  : 'bg-[#250C10] text-[#BFAFA0] hover:text-white hover:bg-[#331117] border border-[#40171F]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F4D185]' : 'text-[#8C756B]'}`} />
              <span>{cat.name[currentLanguage]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
