import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectSidebar() {
  return (
    <aside>
      <h2>Projekte</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </aside>
  );
}

export default ProjectSidebar;