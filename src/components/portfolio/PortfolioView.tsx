import type { Project } from "../../types/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import TechStack from "../home/profile/TechStack";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PortfolioView.css";
interface PortfolioViewProps {
  project: Project;
}

function PortfolioView({ project }: PortfolioViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animateCaption, setAnimateCaption] = useState(false);
  useEffect(() => {
  setAnimateCaption(true);
  }, []);
  return (
    <div className="portfolio-view">

      {/* ---------- LEFT ---------- */}

      <section className="portfolio-left">

        <div className="portfolio-gallery">

          <Swiper
            modules={[Pagination, Autoplay]}
            className="portfolio-swiper"

            loop
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}

            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            speed={700}

            onSlideChange={(swiper) => {

              setAnimateCaption(false);

              setTimeout(() => {
                setActiveSlide(swiper.realIndex);
                setAnimateCaption(true);
              }, 120);

            }}
            

          >

            {project.images.map((image, index) => (

              <SwiperSlide key={index}>

                <div className="portfolio-image">

                  <img
                    src={image.src}
                    alt={image.title}
                  />

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

            <div className="portfolio-gallery-footer">

              <div
                className={`portfolio-caption ${animateCaption ? "show" : ""}`}
              >
                {project.images[activeSlide]?.title}
              </div>

            </div>

        </div>

      </section>

      {/* ---------- RIGHT ---------- */}

      <aside className="portfolio-sidebar">

        <h2 className="portfolio-title">
          {project.title}
        </h2>

        <section className="portfolio-description">
          <p>{project.shortDescription}</p>
        </section>

        <section className="portfolio-section">

          <h3>Meine Aufgaben</h3>

          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </section>

        <section className="portfolio-section">

          <h3>Features</h3>

          <ul>
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </section>

        <section className="portfolio-techstack">

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

      </aside>

    </div>
  );
}


export default PortfolioView;