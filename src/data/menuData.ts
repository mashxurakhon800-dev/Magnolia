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
    id: 'rolls',
    name: {
      ru: 'Роллы и суши',
      uz: 'Rollar va sushi',
      en: 'Rolls & Sushi'
    },
    iconName: 'Fish',
    description: {
      ru: '33 вида свежих роллов, маки, запеченных роллов и темпуры от Sushito',
      uz: 'Sushito menyusidan 33 turdagi yangi rollar, maki va tempura',
      en: '33 varieties of fresh rolls, maki, baked rolls & tempura from Sushito'
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
  // ===================== ROLLS & SUSHI (SUSHITO) =====================
  {
    id: "sushito-6-1",
    categoryId: "rolls",
    title: {
      ru: "Кани маки",
      uz: "Kani maki",
      en: "Kani Maki"
    },
    description: {
      ru: "Рис, крабовый микс",
      uz: "Guruch, крабовый микс",
      en: "Sushi rice, crab mix"
    },
    price: 25000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/kani.da1344a5.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-2-2",
    categoryId: "rolls",
    title: {
      ru: "Каппа маки",
      uz: "Kappa maki",
      en: "Kappa Maki"
    },
    description: {
      ru: "Рис, огурец",
      uz: "Guruch, bodring",
      en: "Sushi rice, cucumber"
    },
    price: 23000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/kappa.78f21ac4.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-1-3",
    categoryId: "rolls",
    title: {
      ru: "Сяке маки",
      uz: "Syake maki",
      en: "Shake Maki (Salmon)"
    },
    description: {
      ru: "Рис, сёмга, огурец",
      uz: "Guruch, syomga, bodring",
      en: "Sushi rice, salmon, cucumber"
    },
    price: 40000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика","Лосось"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/syakiMaki.030a6202.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-3-4",
    categoryId: "rolls",
    title: {
      ru: "Унаги маки",
      uz: "Unagi maki",
      en: "Unagi Maki (Eel)"
    },
    description: {
      ru: "Рис, угорь, огурец",
      uz: "Guruch, ilonbaliq, bodring",
      en: "Sushi rice, eel, cucumber"
    },
    price: 38000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика","Угорь"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/unagi-maki.81dbe410.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-10-5",
    categoryId: "rolls",
    title: {
      ru: "Запечённый чикен с яблокой",
      uz: "Olma bilan pishirilgan tovuq",
      en: "Baked Chicken with Apple"
    },
    description: {
      ru: "Рис, фирменная жареная курица, зелёное яблоко, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, фирменная жареная tovuq, зелёное яблоко, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, фирменная жареная курица, зелёное яблоко, cream cheese, соус унаги, кунжут"
    },
    price: 55000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный","Курица"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/apple-zap.87748e81.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-10-6",
    categoryId: "rolls",
    title: {
      ru: "Запечённый кани с яблокой",
      uz: "Olma bilan pishirilgan kani",
      en: "Baked Crab with Apple"
    },
    description: {
      ru: "Рис, крабовый микс, зелёное яблоко, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, крабовый микс, зелёное яблоко, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, crab mix, зелёное яблоко, cream cheese, соус унаги, кунжут"
    },
    price: 60000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/zapapplekrab.e38236f1.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-10-7",
    categoryId: "rolls",
    title: {
      ru: "Запечённый чикен",
      uz: "Pishirilgan tovuq roll",
      en: "Baked Chicken Roll"
    },
    description: {
      ru: "Рис, фирменная жареная курица, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, фирменная жареная tovuq, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, фирменная жареная курица, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 50000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный","Курица"],
    popular: false,
    preparationTime: 16,
    image: "",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-17-8",
    categoryId: "rolls",
    title: {
      ru: "Запечённый кани",
      uz: "Pishirilgan kani (krab)",
      en: "Baked Crab Roll"
    },
    description: {
      ru: "Рис, крабовый микс, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, крабовый микс, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, crab mix, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 56000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/zapkrab.0393e7c7.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-9-9",
    categoryId: "rolls",
    title: {
      ru: "Запечённый с сёмгой",
      uz: "Syomga bilan pishirilgan roll",
      en: "Baked Salmon Roll"
    },
    description: {
      ru: "Рис, сёмга, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, syomga, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, salmon, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 56000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный","Лосось"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/zapsalmon.d6c22b77.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-11-10",
    categoryId: "rolls",
    title: {
      ru: "Запечённый с угрём",
      uz: "Ilonbaliq (ugor) bilan pishirilgan",
      en: "Baked Eel Roll"
    },
    description: {
      ru: "Рис, угорь, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, ilonbaliq, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, eel, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 56000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный","Угорь"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/zapugor.7a1868c8.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-10-11",
    categoryId: "rolls",
    title: {
      ru: "Запечённый с омлетом",
      uz: "Omlet bilan pishirilgan roll",
      en: "Baked Tamago Omelet Roll"
    },
    description: {
      ru: "Рис, крабовый микс, омлет, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, крабовый микс, омлет, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, crab mix, омлет, cream cheese, соус унаги, кунжут"
    },
    price: 60000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/zapomletom.02d7e659.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-4-12",
    categoryId: "rolls",
    title: {
      ru: "Запечённый калифорния",
      uz: "Pishirilgan Kaliforniya",
      en: "Baked California Roll"
    },
    description: {
      ru: "Рис, крабовый микс, огурец, творожный сыр, кунжут, запеченная шапка",
      uz: "Guruch, крабовый микс, bodring, творожный pishloq, кунжут, запеченная шапка",
      en: "Sushi rice, crab mix, cucumber, cream cheese, кунжут, запеченная шапка"
    },
    price: 65000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Запеченный"],
    popular: true,
    preparationTime: 16,
    image: "https://sushito.uz/img/zap-kalifornia.b315238e.png",
    defaultPlaceholderType: "baked-roll"
  },
  {
    id: "sushito-6-13",
    categoryId: "rolls",
    title: {
      ru: "Чука Ролл",
      uz: "Chuka Roll",
      en: "Chuka Seaweed Roll"
    },
    description: {
      ru: "Рис, нори, лосось, творожный сыр, огурец, чука (водоросли), ореховый соус, карамельный соус",
      uz: "Guruch, нори, лосось, творожный pishloq, bodring, чука (водоросли), ореховый sous, карамельный sous",
      en: "Sushi rice, нори, лосось, cream cheese, cucumber, чука (водоросли), ореховый соус, карамельный соус"
    },
    price: 69000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/chuka.d79cbc85.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-4-14",
    categoryId: "rolls",
    title: {
      ru: "Калифорния в кунжуте",
      uz: "Kunjutli Kaliforniya",
      en: "Sesame California Roll"
    },
    description: {
      ru: "Рис, фирменная жареная курица, огурец, творожный сыр, кунжут",
      uz: "Guruch, фирменная жареная tovuq, bodring, творожный pishloq, кунжут",
      en: "Sushi rice, фирменная жареная курица, cucumber, cream cheese, кунжут"
    },
    price: 55000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Калифорния"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/kalifornia-kunjut.45db3f87.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-5-15",
    categoryId: "rolls",
    title: {
      ru: "Калифорния с угрём",
      uz: "Ilonbaliqli Kaliforniya",
      en: "California with Eel"
    },
    description: {
      ru: "Рис, угорь, огурец, соус унаги, кунжут",
      uz: "Guruch, ilonbaliq, bodring, sous унаги, кунжут",
      en: "Sushi rice, eel, cucumber, соус унаги, кунжут"
    },
    price: 65000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Калифорния","Угорь"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/kalifornia-ugor.9b46d341.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-7-16",
    categoryId: "rolls",
    title: {
      ru: "Калифорния классик",
      uz: "Klassik Kaliforniya",
      en: "California Classic"
    },
    description: {
      ru: "Рис, крабовый микс, огурец, икра масаго, творожный сыр",
      uz: "Guruch, крабовый микс, bodring, икра масаго, творожный pishloq",
      en: "Sushi rice, crab mix, cucumber, икра масаго, cream cheese"
    },
    price: 63000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Калифорния"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/kalifornia-klassik.3f1f950c.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-8-17",
    categoryId: "rolls",
    title: {
      ru: "Сочи",
      uz: "Sochi roll",
      en: "Sochi Roll"
    },
    description: {
      ru: "Рис, крабовый микс, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, крабовый микс, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, crab mix, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 65000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/sochi.b8d26a71.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-7-18",
    categoryId: "rolls",
    title: {
      ru: "Калифорния с лососем",
      uz: "Lososli Kaliforniya",
      en: "California Salmon"
    },
    description: {
      ru: "Рис, лосось,  огурец, икра масаго, творожный сыр",
      uz: "Guruch, лосось,  bodring, икра масаго, творожный pishloq",
      en: "Sushi rice, лосось,  cucumber, икра масаго, cream cheese"
    },
    price: 70000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Калифорния","Лосось"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/kaliforniaSalmon.8c7dec53.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-23-19",
    categoryId: "rolls",
    title: {
      ru: "Сэндвич цезарь ролл",
      uz: "Sendvich Sezar roll",
      en: "Sandwich Caesar Roll"
    },
    description: {
      ru: "Рис, фирменная жареная курица, огурец, творожный сыр",
      uz: "Guruch, фирменная жареная tovuq, bodring, творожный pishloq",
      en: "Sushi rice, фирменная жареная курица, cucumber, cream cheese"
    },
    price: 65000,
    portion: {
      ru: "4шт в порции",
      uz: "Porsiyada 4шт",
      en: "4шт per portion"
    },
    tags: ["Классика"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/sendvich.ebd2429f.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-15-20",
    categoryId: "rolls",
    title: {
      ru: "Чикен темпура",
      uz: "Tovuqli Tempura",
      en: "Chicken Tempura Roll"
    },
    description: {
      ru: "Рис, фирменная жареная курица, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, фирменная жареная tovuq, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, фирменная жареная курица, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 63000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий","Курица"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/chicken-tempura.a1793de8.jpg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-6-21",
    categoryId: "rolls",
    title: {
      ru: "Чикен Чука Темпура",
      uz: "Tovuqli Chuka Tempura",
      en: "Chicken Chuka Tempura"
    },
    description: {
      ru: "Рис, нори, курица, творожный сыр, огурец, чука (водоросли), ореховый соус, карамельный соус",
      uz: "Guruch, нори, tovuq, творожный pishloq, bodring, чука (водоросли), ореховый sous, карамельный sous",
      en: "Sushi rice, нори, курица, cream cheese, cucumber, чука (водоросли), ореховый соус, карамельный соус"
    },
    price: 72000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий","Курица"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/chukaRollTempura.435efb85.jpeg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-12-22",
    categoryId: "rolls",
    title: {
      ru: "Сяке темпура",
      uz: "Syake Tempura (Losos)",
      en: "Shake Tempura Roll"
    },
    description: {
      ru: "Рис, сёмга, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, syomga, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, salmon, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 70000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий","Лосось"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/syaki-tempura.b89207b9.jpg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-13-23",
    categoryId: "rolls",
    title: {
      ru: "Техас темпура",
      uz: "Texas Tempura",
      en: "Texas Tempura Roll"
    },
    description: {
      ru: "Рис, сёмга, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, syomga, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, salmon, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 70000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/texas.e905665d.jpg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-14-24",
    categoryId: "rolls",
    title: {
      ru: "Маями темпура",
      uz: "Mayami Tempura",
      en: "Miami Tempura Roll"
    },
    description: {
      ru: "Рис, крабовый микс, огурец, творожный сыр, соус унаги, соус спайси, кунжут",
      uz: "Guruch, крабовый микс, bodring, творожный pishloq, sous унаги, sous спайси, кунжут",
      en: "Sushi rice, crab mix, cucumber, cream cheese, соус унаги, соус спайси, кунжут"
    },
    price: 70000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/mayami.411559b5.jpg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-16-25",
    categoryId: "rolls",
    title: {
      ru: "Унаги темпура",
      uz: "Unagi Tempura (Ilonbaliq)",
      en: "Unagi Tempura Roll"
    },
    description: {
      ru: "Рис, угорь, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, ilonbaliq, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, eel, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 77000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Темпура","Горячий","Угорь"],
    popular: false,
    preparationTime: 16,
    image: "https://sushito.uz/img/syaki-tempura.b89207b9.jpg",
    defaultPlaceholderType: "tempura-roll"
  },
  {
    id: "sushito-18-26",
    categoryId: "rolls",
    title: {
      ru: "Чикен чиз",
      uz: "Chiken Chiz (Pishloqli)",
      en: "Chicken Cheese Roll"
    },
    description: {
      ru: "Рис, фирменная жареная курица, огурец, творожный сыр, сыр чеддер",
      uz: "Guruch, фирменная жареная tovuq, bodring, творожный pishloq, pishloq чеддер",
      en: "Sushi rice, фирменная жареная курица, cucumber, cream cheese, сыр чеддер"
    },
    price: 55000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика","Курица"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/chicken-chesse.c3c5ad17.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-20-27",
    categoryId: "rolls",
    title: {
      ru: "Чикен Чипс",
      uz: "Chiken Chips",
      en: "Chicken Chips Roll"
    },
    description: {
      ru: "Рис, курица, огурец, творожный сыр, cпайси соус, унаги соус, икра масаго, картофельные стружки",
      uz: "Guruch, tovuq, bodring, творожный pishloq, cпайси sous, унаги sous, икра масаго, картофельные стружки",
      en: "Sushi rice, курица, cucumber, cream cheese, cпайси соус, унаги соус, икра масаго, картофельные стружки"
    },
    price: 85000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика","Курица"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/chips.85f57ab1.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-20-28",
    categoryId: "rolls",
    title: {
      ru: "Филадельфия",
      uz: "Filadelfiya klassik",
      en: "Philadelphia Classic"
    },
    description: {
      ru: "Рис, сёмга, огурец, творожный сыр",
      uz: "Guruch, syomga, bodring, творожный pishloq",
      en: "Sushi rice, salmon, cucumber, cream cheese"
    },
    price: 80000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Филадельфия","Премиум"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/filla.d0beb911.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-21-29",
    categoryId: "rolls",
    title: {
      ru: "Филадельфия гриль",
      uz: "Grilda pishirilgan Filadelfiya",
      en: "Philadelphia Grill"
    },
    description: {
      ru: "Рис, сёмга гриль, огурец, творожный сыр",
      uz: "Guruch, syomga гриль, bodring, творожный pishloq",
      en: "Sushi rice, salmon гриль, cucumber, cream cheese"
    },
    price: 85000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Филадельфия","Премиум"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/fila-gril.5e510412.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-23-30",
    categoryId: "rolls",
    title: {
      ru: "Филадельфия с угрём",
      uz: "Ilonbaliqli Filadelfiya",
      en: "Philadelphia with Eel"
    },
    description: {
      ru: "Рис, сёмга, угорь, творожный сыр, огурец, соус унаги, кунжут",
      uz: "Guruch, syomga, ilonbaliq, творожный pishloq, bodring, sous унаги, кунжут",
      en: "Sushi rice, salmon, eel, cream cheese, cucumber, соус унаги, кунжут"
    },
    price: 85000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Филадельфия","Премиум","Угорь"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/philadelphia_unagi.aabef132.png",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-22-31",
    categoryId: "rolls",
    title: {
      ru: "Канада",
      uz: "Kanada roll",
      en: "Canada Roll"
    },
    description: {
      ru: "Рис, сёмга, угорь, огурец, творожный сыр, соус унаги, кунжут",
      uz: "Guruch, syomga, ilonbaliq, bodring, творожный pishloq, sous унаги, кунжут",
      en: "Sushi rice, salmon, eel, cucumber, cream cheese, соус унаги, кунжут"
    },
    price: 90000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Классика"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/kanada.c33a374b.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-21-32",
    categoryId: "rolls",
    title: {
      ru: "Карамельная филадельфия",
      uz: "Karamelli Filadelfiya",
      en: "Caramel Philadelphia"
    },
    description: {
      ru: "Рис, сёмга, творожный сыр, карамельный соус, грецкий орех, унаги соус",
      uz: "Guruch, syomga, творожный pishloq, карамельный sous, грецкий орех, унаги sous",
      en: "Sushi rice, salmon, cream cheese, карамельный соус, грецкий орех, унаги соус"
    },
    price: 95000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Филадельфия","Премиум"],
    popular: false,
    preparationTime: 12,
    image: "https://sushito.uz/img/karamel.1a0542bb.jpg",
    defaultPlaceholderType: "classic-roll"
  },
  {
    id: "sushito-19-33",
    categoryId: "rolls",
    title: {
      ru: "Филадельфия люкс",
      uz: "Filadelfiya Lyuks",
      en: "Philadelphia Luxe"
    },
    description: {
      ru: "Рис, сёмга, огурец, творожный сыр, сырная шапка, масаго",
      uz: "Guruch, syomga, bodring, творожный pishloq, pishloqная шапка, масаго",
      en: "Sushi rice, salmon, cucumber, cream cheese, сырная шапка, масаго"
    },
    price: 95000,
    portion: {
      ru: "10шт в порции",
      uz: "Porsiyada 10шт",
      en: "10шт per portion"
    },
    tags: ["Филадельфия","Премиум"],
    popular: true,
    preparationTime: 12,
    image: "https://sushito.uz/img/fila-lyuks.9e5ffb66.png",
    defaultPlaceholderType: "classic-roll"
  },

  // ===================== CHUCHVARALAR =====================
  {
    id: 'chuchvara-carbonara',
    categoryId: 'chuchvara',
    title: {
      ru: 'Чучвара Карбонара',
      uz: 'Chuchvara Karbonara',
      en: 'Chuchvara Carbonara'
    },
    description: {
      ru: 'Нежная домашняя чучвара с говядиной в бархатном соусе Карбонара с поджаренными кусочками мяса, яичным желтком, черным перцем и тертым пармезаном.',
      uz: "Mayin xonaki chuchvara, quyuq baxmaldek Karbonara sousi, qovurilgan go'sht bo'lakchalari, tuxum sarig'i va parmezan pishlog'i bilan.",
      en: 'Handmade beef dumplings tossed in a silky classic Carbonara sauce with crispy savory bits, egg yolk, freshly ground pepper, and parmesan.'
    },
    price: 49000,
    portion: {
      ru: '1 порция (290 г)',
      uz: '1 porsiya (290 g)',
      en: '1 portion (290 g)'
    },
    tags: ['Фирменное', 'Сливочный соус', 'Карбонара'],
    popular: true,
    preparationTime: 16,
    calories: 540,
    defaultPlaceholderType: 'chuchvara-carbonara'
  },
  {
    id: 'chuchvara-ramen',
    categoryId: 'chuchvara',
    title: {
      ru: 'Рамен с чучварой',
      uz: 'Chuchvarali Ramen',
      en: 'Chuchvara Ramen Soup'
    },
    description: {
      ru: 'Авторский наваристый рамен: японский бульон со свежей пшеничной лапшой, домашней сочной чучварой из говядины, маринованным яйцом, водорослями нори и зеленым луком.',
      uz: "Mualliflik to'yimli rameni: maxsus ramen bulyoni, yangi bug'doy lapshasi, mayin xonaki chuchvara, yarim qaynatilgan tuxum, nori va ko'k piyoz.",
      en: 'Signature hearty ramen: rich savory broth with fresh ramen noodles, delicate beef dumplings (chuchvara), marinated soft egg, nori, and scallions.'
    },
    price: 52000,
    portion: {
      ru: '1 порция (450 мл)',
      uz: '1 porsiya (450 ml)',
      en: '1 portion (450 ml)'
    },
    tags: ['Фирменное', 'Рамен', 'Горячий суп'],
    popular: true,
    preparationTime: 15,
    calories: 480,
    defaultPlaceholderType: 'chuchvara-ramen'
  },
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
  {
    id: 'ramen-chuchvara-soup',
    categoryId: 'soups',
    title: {
      ru: 'Рамен с чучварой',
      uz: 'Chuchvarali Ramen',
      en: 'Chuchvara Ramen Soup'
    },
    description: {
      ru: 'Ароматный густой бульон рамен с длинной лапшой, нежной чучварой с говядиной, яйцом, нори и кунжутом.',
      uz: "To'yimli boy ramen bulyoni, uzundan-uzun lapsha, barra chuchvara, tuxum va nori bilan.",
      en: 'Rich broth with ramen noodles, delicate beef dumplings, soft egg, nori seaweed, and sesame seeds.'
    },
    price: 52000,
    portion: {
      ru: '1 порция (450 мл)',
      uz: '1 porsiya (450 ml)',
      en: '1 portion (450 ml)'
    },
    tags: ['Рамен', 'Горячий суп', 'Фирменное'],
    popular: true,
    preparationTime: 15,
    calories: 480,
    defaultPlaceholderType: 'chuchvara-ramen'
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
