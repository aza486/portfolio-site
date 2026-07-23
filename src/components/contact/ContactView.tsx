import "./ContactView.css";
import ContactItem from "./ContactItem";
import bananaPortrait from "../../assets/profile/banana.png";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function ContactView() {
  return (
    <section className="contact-view">

      <div className="contact-left">

        <h2>Kontakt</h2>

        <div className="contact-list">

          <ContactItem
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/aza486"
            href="https://github.com/aza486"
          />

          <ContactItem
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/daniel-podjapolski"
            href="https://www.linkedin.com/in/daniel-podjapolski-615447424/"
          />

          <ContactItem
            icon={<MdEmail />}
            title="E-Mail"
            value="hello@dp-studio.dev"
            href="mailto:hello@dp-studio.dev"
          />

          <ContactItem
            icon={<IoCall />}
            title="Telefon"
            value="+49 1590 5808384"
            href="tel:+4915905808384"
          />

        </div>

      </div>

      <div className="contact-right">

        <img
          src={bananaPortrait}
          alt="Daniel mit Banane"
          className="contact-portrait"
        />

      </div>

    </section>
  );
}

export default ContactView;