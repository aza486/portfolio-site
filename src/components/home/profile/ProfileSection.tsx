import ProfileImage from "./ProfileImage";
import AboutView from "../../about/AboutView";
import TechStack from "./TechStack";
import ContactButton from "./ContactButton";
import "./ProfileSection.css";

interface ProfileSectionProps {
  timeline?: number;
  onAbout: () => void;
  onContact: () => void;
}

function ProfileSection({
  timeline, 
  onAbout, 
  onContact 
  }: ProfileSectionProps) {
  return (
    <section className="profile-section">
      <div className="profile-image-layer">
        <ProfileImage timeline={timeline} />
      </div>

      <div className="profile-content">
        <AboutView timeline={timeline} />

        <TechStack timeline={timeline} />

        <div className="profile-actions">
          <button className="profile-about-button" onClick={onAbout}>
            Mehr über mich
          </button>

          <ContactButton 
            timeline={timeline} 
            onClick={onContact} />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
