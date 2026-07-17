import { useEffect } from "react";
import "./Overlay.css";

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;

  size?: "portfolio" | "contact";
}

function Overlay({
  children,
  onClose,
  size = "portfolio",
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
        className={`overlay-content overlay-${size} view-animation`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="overlay-close"
          onClick={onClose}
          aria-label="Overlay schließen"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Overlay;