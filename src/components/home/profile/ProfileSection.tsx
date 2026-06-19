import "./ProfileSection.css";

import ProfileImage from "./ProfileImage";
import AboutText from "./AboutText";
import TechStack from "./TechStack";
import ContactButton from "./ContactButton";

function ProfileSection() {
  return (
    <section className="profile-section">
      <ProfileImage />

      <div className="profile-content">
        <AboutText />

        <TechStack />

        <ContactButton />
      </div>
    </section>
  );
}

export default ProfileSection;