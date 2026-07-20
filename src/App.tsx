import { useEffect, useState } from "react";
import "./styles/animations.css";

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
import ContactViewMobile from "./components/mobile/ContactViewMobile";

import Overlay from "./components/shared/Overlay";

function App() {
  const [mobileView, setMobileView] =
  useState<MobileViewState>("home");

  const [isLeaving, setIsLeaving] =
    useState(false);

  const [portfolioOrigin, setPortfolioOrigin] =
  useState<MobileViewState>("home");
 
  const goBackMobile = () => {

    navigateMobile(portfolioOrigin);

  };



    useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);

  }, []);

  const navigateMobile = (
    nextView: MobileViewState
) => {

    if (isLeaving) return;

    setIsLeaving(true);

    window.setTimeout(() => {

        setMobileView(nextView);

        requestAnimationFrame(() => {

            setIsLeaving(false);

        });

    }, 250);

};

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

  <div key={mobileView} className={`app-view ${isLeaving ? "view-leave" : ""}`}>

      {mobileView === "home" && (
        <HomeViewMobile
          mobileView={mobileView}
          setMobileView={navigateMobile}
          onProjectClick={(project) => {

              setSelectedProject(project);

              setPortfolioOrigin("home");

              navigateMobile("portfolio");

          }}
        />
      )}

      {mobileView === "about" && (
        <AboutViewMobile
            onNavigate={navigateMobile}
        />
      )}

      {mobileView === "projects" && (
        <ProjectsViewMobile
          onNavigate={navigateMobile}
          onProjectSelect={(project) => {

              setSelectedProject(project);

              setPortfolioOrigin("projects");

              navigateMobile("portfolio");

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

        {mobileView === "contact" && (

          <ContactViewMobile
              onNavigate={navigateMobile}
          />

      )}

    </div>

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