import type { Project } from "../types/project";
import libreDeskCover from "../assets/projects/Gebürstet_60x_40_P90414909_highRes_bmw-m4-competition-c.jpg";
import libreDesk2 from "../assets/projects/lamborghini-murcielago-lp640-4-lamborghini-vehicle-car-digital-art-hd-wallpaper-98c65df860801cc8f0dc61ae5832c4da.jpg";
import libreDesk3 from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";
import photolabCover from "../assets/projects/lamborghini-murcielago-lp640-4-lamborghini-vehicle-car-digital-art-hd-wallpaper-98c65df860801cc8f0dc61ae5832c4da.jpg";
import fitKnightCover from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";

export const projects: Project[] = [
  {
    id: "project-a",

    title: "Libredesk - n8n Workflow",

    shortDescription:
      "Konzept und Umsetzung einer digitalen Produktseite.",

    responsibilities: [
      "Frontend-Anpassungen mit React",
      "Backend-Anpassungen in Go",
      "REST-API zwischen LibreDesk und n8n",
      "PostgreSQL",
      "Docker & Linux"
    ],

    features: [
      "automatische Ticketanalyse",
      "KI-Antwortvorschläge",
      "Workflow-Integration",
      "Statussystem",
      "neue UI-Komponenten"
    ],

    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "n8n"
    ],

    images: [
      libreDeskCover,
      libreDesk2,
      libreDesk3,
    ]
  },
  {
    id: "project-b",

    title: "Projekt B",

    shortDescription:
      "Interaktives Frontend für einen datengetriebenen Workflow.",

    responsibilities: [
      "...",
      "...",
      "...",
    ],

    features: [
      "...",
      "...",
      "...",
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

    responsibilities: [
      "...",
      "...",
      "...",
    ],

    features: [
      "...",
      "...",
      "...",
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
