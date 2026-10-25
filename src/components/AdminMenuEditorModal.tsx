import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, Plus, Image as ImageIcon, DollarSign, Clock, Flame } from 'lucide-react';
import { Dish, CategoryId, Language } from '../types/menu';
import { CATEGORIES } from '../data/menuData';

interface AdminMenuEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishToEdit: Dish | null;
  onSaveDish: (dish: Dish) => void;
  onDeleteDish: (dishId: string) => void;
  currentLanguage: Language;
}

export const AdminMenuEditorModal: React.FC<AdminMenuEditorModalProps> = ({
  isOpen,
  onClose,
  dishToEdit,
  onSaveDish,
  onDeleteDish,
  currentLanguage,
}) => {
  const [formData, setFormData] = useState<Partial<Dish>>({
    id: '',
    categoryId: 'chuchvara',
    title: { ru: '', uz: '', en: '' },
    description: { ru: '', uz: '', en: '' },
    portion: { ru: '1 порция', uz: '1 porsiya', en: '1 portion' },
    price: 45000,
    tags: ['Фирменное'],
    popular: true,
    preparationTime: 15,
    calories: 450,
    image: '',
    defaultPlaceholderType: 'chuchvara-alfredo',
  });

  const [activeLangTab, setActiveLangTab] = useState<'uz' | 'ru' | 'en'>('uz');

  useEffect(() => {
    if (dishToEdit) {
      setFormData({ ...dishToEdit });
    } else {
      setFormData({
        id: `dish-${Date.now()}`,
        categoryId: 'salads',
        title: { ru: '', uz: '', en: '' },
        description: { ru: '', uz: '', en: '' },
        portion: { ru: '1 порция', uz: '1 porsiya', en: '1 portion' },
        price: 45000,
        tags: ['Yangi'],
        popular: false,
        preparationTime: 12,
        calories: 350,
        image: '',
        defaultPlaceholderType: 'fresh-salad',
      });
    }
  }, [dishToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title?.uz && !formData.title?.ru) {
      alert("Iltimos, taom nomini kiriting! / Пожалуйста, укажите название блюда!");
      return;
    }

    // Ensure all language fields have fallback
    const completeDish: Dish = {
      id: formData.id || `dish-${Date.now()}`,
      categoryId: (formData.categoryId as CategoryId) || 'chuchvara',
      title: {
        uz: formData.title?.uz || formData.title?.ru || 'Yangi taom',
        ru: formData.title?.ru || formData.title?.uz || 'Новое блюдо',
        en: formData.title?.en || formData.title?.uz || 'New Dish',
      },
      description: {
        uz: formData.description?.uz || formData.description?.ru || '',
        ru: formData.description?.ru || formData.description?.uz || '',
        en: formData.description?.en || formData.description?.uz || '',
      },
      portion: {
        uz: formData.portion?.uz || '1 porsiya',
        ru: formData.portion?.ru || '1 порция',
        en: formData.portion?.en || '1 portion',
      },
      price: Number(formData.price) || 0,
      tags: formData.tags || ['Taom'],
      popular: !!formData.popular,
      preparationTime: Number(formData.preparationTime) || 15,
      calories: Number(formData.calories) || 400,
      image: formData.image || undefined,
      defaultPlaceholderType: formData.defaultPlaceholderType || 'fresh-salad',
    };

    onSaveDish(completeDish);
    onClose();
  };

  const isEditing = !!dishToEdit;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#1C080B] border border-[#8C2D38] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3D141A] bg-[#260B10]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37]" />
            <h2 className="font-cinzel text-lg md:text-xl font-bold text-[#FAF5EE]">
              {isEditing 
                ? (currentLanguage === 'uz' ? 'Taomni tahrirlash' : 'Редактировать блюдо')
                : (currentLanguage === 'uz' ? 'Yangi taom qo\'shish' : 'Добавить новое блюдо')
              }
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#C7B7A3] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-5 text-sm text-[#E5D7C7]">
          {/* Category & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Kategoriya / Категория
              </label>
              <select
                value={formData.categoryId || 'chuchvara'}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value as CategoryId })}
                className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2.5 text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
              >
                {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name[currentLanguage]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                Narxi (so'mda) / Цена (UZS)
              </label>
              <input
                type="number"
                step="1000"
                min="0"
                required
                value={formData.price || 0}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2.5 font-mono text-base font-bold text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Masalan: 48000"
              />
            </div>
          </div>

          {/* Language Switcher Tabs for Titles & Descriptions */}
          <div className="pt-2 border-t border-[#3D141A]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                Taom nomi va tavsifi (Til bo'yicha)
              </span>
              <div className="flex items-center gap-1 bg-[#120406] p-1 rounded-lg border border-[#42161E]">
                {(['uz', 'ru', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setActiveLangTab(lang)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded uppercase transition-colors ${
                      activeLangTab === lang
                        ? 'bg-[#8C2D38] text-white shadow-sm'
                        : 'text-[#A89280] hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Title in active lang */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-[#A89280] mb-1">
                  Nomi ({activeLangTab.toUpperCase()}) / Название:
                </label>
                <input
                  type="text"
                  required={activeLangTab === 'uz'}
                  value={formData.title?.[activeLangTab] || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    title: { ...formData.title, [activeLangTab]: e.target.value } as any,
                  })}
                  className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2 text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                  placeholder={`Taom nomi (${activeLangTab.toUpperCase()})`}
                />
              </div>

              {/* Description in active lang */}
              <div>
                <label className="block text-xs text-[#A89280] mb-1">
                  Tavsifi ({activeLangTab.toUpperCase()}) / Описание состава:
                </label>
                <textarea
                  rows={2}
                  value={formData.description?.[activeLangTab] || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    description: { ...formData.description, [activeLangTab]: e.target.value } as any,
                  })}
                  className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2 text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                  placeholder={`Tarkibi va ta'rifi (${activeLangTab.toUpperCase()})`}
                />
              </div>

              {/* Portion in active lang */}
              <div>
                <label className="block text-xs text-[#A89280] mb-1">
                  Porsiyasi / Порция:
                </label>
                <input
                  type="text"
                  value={formData.portion?.[activeLangTab] || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    portion: { ...formData.portion, [activeLangTab]: e.target.value } as any,
                  })}
                  className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2 text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                  placeholder="Masalan: 1 porsiya (280 g)"
                />
              </div>
            </div>
          </div>

          {/* Image URL & Preview */}
          <div className="pt-2 border-t border-[#3D141A]">
            <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" />
              Rasm manzili (URL / Fayl yo'li) / Фото блюда
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="flex-1 bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2 text-xs font-mono text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Masalan: /dishes/pirojok-kartoshka-gosht.jpg"
              />
              {formData.image && (
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#D4AF37]/40 shrink-0 bg-black">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <p className="mt-1 text-[11px] text-[#A89280]">
              Mavjud rasmlar: /dishes/chuchvara-alfredo.jpg, /dishes/chuchvara-bolognese.jpg, /dishes/kok-chuchvara.jpg, /dishes/shorva.jpg, /dishes/qovurma-assorti.jpg, /dishes/caesar-salad.jpg, /dishes/pirojok-kartoshka-gosht.jpg
            </p>
          </div>

          {/* Prep time, calories, popular */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#3D141A]">
            <div>
              <label className="block text-xs text-[#A89280] mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Tayyorlanish (daqiqa)
              </label>
              <input
                type="number"
                value={formData.preparationTime || 15}
                onChange={(e) => setFormData({ ...formData, preparationTime: Number(e.target.value) })}
                className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3 py-1.5 text-xs text-[#FAF5EE]"
              />
            </div>

            <div>
              <label className="block text-xs text-[#A89280] mb-1 flex items-center gap-1">
                <Flame className="w-3 h-3" /> Kaloriya (kkal)
              </label>
              <input
                type="number"
                value={formData.calories || 400}
                onChange={(e) => setFormData({ ...formData, calories: Number(e.target.value) })}
                className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3 py-1.5 text-xs text-[#FAF5EE]"
              />
            </div>

            <div className="flex items-center gap-2 pt-5">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FAF5EE]">
                <input
                  type="checkbox"
                  checked={!!formData.popular}
                  onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                  className="w-4 h-4 rounded text-[#8C2D38] focus:ring-0 bg-[#120406] border-[#521C24]"
                />
                <span>Ommabop (Xit)</span>
              </label>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#3D141A]">
            {isEditing ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(currentLanguage === 'uz' ? `Haqiqatan ham "${formData.title?.uz || 'ushbu taom'}"ni menyudan o'chirmoqchimisiz?` : `Вы действительно хотите удалить блюдо?`)) {
                    if (formData.id) {
                      onDeleteDish(formData.id);
                      onClose();
                    }
                  }
                }}
                className="px-3.5 py-2 rounded-xl bg-red-950/80 hover:bg-red-800 text-red-200 border border-red-700/60 flex items-center gap-1.5 text-xs font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>O'chirish / Удалить</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#C7B7A3] text-xs font-semibold transition-colors"
              >
                Bekor qilish / Отмена
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8C2D38] to-[#B33939] hover:from-[#A63D49] hover:to-[#C94A4A] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Saqlash / Сохранить</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
