import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <div onClick={onClick}>
      <h3>{project.title}</h3>
    </div>
  );
}

export default ProjectCard;