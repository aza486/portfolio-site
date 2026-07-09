import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "./ProfileSection.css";
import { techStack } from "../../../data/techStack";

function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Techstack</h2>

        <Swiper
          modules={[Autoplay]}
          className="tech-swiper"
          slidesPerView="auto"
          spaceBetween={36}
          loop
          speed={2000}
          grabCursor={true}
          allowTouchMove={true}
          simulateTouch={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
        >
          {techStack.map((tech) => (
            <SwiperSlide
              key={tech.name}
              className="tech-slide"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-icon"
                style={{
                  transform: `scale(${tech.scale})`,
                }}
              />
            </SwiperSlide>
          ))}

        </Swiper>
    </section>
  );
}

export default TechStack;