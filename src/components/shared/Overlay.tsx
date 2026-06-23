import { useEffect } from "react";
import "./Overlay.css";

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Overlay({
  children,
  onClose,
}: OverlayProps) {

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return (
      <div
        className="overlay-backdrop"
        onClick={() => {
          console.log("BACKDROP CLICK");
          onClose();
        }}
      >
      <div
        className="overlay-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>
          X
        </button>

        {children}
      </div>
    </div>
  );
}

export default Overlay;