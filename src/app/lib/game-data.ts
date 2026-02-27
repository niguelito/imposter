export interface CategoryData {
  category: string;
  words: string[];
}

const REGULAR: CategoryData[] = [
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
    words: ["Guitar", "Piano", "Violin", "Drums", "Saxophone", "Flute", "Trumpet", "Harp", "Accordion", "Cello", "Didgeridoo", "Sitar"]
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

const BRAWL_STARS: CategoryData[] = [
  {
    category: "Tanks",
    words: ["Bull", "El primo", "Rosa", "Darryl", "Jacky", "Frank", "Bibi", "Ash", "Hank", "Trunk", "Buster", "Ollie", "Meg", "Draco"]
  },
  {
    category: "Assassins",
    words: ["Stu", "Edgar", "Sam", "Shade", "Mortis", "Buzz", "Fang", "Mico", "Melodie", "Lily", "Alli", "Gigi", "Crow", "Leon", "Cordelius", "Kenji", "Kaze"]
  },
  {
    category: "Support",
    words: ["Poco", "Gus", "Pam", "Berry", "Max", "Byron", "Ruffs", "Gray", "Doug", "Jae-Yong", "Glowbert/Glowy", "Kit"]
  },
  {
    category: "Controllers",
    words: ["Jessie", "Penny", "Bo", "Emz", "Griff", "Gale", "Meeple", "Gene", "Mr. P", "Squeak", "Lou", "Otis", "Willow", "Chuck", "Charlie", "Finx", "Zigga", "Sandy", "Amber", "Sirius"]
  },
  {
    category: "Damage Dealers",
    words: ["Shelly", "Nita", "Colt", "8-bit", "Rico", "Carl", "Colette", "Lola", "Pearl", "Tara", "Eve", "RT", "Clany", "Moe", "Lumi", "Mina", "Spike", "Surge", "Chester"]
  },
  {
    category: "Marksmen",
    words: ["Brock", "Piper", "Bea", "Nani", "Bonnie", "Belle", "Mandy", "Maisie", "Angelo", "Janet", "Pierce"]
  },
  {
    category: "Artillery",
    words: ["Barley", "Dynamike", "Tick", "Grom", "Larry & Lawrie", "Sprout", "juju"]
  }
]

const MARVEL_RIVALS: CategoryData[] = [
  {
    category: "Brawlers",
    words: ["Groot", "The Thing", "Emma Frost", "Rogue", "Storm", "Scarlet Witch", "Human Torch", "Elsa Bloodstone", "Mister Fantastic"]
  },
  {
    category: "Divers",
    words: ["Hulk", "Venom", "Thor", "Captain America", "Angela", "Spider-Man", "Black Panther", "Magik", "Psylocke", "Iron Fist", "Wolverine", "Blade", "Dare Devil"]
  },
  {
    category: "Poke Heroes",
    words: ["Doctor Strange", "Peni Parker", "Magneto", "Iron Man", "Namor", "Star-Lord", "The Punisher", "Hela", "Winter Soldier", "Moon Knight", "Hawkeye", "Squirrel Girl", "Black Widow", "Phoenix"]
  },
  {
    category: "Strategists",
    words: ["Luna Snow", "Loki", "Rocket Raccoon", "Mantis", "Adam Warlock", "Jeff the Shark", "Cloak & Dagger", "Invisible Woman", "Ultron", "Gambit"]
  }
]

export class GameCategories {
  public static Regular = REGULAR;
  public static BrawlStars = BRAWL_STARS;
  public static MarvelRivals = MARVEL_RIVALS;
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
