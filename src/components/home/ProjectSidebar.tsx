import { projects } from "../../data/projects";
import type { Project } from "../../types/project";

import ProjectCard from "./ProjectCard";

import "./ProjectSidebar.css";

interface ProjectSidebarProps {
  timeline?: number;
  onProjectClick: (project: Project) => void;
}

function ProjectSidebar({
  timeline,
  onProjectClick,
}: ProjectSidebarProps) {

  const visible =
  timeline === undefined
    ? true
    : timeline >= 7;

  return (
    <aside
      className={`project-sidebar ${
        visible
          ? "project-sidebar-show"
          : "project-sidebar-hidden"
      }`}
    >
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