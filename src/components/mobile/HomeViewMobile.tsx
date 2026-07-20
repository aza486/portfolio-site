import "./HomeViewMobile.css";
import HeroSection from "../home/HeroSection";
import { useEffect, useState } from "react";

import heroStill from "../../assets/profile/profile.png";
import heroWave1 from "../../assets/profile/wave1.png";
import heroWave2 from "../../assets/profile/wave2.png";

import {
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

import type { MobileViewState } from "../../types/viewState";
import type { Project } from "../../types/project";

const heroImages = [
  heroStill,
  heroWave1,
  heroWave2,
];

interface HomeViewMobileProps {
  playIntro: boolean;
  onIntroFinished: () => void;
  mobileView: MobileViewState;
  setMobileView: (view: MobileViewState) => void;
  onProjectClick: (project: Project) => void;
}

function HomeViewMobile({
  setMobileView,
  playIntro,
  onIntroFinished,
}: HomeViewMobileProps) {

  const [heroFrame, setHeroFrame] = useState(0);
  const [showButtons, setShowButtons] = useState(!playIntro);

  /*
   * Buttons erscheinen erst nach der Intro.
   */
useEffect(() => {

  if (!playIntro) {
    setShowButtons(true);
    return;
  }

  const showTimer = window.setTimeout(() => {
    setShowButtons(true);
  }, 2200);

  const finishTimer = window.setTimeout(() => {
    onIntroFinished();
  }, 2700); // 2200 ms + 450 ms + kleiner Puffer

  return () => {
    clearTimeout(showTimer);
    clearTimeout(finishTimer);
  };

}, [playIntro, onIntroFinished]);

  /*
   * Winken
   */
  useEffect(() => {

    if (!playIntro) return;

    const sequence = [0, 1, 2, 1, 2, 0];

    let index = 0;

    const interval = window.setInterval(() => {

      index++;

      if (index >= sequence.length) {
        clearInterval(interval);
        return;
      }

      setHeroFrame(sequence[index]);

    }, 300);

    return () => clearInterval(interval);

  }, [playIntro]);

  return (
    <div className="home-mobile view-animation">

      <HeroSection playIntro={playIntro} />

      <div className="mobile-portrait-wrapper">

        <img
          src={heroImages[heroFrame]}
          alt="Daniel"
          className={`mobile-portrait ${
            playIntro ? "intro-portrait" : ""
          }`}
        />

      </div>

      <div className="mobile-navigation">

        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() => setMobileView("about")}
        >
          <FaUser />
        </button>

        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() => setMobileView("projects")}
        >
          <FaFolderOpen />
        </button>

        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() => setMobileView("contact")}
        >
          <FaEnvelope />
        </button>

      </div>

    </div>
  );
}

export default HomeViewMobile;