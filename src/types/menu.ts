export type Language = 'ru' | 'uz' | 'en';

export interface LocalizedText {
  ru: string;
  uz: string;
  en: string;
}

export type CategoryId = 
  | 'all'
  | 'salads'
  | 'chuchvara'
  | 'manti'
  | 'soups'
  | 'mains'
  | 'desserts'
  | 'drinks';

export interface Category {
  id: CategoryId;
  name: LocalizedText;
  iconName: string;
  description?: LocalizedText;
}

export interface DishOption {
  name: LocalizedText;
  priceModifier: number; // in UZS
}

export interface Dish {
  id: string;
  categoryId: CategoryId;
  title: LocalizedText;
  description: LocalizedText;
  price: number; // in UZS (sum)
  portion: LocalizedText; // e.g. "1 порция (280 г)" or "0.5 л"
  options?: DishOption[];
  tags: string[]; // e.g. "Фирменное", "Острое", "Вегетарианское"
  spiceLevel?: number; // 0 - 3
  isHot?: boolean;
  calories?: number;
  preparationTime?: number; // in minutes
  popular?: boolean;
  asianOrigin?: boolean;
  image?: string; // photo URL or data URL
  defaultPlaceholderType: string; // key to stylized culinary visual
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  note?: string;
}
