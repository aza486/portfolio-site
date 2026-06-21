import { useState } from "react";

import type { ViewState } from "./types/viewState";
import type { Project } from "./types/project";

import HomeView from "./components/home/HomeView";
import AboutView from "./components/about/AboutView";
import PortfolioView from "./components/portfolio/PortfolioView";
import ContactView from "./components/contact/ContactView";

function App() {
  const [activeOverlay, setActiveOverlay] = useState<ViewState | null>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <HomeView
        onAbout={() => setActiveOverlay("about")}
        onContact={() => setActiveOverlay("contact")}
      />

      <p>
        Active Overlay:
        {activeOverlay ?? "null"}
      </p>

      {activeOverlay === "about" && (
        <AboutView onClose={() => setActiveOverlay(null)} />
      )}

      {activeOverlay === "contact" && <ContactView />}

      {activeOverlay === "portfolio" && <PortfolioView />}
    </>
  );
}

export default App;
