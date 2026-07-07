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
      className="project-card"
      onClick={onClick}
    >
      <div className="project-card-image">
        <img
          src={project.images[0]}
          alt={project.title}
        />
      </div>
    </button>
  );
}

export default ProjectCard;