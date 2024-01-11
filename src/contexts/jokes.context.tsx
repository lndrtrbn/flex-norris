import { createContext, useContext, useEffect, useState } from "react";
import { ApiJokeResult, Joke } from "../utils/joke";
import { ContextData, ProviderProps } from "./context.type";
import axios from "axios";

type Context = ContextData<Joke[]>;
const JokesContext = createContext<Context | undefined>(undefined);

export function JokesProvider({ children }: ProviderProps) {
  const jokeState = useState<Joke[]>([]);
  const [, setJokes] = jokeState;

  useEffect(() => {
    const fetchJokes = async () => {
      const jokesUrl = "https://api.chucknorris.io/jokes/search?query=the";
      const { data } = await axios.get<ApiJokeResult>(jokesUrl);
      setJokes(data.result.map((j) => new Joke(j)));
    };
    fetchJokes();
  }, []);

  return (
    <JokesContext.Provider value={jokeState}>{children}</JokesContext.Provider>
  );
}

export function useJokesContext() {
  const context = useContext(JokesContext);
  if (!context) {
    throw new Error("useJokesContext must be used within a JokesProvider");
  }

  const [jokes] = context;
  return { jokes };
}
