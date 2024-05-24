import About from "../About/About";
import Block from "../Block/Block";
import Header from "../Header/Header";
import Jokes from "../Jokes/Jokes";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <section className="content">
          <Block title="List of jokes" contextual={<Search />}>
            <Jokes />
          </Block>

          <Block title="About">
            <About />
          </Block>
        </section>
      </div>
    </div>
  );
}
