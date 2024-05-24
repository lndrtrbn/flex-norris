import { useMemo } from "react";
import { useJokesContext } from "../../contexts/jokes.context";
import Joke from "./Joke/Joke";

import "./Jokes.scss";

export default function Jokes() {
  const { jokes, activeCategories, searchValue } = useJokesContext();
  const filteredJokes = useMemo(
    () =>
      jokes.filter(
        (joke) =>
          joke.hasCategory(activeCategories) && joke.matchSearch(searchValue)
      ),
    [jokes, activeCategories, searchValue]
  );

  return (
    <div className="jokes">
      {filteredJokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
}
