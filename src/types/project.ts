export interface Project {
  id: string;

  title: string;

  shortDescription: string;

  responsibilities: string[];

  features: string[];

  technologies: string[];

  github?: string;

  images: string[];
}