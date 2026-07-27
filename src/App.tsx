import { useEffect, useState } from "react";
import "./styles/animations.css";

import type { ViewState, MobileViewState } from "./types/viewState";
import type { Project } from "./types/project";

import HomeView from "./components/home/HomeView";
import AboutView from "./components/about/AboutView";
import PortfolioView from "./components/portfolio/PortfolioView";
import ContactView from "./components/contact/ContactView";
import ImpressumView from "./components/home/ImpressView";
import DatenschutzView from "./components/home/DatenschutzView";

import HomeViewMobile from "./components/mobile/HomeViewMobile";
import ProjectsViewMobile from "./components/mobile/ProjectsViewMobile";
import AboutViewMobile from "./components/mobile/AboutViewMobile";
import PortfolioViewMobile from "./components/mobile/PortfolioViewMobile";
import ContactViewMobile from "./components/mobile/ContactViewMobile";
import ImpressViewMobile from "./components/mobile/ImpressViewMobile";
import DatenschutzViewMobile from "./components/mobile/DatenschutzViewMobile";

import Overlay from "./components/shared/Overlay";
import Footer from "./components/shared/Footer";

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

      window.history.pushState(
          {
              mobileView: nextView,
          },
          ""
      );

        setMobileView(nextView);

        requestAnimationFrame(() => {

            setIsLeaving(false);

        });

    }, 350);

};

  const [isMobile, setIsMobile] =
  useState(window.innerWidth <= 1000);

  const [playHomeIntro, setPlayHomeIntro] = useState(true);

  const [activeOverlay, setActiveOverlay] =
    useState<ViewState | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

    useEffect(() => {

        window.history.replaceState(
            {
                mobileView: "home",
                overlay: null,
            },
            ""
        );

    }, []);

    useEffect(() => {

        const handlePopState = (event: PopStateEvent) => {

            if (!event.state) {

                setMobileView("home");
                setActiveOverlay(null);
                setSelectedProject(null);

                return;
            }

            if (event.state.mobileView) {

                setMobileView(event.state.mobileView);

            }

            if ("overlay" in event.state) {

                setActiveOverlay(event.state.overlay);

            }

        };

        window.addEventListener("popstate", handlePopState);

        return () =>
            window.removeEventListener(
                "popstate",
                handlePopState
            );

    }, []);

const closeOverlay = () => {

    window.history.back();

};
  

  return isMobile ? (

  <div key={mobileView} className={`app-view ${isLeaving ? "view-leave" : ""}`}>

      {mobileView === "home" && (
        <HomeViewMobile
          playIntro={playHomeIntro}
          onIntroFinished={() => setPlayHomeIntro(false)}
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

      {mobileView === "impressum" && (

          <ImpressViewMobile
              onNavigate={navigateMobile}
          />

      )}

      {mobileView === "datenschutz" && (

          <DatenschutzViewMobile
              onNavigate={navigateMobile}
          />

      )}

      {mobileView === "home" && (

          <Footer
              onImpressum={() => navigateMobile("impressum")}
              onDatenschutz={() => navigateMobile("datenschutz")}
          />

      )}

    </div>

  ) : (

    <>
      <HomeView
        onAbout={() => {

            window.history.pushState(
                {
                    overlay: "about",
                },
                ""
            );

            setActiveOverlay("about");

        }}
        onContact={() => {

            window.history.pushState(
                {
                    overlay: "contact",
                },
                ""
            );

            setActiveOverlay("contact");

        }}
        onProjectClick={(project) => {

            setSelectedProject(project);

            window.history.pushState(
                {
                    overlay: "portfolio",
                },
                ""
            );

            setActiveOverlay("portfolio");

        }}
      />

      <Footer
        onImpressum={() => {

            window.history.pushState(
                {
                    overlay: "impressum",
                },
                ""
            );

            setActiveOverlay("impressum");

        }}
        onDatenschutz={() => {

            window.history.pushState(
                {
                    overlay: "datenschutz",
                },
                ""
            );

            setActiveOverlay("datenschutz");

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
          <Overlay
              size="portfolio"
              onClose={closeOverlay}
          >
            <PortfolioView
              project={selectedProject}
            />
          </Overlay>
        )}

      {activeOverlay === "impressum" && (

          <Overlay
              size="legal"
              onClose={closeOverlay}
          >

              <ImpressumView />

          </Overlay>

      )}

      {activeOverlay === "datenschutz" && (

          <Overlay
              size="legal"
              onClose={closeOverlay}
          >

              <DatenschutzView />

          </Overlay>

      )}
    </>

  );
}

export default App;