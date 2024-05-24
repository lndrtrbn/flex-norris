import { useJokesContext } from "../../contexts/jokes.context";
import { JOKE_CATEGORIES } from "../../utils/joke";
import Button from "../Button/Button";

import "./Sidebar.scss";

export default function Sidebar() {
  const {
    activeCategories,
    toggleCategory,
    unselectAllCategories,
    selectAllCategories,
  } = useJokesContext();

  return (
    <section className="sidebar">
      <h4>Categories</h4>

      <div className="categories">
        {JOKE_CATEGORIES.map((category) => (
          <Button
            key={category}
            fullSize
            onClick={() => toggleCategory(category)}
            off={!activeCategories.has(category)}
          >
            {category}
          </Button>
        ))}

        <div className="separator" />

        <Button fullSize onClick={() => unselectAllCategories()}>
          Unselect All
        </Button>
        <Button fullSize onClick={() => selectAllCategories()}>
          Select All
        </Button>
      </div>

      <a href="https://api.chucknorris.io/" target="_blank">
        Chuck Norris API
      </a>
    </section>
  );
}
