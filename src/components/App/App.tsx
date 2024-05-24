import { useJokesContext } from "../../contexts/jokes.context";
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
      </div>
    </div>
  );
}
