import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "./ProfileSection.css";
import { techStack } from "../../../data/techStack";
import type { TechStackItem } from "../../../data/techStack";

interface TechStackProps {
  timeline?: number;
  compact?: boolean;
  showTitle?: boolean;
  items?: TechStackItem[];
  marquee?: boolean;
}

function TechStack({
  timeline,
  compact = false,
  showTitle = true,
  items,
}: TechStackProps) {

  const restartTimer = useRef<number | null>(null);
  const swiperRef = useRef<any>(null);

  const visible =
  timeline === undefined
    ? true
    : timeline >= 6;


  //
  // PORTFOLIO MARQUEE
  //

  if (compact) {

    const displayItems = [
      ...(items ?? []),
      ...(items ?? []),
    ];


    return (

      <section className="tech-stack">

        <div className="tech-marquee">

          <div className="tech-marquee-track">

            {displayItems.map((tech, index) => (

              <div
                key={`${tech.name}-${index}`}
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

              </div>

            ))}

          </div>

        </div>

      </section>

    );

  }

  //
  // DESKTOP HOME
  //

  return (

    <section
      className={`tech-stack ${
        visible
          ? "tech-stack-show"
          : "tech-stack-hidden"
      }`}
    >

      {showTitle && <h2>Techstack</h2>}

      <Swiper
        modules={[Autoplay]}
        className={`tech-swiper ${compact ? "tech-swiper-compact" : ""}`}
        slidesPerView="auto"
        spaceBetween={compact ? 18 : 36}
        loop
        speed={compact ? 1500 : 2000}
        grabCursor
        allowTouchMove
        simulateTouch

        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}

        onSwiper={(swiper) => {

            swiperRef.current = swiper;

            console.log("initialized", {
                autoplayRunning: swiper.autoplay?.running,
                animating: swiper.animating,
                progress: swiper.progress,
                translate: swiper.translate,
            });

            setTimeout(() => {

                console.log("after 2s", {
                    autoplayRunning: swiper.autoplay?.running,
                    animating: swiper.animating,
                    progress: swiper.progress,
                    translate: swiper.translate,
                });

            }, 2000);

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

        {(items ?? techStack).map((tech) => (

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