import adobe from "../assets/icons/adobexd.svg";
import css from "../assets/icons/css.svg";
import docker from "../assets/icons/docker.svg";
import figma from "../assets/icons/figma.svg";
import git from "../assets/icons/git.svg";
import go from "../assets/icons/go.svg";
import html from "../assets/icons/html.svg";
import illustrator from "../assets/icons/illustrator.svg";
import indesign from "../assets/icons/indesign.svg";
import javascript from "../assets/icons/javascript.svg";
import n8n from "../assets/icons/n8n.svg";
import vite from "../assets/icons/vite.svg";
import photoshop from "../assets/icons/photoshop.svg";
import postgres from "../assets/icons/postgres.svg";
import premiere from "../assets/icons/premierepro.svg";
import react from "../assets/icons/react.svg";
import shopware from "../assets/icons/shopware.svg";
import typescript from "../assets/icons/typescript.svg";
import openai from "../assets/icons/openai.svg";
import claude from "../assets/icons/claude.svg";
import django from "../assets/icons/django.svg";
import python from "../assets/icons/python.svg";

export interface TechStackItem {
  name: string;
  icon: string;
  scale: number;
  color: string;
  proficiency?: number;
  description?: string;
  skills?: string[];
}

export const techStack: TechStackItem[] = [
  {
    name: "React",
    icon: react,
    color: "#61dafb",
    proficiency: 60,
    scale: 1,
    description:
      "Entwicklung komponentenbasierter React-Oberflächen, unter anderem für mein Portfolio und eigene Webprojekte.",
    skills: [
      "Komponenten",
      "Hooks & State",
      "Routing",
      "TSX",
      "Responsive UI",
    ],
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "#3178c6",
    proficiency: 40,
    scale: 1,
    description:
      "Typisierung von React-Komponenten, Datenmodellen und Funktionen für besser wartbare Frontend-Projekte.",
    skills: [
      "Interfaces",
      "Typisierte Props",
      "TSX",
      "Union Types",
      "Typisierte Events",
    ],
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#f7df1e",
    proficiency: 60,
    scale: 1,
    description:
      "Entwicklung interaktiver Weboberflächen und Anbindung externer APIs mit JavaScript.",
    skills: [
      "DOM-Manipulation",
      "Fetch & REST",
      "Async/Await",
      "JSON",
      "UI-Interaktionen",
      "Swiper",
    ],
  },
  {
    name: "Vite",
    icon: vite,
    color: "#a66cff",
    proficiency: 55,
    scale: 1,
    description:
      "Einrichtung und Entwicklung moderner React-Projekte mit schnellem Dev-Server und produktiven Builds.",
    skills: [
      "React & TypeScript",
      "Dev-Server",
      "HMR",
      "Build-Prozess",
      "Projektkonfiguration",
    ],
  },
  {
    name: "Go",
    icon: go,
    color: "#00add8",
    proficiency: 40,
    scale: 1,
    description:
      "Anpassung und Erweiterung des LibreDesk-Backends, insbesondere für APIs und eigene Funktionen.",
    skills: [
      "REST-Endpunkte",
      "HTTP-Handler",
      "Backend-Anpassungen",
      "Go-Tests",
      "API-Integration",
    ],
  },
  {
    name: "Docker",
    icon: docker,
    color: "#2496ed",
    proficiency: 60,
    scale: 1,
    description:
      "Deployment und Betrieb mehrerer zusammenhängender Dienste auf Linux-Servern mit eigenen Images und Compose.",
    skills: [
      "Docker Compose",
      "Dockerfiles",
      "Container-Netzwerke",
      "Volumes",
      "Deployments",
      "Logs & Debugging",
      "Backups",
    ],
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    color: "#5988ad",
    proficiency: 50,
    scale: 1,
    description:
      "Arbeit mit relationalen Datenbanken für Ticket-, E-Mail- und Automatisierungsprozesse.",
    skills: [
      "SQL-Abfragen",
      "Tabellen & Indizes",
      "UUIDs",
      "Datenmodelle",
      "pg_dump",
      "Docker-Betrieb",
    ],
  },
  {
    name: "Git",
    icon: git,
    color: "#f05032",
    proficiency: 65,
    scale: 1,
    description:
      "Versionsverwaltung eigener Projekte und Pflege eines LibreDesk-Forks mit Upstream-Merges und Konfliktlösung.",
    skills: [
      "Branches",
      "Commits",
      "Remotes",
      "Upstream-Merges",
      "Merge-Konflikte",
      "GitHub",
    ],
  },
  {
    name: "n8n",
    icon: n8n,
    color: "#EA4B71",
    proficiency: 70,
    scale: 1.15,
    description:
      "Entwicklung automatisierter Workflows zur Verarbeitung von Kundenanfragen sowie Integration von APIs und KI-Agenten.",
    skills: [
      "Workflow-Automatisierung",
      "REST-APIs",
      "Webhooks",
      "JSON",
      "PostgreSQL",
      "KI-Integration",
      "Fehlerbehandlung",
    ],
  },
  {
    name: "Shopware",
    icon: shopware,
    color: "#189eff",
    proficiency: 65,
    scale: 1,
    description:
      "Konfiguration und technische Integration von Shopware 6 für einen Foto-Onlineshop und interne Abläufe.",
    skills: [
      "Store API",
      "FlowBuilder",
      "RuleBuilder",
      "Produktverwaltung",
      "E-Mail-Templates",
      "Shop-Konfiguration",
    ],
  },
  {
    name: "Figma",
    icon: figma,
    color: "#a259ff",
    proficiency: 80,
    scale: 1,
    description:
      "Konzeption und Gestaltung digitaler Benutzeroberflächen vom ersten Entwurf bis zum interaktiven Prototyp.",
    skills: [
      "UI-Design",
      "Wireframes",
      "Prototyping",
      "Komponenten",
      "Responsive Layouts",
    ],
  },
  {
    name: "Adobe XD",
    icon: adobe,
    color: "#ff61f6",
    proficiency: 90,
    scale: 1,
    description:
      "Gestaltung und Prototyping von Websites und App-Oberflächen mit Fokus auf Struktur und Nutzerführung.",
    skills: [
      "UI/UX-Design",
      "Wireframes",
      "Interaktive Prototypen",
      "Screen-Design",
      "Designsysteme",
    ],
  },
  {
    name: "Illustrator",
    icon: illustrator,
    color: "#ff9a00",
    proficiency: 90,
    scale: 1,
    description:
      "Erstellung und Bearbeitung von Vektorgrafiken für digitale Medien und Printgestaltung.",
    skills: [
      "Vektorgrafiken",
      "Illustrationen",
      "Logos",
      "Icons",
      "Druckgrafiken",
    ],
  },
  {
    name: "Photoshop",
    icon: photoshop,
    color: "#31a8ff",
    proficiency: 80,
    scale: 1,
    description:
      "Professionelle Bildbearbeitung und Gestaltung von Bildmaterial für Websites, Mockups und Printprodukte.",
    skills: [
      "Bildretusche",
      "Freistellen",
      "Compositing",
      "Mockups",
      "Bildoptimierung",
    ],
  },
  {
    name: "InDesign",
    icon: indesign,
    color: "#ff3366",
    proficiency: 80,
    scale: 1,
    description:
      "Gestaltung typografischer Layouts und mehrseitiger Dokumente für digitale und gedruckte Medien.",
    skills: [
      "Satz & Layout",
      "Typografie",
      "Gestaltungsraster",
      "Mehrseitige Dokumente",
      "Druck-PDFs",
    ],
  },
  {
    name: "Premiere Pro",
    icon: premiere,
    color: "#d779db",
    proficiency: 80,
    scale: 1,
    description:
      "Schnitt und Gestaltung von Videomaterial einschließlich Titeln, Übergängen und Export.",
    skills: [
      "Videoschnitt",
      "Schnittübergänge",
      "Titel & Grafiken",
      "Audiobearbeitung",
      "Videoexport",
    ],
  },
  {
    name: "HTML5",
    icon: html,
    color: "#e44d26",
    proficiency: 90,
    scale: 1,
    description:
      "Umsetzung strukturierter Webseiten, Produktseiten und Formularoberflächen mit semantischem HTML.",
    skills: [
      "Semantisches HTML",
      "Formulare",
      "Web-Templates",
      "SEO-Grundlagen",
      "Seitenstruktur",
    ],
  },
  {
    name: "CSS3",
    icon: css,
    color: "#2965f1",
    proficiency: 90,
    scale: 1,
    description:
      "Gestaltung responsiver Weboberflächen mit modernen Layout-Techniken und individuellen Animationen.",
    skills: [
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "Animationen",
      "Tailwind CSS",
      "Layout-Debugging",
    ],
  },
  {
    name: "openAI",
    icon: openai,
    color: "#8cddc0",
    proficiency: 75,
    scale: 0.9,
    description:
      "Integration von OpenAI-Modellen in KI-gestützte Support-Workflows zur Klassifizierung und Antworterstellung.",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "JSON-Ausgaben",
      "KI-Agenten",
      "Human-in-the-loop",
      "Fallback-Logik",
    ],
  },
  {
    name: "Claude AI",
    icon: claude,
    color: "#d97757",
    proficiency: 60,
    scale: 1,
    description:
      "Einsatz eines KI-Assistenten zur Unterstützung bei technischen Aufgaben, Analyse und Konzeption.",
    skills: [
      "Prompting",
      "Codeanalyse",
      "Konzeption",
      "Textüberarbeitung",
    ],
  },
  {
    name: "Django",
    icon: django,
    color: "#44b78b",
    proficiency: 20,
    scale: 1,
    description:
      "Technische Anbindung eines Django-basierten Printbox-Backends über APIs; bisher keine eigene Django-App entwickelt.",
    skills: [
      "REST-API-Anbindung",
      "JSON-Verarbeitung",
      "Backend-Verwaltung",
      "Django-Admin",
      ],
  },
  {
    name: "Python",
    icon: python,
    color: "#ffd343",
    proficiency: 60,
    scale: 1,
    description:
      "Entwicklung eigener Tools für API-Abrufe und Browserautomatisierung sowie eines FastAPI/spaCy-Anonymisierungsdienstes.",
    skills: [
      "Flask",
      "FastAPI",
      "Selenium",
      "Requests",
      "spaCy & Regex",
      "PyInstaller",
      "JSON-Verarbeitung",
    ],
  },
];

export const techStackMap = Object.fromEntries(
  techStack.map((item) => [item.name, item]),
) satisfies Record<string, TechStackItem>;

export function experienceLevel(value: number): string {
  if (value < 25) return "Anfänger";
  if (value < 50) return "Fortgeschritten";
  if (value < 75) return "Mid-Level";
  return "Experte";
}

export function proficiencyOf(item: TechStackItem): number | undefined {
  return typeof item.proficiency === "number" && Number.isFinite(item.proficiency)
    ? Math.max(0, Math.min(100, item.proficiency))
    : undefined;
}
