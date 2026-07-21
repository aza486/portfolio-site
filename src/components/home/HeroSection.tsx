import "./HeroSection.css";

interface HeroSectionProps {
  timeline?: number;

  showTitle?: boolean;
  showName?: boolean;
}

function HeroSection({
  timeline = 999,

  showTitle,
  showName
}: HeroSectionProps) {

  const titleVisible =
  timeline !== 999
    ? timeline >= 3
    : showTitle;

  const nameVisible =
  timeline !== 999
    ? timeline >= 4
    : showName;

  return (
    <div className="hero-section" >
        <p className={`hero-name ${
          nameVisible
            ? "intro-name show"
            : "intro-name"
        }`}>
        Daniel Podjapolski
        </p>

      <h1
  className={`hero-title ${
      titleVisible
        ? "intro-title show"
        : "intro-title"
      }`}>
        Hallo, ich bin Designer&Developer
      </h1>
    </div>
  );
}

export default HeroSection;


