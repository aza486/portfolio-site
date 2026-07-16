import "./ContactViewMobile.css";

interface ContactItemMobileProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

function ContactItemMobile({
  icon,
  title,
  subtitle,
  href,
}: ContactItemMobileProps) {

  return (

    <a
      className="contact-mobile-item"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >

      <div className="contact-mobile-icon">
        {icon}
      </div>

      <div className="contact-mobile-text">

        <h3>{title}</h3>

        <p>{subtitle}</p>

      </div>

    </a>

  );

}

export default ContactItemMobile;