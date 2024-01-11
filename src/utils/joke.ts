const JOKE_CATEGORIES = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
] as const;
export type JokeCategory = (typeof JOKE_CATEGORIES)[number];

export type ApiJoke = {
  categories: JokeCategory[];
  created_at: string;
  id: string;
  url: string;
  value: string;
};

export type ApiJokeResult = {
  total: number;
  result: ApiJoke[];
};

export class Joke {
  categories: JokeCategory[];
  createdAt: Date;
  id: string;
  url: string;
  value: string;

  constructor(apiJoke: ApiJoke) {
    this.categories = apiJoke.categories;
    this.createdAt = new Date(apiJoke.created_at);
    this.id = apiJoke.id;
    this.url = apiJoke.url;
    this.value = apiJoke.value;
  }
}
