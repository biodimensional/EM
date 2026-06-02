import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type {
  Publication,
  Repo,
  Project,
  Video,
  Presentation,
  Service,
  ContentItem,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function loadYaml<T>(filename: string): T[] {
  const file = path.join(contentDir, filename);
  const raw = fs.readFileSync(file, "utf8");
  return (yaml.load(raw) as T[]) ?? [];
}

export function getPublications(): Publication[] {
  return loadYaml<Publication>("publications.yaml").filter(
    (p) => !p.title.startsWith("# TODO")
  );
}

export function getRepos(): Repo[] {
  return loadYaml<Repo>("repos.yaml").filter(
    (r) => !r.name.startsWith("# TODO")
  );
}

export function getProjects(): Project[] {
  return loadYaml<Project>("projects.yaml").filter(
    (p) => !p.title.startsWith("# TODO")
  );
}

export function getVideos(): Video[] {
  return loadYaml<Video>("videos.yaml").filter(
    (v) => !v.title.startsWith("# TODO")
  );
}

export function getPresentations(): Presentation[] {
  return loadYaml<Presentation>("presentations.yaml").filter(
    (p) => !p.title.startsWith("# TODO")
  );
}

export function getServices(): Service[] {
  return loadYaml<Service>("services.yaml");
}

export function getAllContent(): ContentItem[] {
  const pubs: ContentItem[] = getPublications().map((p) => ({
    ...p,
    _type: "publication" as const,
  }));
  const repos: ContentItem[] = getRepos().map((r) => ({
    ...r,
    _type: "repo" as const,
  }));
  const projects: ContentItem[] = getProjects().map((p) => ({
    ...p,
    _type: "project" as const,
  }));
  const videos: ContentItem[] = getVideos().map((v) => ({
    ...v,
    _type: "video" as const,
  }));
  const presentations: ContentItem[] = getPresentations().map((p) => ({
    ...p,
    _type: "presentation" as const,
  }));

  return [...pubs, ...repos, ...projects, ...videos, ...presentations];
}

export function getFeaturedContent(): ContentItem[] {
  return getAllContent().filter((item) => {
    if ("featured" in item) return item.featured;
    return false;
  });
}
