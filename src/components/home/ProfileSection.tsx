import ProfileImage from "./profile/ProfileImage";
import AboutText from "./profile/AboutText";
import TechStack from "./profile/TechStack";
import ContactButton from "./profile/ContactButton";
import "./ProfileSection.css";

interface ProfileSectionProps {
  onAbout: () => void;
  onContact: () => void;
}

function ProfileSection({ onAbout, onContact }: ProfileSectionProps) {
  return (
    <section className="profile-section">
      <ProfileImage />

      <div>
        <AboutText />

        <TechStack />

        <button
          onClick={() => {
            console.log("ABOUT CLICK");
            onAbout();
          }}
        >
          Mehr über mich
        </button>

        <ContactButton onClick={onContact} />
      </div>
    </section>
  );
}

export default ProfileSection;
