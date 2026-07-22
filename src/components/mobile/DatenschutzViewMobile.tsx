import "./AboutViewMobile.css";

import DatenschutzView from "../home/DatenschutzView";

import type { MobileViewState } from "../../types/viewState";

interface DatenschutzViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
}

function DatenschutzViewMobile({
  onNavigate,
}: DatenschutzViewMobileProps) {

  return (

    <section className="about-mobile view-animation">

      <button
        className="mobile-close"
        onClick={() => onNavigate("home")}
      >
        ✕
      </button>

      <DatenschutzView />

    </section>

  );

}

export default DatenschutzViewMobile;