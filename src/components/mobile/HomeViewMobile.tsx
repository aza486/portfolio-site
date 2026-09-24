import "./HomeViewMobile.css";
import HeroSection from "../home/HeroSection";
import { useEffect, useState } from "react";

import heroStill from "../../assets/profile/profile.png";
import heroWave1 from "../../assets/profile/wave1.png";
import heroWave2 from "../../assets/profile/wave2.png";

import coffee from "../../assets/profile/coffee.png";
import dab from "../../assets/profile/dab.png";
import sleeping from "../../assets/profile/sleeping.png";
import thinking from "../../assets/profile/thinking.png";
import thumbsup from "../../assets/profile/thumbsup.png";
import watch from "../../assets/profile/watch.png";

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

const idleImages = [
  coffee,
  dab,
  sleeping,
  thinking,
  thumbsup,
  watch,
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

  
  useEffect(() => {

    const imageSources = [
      ...heroImages,
      ...idleImages,
    ];

    imageSources.forEach((src) => {

      const img = new Image();

      img.src = src;

      if (img.decode) {
        img.decode().catch(() => {});
      }

    });

  }, []);

  const [showTitle, setShowTitle] =
    useState(!playIntro);

  const [showName, setShowName] =
    useState(!playIntro);

  const [showPortrait, setShowPortrait] =
    useState(!playIntro);

  const [showHello, setShowHello] =
    useState(!playIntro);

  const [showButtons, setShowButtons] =
    useState(!playIntro);

  /*
   * Aktuelles Idle-Bild.
   *
   * null = normales profile.png
   */
  const [idleImage, setIdleImage] =
    useState<string | null>(null);

  /*
   * Verhindert weitere Taps während:
   *
   * 1. Crossfade
   * 2. Idle-Anzeige
   * 3. Crossfade zurück
   * 4. 3 Sekunden Cooldown
   */
  const [idleLocked, setIdleLocked] =
    useState(false);


  /*
   * ==========================================
   * INTRO + PRELOAD
   * ==========================================
   */

  useEffect(() => {

    if (!playIntro) {
      return;
    }

    const imageSources = [
      heroStill,
      heroWave1,
      heroWave2,
    ];

    let cancelled = false;

    const timers: number[] = [];
    const intervals: number[] = [];

    Promise.all(

      imageSources.map((src) =>
        new Promise<void>((resolve) => {

          const img = new Image();

          img.onload = () => resolve();
          img.onerror = () => resolve();

          img.src = src;

        })
      )

    ).then(() => {

      if (cancelled) {
        return;
      }


      /*
       * 1. Portrait einblenden
       */

      timers.push(
        window.setTimeout(() => {

          setShowPortrait(true);

        }, 0)
      );


      /*
       * 2. Winken starten
       */

      timers.push(
        window.setTimeout(() => {

          const sequence = [
            0,
            1,
            2,
            1,
            2,
            0,
          ];

          let index = 0;

          const interval = window.setInterval(() => {

            index++;

            if (index >= sequence.length) {

              window.clearInterval(interval);

              return;
            }

            setHeroFrame(sequence[index]);

          }, 400);

          intervals.push(interval);

        }, 1000)
      );


      /*
       * 3. Hallo
       */

      timers.push(
        window.setTimeout(() => {

          setShowHello(true);

        }, 1000)
      );


      /*
       * 4. Rest vom Titel
       */

      timers.push(
        window.setTimeout(() => {

          setShowTitle(true);

        }, 3500)
      );


      /*
       * 5. Name
       */

      timers.push(
        window.setTimeout(() => {

          setShowName(true);

        }, 5500)
      );


      /*
       * 6. Buttons
       */

      timers.push(
        window.setTimeout(() => {

          setShowButtons(true);

        }, 7000)
      );


      /*
       * Intro abgeschlossen
       */

      timers.push(
        window.setTimeout(() => {

          onIntroFinished();

        }, 7000)
      );

    });


    return () => {

      cancelled = true;

      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });

      intervals.forEach((interval) => {
        window.clearInterval(interval);
      });

    };

  }, [playIntro, onIntroFinished]);


  /*
   * ==========================================
   * MOBILE IDLE ANIMATION
   * ==========================================
   *
   * Tap:
   *
   * profile.png
   *      ↓
   *    fade in
   *      ↓
   * idle image
   *      ↓
   *    fade out
   *      ↓
   * profile.png
   *      ↓
   * 3 Sekunden Cooldown
   */

  const triggerIdleAnimation = () => {

    /*
     * Während Intro oder Cooldown
     * nichts machen.
     */
    if (playIntro || idleLocked) {
      return;
    }

    /*
     * Zufälliges Bild auswählen.
     *
     * Nicht zweimal dasselbe hintereinander.
     */
    const currentIndex =
      idleImages.indexOf(idleImage ?? "");

    let randomIndex;

    do {

      randomIndex =
        Math.floor(
          Math.random() * idleImages.length
        );

    } while (
      idleImages.length > 1 &&
      randomIndex === currentIndex
    );


    /*
     * Lock sofort setzen.
     *
     * Dadurch kann man nicht doppelt
     * oder mehrfach schnell hintereinander
     * tappen.
     */
    setIdleLocked(true);
    setIdleImage(idleImages[randomIndex]);


    /*
     * Gesamte Animation:
     *
     * 6.6 Sekunden
     *
     * Danach:
     * → Idle-Bild entfernen
     * → profile.png bleibt übrig
     * → 3 Sekunden Cooldown
     */

    window.setTimeout(() => {

      setIdleImage(null);

      /*
       * 3 Sekunden Cooldown
       */
      window.setTimeout(() => {

        setIdleLocked(false);

      }, 3000);

    }, 6600);

  };


  return (
    <div className="home-mobile view-animation">

      <HeroSection
        showHello={showHello}
        showTitle={showTitle}
        showName={showName}
      />


      <div
        className={`mobile-portrait-wrapper ${
          idleImage
            ? "mobile-portrait-idle-active"
            : ""
        } ${
          idleLocked
            ? "mobile-portrait-locked"
            : ""
        }`}
        onClick={triggerIdleAnimation}
        role="button"
        tabIndex={playIntro ? -1 : 0}
        aria-label="Portrait-Animation starten"
        onKeyDown={(event) => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            triggerIdleAnimation();

          }

        }}
      >

        {/* Normales Portrait */}
        <img
          src={heroImages[heroFrame]}
          alt="Daniel"
          className={`mobile-portrait ${
            playIntro
              ? showPortrait
                ? "intro-portrait show"
                : "intro-portrait"
              : ""
          }`}
        />


        {/* Idle-Portrait */}
        {idleImage && (

          <img
            src={idleImage}
            alt=""
            className="mobile-portrait mobile-idle-portrait"
          />

        )}

      </div>


      <div className="mobile-navigation">

        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() =>
            setMobileView("about")
          }
        >
          <FaUser />
        </button>


        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() =>
            setMobileView("projects")
          }
        >
          <FaFolderOpen />
        </button>


        <button
          className={`mobile-nav-button ${
            showButtons
              ? "intro-button"
              : "intro-button-hidden"
          }`}
          onClick={() =>
            setMobileView("contact")
          }
        >
          <FaEnvelope />
        </button>

      </div>

    </div>
  );
}

export default HomeViewMobile;