import { Category, Dish } from '../types/menu';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: {
      ru: 'Все меню',
      uz: 'Barcha menyu',
      en: 'All Menu'
    },
    iconName: 'UtensilsCrossed',
    description: {
      ru: 'Фирменные блюда и напитки ресторана Magnolia',
      uz: 'Magnolia restorani taomlari va ichimliklari',
      en: 'Magnolia restaurant dishes and beverages'
    }
  },
  {
    id: 'chuchvara',
    name: {
      ru: 'Чучвара',
      uz: 'Chuchvaralar',
      en: 'Chuchvara (Dumplings)'
    },
    iconName: 'Soup',
    description: {
      ru: 'Домашняя отварная и жареная чучвара с соусами',
      uz: 'Xonaki qaynatma va qovurma chuchvaralar',
      en: 'Handmade boiled and crispy dumplings'
    }
  },
  {
    id: 'manti',
    name: {
      ru: 'Манты',
      uz: 'Manti',
      en: 'Manti'
    },
    iconName: 'CircleDot',
    description: {
      ru: 'Сочные паровые манты из тонкого теста',
      uz: 'Yupqa xamirdan tayyorlangan sersuv manti',
      en: 'Authentic steamed manti with various fillings'
    }
  },
  {
    id: 'soups',
    name: {
      ru: 'Первые блюда',
      uz: 'Birinchi ovqat',
      en: 'First Courses'
    },
    iconName: 'CookingPot',
    description: {
      ru: 'Наваристые традиционные супы и бульоны',
      uz: 'Xushxo’r an’anaviy sho’rvalar',
      en: 'Rich traditional broths and soups'
    }
  },
  {
    id: 'mains',
    name: {
      ru: 'Вторые блюда',
      uz: 'Qo’yiq o’vqatlar',
      en: 'Main Dishes'
    },
    iconName: 'Flame',
    description: {
      ru: 'Горячие сытные блюда и фирменная выпечка',
      uz: 'To’yimli issiq taomlar va pishiriqlar',
      en: 'Hearty meat mains and hot pastries'
    }
  },
  {
    id: 'pan_asian',
    name: {
      ru: 'Паназиатские блюда',
      uz: 'Pan Osiyo taomlari',
      en: 'Pan Asian Specials'
    },
    iconName: 'Sparkles',
    description: {
      ru: 'Креветки, спринг-роллы, вок-закуски и ребрышки',
      uz: 'Krevetkalar, bahoriy rollar va wok taomlari',
      en: 'Prawns, spring rolls, ribs and wok specialties'
    }
  },
  {
    id: 'drinks',
    name: {
      ru: 'Напитки',
      uz: 'Napitki',
      en: 'Beverages'
    },
    iconName: 'CupSoda',
    description: {
      ru: 'Освежающие напитки и минеральная вода',
      uz: 'Salqin ichimliklar va mineral suv',
      en: 'Chilled soft drinks and mineral water'
    }
  }
];

export const MENU_ITEMS: Dish[] = [
  // ===================== CHUCHVARALAR =====================
  {
    id: 'chuchvara-alfredo',
    categoryId: 'chuchvara',
    title: {
      ru: 'Чучвара Альфредо',
      uz: 'Chuchvara Alfredo',
      en: 'Chuchvara Alfredo'
    },
    description: {
      ru: 'Нежная домашняя чучвара с начинкой из говядины в насыщенном сливочном соусе Альфредо с пармезаном.',
      uz: "Mayin xonaki chuchvara, quyuq qaymoqli Alfredo sousi, parmezan pishlog'i va ko'katlar bilan.",
      en: 'Handcrafted beef dumplings tossed in a rich, creamy Alfredo sauce topped with shaved parmesan.'
    },
    price: 48000,
    portion: {
      ru: '1 порция (280 г)',
      uz: '1 porsiya (280 g)',
      en: '1 portion (280 g)'
    },
    tags: ['Фирменное', 'Сливочный соус'],
    popular: true,
    preparationTime: 15,
    calories: 520,
    defaultPlaceholderType: 'chuchvara-alfredo'
  },
  {
    id: 'chuchvara-bolongese',
    categoryId: 'chuchvara',
    title: {
      ru: 'Чучвара Болоньезе',
      uz: 'Chuchvara Balanyezo',
      en: 'Chuchvara Bolognese'
    },
    description: {
      ru: 'Сочная чучвара под традиционным густым мясным соусом Болоньезе из спелых томатов и пряных трав.',
      uz: "Pomidorlar, xushbo'y ziravorlar va maydalangan go'shtdan tayyorlangan quyuq Bolonez sousi bilan tortilgan chuchvara.",
      en: 'Juicy dumplings topped with slow-simmered Bolognese ragù made of ripe tomatoes and beef.'
    },
    price: 49000,
    portion: {
      ru: '1 порция (300 г)',
      uz: '1 porsiya (300 g)',
      en: '1 portion (300 g)'
    },
    tags: ['Сытное', 'Томатный соус'],
    popular: true,
    preparationTime: 18,
    calories: 560,
    defaultPlaceholderType: 'chuchvara-bolognese'
  },
  {
    id: 'kok-chuchvara',
    categoryId: 'chuchvara',
    title: {
      ru: 'Чучвара с зеленью',
      uz: "Ko'k chuchvara",
      en: 'Spring Herb Dumplings'
    },
    description: {
      ru: 'Ароматная чучвара с начинкой из свежей сочной зелени с добавлением сливочного масла и сметаны.',
      uz: "Yangi barra ko'katlar va eritilgan sariyog' qo'shib tugilgan mayin ko'k chuchvara.",
      en: 'Delicate dumplings stuffed with tender mountain greens and fresh herbs, served with butter.'
    },
    price: 38000,
    portion: {
      ru: '1 порция (260 г)',
      uz: '1 porsiya (260 g)',
      en: '1 portion (260 g)'
    },
    tags: ['Вегетарианское', 'Свежая зелень'],
    preparationTime: 12,
    calories: 340,
    defaultPlaceholderType: 'chuchvara-alfredo'
  },
  {
    id: 'bulyonli-chuchvara',
    categoryId: 'chuchvara',
    title: {
      ru: 'Чучвара с бульоном',
      uz: 'Bulyonli chuchvara',
      en: 'Dumplings in Golden Broth'
    },
    description: {
      ru: 'Классическая отварная чучвара в прозрачном золотистом говяжьем бульоне со свежей зеленью.',
      uz: "Tiniq, xushxo'r mol go'shti bulyonida pishirilgan an'anaviy chuchvara, shivit sepilgan.",
      en: 'Traditional beef dumplings swimming in an aromatic clear meat broth with fresh dill.'
    },
    price: 42000,
    portion: {
      ru: '1 порция (350 мл)',
      uz: '1 porsiya (350 ml)',
      en: '1 portion (350 ml)'
    },
    tags: ['Горячее', 'Бульон'],
    preparationTime: 12,
    calories: 410,
    defaultPlaceholderType: 'soup-ugra'
  },
  {
    id: 'qovurma-assorti',
    categoryId: 'chuchvara',
    title: {
      ru: 'Жареная чучвара (Ассорти)',
      uz: 'Qovurma assorti',
      en: 'Crispy Fried Dumplings Assorted'
    },
    description: {
      ru: 'Хрустящие обжаренные во фритюре пельмешки с двумя видами начинки, подаются с фирменным соусом.',
      uz: "Qarsildoq qilib qovurilgan ikki xil nachinkali chuchvaralar to'plami, maxsus sous bilan.",
      en: 'Golden crispy wok-fried mini dumplings served with house dipping sauce.'
    },
    price: 45000,
    portion: {
      ru: '1 порция (250 г)',
      uz: '1 porsiya (250 g)',
      en: '1 portion (250 g)'
    },
    tags: ['Хрустящее', 'Хит'],
    popular: true,
    preparationTime: 15,
    calories: 590,
    defaultPlaceholderType: 'fried-dumplings'
  },

  // ===================== MANTI =====================
  {
    id: 'kok-manti',
    categoryId: 'manti',
    title: {
      ru: 'Манты с зеленью',
      uz: "Ko'k manti",
      en: 'Steamed Herb Manti'
    },
    description: {
      ru: 'Большие паровые манты из тонкого теста, наполненные смесью свежей весенней зелени и специй.',
      uz: "Yupqa xamirdan tayyorlangan, bahoriy barra ko'katlar bilan to'ldirilgan parvarishlangan manti.",
      en: 'Steamed manti filled with fragrant spring herbs and sweet onions.'
    },
    price: 42000,
    portion: {
      ru: '4 шт в порции',
      uz: '4 dona bir porsiyada',
      en: '4 pcs per serving'
    },
    tags: ['На пару', 'С зеленью'],
    preparationTime: 20,
    calories: 380,
    defaultPlaceholderType: 'manti-meat'
  },
  {
    id: 'goshtli-manti',
    categoryId: 'manti',
    title: {
      ru: 'Манты с мясом',
      uz: "Go'shtli manti",
      en: 'Traditional Beef Manti'
    },
    description: {
      ru: 'Фирменные сочные манты из тонкого теста с рубленой говядиной, луком, зирой и черным перцем.',
      uz: "Yupqa xamir, maydalangan saralangan mol go'shti, shirin piyoz va zira bilan sersuv manti.",
      en: 'Authentic steamed manti packed with tender minced beef, sweet onions, and cumin.'
    },
    price: 48000,
    portion: {
      ru: '4 шт в порции',
      uz: '4 dona bir porsiyada',
      en: '4 pcs per serving'
    },
    tags: ['Фирменное', 'Сочное'],
    popular: true,
    preparationTime: 20,
    calories: 610,
    defaultPlaceholderType: 'manti-meat'
  },
  {
    id: 'qovoqli-manti',
    categoryId: 'manti',
    title: {
      ru: 'Манты с тыквой',
      uz: 'Qovoqli manti',
      en: 'Sweet Pumpkin Manti'
    },
    description: {
      ru: 'Нежные паровые манты со сладкой тыквой, карамелизированным луком и щепоткой восточных пряностей.',
      uz: "Shirin qovoq, qovurilgan piyoz va sharqona ziravorlar uyg'unligidagi mayin par manti.",
      en: 'Delicately steamed dumplings packed with sweet spiced pumpkin and browned butter.'
    },
    price: 39000,
    portion: {
      ru: '4 шт в порции',
      uz: '4 dona bir porsiyada',
      en: '4 pcs per serving'
    },
    tags: ['На пару', 'С тыквой'],
    preparationTime: 20,
    calories: 360,
    defaultPlaceholderType: 'manti-pumpkin'
  },

  // ===================== BIRINCHI OVQAT =====================
  {
    id: 'shorva',
    categoryId: 'soups',
    title: {
      ru: 'Шурпа',
      uz: "Sho'rva",
      en: 'Traditional Sho’rva'
    },
    description: {
      ru: 'Наваристый прозрачный бульон на косточке с кусочками говядины, картофелем, морковью и зеленью.',
      uz: "Bo'liq suyak bulyonida qaynatilgan xushxo'r mol go'shti, kartoshka, sabzi va ko'katlar bilan sho'rva.",
      en: 'Slow-simmered rich bouillon with succulent beef, potatoes, sweet carrots, and herbs.'
    },
    price: 46000,
    portion: {
      ru: '1 порция (400 мл)',
      uz: '1 porsiya (400 ml)',
      en: '1 portion (400 ml)'
    },
    tags: ['Горячий суп', 'Традиция'],
    popular: true,
    preparationTime: 10,
    calories: 490,
    defaultPlaceholderType: 'soup-shorva'
  },
  {
    id: 'ugra',
    categoryId: 'soups',
    title: {
      ru: 'Угра',
      uz: 'Ugra',
      en: 'Ugra Noodle Soup'
    },
    description: {
      ru: 'Тончайшая домашняя лапша в прозрачном мясном бульоне с фрикадельками и свежей зеленью.',
      uz: "Qo'lda kesilgan nafis uy lapshasi, tiniq go'shtli sho'rva, mayda qiyma frikadelkalar va ko'katlar.",
      en: 'Hand-rolled silk noodles simmered in aromatic golden meat broth with delicate meatballs.'
    },
    price: 43000,
    portion: {
      ru: '1 порция (380 мл)',
      uz: '1 porsiya (380 ml)',
      en: '1 portion (380 ml)'
    },
    tags: ['Домашнее', 'Нежное'],
    preparationTime: 12,
    calories: 420,
    defaultPlaceholderType: 'soup-ugra'
  },

  // ===================== QO'YIQ O'VQATLAR =====================
  {
    id: 'katlet-bilan-kartoshka-fri',
    categoryId: 'mains',
    title: {
      ru: 'Котлета с картофелем фри',
      uz: 'Katlet bilan kartoshka fri',
      en: 'Cutlet with French Fries'
    },
    description: {
      ru: 'Аппетитная румяная котлета из говядины с хрустящим золотистым картофелем фри и соусом.',
      uz: "Saralangan mol go'shtidan shirali qovurilgan kotlet, qarsildoq kartoshka fri va sous bilan.",
      en: 'Juicy pan-seared beef cutlet served alongside golden crisp French fries.'
    },
    price: 52000,
    portion: {
      ru: '1 порция (320 г)',
      uz: '1 porsiya (320 g)',
      en: '1 portion (320 g)'
    },
    tags: ['Сытное', 'Классика'],
    popular: true,
    preparationTime: 15,
    calories: 680,
    defaultPlaceholderType: 'cutlet-fries'
  },
  {
    id: 'pirojok-kartoshka-gosht',
    categoryId: 'mains',
    title: {
      ru: 'Пирожок (картошка и мясо)',
      uz: "Pirojok (kartoshka va biqin go'shti)",
      en: 'Crispy Pastry (Potato & Flank Beef)'
    },
    description: {
      ru: 'Золотистый хрустящий пирожок из тонкого теста с начинкой из говяжьей вырезки и картофеля.',
      uz: "Tilla rang qarsildoq pishiriq, ichida pishirilgan yumshoq biqin go'shti va kartoshka pyuresi.",
      en: 'Crispy pastry filled with tender flank beef and whipped potatoes.'
    },
    price: 26000,
    portion: {
      ru: '2 шт в порции',
      uz: '2 dona porsiyada',
      en: '2 pcs per serving'
    },
    tags: ['Выпечка', 'Горячая закуска'],
    preparationTime: 8,
    calories: 440,
    defaultPlaceholderType: 'pirojok'
  },

  // ===================== PAN ASIAN SPECIALS =====================
  {
    id: 'daikon-cake',
    categoryId: 'pan_asian',
    title: {
      ru: 'Пирог из дайкона',
      uz: 'Daikonli pirog',
      en: 'Pan-Fried Daikon Radish Cake'
    },
    description: {
      ru: 'Традиционный паназиатский пирог из тертого дайкона и рисовой муки, обжаренный до хрустящей корочки.',
      uz: "Daikon turpi va maxsus guruch unidan tayyorlanib, sirt qismi qarsildoq qilib qovurilgan pirog.",
      en: 'Savory daikon radish cake pan-seared until crisply golden outside and tender inside.'
    },
    price: 44000,
    portion: {
      ru: '1 порция (220 г)',
      uz: '1 porsiya (220 g)',
      en: '1 portion (220 g)'
    },
    tags: ['Паназия', 'Хрустящее'],
    preparationTime: 14,
    calories: 320,
    asianOrigin: true,
    defaultPlaceholderType: 'daikon-cake'
  },
  {
    id: 'fried-chinese-dumplings',
    categoryId: 'pan_asian',
    title: {
      ru: 'Жареные китайские пельмени',
      uz: 'Qovurilgan Xitoy chuchvaralari',
      en: 'Fried Chinese Dumplings'
    },
    description: {
      ru: 'Хрустящие пельмени с золотистой корочкой, сочной начинкой из мяса, имбиря и лука.',
      uz: "Qarsildoq ostki qatlamli xitoycha chuchvaralar, zanjabil va ko'k piyozli nachinka bilan.",
      en: 'Crispy-bottom dumplings filled with spiced minced meat, ginger, and scallions.'
    },
    price: 54000,
    portion: {
      ru: '8 шт (240 г)',
      uz: '8 dona (240 g)',
      en: '8 pcs (240 g)'
    },
    tags: ['Wok', 'Паназия'],
    popular: true,
    preparationTime: 15,
    calories: 490,
    asianOrigin: true,
    defaultPlaceholderType: 'fried-dumplings'
  },
  {
    id: 'royal-shrimp',
    categoryId: 'pan_asian',
    title: {
      ru: 'Королевские креветки',
      uz: 'Qirollik krevetkalari',
      en: 'Royal King Prawns'
    },
    description: {
      ru: 'Крупные королевские креветки wok в карамельно-соевой кисло-сладкой глазури шеф-повара.',
      uz: "Wok tovada shirin-achchiq sharqona sousda qovurilgan yirik qirollik krevetkalari.",
      en: 'Jumbo king prawns wok-tossed in chef’s signature sweet savory chili glaze.'
    },
    price: 89000,
    portion: {
      ru: '6 шт (250 г)',
      uz: '6 dona (250 g)',
      en: '6 pcs (250 g)'
    },
    tags: ['Премиум', 'Морепродукты'],
    popular: true,
    preparationTime: 16,
    calories: 390,
    asianOrigin: true,
    defaultPlaceholderType: 'royal-prawns'
  },
  {
    id: 'sesame-shrimp',
    categoryId: 'pan_asian',
    title: {
      ru: 'Креветки с кунжутом',
      uz: 'Kunjutli krevetkalar',
      en: 'Sesame Toasted Prawns'
    },
    description: {
      ru: 'Сочные креветки в легком воздушном кляре, посыпанные поджаренным ароматным кунжутом.',
      uz: "Kunjut sepilgan yengil qarsildoq qatlamli shirali krevetkalar, sous bilan.",
      en: 'Succulent prawns crusted with toasted aromatic sesame seeds.'
    },
    price: 85000,
    portion: {
      ru: '8 шт (230 г)',
      uz: '8 dona (230 g)',
      en: '8 pcs (230 g)'
    },
    tags: ['Хрустящее', 'Морепродукты'],
    preparationTime: 14,
    calories: 450,
    asianOrigin: true,
    defaultPlaceholderType: 'sesame-prawns'
  },
  {
    id: 'mini-spring-rolls',
    categoryId: 'pan_asian',
    title: {
      ru: 'Мини спринг-роллы',
      uz: 'Mini bahoriy rollar',
      en: 'Mini Spring Rolls'
    },
    description: {
      ru: 'Золотистые хрустящие рулетики с сочной овощной начинкой и кисло-сладким соусом.',
      uz: "Xushbo'y sabzavotlar bilan to'ldirilgan qarsildoq tilla rang bahoriy rollar.",
      en: 'Crispy golden rolls filled with shredded seasonal vegetables and sweet chili dip.'
    },
    price: 36000,
    portion: {
      ru: '6 шт (180 г)',
      uz: '6 dona (180 g)',
      en: '6 pcs (180 g)'
    },
    tags: ['Вегетарианское', 'Хрустящее'],
    preparationTime: 10,
    calories: 310,
    asianOrigin: true,
    defaultPlaceholderType: 'spring-rolls'
  },
  {
    id: 'sweet-sour-ribs',
    categoryId: 'pan_asian',
    title: {
      ru: 'Кисло-сладкие ребрышки',
      uz: "Nordon-shirin qovurg'alar",
      en: 'Sweet & Sour Ribs'
    },
    description: {
      ru: 'Нежнейшие мясные ребрышки в глянцевой кисло-сладкой глазури со специями.',
      uz: "Og'izda eriydigan muloyim qovurg'alar, qizg'ish nordon-shirin sharqona sous bilan.",
      en: 'Tender ribs glazed in a glistening wok sweet & sour sauce with ginger and sesame.'
    },
    price: 68000,
    portion: {
      ru: '1 порция (320 г)',
      uz: '1 porsiya (320 g)',
      en: '1 portion (320 g)'
    },
    tags: ['Мясное', 'Wok'],
    popular: true,
    preparationTime: 18,
    calories: 670,
    asianOrigin: true,
    defaultPlaceholderType: 'sweet-sour-ribs'
  },
  {
    id: 'salt-pepper-calamari',
    categoryId: 'pan_asian',
    title: {
      ru: 'Кальмар с солью и перцем',
      uz: 'Tuz va murchli kalmar',
      en: 'Salt & Pepper Squid'
    },
    description: {
      ru: 'Нежные кольца кальмара в хрустящей панировке, обжаренные в воке со свежим перцем и чесноком.',
      uz: "Wokda tezkor qovurilgan mayin kalmar halqalari, yashil qalampir va sarimsoq bilan.",
      en: 'Tender squid rings tossed in wok with crushed sea salt, five-spice pepper, and sliced chilies.'
    },
    price: 62000,
    portion: {
      ru: '1 порция (220 г)',
      uz: '1 porsiya (220 g)',
      en: '1 portion (220 g)'
    },
    tags: ['Wok', 'Острое'],
    spiceLevel: 2,
    preparationTime: 12,
    calories: 390,
    asianOrigin: true,
    defaultPlaceholderType: 'calamari'
  },
  {
    id: 'salt-pepper-prawns',
    categoryId: 'pan_asian',
    title: {
      ru: 'Королевские креветки с перцем',
      uz: 'Qalampirli qirollik krevetkalari',
      en: 'Royal Prawns with Pepper'
    },
    description: {
      ru: 'Хрустящие королевские креветки wok с сычуаньским перцем, морской солью и чесноком.',
      uz: "Yuqori olovda qovurilgan qarsildoq qirollik krevetkalari, murch va sarimsoq bilan.",
      en: 'Crispy king prawns wok-fried with Sichuan peppercorns, sea salt, and crispy garlic flakes.'
    },
    price: 92000,
    portion: {
      ru: '6 шт (260 г)',
      uz: '6 dona (260 g)',
      en: '6 pcs (260 g)'
    },
    tags: ['Премиум', 'Пикантное'],
    spiceLevel: 2,
    preparationTime: 15,
    calories: 410,
    asianOrigin: true,
    defaultPlaceholderType: 'royal-prawns'
  },

  // ===================== NAPITKI =====================
  {
    id: 'coca-cola',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola',
      uz: 'Coca Cola',
      en: 'Coca-Cola'
    },
    description: {
      ru: 'Классическая прохладная Coca-Cola, подается охлажденной со льдом.',
      uz: 'Klassik muzdek Coca-Cola, muz bilan birga.',
      en: 'Chilled classic Coca-Cola served with ice.'
    },
    price: 14000,
    portion: {
      ru: '0.5 л / 1 л',
      uz: '0.5 l / 1 l',
      en: '0.5 L / 1 L'
    },
    options: [
      {
        name: { ru: '0.5 Литра', uz: '0.5 Litr', en: '0.5 Liter' },
        priceModifier: 0
      },
      {
        name: { ru: '1.0 Литр', uz: '1.0 Litr', en: '1.0 Liter' },
        priceModifier: 8000
      }
    ],
    tags: ['Охлажденное', '0.5L / 1L'],
    popular: true,
    calories: 140,
    defaultPlaceholderType: 'coca-cola'
  },
  {
    id: 'fanta',
    categoryId: 'drinks',
    title: {
      ru: 'Fanta',
      uz: 'Fanta',
      en: 'Fanta'
    },
    description: {
      ru: 'Апельсиновый газированный напиток, подается охлажденным.',
      uz: 'Shirali apelsinli gazlangan ichimlik, muz bilan birga.',
      en: 'Crisp orange soda served chilled with ice.'
    },
    price: 14000,
    portion: {
      ru: '0.5 л / 1 л',
      uz: '0.5 l / 1 l',
      en: '0.5 L / 1 L'
    },
    options: [
      {
        name: { ru: '0.5 Литра', uz: '0.5 Litr', en: '0.5 Liter' },
        priceModifier: 0
      },
      {
        name: { ru: '1.0 Литр', uz: '1.0 Litr', en: '1.0 Liter' },
        priceModifier: 8000
      }
    ],
    tags: ['0.5L / 1L'],
    calories: 150,
    defaultPlaceholderType: 'fanta'
  },
  {
    id: 'bonaqua',
    categoryId: 'drinks',
    title: {
      ru: 'Bonaqua',
      uz: 'Bonaqua',
      en: 'Bonaqua'
    },
    description: {
      ru: 'Питьевая природная вода на выбор (без газа или с газом).',
      uz: "Tabiiy ichimlik suvi (gazsiz yoki gazli tanlovingiz bo'yicha).",
      en: 'Pure natural drinking water (still or sparkling).'
    },
    price: 8000,
    portion: {
      ru: '0.5 л / 1 л',
      uz: '0.5 l / 1 l',
      en: '0.5 L / 1 L'
    },
    options: [
      {
        name: { ru: '0.5 л (Без газа)', uz: '0.5 l (Gazsiz)', en: '0.5 L (Still)' },
        priceModifier: 0
      },
      {
        name: { ru: '1.0 л (Без газа)', uz: '1.0 l (Gazsiz)', en: '1.0 L (Still)' },
        priceModifier: 5000
      },
      {
        name: { ru: '0.5 л (С газом)', uz: '0.5 l (Gazli)', en: '0.5 L (Sparkling)' },
        priceModifier: 0
      },
      {
        name: { ru: '1.0 л (С газом)', uz: '1.0 l (Gazli)', en: '1.0 L (Sparkling)' },
        priceModifier: 5000
      }
    ],
    tags: ['Вода', '0.5L / 1L'],
    calories: 0,
    defaultPlaceholderType: 'bonaqua'
  },
  {
    id: 'chortoq',
    categoryId: 'drinks',
    title: {
      ru: 'Чорток (Chortoq)',
      uz: 'Chortoq / Bezgaz',
      en: 'Chortoq (Still)'
    },
    description: {
      ru: 'Природная лечебная минеральная вода Чорток в стеклянной бутылке (без газа).',
      uz: "Shifobaxsh tabiiy mineral suv Chortoq, shisha idishda (bezgaz).",
      en: 'Therapeutic natural mineral water Chortoq in glass bottle (still).'
    },
    price: 15000,
    portion: {
      ru: 'Стекло (0.5 л)',
      uz: 'Shisha (0.5 l)',
      en: 'Glass (0.5 L)'
    },
    tags: ['Минеральная вода', 'Стекло'],
    popular: true,
    calories: 0,
    defaultPlaceholderType: 'chortoq'
  }
];

export const RESTAURANT_INFO = {
  name: 'MAGNOLIA',
  subname: 'PAN ASIAN & TURKISH KITCHEN',
  tagline: 'BREAKFAST • LUNCH • DINNER',
  workHours: {
    ru: 'Каждый день: 08:00 – 23:00',
    uz: 'Har kuni: 08:00 – 23:00',
    en: 'Daily: 08:00 – 23:00'
  }
};
