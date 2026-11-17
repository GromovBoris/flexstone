import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/base.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/home.css";
import "./styles/footer.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/flexstone">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
