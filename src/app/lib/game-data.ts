export interface CategoryData {
  category: string;
  words: string[];
}

export const GAME_DATASET: CategoryData[] = [
  {
    category: "Fruit",
    words: ["Apple", "Banana", "Strawberry", "Pineapple", "Mango", "Watermelon", "Grape", "Kiwi", "Peach", "Cherry"]
  },
  {
    category: "Animals",
    words: ["Elephant", "Giraffe", "Penguin", "Kangaroo", "Lion", "Tiger", "Dolphin", "Octopus", "Hamster", "Zebra"]
  },
  {
    category: "Countries",
    words: ["Japan", "Brazil", "Canada", "Germany", "Australia", "Egypt", "France", "Mexico", "Italy", "India"]
  },
  {
    category: "Occupations",
    words: ["Doctor", "Astronaut", "Chef", "Firefighter", "Artist", "Plumber", "Pilot", "Teacher", "Engineer", "Nurse"]
  },
  {
    category: "Household Objects",
    words: ["Toaster", "Mirror", "Curtain", "Spoon", "Pillow", "Lamp", "Clock", "Towel", "Hammer", "Fridge"]
  },
  {
    category: "Musical Instruments",
    words: ["Guitar", "Piano", "Violin", "Drums", "Saxophone", "Flute", "Trumpet", "Harp", "Accordion", "Cello"]
  },
  {
    category: "Transport",
    words: ["Bicycle", "Helicopter", "Submarine", "Rocket", "Train", "Motorcycle", "Scooter", "Airplane", "Yacht", "Bus"]
  },
  {
    category: "Weather",
    words: ["Thunderstorm", "Blizzard", "Rainbow", "Hurricane", "Tornado", "Fog", "Drizzle", "Hailstone", "Monsoon", "Cyclone"]
  }
];

export function getRandomWord() {
  const categoryIndex = Math.floor(Math.random() * GAME_DATASET.length);
  const categoryObj = GAME_DATASET[categoryIndex];
  const wordIndex = Math.floor(Math.random() * categoryObj.words.length);
  return {
    category: categoryObj.category,
    word: categoryObj.words[wordIndex]
  };
}
