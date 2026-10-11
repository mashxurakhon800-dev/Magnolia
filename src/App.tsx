import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNav } from './components/CategoryNav';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuBookView } from './components/MenuBookView';
import { Footer } from './components/Footer';
import { MENU_ITEMS, CATEGORIES } from './data/menuData';
import { Dish, CategoryId, Language } from './types/menu';
import { 
  Search, 
  Soup, 
  CircleDot, 
  CookingPot, 
  Flame, 
  Sparkles, 
  CupSoda 
} from 'lucide-react';

const CATEGORY_SECTION_ICONS: Record<string, React.FC<{ className?: string }>> = {
  chuchvara: Soup,
  manti: CircleDot,
  soups: CookingPot,
  mains: Flame,
  pan_asian: Sparkles,
  drinks: CupSoda,
};

export default function App() {
  // State
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'book'>('grid');

  // Modal
  const [selectedDishForDetails, setSelectedDishForDetails] = useState<Dish | null>(null);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('magnolia_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dietary filter tag
  const [activeFilterTag, setActiveFilterTag] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('magnolia_favs', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const handleToggleFavorite = (dishId: string) => {
    setFavorites((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [...prev, dishId]
    );
  };

  // Filter items logic
  const filterDish = (dish: Dish) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesTitle =
        dish.title.ru.toLowerCase().includes(q) ||
        dish.title.uz.toLowerCase().includes(q) ||
        dish.title.en.toLowerCase().includes(q);
      const matchesDesc =
        dish.description.ru.toLowerCase().includes(q) ||
        dish.description.uz.toLowerCase().includes(q) ||
        dish.description.en.toLowerCase().includes(q);
      const matchesTag = dish.tags.some((t) => t.toLowerCase().includes(q));

      if (!matchesTitle && !matchesDesc && !matchesTag) {
        return false;
      }
    }

    // Tag filter
    if (activeFilterTag) {
      if (activeFilterTag === 'favorites') {
        return favorites.includes(dish.id);
      }
      if (activeFilterTag === 'popular') {
        return !!dish.popular;
      }
      if (activeFilterTag === 'asian') {
        return !!dish.asianOrigin;
      }
    }

    return true;
  };

  // Group dishes by category
  const categoriesToDisplay = useMemo(() => {
    const list = CATEGORIES.filter((c) => c.id !== 'all');
    if (activeCategory === 'all') return list;
    return list.filter((c) => c.id === activeCategory);
  }, [activeCategory]);

  const dishesByCategory = useMemo(() => {
    const grouped: Record<string, Dish[]> = {};
    CATEGORIES.filter((c) => c.id !== 'all').forEach((cat) => {
      grouped[cat.id] = MENU_ITEMS.filter(
        (dish) => dish.categoryId === cat.id && filterDish(dish)
      );
    });
    return grouped;
  }, [searchQuery, activeFilterTag, favorites]);

  // Counts for CategoryNav
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: MENU_ITEMS.length,
      chuchvara: 0,
      manti: 0,
      soups: 0,
      mains: 0,
      pan_asian: 0,
      drinks: 0,
    };

    MENU_ITEMS.forEach((d) => {
      counts[d.categoryId] = (counts[d.categoryId] || 0) + 1;
    });

    return counts;
  }, []);

  const totalFilteredCount = useMemo(() => {
    return Object.values(dishesByCategory).reduce((sum, arr) => sum + arr.length, 0);
  }, [dishesByCategory]);

  const filterTagLabels = {
    ru: [
      { id: 'all', label: 'Все блюда' },
      { id: 'popular', label: 'Популярное' },
      { id: 'asian', label: 'Паназия' },
      { id: 'favorites', label: 'Избранное' },
    ],
    uz: [
      { id: 'all', label: 'Hammasi' },
      { id: 'popular', label: 'Ommabop' },
      { id: 'asian', label: 'Pan Osiyo' },
      { id: 'favorites', label: 'Sevimlilar' },
    ],
    en: [
      { id: 'all', label: 'All Items' },
      { id: 'popular', label: 'Popular' },
      { id: 'asian', label: 'Pan Asian' },
      { id: 'favorites', label: 'Favorites' },
    ],
  }[currentLanguage];

  return (
    <div className="min-h-screen bg-[#180A0E] text-[#FAF5EE] flex flex-col font-sans-body">
      {/* 1. Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* 2. Hero Banner */}
      <div id="top">
        <HeroBanner
          currentLanguage={currentLanguage}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {/* 3. Category Navigation Bar */}
      <div id="menu-section">
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            setActiveFilterTag(null);
          }}
          currentLanguage={currentLanguage}
          counts={categoryCounts}
        />
      </div>

      {/* 4. Sub-filters */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-4 pb-2 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 p-1 bg-[#220B10] border border-[#45161E] rounded-xl shrink-0">
          {filterTagLabels.map((tag) => {
            const isSelected = (!activeFilterTag && tag.id === 'all') || activeFilterTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setActiveFilterTag(tag.id === 'all' ? null : tag.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#6B2329] text-white shadow-sm font-semibold'
                    : 'text-[#A89280] hover:text-white'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Main Content: Grid Sections OR Menu Book */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
        {viewMode === 'book' ? (
          <MenuBookView
            dishes={MENU_ITEMS}
            currentLanguage={currentLanguage}
            onOpenDetails={(dish) => setSelectedDishForDetails(dish)}
          />
        ) : (
          <div className="space-y-12">
            {totalFilteredCount === 0 ? (
              /* Empty Search State */
              <div className="py-20 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#250C10] border border-[#4D1821] flex items-center justify-center text-2xl mx-auto text-[#A89280]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Блюда не найдены
                </h3>
                <p className="text-xs text-[#A89280] max-w-sm mx-auto leading-relaxed">
                  По запросу "{searchQuery}" ничего не найдено.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveFilterTag(null);
                  }}
                  className="px-4 py-2 bg-[#6B2329] hover:bg-[#8C2D38] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Показать все блюда
                </button>
              </div>
            ) : (
              /* CATEGORY SECTIONS */
              categoriesToDisplay.map((category) => {
                const categoryDishes = dishesByCategory[category.id] || [];
                if (categoryDishes.length === 0) return null;

                const CategoryIcon = CATEGORY_SECTION_ICONS[category.id] || Sparkles;

                return (
                  <section
                    key={category.id}
                    id={`${category.id}-section`}
                    className="scroll-mt-32 space-y-5"
                  >
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b border-[#471822]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#280C12] border border-[#5A1E29] flex items-center justify-center text-[#F4D185] shadow-inner shrink-0">
                          <CategoryIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-[#FAF5EE]">
                            {category.name[currentLanguage]}
                          </h2>
                          {category.description && (
                            <p className="text-xs text-[#C7B7A3] mt-0.5 font-sans-body">
                              {category.description[currentLanguage]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-[11px] text-[#8C756B] hidden md:block">
                        Нажмите на карточку, чтобы посмотреть описание
                      </div>
                    </div>

                    {/* Responsive Grid of Dish Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {categoryDishes.map((dish) => {
                        const isFav = favorites.includes(dish.id);

                        return (
                          <DishCard
                            key={dish.id}
                            dish={dish}
                            currentLanguage={currentLanguage}
                            onOpenDetails={(d) => setSelectedDishForDetails(d)}
                            isFavorite={isFav}
                            onToggleFavorite={handleToggleFavorite}
                          />
                        );
                      })}
                    </div>
                  </section>
                );
              })
            )}
          </div>
        )}
      </main>

      {/* 6. Dish Details Modal */}
      <DishDetailModal
        dish={selectedDishForDetails}
        isOpen={!!selectedDishForDetails}
        onClose={() => setSelectedDishForDetails(null)}
        currentLanguage={currentLanguage}
        isFavorite={selectedDishForDetails ? favorites.includes(selectedDishForDetails.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* 7. Footer */}
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}
