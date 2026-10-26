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
    id: 'salads',
    name: {
      ru: 'Салаты',
      uz: 'Salatlar',
      en: 'Salads'
    },
    iconName: 'Salad',
    description: {
      ru: 'Свежие овощные и фирменные мясные салаты',
      uz: "Yangi sabzavotli va maxsus go'shtli salatlar",
      en: 'Fresh garden and signature gourmet salads'
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
  // ===================== SALATLAR (SALADS) =====================
  {
    id: 'caesar-salad',
    categoryId: 'salads',
    title: {
      ru: 'Салат Цезарь с курицей',
      uz: 'Tovuqli Tsezar salati',
      en: 'Classic Chicken Caesar Salad'
    },
    description: {
      ru: 'Хрустящие листья салата Романо, нежное куриное филе на гриле, золотистые чесночные сухарики, лепестки пармезана и классический соус Цезарь.',
      uz: "Qarsildoq aysberg va romano barglari, grilda qovurilgan tovuq filesi, sarimsoqli qarsildoq suxariklar, parmezan pishlog'i va klassik Tsezar sousi.",
      en: 'Crisp romaine lettuce, tender grilled chicken breast, golden garlic croutons, shaved aged parmesan, and traditional creamy Caesar dressing.'
    },
    price: 46000,
    portion: {
      ru: '1 порция (260 г)',
      uz: '1 porsiya (260 g)',
      en: '1 portion (260 g)'
    },
    tags: ['Фирменное', 'Популярное', 'Гриль'],
    popular: true,
    preparationTime: 10,
    calories: 380,
    image: '/dishes/caesar-salad.jpg',
    defaultPlaceholderType: 'caesar-salad'
  },
  {
    id: 'greek-salad',
    categoryId: 'salads',
    title: {
      ru: 'Греческий салат',
      uz: 'Yunoncha salat',
      en: 'Greek Salad'
    },
    description: {
      ru: 'Спелые томаты, сочные огурцы, болгарский перец, сыр Фета, маслины Каламата, красный лук и оливковое масло первого отжима с орегано.',
      uz: "Yetilgan pomidor, yangi bodring, shirin bulg'or qalampiri, Feta pishlog'i, zaytun mevalari va zaytun moyi.",
      en: 'Vine-ripened tomatoes, crisp cucumbers, bell peppers, feta cheese, Kalamata olives, red onion, and extra virgin olive oil.'
    },
    price: 42000,
    portion: {
      ru: '1 порция (250 г)',
      uz: '1 porsiya (250 g)',
      en: '1 portion (250 g)'
    },
    tags: ['Свежее', 'Вегетарианское'],
    popular: true,
    preparationTime: 8,
    calories: 290,
    image: '/dishes/greek-salad.jpg',
    defaultPlaceholderType: 'fresh-salad'
  },
  {
    id: 'achichuk-salad',
    categoryId: 'salads',
    title: {
      ru: 'Салат Ачичук',
      uz: 'Achchiq-chuchuk',
      en: 'Achichuk Tomato Salad'
    },
    description: {
      ru: 'Тонко нарезанные спелые сладкие томаты, репчатый лук, острый перчик чили и свежий базилик — классика к горячим блюдам.',
      uz: "Yupqa parrak qilib to'g'ralgan shirin pomidor, piyoz, achchiq qalampir va rayhon barglari.",
      en: 'Paper-thin sliced sweet tomatoes, sweet onions, spicy chili, and purple basil.'
    },
    price: 24000,
    portion: {
      ru: '1 порция (200 г)',
      uz: '1 porsiya (200 g)',
      en: '1 portion (200 g)'
    },
    tags: ['Традиция', 'Свежее'],
    popular: true,
    preparationTime: 5,
    calories: 120,
    image: '/dishes/achichuk.jpg',
    defaultPlaceholderType: 'fresh-salad'
  },

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
    image: '/dishes/chuchvara-alfredo.jpg',
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
    image: '/dishes/chuchvara-bolognese.jpg',
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
    image: '/dishes/kok-chuchvara.jpg',
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
      ru: 'Жареная чучвара (Маленькое ассорти)',
      uz: 'Qovurma assorti (Kichik)',
      en: 'Crispy Fried Dumplings Assorted (Small)'
    },
    description: {
      ru: 'Хрустящие обжаренные во фритюре пельмешки с двумя видами начинки и фирменным соусом (маленькая порция — 15 шт).',
      uz: "Qarsildoq qilib qovurilgan ikki xil nachinkali chuchvaralar to'plami, maxsus sous bilan (kichik porsiya — 15 dona).",
      en: 'Golden crispy wok-fried mini dumplings served with house dipping sauce (small portion — 15 pcs).'
    },
    price: 45000,
    portion: {
      ru: '15 шт (180 г)',
      uz: '15 dona (180 g)',
      en: '15 pcs (180 g)'
    },
    tags: ['Хрустящее', 'Маленькая порция', 'Хит'],
    popular: true,
    preparationTime: 12,
    calories: 540,
    image: '/dishes/qovurma-assorti.jpg',
    defaultPlaceholderType: 'fried-dumplings'
  },
  {
    id: 'qovurma-assorti-katta',
    categoryId: 'chuchvara',
    title: {
      ru: 'Жареная чучвара (Большое ассорти)',
      uz: 'Qovurma assorti (Katta)',
      en: 'Crispy Fried Dumplings Assorted (Large)'
    },
    description: {
      ru: 'Большая тарелка хрустящих жареных пельмешек ассорти с фирменным томатным соусом на компанию (большая порция — 30 шт).',
      uz: "Katta tovoqda qarsildoq qilib qovurilgan chuchvaralar assortisi, maxsus sous bilan (katta porsiya — 30 dona).",
      en: 'Large platter of crispy golden fried dumplings with special dipping sauce for sharing (large portion — 30 pcs).'
    },
    price: 80000,
    portion: {
      ru: '30 шт (360 г)',
      uz: '30 dona (360 g)',
      en: '30 pcs (360 g)'
    },
    tags: ['Хрустящее', 'Большая порция', 'Хит'],
    popular: true,
    preparationTime: 18,
    calories: 1080,
    image: '/dishes/qovurma-assorti.jpg',
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
    image: '/dishes/shorva.jpg',
    defaultPlaceholderType: 'soup-shorva'
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
    image: '/dishes/katlet-bilan-kartoshka-fri.jpg',
    defaultPlaceholderType: 'cutlet-fries'
  },
  {
    id: 'kartoshka-fri',
    categoryId: 'mains',
    title: {
      ru: 'Картофель фри',
      uz: 'Kartoshka fri',
      en: 'French Fries'
    },
    description: {
      ru: 'Золотистый, хрустящий снаружи и нежный внутри горячий картофель фри с томатным соусом.',
      uz: "Tilla rang, sirti qarsildoq, ichi mayin issiq kartoshka fri maxsus sous bilan.",
      en: 'Golden crispy on the outside, tender on the inside hot french fries served with dipping sauce.'
    },
    price: 22000,
    portion: {
      ru: '1 порция (180 г)',
      uz: '1 porsiya (180 g)',
      en: '1 portion (180 g)'
    },
    tags: ['Хрустящее', 'Гарнир', 'Хит'],
    popular: true,
    preparationTime: 8,
    calories: 380,
    defaultPlaceholderType: 'french-fries'
  },
  {
    id: 'pirojok-kartoshka-gosht',
    categoryId: 'mains',
    title: {
      ru: 'Пирожок (картошка и мясо)',
      uz: "Pirojok (kartoshka va biqin go'shti)",
      en: 'Pirojok (Flank Beef & Golden Potatoes)'
    },
    description: {
      ru: 'Сочный обжаренный стейк из говядины (бикин) с запеченными золотистыми дольками картофеля, сладкой кукурузой и острым перцем.',
      uz: "Shirali qovurilgan mol go'shti (biqin lahm), tilla rang pishirilgan kartoshka bo'laklari, shirin makkajo'xori va qalampir bilan.",
      en: 'Succulent roasted beef flank steak served with golden browned potatoes, sweet corn cob, and chili pepper.'
    },
    price: 58000,
    portion: {
      ru: '1 порция (350 г)',
      uz: '1 porsiya (350 g)',
      en: '1 portion (350 g)'
    },
    tags: ['Фирменное', 'Сытное', 'Горячее блюдо'],
    popular: true,
    preparationTime: 18,
    calories: 620,
    image: '/dishes/pirojok-kartoshka-gosht.jpg',
    defaultPlaceholderType: 'pirojok'
  },

  // ===================== NAPITKI (DRINKS) =====================
  {
    id: 'bardak-choy',
    categoryId: 'drinks',
    title: {
      ru: 'Бардак чой',
      uz: 'Bardak choy',
      en: 'Turkish Bardak Tea'
    },
    description: {
      ru: 'Традиционный ароматный чай в турецком стеклянном стаканчике (бардак).',
      uz: "Armudu (bardak) stakanchada tortiladigan an'anaviy xushbo'y choy.",
      en: 'Traditional aromatic tea served in an authentic Turkish glass (bardak).'
    },
    price: 5000,
    portion: {
      ru: '1 стакан (150 мл)',
      uz: '1 stakan (150 ml)',
      en: '1 glass (150 ml)'
    },
    tags: ['Чай', 'Горячее'],
    popular: true,
    calories: 2,
    image: '/dishes/drinks/bardak-choy.jpg',
    defaultPlaceholderType: 'tea-bardak'
  },
  {
    id: 'kok-choy',
    categoryId: 'drinks',
    title: {
      ru: 'Зеленый чай',
      uz: "Ko'k choy",
      en: 'Green Tea'
    },
    description: {
      ru: 'Классический свежезаваренный листовой зеленый чай №95 в фарфоровом чайнике.',
      uz: "Chinnigul choynakda yangi damlangan nozik bargli ko'k choy.",
      en: 'Freshly brewed aromatic loose-leaf green tea served in a teapot.'
    },
    price: 5000,
    portion: {
      ru: '1 чайник (800 мл)',
      uz: '1 choynak (800 ml)',
      en: '1 teapot (800 ml)'
    },
    tags: ['Чай', 'Традиция'],
    popular: true,
    calories: 2,
    image: '/dishes/drinks/teapot.jpg',
    defaultPlaceholderType: 'tea-green'
  },
  {
    id: 'qora-choy',
    categoryId: 'drinks',
    title: {
      ru: 'Черный чай',
      uz: 'Qora choy',
      en: 'Black Tea'
    },
    description: {
      ru: 'Насыщенный бархатистый свежезаваренный черный чай в чайнике.',
      uz: "Chinnigul choynakda damlangan to'yimli va xushbo'y qora choy.",
      en: 'Rich and bold freshly steeped black tea served in a traditional teapot.'
    },
    price: 8000,
    portion: {
      ru: '1 чайник (800 мл)',
      uz: '1 choynak (800 ml)',
      en: '1 teapot (800 ml)'
    },
    tags: ['Чай', 'Горячее'],
    popular: false,
    calories: 2,
    image: '/dishes/drinks/teapot.jpg',
    defaultPlaceholderType: 'tea-black'
  },
  {
    id: 'limon-choy',
    categoryId: 'drinks',
    title: {
      ru: 'Чай с лимоном',
      uz: 'Limonli choy',
      en: 'Lemon Tea'
    },
    description: {
      ru: 'Ароматный горячий чай со свежими сочными дольками лимона в чайнике.',
      uz: "Yangi kesilgan nordon limon bo'laklari bilan damlangan xushbo'y issiq choy.",
      en: 'Fragrant freshly brewed hot tea steeped with fresh lemon slices in a teapot.'
    },
    price: 10000,
    portion: {
      ru: '1 чайник (800 мл)',
      uz: '1 choynak (800 ml)',
      en: '1 teapot (800 ml)'
    },
    tags: ['Чай', 'С лимоном', 'Горячее'],
    popular: true,
    calories: 15,
    image: '/dishes/drinks/teapot.jpg',
    defaultPlaceholderType: 'tea-green'
  },
  {
    id: 'chortoq-premium',
    categoryId: 'drinks',
    title: {
      ru: 'Chortoq Premium (стекло)',
      uz: 'Chortoq Premium (shisha)',
      en: 'Chortoq Premium (Glass Bottle)'
    },
    description: {
      ru: 'Природная лечебно-столовая минеральная вода Chortoq в элегантной стеклянной бутылке 0.33 л.',
      uz: 'Nafis shisha butilkada tortiladigan tabiiy mineral davolovchi Chortoq suvi 0.33 l.',
      en: 'Natural mineral spring water Chortoq in an elegant 0.33 L designer glass bottle.'
    },
    price: 12000,
    portion: {
      ru: '0.33 л (стекло)',
      uz: '0.33 l (shisha)',
      en: '0.33 L (glass)'
    },
    tags: ['Минеральная вода', 'Премиум', 'Стекло'],
    popular: true,
    calories: 0,
    image: '/dishes/drinks/chortoq-premium.jpg',
    defaultPlaceholderType: 'bonaqua'
  },
  {
    id: 'bonaqua-1l',
    categoryId: 'drinks',
    title: {
      ru: 'Bonaqua 1 л',
      uz: 'Bonaqua 1l',
      en: 'Bonaqua 1L'
    },
    description: {
      ru: 'Чистая природная питьевая вода Bonaqua.',
      uz: 'Toza tabiiy ichimlik suvi Bonaqua 1 litr.',
      en: 'Pure natural drinking water Bonaqua 1 Liter.'
    },
    price: 7250,
    portion: {
      ru: '1.0 л',
      uz: '1.0 l',
      en: '1.0 L'
    },
    tags: ['Вода', '1L'],
    calories: 0,
    defaultPlaceholderType: 'bonaqua'
  },
  {
    id: 'bonaqua-15l',
    categoryId: 'drinks',
    title: {
      ru: 'Bonaqua 1.5 л',
      uz: 'Bonaqua 1.5l',
      en: 'Bonaqua 1.5L'
    },
    description: {
      ru: 'Природная освежающая питьевая вода Bonaqua в большой бутылке.',
      uz: 'Bonaqua tabiiy ichimlik suvi katta hajmda (1.5 litr).',
      en: 'Pure natural mineral drinking water Bonaqua (1.5 Liter).'
    },
    price: 9000,
    portion: {
      ru: '1.5 л',
      uz: '1.5 l',
      en: '1.5 L'
    },
    tags: ['Вода', '1.5L'],
    calories: 0,
    defaultPlaceholderType: 'bonaqua'
  },
  {
    id: 'coca-cola-glass',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola (стекло)',
      uz: 'Coca-Cola (shisha)',
      en: 'Coca-Cola (Glass Bottle)'
    },
    description: {
      ru: 'Классическая ледяная Coca-Cola в винтажной стеклянной бутылке 0.25 л.',
      uz: 'Muzdek klassik Coca-Cola maxsus shisha idishda 0.25 l.',
      en: 'Ice-cold classic Coca-Cola in an authentic 0.25 L glass bottle.'
    },
    price: 10000,
    portion: {
      ru: '0.25 л (стекло)',
      uz: '0.25 l (shisha)',
      en: '0.25 L (glass)'
    },
    tags: ['Стекло', 'Охлажденное', 'Хит'],
    popular: true,
    calories: 105,
    image: '/dishes/drinks/coca-cola-glass.jpg',
    defaultPlaceholderType: 'coca-cola'
  },
  {
    id: 'coca-cola-05',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola 0.5 л',
      uz: 'Coca cola 0.5l',
      en: 'Coca-Cola 0.5L'
    },
    description: {
      ru: 'Легендарная освежающая Coca-Cola 0.5 л, подается охлажденной.',
      uz: 'Muzdek klassik Coca-Cola 0.5 litr butilka.',
      en: 'Chilled classic Coca-Cola 0.5 Liter bottle.'
    },
    price: 8000,
    portion: {
      ru: '0.5 л',
      uz: '0.5 l',
      en: '0.5 L'
    },
    tags: ['Охлажденное', '0.5L'],
    popular: true,
    calories: 140,
    image: '/dishes/drinks/coca-cola-05.webp',
    defaultPlaceholderType: 'coca-cola'
  },
  {
    id: 'coca-cola-1l',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola 1 л',
      uz: 'Coca cola 1l',
      en: 'Coca-Cola 1L'
    },
    description: {
      ru: 'Освежающая Coca-Cola в большой бутылке 1 л для компании.',
      uz: 'Muzdek klassik Coca-Cola 1 litr butilka.',
      en: 'Chilled classic Coca-Cola 1.0 Liter bottle.'
    },
    price: 13000,
    portion: {
      ru: '1.0 л',
      uz: '1.0 l',
      en: '1.0 L'
    },
    tags: ['Охлажденное', '1.0L'],
    popular: true,
    calories: 280,
    image: '/dishes/drinks/coca-cola-1l.jpg',
    defaultPlaceholderType: 'coca-cola'
  },
  {
    id: 'shakarsiz-coca-cola-glass',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola Zero (стекло)',
      uz: 'Shakarsiz Coca-Cola (shisha)',
      en: 'Coca-Cola Zero (Glass Bottle)'
    },
    description: {
      ru: 'Освежающая Coca-Cola Zero без сахара в элегантной стеклянной бутылке 0.25 л.',
      uz: 'Shakarsiz parhezbop muzdek Coca-Cola shisha butilkada 0.25 l.',
      en: 'Sugar-free crisp Coca-Cola Zero in a 0.25 L glass bottle.'
    },
    price: 10000,
    portion: {
      ru: '0.25 л (стекло)',
      uz: '0.25 l (shisha)',
      en: '0.25 L (glass)'
    },
    tags: ['Без сахара', 'Стекло', 'Zero'],
    popular: true,
    calories: 0,
    image: '/dishes/drinks/coca-cola-zero-glass.jpeg',
    defaultPlaceholderType: 'coca-cola-zero'
  },
  {
    id: 'shakarsiz-coca-cola-05',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola Zero 0.5 л',
      uz: 'Shakarsiz coca cola 0.5',
      en: 'Coca-Cola Zero 0.5L'
    },
    description: {
      ru: 'Освежающая Coca-Cola без сахара и калорий 0.5 л.',
      uz: 'Shakarsiz, kaloriyasiz parhezbop Coca-Cola 0.5 litr.',
      en: 'Sugar-free, zero-calorie chilled Coca-Cola Zero 0.5 Liter.'
    },
    price: 8000,
    portion: {
      ru: '0.5 л',
      uz: '0.5 l',
      en: '0.5 L'
    },
    tags: ['Без сахара', '0.5L', 'Zero'],
    calories: 0,
    image: '/dishes/drinks/coca-cola-zero-05.jpg',
    defaultPlaceholderType: 'coca-cola-zero'
  },
  {
    id: 'shakarsiz-coca-cola-1l',
    categoryId: 'drinks',
    title: {
      ru: 'Coca-Cola Zero 1 л',
      uz: 'Shakarsiz coca cola 1l',
      en: 'Coca-Cola Zero 1L'
    },
    description: {
      ru: 'Освежающая Coca-Cola без сахара 1 л.',
      uz: 'Shakarsiz, kaloriyasiz parhezbop Coca-Cola 1 litr.',
      en: 'Sugar-free, zero-calorie Coca-Cola Zero 1.0 Liter bottle.'
    },
    price: 13000,
    portion: {
      ru: '1.0 л',
      uz: '1.0 l',
      en: '1.0 L'
    },
    tags: ['Без сахара', '1.0L', 'Zero'],
    calories: 0,
    image: '/dishes/drinks/coca-cola-zero-1l.jpg',
    defaultPlaceholderType: 'coca-cola-zero'
  },
  {
    id: 'fanta-glass',
    categoryId: 'drinks',
    title: {
      ru: 'Fanta Апельсин (стекло)',
      uz: 'Fanta (shisha)',
      en: 'Fanta Orange (Glass Bottle)'
    },
    description: {
      ru: 'Искрящаяся апельсиновая Fanta в оригинальной рельефной стеклянной бутылке 0.25 л.',
      uz: 'Yorqin apelsinli muzdek gazlangan Fanta shisha idishda 0.25 l.',
      en: 'Sparkling orange Fanta in an iconic contour glass bottle 0.25 L.'
    },
    price: 10000,
    portion: {
      ru: '0.25 л (стекло)',
      uz: '0.25 l (shisha)',
      en: '0.25 L (glass)'
    },
    tags: ['Апельсин', 'Стекло', 'Хит'],
    popular: true,
    calories: 110,
    image: '/dishes/drinks/fanta-glass.jpg',
    defaultPlaceholderType: 'fanta'
  },
  {
    id: 'fanta-05',
    categoryId: 'drinks',
    title: {
      ru: 'Fanta 0.5 л',
      uz: 'Fanta 0.5',
      en: 'Fanta 0.5L'
    },
    description: {
      ru: 'Яркий искрящийся апельсиновый напиток Fanta 0.5 л.',
      uz: 'Shirin apelsinli gazlangan muzdek Fanta 0.5 litr.',
      en: 'Sparkling orange soda Fanta 0.5 Liter.'
    },
    price: 9000,
    portion: {
      ru: '0.5 л',
      uz: '0.5 l',
      en: '0.5 L'
    },
    tags: ['Апельсин', '0.5L'],
    calories: 150,
    image: '/dishes/drinks/fanta-05.webp',
    defaultPlaceholderType: 'fanta'
  },
  {
    id: 'fanta-1l',
    categoryId: 'drinks',
    title: {
      ru: 'Fanta 1 л',
      uz: 'Fanta 1l',
      en: 'Fanta 1L'
    },
    description: {
      ru: 'Искрящийся апельсиновый напиток Fanta 1 л.',
      uz: 'Shirin apelsinli gazlangan muzdek Fanta 1 litr butilka.',
      en: 'Sparkling orange soda Fanta 1.0 Liter bottle.'
    },
    price: 13000,
    portion: {
      ru: '1.0 л',
      uz: '1.0 l',
      en: '1.0 L'
    },
    tags: ['Апельсин', '1.0L'],
    calories: 300,
    image: '/dishes/drinks/fanta-1l.webp',
    defaultPlaceholderType: 'fanta'
  }
];

export const RESTAURANT_INFO = {
  name: 'MAGNOLIA',
  subname: 'CAFÉ & RESTAURANT',
  tagline: 'BREAKFAST • LUNCH • DINNER',
  workHours: {
    ru: 'Каждый день: 08:00 – 23:00',
    uz: 'Har kuni: 08:00 – 23:00',
    en: 'Daily: 08:00 – 23:00'
  }
};
