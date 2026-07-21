import "./ProfileImage.css";
import { useEffect, useState } from "react";

import profile from "../../../assets/profile/profile.png";
import wave1 from "../../../assets/profile/wave1.png";
import wave2 from "../../../assets/profile/wave2.png";

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

  const images = [
    profile,
    wave1,
    wave2,
  ];

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

  return () => timers.forEach(clearTimeout);

}, [timeline]);

  return (
    <img
      className={`profile-image ${
        visible ? "profile-image-show" : "profile-image-hidden"
      }`}
      src={images[frame]}
      alt="Daniel Podjapolski"
    />
  );
}

export default ProfileImage;