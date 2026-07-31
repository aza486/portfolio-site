import "./HomeView.css";

import HeroSection from "./HeroSection";
import ProfileSection from "./profile/ProfileSection";
import ProjectSidebar from "./ProjectSidebar";
import type { Project } from "../../types/project";
import { useEffect, useState } from "react";

import profile from "../../assets/profile/profile.png";
import wave1 from "../../assets/profile/wave1.png";
import wave2 from "../../assets/profile/wave2.png";


interface HomeViewProps {
  onAbout: () => void;
  onContact: () => void;
  onProjectClick: (project: Project) => void;
  onPortraitLoaded?: () => void;
}

function HomeView({ onAbout, onContact, onProjectClick }: HomeViewProps) {

  const [timeline, setTimeline] = useState(0);


useEffect(() => {

    const imageSources = [
        profile,
        wave1,
        wave2,
    ];

    Promise.all(

        imageSources.map(src =>
            new Promise<void>(resolve => {

                const img = new Image();

                img.onload = () => resolve();
                img.onerror = () => resolve(); // trotzdem weitermachen

                img.src = src;

            })
        )

    ).then(() => {

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

        times.forEach(time => {

            window.setTimeout(() => {

                current++;
                setTimeline(current);

            }, time);

        });

    });

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
