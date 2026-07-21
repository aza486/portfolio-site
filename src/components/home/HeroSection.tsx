import "./HeroSection.css";

interface HeroSectionProps {
  playIntro?: boolean;
  showTitle?: boolean;
  showName?: boolean;
}

function HeroSection({
  playIntro,
  showTitle,
  showName
}: HeroSectionProps) {
  return (
    <div className="hero-section" >
      <p className={`hero-name ${ playIntro ? showName ? "intro-name show" : "intro-name" : "" }`}>
        Daniel Podjapolski
        </p>

      <h1
  className={`hero-title ${ playIntro ? showTitle ? "intro-title show" : "intro-title" : ""}`}>
        Hallo, ich bin Designer&Developer
      </h1>
    </div>
  );
}

export default HeroSection;


