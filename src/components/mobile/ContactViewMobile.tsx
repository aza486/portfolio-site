import "./ContactViewMobile.css";

import portrait from "../../assets/profile/banana.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import ContactItemMobile from "./ContactItemMobile";

import type { MobileViewState } from "../../types/viewState";

interface ContactViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
}

function ContactViewMobile({
  onNavigate,
}: ContactViewMobileProps) {

  return (

    <section className="contact-mobile view-animation">

      <button
        className="mobile-close"
        onClick={() => onNavigate("home")}
      >
        ✕
      </button>

      <h2>Kontakt</h2>

      <div className="contact-mobile-list">

        <ContactItemMobile
          icon={<FaGithub />}
          title="GitHub"
          subtitle="github.com/azza486"
          href="https://github.com/azza486"
        />

        <ContactItemMobile
          icon={<FaLinkedin />}
          title="LinkedIn"
          subtitle="linkedin.com/in/daniel-podjapolski"
          href="https://linkedin.com/in/daniel-podjapolski"
        />

        <ContactItemMobile
          icon={<FaEnvelope />}
          title="E-Mail"
          subtitle="daniel@yolo.de"
          href="mailto:daniel@yolo.de"
        />

        <ContactItemMobile
          icon={<FaPhone />}
          title="Telefon"
          subtitle="+49 169 6969696"
          href="tel:+491696969696"
        />

      </div>

      <img
        src={portrait}
        alt="Daniel"
        className="contact-mobile-portrait"
      />

    </section>

  );

}

export default ContactViewMobile;