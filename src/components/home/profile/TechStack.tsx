const techStack = [
  { label: "A", name: "Angular", tone: "angular" },
  { label: "R", name: "React", tone: "react" },
  { label: "n8n", name: "n8n", tone: "n8n" },
  { label: "G", name: "Go", tone: "go" },
  { label: "JS", name: "JavaScript", tone: "javascript" },
  { label: "5", name: "HTML", tone: "html" },
  { label: "3", name: "CSS", tone: "css" },
];

function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Techstack</h2>

      <div className="tech-stack-list" aria-label="Techstack">
        {techStack.map((tech) => (
          <span className={`tech-badge tech-badge-${tech.tone}`} key={tech.name}>
            {tech.label}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
