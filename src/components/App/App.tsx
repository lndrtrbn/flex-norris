import { useJokesContext } from "../../contexts/jokes.context";

import "./App.scss";

export default function App() {
  const { jokes } = useJokesContext();

  if (jokes.length === 0) return null;

  return (
    <div className="app">
      <div className="container">
        <div className="flex">
          <h2>{jokes.length}</h2>
          <p>Chuck Norris jokes have been imported.</p>
        </div>
        <p>
          Provided by{" "}
          <a href="https://api.chucknorris.io" target="_blank">
            https://api.chucknorris.io
          </a>
          .
        </p>
      </div>
    </div>
  );
}
