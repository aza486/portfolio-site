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
}

export const techStack: TechStackItem[] = [
  {
    name: "React",
    icon: react,
    scale: 1,
  },
  {
    name: "TypeScript",
    icon: typescript,
    scale: 1,
  },
  {
    name: "JavaScript",
    icon: javascript,
    scale: 1,
  },
  {
    name: "Vite",
    icon: vite,
    scale: 1,
  },
  {
    name: "Go",
    icon: go,
    scale: 1,
  },
  {
    name: "Docker",
    icon: docker,
    scale: 1,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    scale: 1,
  },
  {
    name: "Git",
    icon: git,
    scale: 1,
  },
  {
    name: "n8n",
    icon: n8n,
    scale: 1.25,
  },
  {
    name: "Shopware",
    icon: shopware,
    scale: 1,
  },
  {
    name: "Figma",
    icon: figma,
    scale: 1,
  },
  {
    name: "Adobe XD",
    icon: adobe,
    scale: 1,
  },
  {
    name: "Illustrator",
    icon: illustrator,
    scale: 1,
  },
  {
    name: "Photoshop",
    icon: photoshop,
    scale: 1,
  },
  {
    name: "InDesign",
    icon: indesign,
    scale: 1,
  },
  {
    name: "Premiere Pro",
    icon: premiere,
    scale: 1,
  },
  {
    name: "HTML5",
    icon: html,
    scale: 1,
  },
  {
    name: "CSS3",
    icon: css,
    scale: 1,
  },
  {
    name: "openAI",
    icon: openai,
    scale: 0.9,
  },
  {
    name: "Claude AI",
    icon: claude,
    scale: 1,
  },
  {
    name: "Django",
    icon: django,
    scale: 1,
  },
  {
    name: "Python",
    icon: python,
    scale: 1,
  },
];

export const techStackMap = Object.fromEntries(
  techStack.map((item) => [item.name, item]),
) satisfies Record<string, TechStackItem>;