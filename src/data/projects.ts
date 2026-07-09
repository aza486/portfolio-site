import type { Project } from "../types/project";
import libreDeskCover from "../assets/projects/Gebürstet_60x_40_P90414909_highRes_bmw-m4-competition-c.jpg";
import photolabCover from "../assets/projects/lamborghini-murcielago-lp640-4-lamborghini-vehicle-car-digital-art-hd-wallpaper-98c65df860801cc8f0dc61ae5832c4da.jpg";
import fitKnightCover from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";

export const projects: Project[] = [
  {
    id: "project-a",

    title: "Projekt A",

    shortDescription:
      "Konzept und Umsetzung einer digitalen Produktseite.",

    longDescription: [
      "Visuelles Konzept, Prototyping und responsive Umsetzung.",
      "Fokus auf klare Informationsarchitektur und schnelle Bedienbarkeit.",
      "Integration von Automatisierungen für wiederkehrende Abläufe."
    ],

    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "n8n"
    ],

    images: [libreDeskCover]
  },
  {
    id: "project-b",

    title: "Projekt B",

    shortDescription:
      "Interaktives Frontend für einen datengetriebenen Workflow.",

    longDescription: [
      "Komponentenbasierte Oberfläche mit wiederverwendbaren UI-Bausteinen.",
      "Optimiert für komplexe Zustände und schnelle Nutzerentscheidungen.",
      "Automatisierte Schnittstellen für Daten, Benachrichtigungen und Reports."
    ],

    technologies: [
      "Angular",
      "Go",
      "PostgreSQL",
      "n8n"
    ],

    images: [photolabCover]
  },
  {
    id: "project-c",

    title: "Projekt C",

    shortDescription:
      "Portfolio-Case mit Designsystem und technischer Umsetzung.",

    longDescription: [
      "Gestaltung eines konsistenten visuellen Systems.",
      "Umsetzung mit modernen Webtechnologien und sauberer Komponentenstruktur.",
      "Vorbereitung für spätere Case-Study-Inhalte und Mediengalerien."
    ],

    technologies: [
      "Vue",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    images: [fitKnightCover]
  }
];
