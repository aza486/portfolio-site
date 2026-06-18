export interface Project {
  id: string;

  title: string;

  shortDescription: string;

  longDescription: string[];

  technologies: string[];

  images: string[];

  github?: string;

  liveUrl?: string;
}