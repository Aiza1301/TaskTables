import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/sass/main.scss";
import { LangProvider } from "./context/languageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
);
