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
    <button className="project-card" onClick={onClick}>
      <span className={`project-card-visual project-card-visual-${project.id}`} />
      <span className="project-card-title">{project.title}</span>
    </button>
  );
}

export default ProjectCard;
