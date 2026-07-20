import "./HeroSection.css";

interface HeroSectionProps {
  playIntro?: boolean;
}

function HeroSection({
  playIntro,
}: HeroSectionProps) {
  return (
    <div className="hero-section" >
      <p  className={`hero-name ${ playIntro === true ? "intro-name" : "" }`}>
        Daniel Podjapolski
        </p>

      <h1 className={`hero-title ${ playIntro === true ? "intro-title" : "" }`}>
        Hallo, ich bin Designer&Developer
      </h1>
    </div>
  );
}

export default HeroSection;


