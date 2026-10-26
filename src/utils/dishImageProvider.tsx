export interface CulinaryVisual {
  bgGradient: string;
  accentColor: string;
  plateColor: string;
  garnishEmoji: string;
  badgeLabel: string;
  ambientLight: string;
}

export const CULINARY_PRESETS: Record<string, CulinaryVisual> = {
  // Salads
  'caesar-salad': {
    bgGradient: 'from-[#1B3624] via-[#122418] to-[#0A140E]',
    accentColor: '#A5D6A7',
    plateColor: '#1A3326',
    garnishEmoji: '🥗',
    badgeLabel: 'Салат Цезарь',
    ambientLight: 'rgba(165, 214, 167, 0.3)',
  },
  'fresh-salad': {
    bgGradient: 'from-[#1A3322] via-[#102116] to-[#08120C]',
    accentColor: '#81C784',
    plateColor: '#1C3825',
    garnishEmoji: '🥗',
    badgeLabel: 'Свежий салат',
    ambientLight: 'rgba(129, 199, 132, 0.3)',
  },

  // Chuchvara
  'chuchvara-alfredo': {
    bgGradient: 'from-[#44161F] via-[#300E15] to-[#1A060A]',
    accentColor: '#FFE082',
    plateColor: '#FAF7F0',
    garnishEmoji: '🥟',
    badgeLabel: 'Сливочный соус',
    ambientLight: 'rgba(255, 224, 130, 0.3)',
  },
  'chuchvara-carbonara': {
    bgGradient: 'from-[#46191D] via-[#321115] to-[#1C080A]',
    accentColor: '#FDD835',
    plateColor: '#FAF5EE',
    garnishEmoji: '🥓',
    badgeLabel: 'Карбонара соус',
    ambientLight: 'rgba(253, 216, 53, 0.3)',
  },
  'chuchvara-ramen': {
    bgGradient: 'from-[#421A15] via-[#2D120E] to-[#190806]',
    accentColor: '#FFA726',
    plateColor: '#211D1E',
    garnishEmoji: '🍜',
    badgeLabel: 'Рамен с чучварой',
    ambientLight: 'rgba(255, 167, 38, 0.3)',
  },
  'chuchvara-bolognese': {
    bgGradient: 'from-[#48181B] via-[#330F12] to-[#1B0608]',
    accentColor: '#E57373',
    plateColor: '#F7F2EB',
    garnishEmoji: '🍝',
    badgeLabel: 'Мясной соус',
    ambientLight: 'rgba(229, 115, 115, 0.25)',
  },
  'fried-dumplings': {
    bgGradient: 'from-[#40131B] via-[#2C0B12] to-[#160408]',
    accentColor: '#F4D185',
    plateColor: '#242129',
    garnishEmoji: '🥟',
    badgeLabel: 'Хрустящее фри',
    ambientLight: 'rgba(244, 209, 133, 0.25)',
  },

  // Manti
  'manti-meat': {
    bgGradient: 'from-[#421A15] via-[#2E110D] to-[#180706]',
    accentColor: '#F4D185',
    plateColor: '#FAF8F4',
    garnishEmoji: '🥢',
    badgeLabel: 'На пару / Сочное',
    ambientLight: 'rgba(244, 209, 133, 0.3)',
  },
  'manti-pumpkin': {
    bgGradient: 'from-[#422013] via-[#2D140B] to-[#170905]',
    accentColor: '#FFB74D',
    plateColor: '#FAF6EE',
    garnishEmoji: '🎃',
    badgeLabel: 'Сладковатая тыква',
    ambientLight: 'rgba(255, 183, 77, 0.25)',
  },

  // Soups
  'soup-shorva': {
    bgGradient: 'from-[#421A1E] via-[#2F1115] to-[#19070A]',
    accentColor: '#FFB74D',
    plateColor: '#302621',
    garnishEmoji: '🍲',
    badgeLabel: 'Наваристый бульон',
    ambientLight: 'rgba(255, 183, 77, 0.3)',
  },
  'soup-ugra': {
    bgGradient: 'from-[#3A171D] via-[#270E13] to-[#150609]',
    accentColor: '#FFF59D',
    plateColor: '#FDFBF7',
    garnishEmoji: '🍜',
    badgeLabel: 'Тонкая лапша',
    ambientLight: 'rgba(255, 245, 157, 0.25)',
  },

  // Mains
  'cutlet-fries': {
    bgGradient: 'from-[#421D15] via-[#2F130D] to-[#180806]',
    accentColor: '#F4D185',
    plateColor: '#2B2A2E',
    garnishEmoji: '🥩',
    badgeLabel: 'Сытное блюдо',
    ambientLight: 'rgba(244, 209, 133, 0.25)',
  },
  'pirojok': {
    bgGradient: 'from-[#3A1813] via-[#28100D] to-[#160806]',
    accentColor: '#E76F51',
    plateColor: '#332924',
    garnishEmoji: '🥟',
    badgeLabel: 'Горячая выпечка',
    ambientLight: 'rgba(231, 111, 81, 0.25)',
  },

  // Pan Asian
  'daikon-cake': {
    bgGradient: 'from-[#38161D] via-[#270E13] to-[#150608]',
    accentColor: '#D4AF37',
    plateColor: '#262428',
    garnishEmoji: '🥢',
    badgeLabel: 'Паназия Wok',
    ambientLight: 'rgba(212, 175, 55, 0.2)',
  },
  'royal-prawns': {
    bgGradient: 'from-[#441822] via-[#2E0E16] to-[#18050A]',
    accentColor: '#FF8A65',
    plateColor: '#242129',
    garnishEmoji: '🍤',
    badgeLabel: 'Тигровые креветки',
    ambientLight: 'rgba(255, 138, 101, 0.3)',
  },
  'sesame-prawns': {
    bgGradient: 'from-[#42171D] via-[#2D0F13] to-[#170608]',
    accentColor: '#F4A261',
    plateColor: '#2C2B30',
    garnishEmoji: '🍤',
    badgeLabel: 'Кунжутная панировка',
    ambientLight: 'rgba(244, 162, 97, 0.25)',
  },
  'spring-rolls': {
    bgGradient: 'from-[#3A141A] via-[#2A0F14] to-[#17060A]',
    accentColor: '#E5A93C',
    plateColor: '#1F1E24',
    garnishEmoji: '🥢',
    badgeLabel: 'Хрустящие роллы',
    ambientLight: 'rgba(229, 169, 60, 0.25)',
  },
  'sweet-sour-ribs': {
    bgGradient: 'from-[#4B141B] via-[#350C12] to-[#1C0408]',
    accentColor: '#EF5350',
    plateColor: '#1F1D22',
    garnishEmoji: '🍖',
    badgeLabel: 'Глазурь Wok',
    ambientLight: 'rgba(239, 83, 80, 0.3)',
  },
  'calamari': {
    bgGradient: 'from-[#3D1420] via-[#280C14] to-[#160509]',
    accentColor: '#F28B82',
    plateColor: '#1E1D22',
    garnishEmoji: '🦑',
    badgeLabel: 'Кальмар Wok',
    ambientLight: 'rgba(242, 139, 130, 0.25)',
  },

  // Drinks
  'tea-bardak': {
    bgGradient: 'from-[#3D1E0C] via-[#2A1306] to-[#140702]',
    accentColor: '#F59E0B',
    plateColor: '#241005',
    garnishEmoji: '🫖',
    badgeLabel: 'Бардак чой',
    ambientLight: 'rgba(245, 158, 11, 0.3)',
  },
  'tea-green': {
    bgGradient: 'from-[#1B3624] via-[#122418] to-[#0A140E]',
    accentColor: '#84CC16',
    plateColor: '#1A3326',
    garnishEmoji: '🍵',
    badgeLabel: "Ko'k choy",
    ambientLight: 'rgba(132, 204, 22, 0.3)',
  },
  'tea-black': {
    bgGradient: 'from-[#3A170C] via-[#260E06] to-[#120502]',
    accentColor: '#F97316',
    plateColor: '#220D06',
    garnishEmoji: '🫖',
    badgeLabel: 'Qora choy',
    ambientLight: 'rgba(249, 115, 22, 0.3)',
  },
  'coca-cola': {
    bgGradient: 'from-[#3D0A0E] via-[#280508] to-[#140203]',
    accentColor: '#E53935',
    plateColor: '#170608',
    garnishEmoji: '🥤',
    badgeLabel: 'Coca-Cola',
    ambientLight: 'rgba(229, 57, 53, 0.3)',
  },
  'coca-cola-zero': {
    bgGradient: 'from-[#1A1A1A] via-[#111111] to-[#0A0A0A]',
    accentColor: '#EF4444',
    plateColor: '#141414',
    garnishEmoji: '🥤',
    badgeLabel: 'Shakarsiz Zero',
    ambientLight: 'rgba(239, 68, 68, 0.25)',
  },
  'fanta': {
    bgGradient: 'from-[#3E1A0A] via-[#291005] to-[#140702]',
    accentColor: '#FB8C00',
    plateColor: '#1E120A',
    garnishEmoji: '🍊',
    badgeLabel: 'Fanta',
    ambientLight: 'rgba(251, 140, 0, 0.3)',
  },
  'bonaqua': {
    bgGradient: 'from-[#0D2436] via-[#081723] to-[#040C12]',
    accentColor: '#4FC3F7',
    plateColor: '#0E1D28',
    garnishEmoji: '💧',
    badgeLabel: 'Bonaqua',
    ambientLight: 'rgba(79, 195, 247, 0.25)',
  },

  // Rolls & Sushi
  'classic-roll': {
    bgGradient: 'from-[#2D1218] via-[#1F0A0E] to-[#120406]',
    accentColor: '#F48FB1',
    plateColor: '#1A181E',
    garnishEmoji: '🍣',
    badgeLabel: 'Фирменный ролл',
    ambientLight: 'rgba(244, 143, 177, 0.25)',
  },
  'baked-roll': {
    bgGradient: 'from-[#3D1A10] via-[#2A1108] to-[#160703]',
    accentColor: '#FFB74D',
    plateColor: '#1C1512',
    garnishEmoji: '🔥',
    badgeLabel: 'Запеченный ролл',
    ambientLight: 'rgba(255, 183, 77, 0.3)',
  },
  'tempura-roll': {
    bgGradient: 'from-[#3A220E] via-[#261507] to-[#140A02]',
    accentColor: '#FFE082',
    plateColor: '#201A12',
    garnishEmoji: '🍤',
    badgeLabel: 'Хрустящая темпура',
    ambientLight: 'rgba(255, 224, 130, 0.3)',
  },
};
