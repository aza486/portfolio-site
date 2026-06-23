import { useState } from "react";

import type { ViewState } from "./types/viewState";
import type { Project } from "./types/project";

import HomeView from "./components/home/HomeView";
import AboutView from "./components/about/AboutView";
import PortfolioView from "./components/portfolio/PortfolioView";
import ContactView from "./components/contact/ContactView";

import Overlay from "./components/shared/Overlay";

function App() {
  const [activeOverlay, setActiveOverlay] =
    useState<ViewState | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeOverlay = () => {
    setActiveOverlay(null);
    setSelectedProject(null);
  };

  return (
    <>
      <HomeView
        onAbout={() => setActiveOverlay("about")}
        onContact={() => setActiveOverlay("contact")}
        onProjectClick={(project) => {
          setSelectedProject(project);
          setActiveOverlay("portfolio");
        }}
      />

      {activeOverlay === "about" && (
        <Overlay onClose={closeOverlay}>
          <AboutView />
        </Overlay>
      )}

      {activeOverlay === "contact" && (
        <Overlay onClose={closeOverlay}>
          <ContactView />
        </Overlay>
      )}

    {activeOverlay === "portfolio" &&
      selectedProject && (
        <Overlay
          onClose={closeOverlay}
        >
          <PortfolioView
            project={selectedProject}
          />
        </Overlay>
      )}
    </>
  );
}

export default App;