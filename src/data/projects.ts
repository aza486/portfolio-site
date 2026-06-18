import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "libredesk",

    title: "Custom LibreDesk",

    shortDescription:
      "Custom Helpdesk Erweiterungen",

    longDescription: [
      "Erweiterung von LibreDesk.",
      "KI-Integration über n8n.",
      "Workflow Automatisierung."
    ],

    technologies: [
      "Go",
      "Vue",
      "PostgreSQL",
      "n8n"
    ],

    images: []
  }
];