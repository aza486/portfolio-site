import "./ProfileImage.css";
import { useEffect, useState } from "react";

import profile from "../../../assets/profile/profile.png";
import wave1 from "../../../assets/profile/wave1.png";
import wave2 from "../../../assets/profile/wave2.png";

import coffee from "../../../assets/profile/coffee.png";
import dab from "../../../assets/profile/dab.png";
import sleeping from "../../../assets/profile/sleeping.png";
import thinking from "../../../assets/profile/thinking.png";
import thumbsup from "../../../assets/profile/thumbsup.png";
import watch from "../../../assets/profile/watch.png";

interface ProfileImageProps {
  timeline?: number;
}

function ProfileImage({
  timeline,
}: ProfileImageProps) {

  const visible =
    timeline === undefined
      ? true
      : timeline >= 1;

  const [frame, setFrame] = useState(0);

  const [idleImage, setIdleImage] =
    useState<string | null>(null);

  // Intro-Bilder
  const images = [
    profile,
    wave1,
    wave2,
  ];

  // Zufällige Idle-Bilder
  const idleImages = [
    coffee,
    dab,
    sleeping,
    thinking,
    thumbsup,
    watch,
  ];

  /*
   * INTRO / WINKEN
   */
  useEffect(() => {

    if (timeline !== 2) {
      setFrame(0);
      return;
    }

    const sequence = [
      1, 2,
      1, 2,
      1, 2,
      1, 2,
      0
    ];

    const timers = sequence.map((image, index) =>
      window.setTimeout(() => {
        setFrame(image);
      }, (index + 1) * 400)
    );

    return () => {
      timers.forEach(clearTimeout);
    };

  }, [timeline]);


  /*
   * IDLE-ANIMATION
   *
   * Nach dem Intro:
   * 15 Sekunden warten
   * → zufälliges Bild für 5 Sekunden
   * → zurück zu profile.png
   * → wieder 15 Sekunden warten
   */
  useEffect(() => {

    if (timeline === undefined || timeline < 2) {
      setIdleImage(null);
      return;
    }

    let idleTimer: number | undefined;
    let resetTimer: number | undefined;

    let lastIndex = -1;

    const startIdleAnimation = () => {

      let randomIndex;

      do {
        randomIndex =
          Math.floor(
            Math.random() * idleImages.length
          );
      } while (
        idleImages.length > 1 &&
        randomIndex === lastIndex
      );

      lastIndex = randomIndex;

      setIdleImage(idleImages[randomIndex]);

      resetTimer = window.setTimeout(() => {

        setIdleImage(null);

        idleTimer = window.setTimeout(
          startIdleAnimation,
          15000
        );

      }, 5000);
    };

    idleTimer = window.setTimeout(
      startIdleAnimation,
      15000
    );

    return () => {

      if (idleTimer !== undefined) {
        window.clearTimeout(idleTimer);
      }

      if (resetTimer !== undefined) {
        window.clearTimeout(resetTimer);
      }

    };

  }, [timeline]);


  return (
    <img
      className={`profile-image ${
        visible
          ? "profile-image-show"
          : "profile-image-hidden"
      }`}
      src={idleImage ?? images[frame]}
      loading="eager"
      fetchPriority="high"
      alt="Daniel Podjapolski"
    />
  );
}

export default ProfileImage;