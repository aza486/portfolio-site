import type { Project } from "../../types/project";

interface PortfolioViewProps {
  project: Project;
}

function PortfolioView({
  project,
}: PortfolioViewProps) {
  return (
    <div>
      <h2>{project.title}</h2>

      <p>
        {project.shortDescription}
      </p>

      <h3>Technologien</h3>

      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      <h3>Beschreibung</h3>

      {project.longDescription.map((text) => (
        <p key={text}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default PortfolioView;