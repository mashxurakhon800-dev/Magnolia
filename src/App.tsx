import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNav } from './components/CategoryNav';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuBookView } from './components/MenuBookView';
import { PWAInstallModal } from './components/PWAInstallModal';
import { Footer } from './components/Footer';
import { MENU_ITEMS, CATEGORIES } from './data/menuData';
import { Dish, CategoryId, Language, CartItem } from './types/menu';
import { AdminMenuEditorModal } from './components/AdminMenuEditorModal';
import { CartModal } from './components/CartModal';
import { FloatingCartBar } from './components/FloatingCartBar';
import { 
  Search, 
  Soup, 
  CircleDot, 
  CookingPot, 
  Flame, 
  Sparkles, 
  CupSoda,
  Salad,
  Plus,
  Copy,
  RotateCcw,
  Edit3
} from 'lucide-react';

const CATEGORY_SECTION_ICONS: Record<string, React.FC<{ className?: string }>> = {
  salads: Salad,
  chuchvara: Soup,
  manti: CircleDot,
  soups: CookingPot,
  mains: Flame,
  drinks: CupSoda,
};

export default function App() {
  // State
  const [currentLanguage, setCurrentLanguage] = useState<Language>('uz');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'book'>('grid');

  // Dynamic dishes state with localStorage persistence
  const [dishes, setDishes] = useState<Dish[]>(() => {
    try {
      const saved = localStorage.getItem('magnolia_custom_menu_v6');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return MENU_ITEMS;
  });

  // Admin Mode state
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('magnolia_admin_mode') === 'true';
    } catch {
      return false;
    }
  });

  // Editor Modal
  const [dishToEdit, setDishToEdit] = useState<Dish | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Modal
  const [selectedDishForDetails, setSelectedDishForDetails] = useState<Dish | null>(null);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('magnolia_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cart & Order State for Guests and Waiters
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('magnolia_cart_order');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('magnolia_cart_order', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const handleAddToCart = (dish: Dish, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { dish, quantity }];
    });
  };

  const handleUpdateCartQuantity = (dishId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (dishId: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartMap = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((item) => {
      map[item.dish.id] = item.quantity;
    });
    return map;
  }, [cartItems]);

  const cartTotalCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const cartTotalSum = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  }, [cartItems]);

  // Dietary filter tag
  const [activeFilterTag, setActiveFilterTag] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('magnolia_favs', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('magnolia_admin_mode', String(isAdminMode));
    } catch {}
  }, [isAdminMode]);

  const handleToggleFavorite = (dishId: string) => {
    setFavorites((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [...prev, dishId]
    );
  };

  const handleSaveDish = (updatedDish: Dish) => {
    setDishes((prev) => {
      const exists = prev.some((d) => d.id === updatedDish.id);
      const next = exists
        ? prev.map((d) => (d.id === updatedDish.id ? updatedDish : d))
        : [updatedDish, ...prev];
      try {
        localStorage.setItem('magnolia_custom_menu_v6', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleDeleteDish = (dishId: string) => {
    setDishes((prev) => {
      const next = prev.filter((d) => d.id !== dishId);
      try {
        localStorage.setItem('magnolia_custom_menu_v6', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleResetToDefault = () => {
    if (confirm(currentLanguage === 'uz' ? "Barcha taomlar va narxlarni asl holatiga qaytarishni xohlaysizmi?" : "Сбросить меню к исходному состоянию?")) {
      localStorage.removeItem('magnolia_custom_menu_v6');
      setDishes(MENU_ITEMS);
    }
  };

  const handleExportMenuJson = () => {
    const jsonStr = JSON.stringify(dishes, null, 2);
    navigator.clipboard.writeText(jsonStr);
    alert(currentLanguage === 'uz' ? "Menyu ma'lumotlari (JSON) nusxalandi!" : "Данные меню скопированы в буфер обмена!");
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
      grouped[cat.id] = dishes.filter(
        (dish) => dish.categoryId === cat.id && filterDish(dish)
      );
    });
    return grouped;
  }, [dishes, searchQuery, activeFilterTag, favorites]);

  // Counts for CategoryNav
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: dishes.length,
      salads: 0,
      chuchvara: 0,
      manti: 0,
      soups: 0,
      mains: 0,
      drinks: 0,
    };

    dishes.forEach((d) => {
      counts[d.categoryId] = (counts[d.categoryId] || 0) + 1;
    });

    return counts;
  }, [dishes]);

  const totalFilteredCount = useMemo(() => {
    return Object.values(dishesByCategory).reduce((sum, arr) => sum + arr.length, 0);
  }, [dishesByCategory]);

  const filterTagLabels = {
    ru: [
      { id: 'all', label: 'Все блюда' },
      { id: 'popular', label: 'Популярное' },
      { id: 'favorites', label: 'Избранное' },
    ],
    uz: [
      { id: 'all', label: 'Hammasi' },
      { id: 'popular', label: 'Ommabop' },
      { id: 'favorites', label: 'Sevimlilar' },
    ],
    en: [
      { id: 'all', label: 'All Items' },
      { id: 'popular', label: 'Popular' },
      { id: 'favorites', label: 'Favorites' },
    ],
  }[currentLanguage];

  return (
    <div className="min-h-screen bg-[#180A0E] text-[#FAF5EE] flex flex-col font-sans-body">
      {/* 1. Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenInstall={() => setIsInstallModalOpen(true)}
        isAdminMode={isAdminMode}
        onToggleAdminMode={() => setIsAdminMode(!isAdminMode)}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Admin Mode Management Bar */}
      {isAdminMode && (
        <div className="bg-[#2D0B12] border-b border-[#D4AF37]/50 px-4 py-2.5 shadow-xl sticky top-[58px] z-35">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#FAF5EE]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-[#D4AF37]">
                {currentLanguage === 'uz' ? 'Boshqaruv rejimi (Admin) faol' : 'Режим управления меню (Админ)'}
              </span>
              <span className="text-[#A89280]">
                ({currentLanguage === 'uz' ? `Jami taomlar: ${dishes.length} ta` : `Всего блюд: ${dishes.length}`})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setDishToEdit(null);
                  setIsEditorOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37] hover:bg-[#F4D185] text-black font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'uz' ? '+ Yangi taom qo\'shish' : '+ Добавить блюдо'}</span>
              </button>

              <button
                onClick={handleExportMenuJson}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF5EE] border border-white/15 flex items-center gap-1.5 transition-colors"
                title="Barcha o'zgarishlarni JSON qilib nusxalash"
              >
                <Copy className="w-3.5 h-3.5 text-[#F4D185]" />
                <span>{currentLanguage === 'uz' ? 'Eksport (JSON)' : 'Экспорт'}</span>
              </button>

              <button
                onClick={handleResetToDefault}
                className="px-2.5 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 text-red-200 border border-red-800/40 flex items-center gap-1 transition-colors"
                title="Menyuni asl holatiga qaytarish"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{currentLanguage === 'uz' ? 'Asliga qaytarish' : 'Сброс'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

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
            dishes={dishes}
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
                            isAdminMode={isAdminMode}
                            onEditDish={(d) => {
                              setDishToEdit(d);
                              setIsEditorOpen(true);
                            }}
                            onDeleteDish={handleDeleteDish}
                            cartQuantity={cartMap[dish.id] || 0}
                            onAddToCart={handleAddToCart}
                            onUpdateCartQuantity={handleUpdateCartQuantity}
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
        onAddToCart={handleAddToCart}
        cartQuantity={selectedDishForDetails ? (cartMap[selectedDishForDetails.id] || 0) : 0}
      />

      {/* PWA Tablet Install Modal */}
      <PWAInstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        currentLanguage={currentLanguage}
      />

      {/* Admin Menu Editor Modal */}
      <AdminMenuEditorModal
        isOpen={isEditorOpen}
        onClose={() => {
          setIsEditorOpen(false);
          setDishToEdit(null);
        }}
        dishToEdit={dishToEdit}
        onSaveDish={handleSaveDish}
        onDeleteDish={handleDeleteDish}
        currentLanguage={currentLanguage}
      />

      {/* Guest & Waiter Cart / Order Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        currentLanguage={currentLanguage}
      />

      {/* Floating Cart Bar (Bottom action) */}
      <FloatingCartBar
        totalCount={cartTotalCount}
        totalSum={cartTotalSum}
        onOpenCart={() => setIsCartOpen(true)}
        currentLanguage={currentLanguage}
      />

      {/* 7. Footer */}
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}
