import ProfileImage from "./profile/ProfileImage";
import AboutText from "./profile/AboutText";
import TechStack from "./profile/TechStack";
import ContactButton from "./profile/ContactButton";

function ProfileSection() {
  return (
    <section>
      <ProfileImage />

      <div>
        <AboutText />

        <TechStack />

        <ContactButton />
      </div>
    </section>
  );
}

export default ProfileSection;