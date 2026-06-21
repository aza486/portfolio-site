import "./HomeView.css";

import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import ProjectSidebar from "./ProjectSidebar";

interface HomeViewProps {
  onAbout: () => void;
  onContact: () => void;
}

function HomeView({ onAbout, onContact }: HomeViewProps) {
  console.log("HomeView", {
    onAbout,
    onContact,
  });
  return (
    <div className="home-view">
      <HeroSection />

      <div className="home-content">
        <ProfileSection onAbout={onAbout} onContact={onContact} />

        <ProjectSidebar />
      </div>
    </div>
  );
}

export default HomeView;
