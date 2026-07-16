import "./AboutViewMobile.css";

import TechStack from "../home/profile/TechStack";
import ProjectsCarousel from "./ProjectsCarousel";

import type { MobileViewState } from "../../types/viewState";

interface AboutViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
}

function AboutViewMobile({
  onNavigate,
}: AboutViewMobileProps) {

  return (

    <section className="about-mobile">

      <button
        className="mobile-close"
        onClick={() => onNavigate("home")}
      >
        ✕
      </button>

      <h2>Über mich</h2>

      <p>
        Ich bin Designer und Developer mit einer Leidenschaft
        für digitale Produkte, die nicht nur gut aussehen,
        sondern auch intelligent funktionieren.
      </p>

      <p>
        Mein Fokus liegt auf der Verbindung von kreativem
        Design, Webentwicklung und Automatisierung,
        um effiziente und nutzerfreundliche Lösungen
        zu entwickeln.
      </p>

      <section className="mobile-techstack">

        <h3>Techstack</h3>

        <TechStack
          showTitle={false}
        />

      </section>

      <section className="mobile-projects">

        <h3>Projekte</h3>

        <ProjectsCarousel
          onProjectClick={() => onNavigate("projects")}
        />

      </section>

    </section>

  );

}

export default AboutViewMobile;