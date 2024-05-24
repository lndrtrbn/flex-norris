import { createContext, useContext, useEffect, useState } from "react";
import {
  ApiJokeResult,
  JOKE_CATEGORIES,
  Joke,
  JokeCategory,
} from "../utils/joke";
import { ContextData, ProviderProps } from "./context.type";
import axios from "axios";

type Context = {
  jokes: ContextData<Joke[]>;
  activeCategories: ContextData<Set<JokeCategory>>;
};
const JokesContext = createContext<Context | undefined>(undefined);

export function JokesProvider({ children }: ProviderProps) {
  const jokes = useState<Joke[]>([]);
  const activeCategories = useState<Set<JokeCategory>>(
    new Set(JOKE_CATEGORIES)
  );
  const [, setJokes] = jokes;

  useEffect(() => {
    const fetchJokes = async () => {
      const jokesUrl = "https://api.chucknorris.io/jokes/search?query=the";
      const { data } = await axios.get<ApiJokeResult>(jokesUrl);
      setJokes(data.result.map((j) => new Joke(j)));
    };
    fetchJokes();
  }, []);

  return (
    <JokesContext.Provider value={{ jokes, activeCategories }}>
      {children}
    </JokesContext.Provider>
  );
}

export function useJokesContext() {
  const context = useContext(JokesContext);
  if (!context) {
    throw new Error("useJokesContext must be used within a JokesProvider");
  }

  const { jokes, activeCategories } = context;

  function toggleCategory(category: JokeCategory) {
    const [, setCategories] = activeCategories;
    setCategories((currentCategories) => {
      const newCategories = new Set(currentCategories);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return newCategories;
    });
  }

  function unselectAllCategories() {
    const [, setCategories] = activeCategories;
    setCategories(new Set());
  }

  function selectAllCategories() {
    const [, setCategories] = activeCategories;
    setCategories(new Set(JOKE_CATEGORIES));
  }

  return {
    jokes: jokes[0],
    activeCategories: activeCategories[0],
    toggleCategory,
    unselectAllCategories,
    selectAllCategories,
  };
}
