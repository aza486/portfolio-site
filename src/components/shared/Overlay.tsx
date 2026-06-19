interface OverlayProps {
  children: React.ReactNode;

  onClose: () => void;
}

function Overlay({
  children,
  onClose,
}: OverlayProps) {
  return (
    <div className="overlay-backdrop">
      <div className="overlay-content">

        <button
          onClick={onClose}
        >
          X
        </button>

        {children}

      </div>
    </div>
  );
}

export default Overlay;