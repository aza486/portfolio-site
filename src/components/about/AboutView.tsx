import Overlay from "../shared/Overlay";

interface Props {
  onClose: () => void;
}

function AboutView({
  onClose,
}: Props) {
  return (
    <Overlay onClose={onClose}>
      <h2>Über mich</h2>

      <p>
        Hier kommt später dein Text.
      </p>
    </Overlay>
  );
}

export default AboutView;