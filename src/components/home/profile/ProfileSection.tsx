import ProfileImage from "./ProfileImage";
import AboutText from "./AboutText";
import TechStack from "./TechStack";
import ContactButton from "./ContactButton";
import "./ProfileSection.css";

interface ProfileSectionProps {
  onAbout: () => void;
  onContact: () => void;
}

function ProfileSection({ onAbout, onContact }: ProfileSectionProps) {
  return (
    <section className="profile-section">
      <div className="profile-image-wrapper">
        <ProfileImage />
      </div>

      <div className="profile-content">
        <AboutText />

        <TechStack />

        <div className="profile-actions">
          <button onClick={onAbout}>
            Mehr über mich
          </button>

          <ContactButton
            onClick={onContact}
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
