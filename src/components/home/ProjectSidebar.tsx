import { projects } from "../../data/projects";
import type { Project } from "../../types/project";

import ProjectCard from "./ProjectCard";

import "./ProjectSidebar.css";

interface ProjectSidebarProps {
  onProjectClick: (project: Project) => void;
}

function ProjectSidebar({
  onProjectClick,
}: ProjectSidebarProps) {
  return (
    <aside className="project-sidebar">
      <h2>Projekte</h2>

      <div className="project-sidebar-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </aside>
  );
}

export default ProjectSidebar;