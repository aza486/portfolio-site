interface ContactButtonProps {
  timeline?: number;
  onClick?: () => void;
}

function ContactButton({
  timeline,
  onClick,
}: ContactButtonProps) {

  const visible =
  timeline === undefined
    ? true
    : timeline >= 8;

  return (
    <button
      className={`contact-button ${
        visible
          ? "contact-button-show"
          : "contact-button-hidden"
      }`}
      onClick={onClick}
    >
      Kontakt
    </button>
  );
}

export default ContactButton;
