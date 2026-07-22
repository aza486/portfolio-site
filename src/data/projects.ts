import type { Project } from "../types/project";

import libreDeskCover from "../assets/projects/KI_Antwort.png";
import libreDesk2 from "../assets/projects/n8n_Workflow.png";
import libreDesk3 from "../assets/projects/nissan-skyline-r34-4k-j6.jpg";

import photolabCover from "../assets/projects/ProfotoLP.png";
import profoto_editor from "../assets/projects/ProfotoEditor.png";
import profotoLP from "../assets/projects/ProfotoLP.png";
import profoto_shopware from "../assets/projects/ProfotoShopware.png";
import profotoPBX from "../assets/projects/ProfotoPBX.png";

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
    ctaUrl: "https://github.com/aza486/libredesk_custom",
  },

  {
    id: "project-b",

    title: "Profotolab: E-Commerce Plattform",

    shortDescription:
      "Modernisierung und Weiterentwicklung einer produktiven E-Commerce-Plattform für Fotolabor Profotolab.",

    responsibilities: [
      "Frontend-Modernisierung (HTML, CSS, JavaScript)",
      "Integration des Printbox-Produkteditors",
      "Produktkonfiguration & Shopware-Verwaltung",
      "Landingpages & Informationsseiten entwickelt",
      "SEO-Optimierung & Content-Erstellung",
      "Technischer Ansprechpartner & Fehleranalyse",
    ],

    features: [
      "Produkteditoren für Fotoabzüge, Wandbilder, Fotogeschenke, etc.",
      "Dynamische Produktparameter (Größen, Layouts, Preise)",
      "Individuelle Landingpages",
      "Shopware-Integration mit externem Printbox-System",
      "Python-Tools zur Prozessautomatisierung",
      "Produktiv im täglichen Unternehmenseinsatz",
    ],

    techIcons: [
      techStackMap["HTML5"],
      techStackMap["CSS3"],
      techStackMap["JavaScript"],
      techStackMap["Shopware"],
      techStackMap["Python"],
      techStackMap["Django"],
      techStackMap["Photoshop"],
    ],

    images: [
      {
        src: photolabCover,
        title: "Profotolab Startseite",
      },
      {
        src: profoto_editor,
        title: "Produkteditor Fotoabzüge",
      },
      {
        src: profotoLP,
        title: "Landingpage Kleinformate",
      },
      {
        src: profoto_shopware,
        title: "Verwaltung-Backend Shopware",
      },
      {
        src: profotoPBX,
        title: "Django-Backend von Printbox",
      },
      
    ],

    ctaLabel: "Live ansehen →",
    ctaUrl: "https://www.profotolab.de/",
  },

  {
    id: "project-c",

    title: "Persönliche Website",

    shortDescription:
      "Portfolio-Case mit Designsystem und technischer Umsetzung.",

    responsibilities: [
      "UI/UX-Konzept & Wireframes erstellt",
      "Frontend mit React & TypeScript entwickelt",
      "Responsive Design für Desktop & Mobile",
      "Animationen & Micro-Interactions umgesetzt",
      "Komponentenarchitektur aufgebaut",
    ],

    features: [
      "Interaktive Projektübersicht",
      "Responsive One-Page-Design",
      "Dynamische Overlays & Navigation",
      "Animierte Benutzeroberfläche",
      "Optimiert für Performance & Benutzerfreundlichkeit",
    ],

    techIcons: [
      techStackMap["React"],
      techStackMap["TypeScript"],
      techStackMap["Vite"],
      techStackMap["CSS3"],
      techStackMap["Git"],
      techStackMap["Adobe XD"],
      techStackMap["Photoshop"],
    ],

    images: [
      {
        src: fitKnightCover,
        title: "FitKnight Oberfläche",
      },
    ],

    ctaLabel: "Code auf Github →",
    ctaUrl: "https://github.com/aza486/portfolio-site",
  },
];