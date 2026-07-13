import type { Project } from "../../types/project";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={onClick}
      aria-label={`Projekt ${project.title} öffnen`}
    >
      <div className="project-card-image">
        <img
          src={project.images[0].src}
          alt={project.images[0].title}
        />

        <div className="project-card-overlay">
          <h3>{project.title}</h3>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;