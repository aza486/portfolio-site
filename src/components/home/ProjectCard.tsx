import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;

  onClick?: () => void;
}

function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <div onClick={onClick}>
      {project.title}
    </div>
  );
}

export default ProjectCard;