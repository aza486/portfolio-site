import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";

import "./ProfileSection.css";
import { techStack } from "../../../data/techStack";

function TechStack() {
  const restartTimer = useRef<number | null>(null);
  const swiperRef = useRef<any>(null);
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
          onSwiper={(swiper) => {
          swiperRef.current = swiper;
          }}
          onTouchStart={() => {
          swiperRef.current?.autoplay.pause();

          if (restartTimer.current) {
            clearTimeout(restartTimer.current);
          }
         }}
         onTouchEnd={() => {
          restartTimer.current = window.setTimeout(() => {
            swiperRef.current?.autoplay.resume();
          }, 3000);
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