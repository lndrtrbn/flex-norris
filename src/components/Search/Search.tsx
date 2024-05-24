import { useJokesContext } from "../../contexts/jokes.context";

import "./Search.scss";

export default function Search() {
  const { searchValue, setSearch } = useJokesContext();

  return (
    <input
      className="search"
      type="text"
      placeholder="Search a joke"
      value={searchValue}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
