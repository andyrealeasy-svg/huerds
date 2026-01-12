import { Category, Nominee } from './types';

const rawData = [
  // Additional Category
  {
    category: "Songwriter of the Year",
    items: ["SiCka", "Ksivat", "Dollova"]
  },
  {
    category: "Next Innovator",
    items: ["Pavlova Cookie", "Ksivat", "meedy"]
  },
  {
    category: "Throw Back",
    items: ["Lush Life by Zara Larsson", "needy by Ariana Grande", "WIFI by Ольга Бузова"]
  },
  {
    category: "Best Duet/Group Track",
    items: ["jada by Dollova, Ariana Grande", "Baddie Baddie by SiCka, Ice Spice", "SHIMMY SHIMMY YA! by Pavlova Cookie, МЭЙБИ БЭЙБИ"]
  },
  {
    category: "Best Music Video",
    items: ["Copying Me by Ksivat", "Drei by SiCka", "Big Guy by Ksivat"]
  },
  {
    category: "Best Lyrics",
    items: ["Дерьмище by SiCka", "Ицковичи Подъем by Ksivat", "ливай by Dollova"]
  },
  {
    category: "Best Artwork",
    items: ["AM I THE SUCHKA? by SiCka", "Trois by Dollova", "Lauma by Ksivat"]
  },
  // Genre Category
  {
    category: "Best R&B Artist",
    items: ["The Weeknd", "SZA", "R. Kelly"]
  },
  {
    category: "Best R&B Album",
    items: ["Hurry Up Tomorrow by The Weeknd", "CHAINSAW by Pavlova Cookie", "SOS Deluxe: LANA by SZA"]
  },
  {
    category: "Best R&B Track",
    items: ["ПРЕМИУМ ПОДПИСКА by INSTASAMKA", "Toilet by SiCka", "Saturn by SZA"]
  },
  {
    category: "Best Electronic/Dance Artist",
    items: ["АВЯ ASTI", "PinkPantheress", "NISHE"]
  },
  {
    category: "Best Electronic/Dance Album",
    items: ["GLITTER AND VIOLENCE by АВЯ ASTI", "Fancy That by PinkPantheress", "BEYOND by NISHE"]
  },
  {
    category: "Best Electronic/Dance Track",
    items: ["Lick and Fap by SiCka", "Illegal by PinkPantheress", "GIMMIE MONEY by NISHE"]
  },
  // Main Genre Category
  {
    category: "Best Pop Artist",
    items: ["NIK$A", "Dollova", "АВЯ ASTI", "Ariana Grande", "Tate McRae"]
  },
  {
    category: "Best Pop Album",
    items: ["Trois by Dollova", "eternal sunshine deluxe: brighter days ahead by Ariana Grande", "So Close To What by Tate McRae", "КУЛЬТ ПОДЗАЛУПКИНОЙ by NIK$A", "ESCORT by АВЯ ASTI"]
  },
  {
    category: "Best Pop Track",
    items: ["Flawless by Ksivat", "Madam Cum by Dollova", "dandelion by Ariana Grande", "TIT FOR TAT by Tate McRae", "REHUB by АВЯ ASTI"]
  },
  {
    category: "Best Rap Artist",
    items: ["SiCka", "Pavlova Cookie", "Ice Spice", "Ksivat", "Doja Cat"]
  },
  {
    category: "Best Rap Album",
    items: ["I AM THE WINNER by Pavlova Cookie", "AM I THE SUCHKA? by SiCka", "dollodelica by Dollova", "Vie by Doja Cat", "Vibes by Yanix"]
  },
  {
    category: "Best Rap Track",
    items: ["ГОВНО НА ВЕНТИЛЯТОР by Pavlova Cookie", "Ицковичи Подъем by Ksivat", "BAD BITCH by Dollova, NIK$A", "Big Guy by Ice Spice", "Дерьмище by SiCka"]
  },
  // Major Category
  {
    category: "Artist Of The Year",
    items: ["SiCka", "Dollova", "PinkPantheress", "Pavlova Cookie", "Ksivat", "Ariana Grande", "Baby Cute"]
  },
  {
    category: "Best New Artist",
    items: ["Ksivat", "Pavlova Cookie", "SiCka"]
  },
  {
    category: "Album Of The Year",
    items: ["AM I THE SUCHKA? by SiCka", "Trois by Dollova", "Fancy That by PinkPantheress", "I AM THE WINNER by Pavlova Cookie", "eternal sunshine deluxe: brighter days ahead by Ariana Grande", "Высшие силы by ANNA ASTI", "#hooligani by Baby Cute"]
  },
  {
    category: "Track Of The Year",
    items: ["Дерьмище by SiCka", "Madam Cum by Dollova", "Big Guy by Ice Spice", "ГОВНО НА ВЕНТИЛЯТОР by Pavlova Cookie", "Ицковичи Подъем by Ksivat", "twilight zone by Ariana Grande", "smoking by meedy"]
  }
];

const parseNominee = (raw: string, index: number): Nominee => {
  // Split by " by " to separate Title and Artist
  const parts = raw.split(' by ');
  
  if (parts.length > 1) {
    return {
      id: `nom-${index}`,
      primaryText: parts[0].trim(),
      secondaryText: parts[1].trim()
    };
  }
  
  return {
    id: `nom-${index}`,
    primaryText: raw.trim()
  };
};

export const CATEGORIES: Category[] = rawData.map((data, idx) => ({
  id: `cat-${idx}`,
  title: data.category,
  nominees: data.items.map((item, i) => parseNominee(item, i))
}));

// Timing Constants (in ms)
export const TIME_CATEGORY_TITLE = 3500;
export const TIME_PER_NOMINEE = 2000;
export const TIME_READING_PAUSE = 4000; // Pause after all nominees shown before moving on