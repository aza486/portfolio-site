import "./HomeView.css";

import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import ProjectSidebar from "./ProjectSidebar";

function HomeView() {
  return (
    <div className="home-view">
      <HeroSection />

      <div className="home-content">
        <ProfileSection />
        <ProjectSidebar />
      </div>
    </div>
  );
}

export default HomeView;