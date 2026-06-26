import ProfileImage from "./ProfileImage";
import AboutContent from "../../about/AboutContent";
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
      <div className="profile-image-layer">
        <ProfileImage />
      </div>

      <div className="profile-content">
        <AboutContent />

        <TechStack />

        <div className="profile-actions">
          <button className="profile-about-button" onClick={onAbout}>
            Mehr über mich
          </button>

          <ContactButton onClick={onContact} />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
