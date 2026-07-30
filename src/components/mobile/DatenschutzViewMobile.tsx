import "./DatenschutzViewMobile.css";

import DatenschutzView from "../home/DatenschutzView";

import type { MobileViewState } from "../../types/viewState";

interface DatenschutzViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
}

function DatenschutzViewMobile({
  onNavigate,
}: DatenschutzViewMobileProps) {

  return (

    <section className="legal-view-mobile view-animation">

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