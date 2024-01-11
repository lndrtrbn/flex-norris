import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { JokesProvider } from "./contexts/jokes.context.tsx";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <JokesProvider>
    <App />
  </JokesProvider>
);
