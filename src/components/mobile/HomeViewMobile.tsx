import "./HomeViewMobile.css";
import HeroSection from "../home/HeroSection";

import portrait from "../../assets/profile/profile.png";

import {
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

import type { MobileViewState } from "../../types/viewState";
import type { Project } from "../../types/project";

interface HomeViewMobileProps {
  mobileView: MobileViewState;
  setMobileView: (view: MobileViewState) => void;
  onProjectClick: (project: Project) => void;
}

function HomeViewMobile({
  setMobileView,
}: HomeViewMobileProps) {
  return (
    <div className="home-mobile view-animation">

      <HeroSection />

        <div className="mobile-portrait-wrapper">

          <img
            src={portrait}
            alt="Daniel"
            className="mobile-portrait"
          />

        </div>

      <div className="mobile-navigation">

        <button
          className="mobile-nav-button"
          onClick={()  => setMobileView("about")}
        >
          <FaUser />
        </button>

        <button
          className="mobile-nav-button"
          onClick={() => setMobileView("projects")}
        >
          <FaFolderOpen />
        </button>

        <button
          className="mobile-nav-button"
          onClick={() => setMobileView("contact")}
        >
          <FaEnvelope />
        </button>

      </div>

    </div>
  );
}

export default HomeViewMobile;