import { BRAWL_STARS } from "./data/BrawlStars";
import { ERHS_STAFF } from "./data/ErhsStaff";
import { MARVEL_RIVALS } from "./data/MarvelRivals";
import { REGULAR } from "./data/Regular";

export interface CategoryData {
  category: string;
  words: string[];
}

export class GameCategories {
  public static Regular = REGULAR;
  public static BrawlStars = BRAWL_STARS;
  public static MarvelRivals = MARVEL_RIVALS;
  public static ErhsStaff = ERHS_STAFF;
}

export function getRandomWord(dataset: CategoryData[]) {
  const categoryIndex = Math.floor(Math.random() * dataset.length);
  const categoryObj = dataset[categoryIndex];
  const wordIndex = Math.floor(Math.random() * categoryObj.words.length);
  return {
    category: categoryObj.category,
    word: categoryObj.words[wordIndex]
  };
}
