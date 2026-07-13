import type { TechStackItem } from "../data/techStack";

export interface ProjectImage {

  src: string;

  title: string;

}

export interface Project {
  id: string;

  title: string;

  shortDescription: string;

  responsibilities: string[];

  features: string[];

  techIcons: TechStackItem[];

  github?: string;

  images: ProjectImage[];
}