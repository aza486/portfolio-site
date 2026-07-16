import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./ProjectsCarousel.css";

import { projects } from "../../data/projects";
import type { Project } from "../../types/project";

interface ProjectsCarouselProps {
  onProjectClick: (project: Project) => void;
}

function ProjectsCarousel({
  onProjectClick,
}: ProjectsCarouselProps) {

  return (

    <Swiper
      modules={[Pagination]}
      className="projects-carousel"

      slidesPerView={1}

      spaceBetween={20}

      pagination={{
        clickable: true,
      }}
    >

      {projects.map((project) => (

        <SwiperSlide
          key={project.id}
        >

          <button
            className="projects-carousel-card"
            onClick={() => onProjectClick(project)}
          >

            <h3>

              {project.title}

            </h3>

            <img
              src={project.images[0].src}
              alt={project.title}
            />

          </button>

        </SwiperSlide>

      ))}

    </Swiper>

  );

}

export default ProjectsCarousel;