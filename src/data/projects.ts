import type { Project } from "../types/project";

import libreDeskCover from "../assets/projects/Gebürstet_60x_40_P90414909_highRes_bmw-m4-competition-c.jpg";
import libreDesk2 from "../assets/projects/lamborghini-murcielago-lp640-4-lamborghini-vehicle-car-digital-art-hd-wallpaper-98c65df860801cc8f0dc61ae5832c4da.jpg";
import libreDesk3 from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";

import photolabCover from "../assets/projects/lamborghini-murcielago-lp640-4-lamborghini-vehicle-car-digital-art-hd-wallpaper-98c65df860801cc8f0dc61ae5832c4da.jpg";
import fitKnightCover from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";

import { techStackMap } from "./techStack";

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
      "PostgreSQL als Ticket-DB",
      "Docker & Linux Deployment",
    ],

    features: [
      "automatische Ticketanalyse",
      "KI-Antwortvorschläge",
      "Workflow-Integration",
      "Statussystem",
      "neue UI-Komponenten",
    ],

    techIcons: [
      techStackMap["React"],
      techStackMap["Go"],
      techStackMap["PostgreSQL"],
      techStackMap["n8n"],
      techStackMap["Git"],
      techStackMap["Docker"],
      techStackMap["openAI"],
    ],

    images: [
      {
        src: libreDeskCover,
        title: "Ticketsystem in Aktion",
      },
      {
        src: libreDesk2,
        title: "KI-generierter Antwortsvorschlag",
      },
      {
        src: libreDesk3,
        title: "n8n Workflow zur Ticketverarbeitung",
      },
    ],

    ctaLabel: "Code auf GitHub →",
    ctaUrl: "https://github.com/DEIN-REPO",
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

    techIcons: [
      techStackMap["Shopware"],
      techStackMap["JavaScript"],
      techStackMap["Docker"],
      techStackMap["Git"],
    ],

    images: [
      {
        src: photolabCover,
        title: "Photolab Oberfläche",
      },
    ],

    ctaLabel: "Live ansehen →",
    ctaUrl: "https://deine-live-seite.de",
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

    techIcons: [
      techStackMap["Shopware"],
      techStackMap["JavaScript"],
      techStackMap["Docker"],
      techStackMap["Git"],
    ],

    images: [
      {
        src: fitKnightCover,
        title: "FitKnight Oberfläche",
      },
    ],

    ctaLabel: "Prototype ansehen →",
    ctaUrl: "https://xd.adobe.com/...",
  },
];