import "./HeroSection.css";

interface HeroSectionProps {
  timeline?: number;
  showHello?: boolean;
  showTitle?: boolean;
  showName?: boolean;
}

function HeroSection({
  timeline,
  showHello,
  showTitle,
  showName
}: HeroSectionProps) {

  const helloVisible =
  timeline !== undefined
    ? timeline >= 2
    : showHello;

  const titleVisible =
  timeline
    ? timeline >= 3
    : showTitle;

  const nameVisible =
  timeline
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

        <h1 className="hero-title">

            <span
                className={
                    helloVisible
                        ? "intro-title show"
                        : "intro-title"
                }
            >
                Hallo
            </span>

            <span
                className={
                    titleVisible
                        ? "intro-title show"
                        : "intro-title"
                }
            >
                , ich bin Designer&Developer
            </span>

        </h1>
    </div>
  );
}

export default HeroSection;


