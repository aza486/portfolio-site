import { useState } from "react";

import type { ViewState } from "./types/viewState";

import HomeView from "./components/home/HomeView";
import AboutView from "./components/about/AboutView";
import PortfolioView from "./components/portfolio/PortfolioView";
import ContactView from "./components/contact/ContactView";

function App() {
  const [view, setView] =
    useState<ViewState>("home");

  return (
    <>
      <nav>
        <button onClick={() => setView("home")}>
          Home
        </button>

        <button onClick={() => setView("about")}>
          About
        </button>

        <button onClick={() => setView("portfolio")}>
          Portfolio
        </button>

        <button onClick={() => setView("contact")}>
          Contact
        </button>
      </nav>

      {view === "home" && <HomeView />}

      {view === "about" && <AboutView />}

      {view === "portfolio" && <PortfolioView />}

      {view === "contact" && <ContactView />}
    </>
  );
}

export default App;