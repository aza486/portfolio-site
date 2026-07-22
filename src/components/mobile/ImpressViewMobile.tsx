import "./AboutViewMobile.css";

import ImpressumView from "../home/ImpressView";

import type { MobileViewState } from "../../types/viewState";

interface ImpressumViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
}

function ImpressumViewMobile({
  onNavigate,
}: ImpressumViewMobileProps) {

  return (

    <section className="about-mobile view-animation">

      <button
        className="mobile-close"
        onClick={() => onNavigate("home")}
      >
        ✕
      </button>

      <ImpressumView />

    </section>

  );

}

export default ImpressumViewMobile;