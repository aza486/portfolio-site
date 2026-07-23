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
          subtitle="github.com/aza486"
          href="https://github.com/aza486"
        />

        <ContactItemMobile
          icon={<FaLinkedin />}
          title="LinkedIn"
          subtitle="linkedin.com/in/daniel-podjapolski"
          href="https://www.linkedin.com/in/daniel-podjapolski-615447424/"
        />

        <ContactItemMobile
          icon={<FaEnvelope />}
          title="E-Mail"
          subtitle="hello@dp-studio.dev"
          href="mailto:hello@dp-studio.dev"
        />

        <ContactItemMobile
          icon={<FaPhone />}
          title="Telefon"
          subtitle="+49 1590 5808384"
          href="tel:+4915905808384"
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