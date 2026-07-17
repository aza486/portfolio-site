import "./ProjectsViewMobile.css";

import { projects } from "../../data/projects";

import type { MobileViewState } from "../../types/viewState";
import type { Project } from "../../types/project";

interface ProjectsViewMobileProps {
  onNavigate: (view: MobileViewState) => void;
  onProjectSelect: (project: Project) => void;
}

function ProjectsViewMobile({
  onNavigate,
  onProjectSelect,
}: ProjectsViewMobileProps) {

  return (

    <section className="projects-mobile view-animation">

      <button
        className="mobile-close"
        onClick={() => onNavigate("home")}
      >
        ✕
      </button>

      <h2>Projekte</h2>

      <div className="projects-mobile-list">

        {projects.map((project) => (

          <button
            key={project.id}
            className="project-mobile-card"
            onClick={() => onProjectSelect(project)}
          >

            <h3>{project.title}</h3>

            <img
              src={project.images[0].src}
              alt={project.images[0].title}
            />

          </button>

        ))}

      </div>

    </section>

  );

}

export default ProjectsViewMobile;