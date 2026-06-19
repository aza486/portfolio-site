const techStack = [
  "Angular",
  "React",
  "Go",
  "Vue",
  "PostgreSQL",
  "n8n",
  "Shopware",
];

function TechStack() {
  return (
    <div>
      <h2>Techstack</h2>

      <div>
        {techStack.map((tech) => (
          <span
            key={tech}
            style={{
              marginRight: "1rem",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStack;