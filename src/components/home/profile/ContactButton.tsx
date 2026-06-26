interface ContactButtonProps {
  onClick?: () => void;
}

function ContactButton({
  onClick,
}: ContactButtonProps) {
  return (
    <button className="contact-button" onClick={onClick}>
      Kontakt
    </button>
  );
}

export default ContactButton;
