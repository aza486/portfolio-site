import "./PortfolioViewMobile.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";

import TechStack from "../home/profile/TechStack";

import type { Project } from "../../types/project";

interface PortfolioViewMobileProps {
  project: Project;
  onBack: () => void;
}

function PortfolioViewMobile({
  project,
  onBack,
}: PortfolioViewMobileProps) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <section className="portfolio-mobile view-animation">

      <button
        className="mobile-close"
        onClick={onBack}
      >
        ✕
      </button>

      <h2>{project.title}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        className="portfolio-mobile-swiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        onSlideChange={(swiper) =>
        setActiveIndex(swiper.realIndex)
        }
      >

        {project.images.map((image, index) => (

          <SwiperSlide key={index}>

            <img
              src={image.src}
              alt={image.title}
            />

          </SwiperSlide>

        ))}

      </Swiper>

      <div className="portfolio-mobile-caption">
        {project.images[activeIndex].title}
      </div>

      <p className="portfolio-mobile-description">
        {project.shortDescription}
      </p>

      <section className="portfolio-mobile-section">

        <h3>Meine Aufgaben</h3>

        <ul>

          {project.responsibilities.map((item) => (

            <li key={item}>
              {item}
            </li>

          ))}

        </ul>

      </section>

      <section className="portfolio-mobile-section">

        <h3>Features</h3>

        <ul>

          {project.features.map((item) => (

            <li key={item}>
              {item}
            </li>

          ))}

        </ul>

      </section>

      <section className="portfolio-mobile-techstack">

        <h3>Techstack</h3>

        <TechStack
          compact
          showTitle={false}
          items={project.techIcons}
        />

      </section>

      {project.ctaUrl && (

        <a
          className="project-button"
          href={project.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.ctaLabel}
        </a>

      )}

    </section>

  );

}

export default PortfolioViewMobile;