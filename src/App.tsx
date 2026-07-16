import { useEffect, useState } from "react";

import type { ViewState, MobileViewState } from "./types/viewState";
import type { Project } from "./types/project";

import HomeView from "./components/home/HomeView";
import AboutView from "./components/about/AboutView";
import PortfolioView from "./components/portfolio/PortfolioView";
import ContactView from "./components/contact/ContactView";

import HomeViewMobile from "./components/mobile/HomeViewMobile";
import ProjectsViewMobile from "./components/mobile/ProjectsViewMobile";
import AboutViewMobile from "./components/mobile/AboutViewMobile";
import PortfolioViewMobile from "./components/mobile/PortfolioViewMobile";

import Overlay from "./components/shared/Overlay";

function App() {
  const [mobileView, setMobileView] =
  useState<MobileViewState>("home");

  const [portfolioOrigin, setPortfolioOrigin] =
  useState<MobileViewState>("home");
 
  const goBackMobile = () => {

    setMobileView(portfolioOrigin);

  };



    useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);

  }, []);

  const [isMobile, setIsMobile] =
  useState(window.innerWidth <= 768);

  const [activeOverlay, setActiveOverlay] =
    useState<ViewState | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeOverlay = () => {
    setActiveOverlay(null);
    setSelectedProject(null);
  };
  

  return isMobile ? (

    <>

      {mobileView === "home" && (
        <HomeViewMobile
          mobileView={mobileView}
          setMobileView={setMobileView}
          onProjectClick={(project) => {
            setSelectedProject(project);
            setMobileView("portfolio");
          }}
        />
      )}

      {mobileView === "about" && (
        <AboutViewMobile
            onNavigate={setMobileView}
        />
      )}

      {mobileView === "projects" && (
        <ProjectsViewMobile
          onNavigate={setMobileView}
          onProjectSelect={(project) => {

              setSelectedProject(project);

              setPortfolioOrigin("projects");

              setMobileView("portfolio");

          }}
                  />
      )}

      {mobileView === "portfolio" &&
        selectedProject && (
          <PortfolioViewMobile
            project={selectedProject}
            onBack={goBackMobile}
          />
        )}

    </>

  ) : (

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
        <Overlay size="contact" onClose={closeOverlay}>
          <ContactView />
        </Overlay>
      )}

      {activeOverlay === "portfolio" &&
        selectedProject && (
          <Overlay onClose={closeOverlay}>
            <PortfolioView
              project={selectedProject}
            />
          </Overlay>
        )}
    </>

  );
}

export default App;