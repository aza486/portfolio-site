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
  return (
    <div className="home-view">
      <header className="home-header">
        <HeroSection />
      </header>

      <main className="home-main">
        <ProfileSection
          onAbout={onAbout}
          onContact={onContact}
        />

        <ProjectSidebar
          onProjectClick={onProjectClick}
        />
      </main>
    </div>
  );
}

export default HomeView;
