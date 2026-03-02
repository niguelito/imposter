import { BRAWL_STARS } from "./BrawlStars";
import { ERHS_STAFF } from "./ErhsStaff";
import { MARVEL_RIVALS } from "./MarvelRivals";
import { MUSICAL_INSTRUMENTS } from "./MusicalInstruments";
import { REGULAR } from "./Regular";

export interface CategoryData {
  category: string;
  words: string[];
}

export const CATEGORIES = [
  { id: 'regular', name: 'Regular', data: REGULAR },
  { id: 'brawlstars', name: 'Brawl Stars', data: BRAWL_STARS },
  { id: 'rivals', name: 'Marvel Rivals', data: MARVEL_RIVALS },
  { id: 'staff', name: 'Erhs Staff', data: ERHS_STAFF },
  { id: "instruments", name: "Musical Instruments", data: MUSICAL_INSTRUMENTS }
];

export function getRandomWord(dataset: CategoryData[]) {
  const categoryIndex = Math.floor(Math.random() * dataset.length);
  const categoryObj = dataset[categoryIndex];
  const wordIndex = Math.floor(Math.random() * categoryObj.words.length);
  return {
    category: categoryObj.category,
    word: categoryObj.words[wordIndex]
  };
}
