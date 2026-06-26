import type { Project } from "../types/project";

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

    images: []
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

    images: []
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

    images: []
  }
];
