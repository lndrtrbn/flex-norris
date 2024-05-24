import { useJokesContext } from "../../contexts/jokes.context";
import About from "../About/About";
import Block from "../Block/Block";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./App.scss";

export default function App() {
  const { jokes } = useJokesContext();

  if (jokes.length === 0) return null;

  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <section className="content">
          <Block title="List of jokes">ccsv</Block>
          <Block title="About">
            <About />
          </Block>
        </section>
      </div>
    </div>
  );
}
