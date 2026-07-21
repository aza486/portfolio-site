import "./HomeView.css";

import HeroSection from "./HeroSection";
import ProfileSection from "./profile/ProfileSection";
import ProjectSidebar from "./ProjectSidebar";
import type { Project } from "../../types/project";
import { useEffect, useState } from "react";


interface HomeViewProps {
  onAbout: () => void;
  onContact: () => void;
  onProjectClick: (project: Project) => void;
}

function HomeView({ onAbout, onContact, onProjectClick }: HomeViewProps) {

  const [timeline, setTimeline] = useState(0);

useEffect(() => {

    let current = 0;

    const times = [
        0,      // Portrait
        1000,    // Hallo + Winken
        3500,   // ", ich bin Designer&Developer"
        5000,   // Daniel Podjapolski
        6500,   // About
        8000,   // Tech
        9500,   // Projekte
        11000,   // Kontakt
        11000    // Ende
    ];

    const timers = times.map(time =>

        window.setTimeout(() => {

            current++;

            setTimeline(current);

        }, time)

    );

    return () => {

        timers.forEach(clearTimeout);

    };

}, []);

  return (
    
    <div className="home-view">
      <header className="home-header">
        <HeroSection 
        timeline={timeline} 
        />
      </header>

      <main className="home-main">
        <ProfileSection
          timeline={timeline}
          onAbout={onAbout}
          onContact={onContact}
        />

        <ProjectSidebar
          timeline={timeline}
          onProjectClick={onProjectClick}
        />
      </main>
    </div>
  );
}

export default HomeView;
