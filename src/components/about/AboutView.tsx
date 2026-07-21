import "./AboutView.css";

interface AboutViewProps {
  timeline?: number;
}

function AboutView({
  timeline,
}: AboutViewProps) {

  const visible =
    timeline === undefined
      ? true
      : timeline >= 5;

  return (
    <section
      className={`about-content ${
        visible
          ? "about-content-show"
          : "about-content-hidden"
      }`}
    >
      <h2 className="about-title">
        Über mich
      </h2>

      <p className="about-description">
        Ich bin Designer und Developer mit einer Leidenschaft für digitale
        Produkte, die nicht nur gut aussehen, sondern auch intelligent
        funktionieren. Mein Fokus liegt auf der Verbindung von kreativem
        Design, Webentwicklung und Automatisierung, um effiziente und
        nutzerfreundliche Lösungen zu schaffen.
      </p>

      <p className="about-description">
        Von UI/UX-Konzepten über individuelle Webanwendungen bis hin zu
        komplexen Workflows entwickle ich digitale Erlebnisse, die Ästhetik
        und Funktionalität miteinander verbinden.
      </p>
    </section>
  );
}

export default AboutView;