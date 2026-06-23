import "./HomeView.css";

import HeroSection from "./HeroSection";
import ProfileSection from "./profile/ProfileSection";
import ProjectSidebar from "./ProjectSidebar";
import type { Project } from "../../types/project";

interface HomeViewProps {
  onAbout: () => void;
  onContact: () => void;
  onProjectClick: (project: Project) => void;
}

function HomeView({ onAbout, onContact, onProjectClick }: HomeViewProps) {
  console.log("HomeView", {
    onAbout,
    onContact,
    onProjectClick,
  });
  return (
    <div className="home-view">
      <HeroSection />

      <div className="home-content">
        <ProfileSection onAbout={onAbout} onContact={onContact} />

        <ProjectSidebar
          onProjectClick={onProjectClick}
/>
      </div>
    </div>
  );
}

export default HomeView;
