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

const [showTitle, setShowTitle] = useState(!playIntro);

const [showName, setShowName] = useState(!playIntro);

const [showPortrait, setShowPortrait] = useState(!playIntro);

const [showHello, setShowHello] = useState(!playIntro);

const [showButtons, setShowButtons] = useState(!playIntro);



useEffect(() => {

  if (!playIntro) return;

  const timers: number[] = [];

  // 1. Portrait einblenden
  timers.push(
    window.setTimeout(() => {
      setShowPortrait(true);
    }, 0)
  );

  // 2. Winken starten
  timers.push(
    window.setTimeout(() => {

      const sequence = [0, 1, 2, 1, 2, 0];

      let index = 0;

      const interval = window.setInterval(() => {

        index++;

        if (index >= sequence.length) {
          clearInterval(interval);
          return;
        }

        setHeroFrame(sequence[index]);

      }, 400);

    }, 1000)
  );

  // 3. Hallo
  timers.push(
    window.setTimeout(() => {
      setShowHello(true);
    }, 1000)
  );

  // 4. Rest vom Titel
  timers.push(
    window.setTimeout(() => {
      setShowTitle(true);
    }, 3500)
  );

  // 5. Name
  timers.push(
    window.setTimeout(() => {
      setShowName(true);
    }, 5500)
  );

  // 6. Buttons
  timers.push(
    window.setTimeout(() => {
      setShowButtons(true);
    }, 7000)
  );

  // Intro abgeschlossen
  timers.push(
    window.setTimeout(() => {
      onIntroFinished();
    }, 7000)
  );

  return () => {
    timers.forEach(clearTimeout);
  };

}, [playIntro, onIntroFinished]);


  return (
    <div className="home-mobile view-animation">

      <HeroSection 
      showHello={showHello}
      showTitle={showTitle} 
      showName={showName}
      />

      <div className="mobile-portrait-wrapper">

        <img
          src={heroImages[heroFrame]}
          alt="Daniel"
          className={`mobile-portrait ${
            playIntro
                ? showPortrait
                ? "intro-portrait show"
                : "intro-portrait"
              : "" }`}
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