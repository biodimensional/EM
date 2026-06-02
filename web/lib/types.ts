export interface Publication {
  id: number;
  title: string;
  authors: string;
  year: number;
  journal: string;
  type: "article" | "conference" | "preprint" | "book-chapter";
  tags: string[];
  doi: string | null;
  pubmed: string | null;
  pdf: string | null;
  bibtex?: string | null;
  summary: string;
  featured: boolean;
  thumbnail: string | null;
}

export interface Repo {
  name: string;
  description: string;
  github: string;
  language: string;
  tags: string[];
  related_publications: number[];
  featured: boolean;
  thumbnail: string | null;
  stars?: number;
}

export interface Project {
  title: string;
  description: string;
  long_description: string;
  tags: string[];
  links: { label: string; url: string }[];
  related_publications: number[];
  related_repos: string[];
  featured: boolean;
  thumbnail: string | null;
}

export interface Video {
  title: string;
  description: string;
  year: number;
  source: "youtube" | "vimeo" | "mp4";
  url: string;
  thumbnail: string | null;
  duration: string;
  tags: string[];
  featured: boolean;
}

export interface Presentation {
  title: string;
  description: string;
  year: number;
  event: string;
  source: "google_slides" | "pdf" | "slideshare";
  embed_url: string;
  thumbnail: string | null;
  tags: string[];
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  featured: boolean;
  call_to_action: string;
}

export type ContentItem =
  | (Publication & { _type: "publication" })
  | (Repo & { _type: "repo" })
  | (Project & { _type: "project" })
  | (Video & { _type: "video" })
  | (Presentation & { _type: "presentation" });
