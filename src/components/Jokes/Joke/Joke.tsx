import { Joke as JokeType } from "../../../utils/joke";

import "./Joke.scss";

type Props = {
  joke: JokeType;
};

export default function Joke({ joke }: Props) {
  return (
    <div className="joke">
      <div className="jokeCategories">
        {joke.categories.map((cat) => (
          <span className="jokeCategory">{cat}</span>
        ))}
        <span>{joke.createdAt.toLocaleDateString()}</span>
      </div>
      <p>{joke.value}</p>
    </div>
  );
}
