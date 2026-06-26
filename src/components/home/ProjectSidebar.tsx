import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import "./ProjectSidebar.css";
import ProjectCard from "./ProjectCard";

interface ProjectSidebarProps {
  onProjectClick: (project: Project) => void;
}

function ProjectSidebar({
  onProjectClick,
}: ProjectSidebarProps) {
  return (
    <aside className="project-sidebar">
      <h2>Projekte</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </aside>
  );
}

export default ProjectSidebar;