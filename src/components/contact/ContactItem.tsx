import "./ContactItem.css";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      className="contact-item"
      href={href}
      target="_blank"
      rel="noreferrer"
    >

      <div className="contact-icon">

        {icon}

      </div>

      <div className="contact-text">

        <h3>{title}</h3>

        <span>{value}</span>

      </div>

      <div className="contact-arrow">

        →

      </div>

    </a>
  );
}

export default ContactItem;