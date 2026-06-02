"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { ContentItem, Publication, Repo, Project, Video, Presentation } from "@/lib/types";
import PublicationCard from "@/components/PublicationCard";
import RepoCard from "@/components/RepoCard";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";
import PresentationCard from "@/components/PresentationCard";
import GlobalSearch from "@/components/GlobalSearch";
import TagChip from "@/components/TagChip";

type ContentType = "all" | "publication" | "repo" | "project" | "video" | "presentation";

interface WorkClientProps {
  content: ContentItem[];
  allTags: string[];
}

const TYPE_LABELS: Record<ContentType, string> = {
  all: "All",
  publication: "Publications",
  repo: "Software",
  project: "Projects",
  video: "Videos",
  presentation: "Presentations",
};

function getItemTitle(item: ContentItem): string {
  if (item._type === "publication") return (item as Publication & { _type: "publication" }).title;
  if (item._type === "repo") return (item as Repo & { _type: "repo" }).name;
  if (item._type === "project") return (item as Project & { _type: "project" }).title;
  if (item._type === "video") return (item as Video & { _type: "video" }).title;
  if (item._type === "presentation") return (item as Presentation & { _type: "presentation" }).title;
  return "";
}

function getItemTags(item: ContentItem): string[] {
  return "tags" in item ? (item as { tags: string[] }).tags ?? [] : [];
}

function getItemYear(item: ContentItem): number {
  if (item._type === "publication") return (item as Publication & { _type: "publication" }).year;
  if (item._type === "video") return (item as Video & { _type: "video" }).year;
  if (item._type === "presentation") return (item as Presentation & { _type: "presentation" }).year;
  return 0;
}

function matchesQuery(item: ContentItem, q: string): boolean {
  const lower = q.toLowerCase();
  const title = getItemTitle(item).toLowerCase();
  const tags = getItemTags(item).join(" ").toLowerCase();
  const description = ("description" in item ? (item as { description?: string }).description ?? "" : "").toLowerCase();
  const summary = ("summary" in item ? (item as { summary?: string }).summary ?? "" : "").toLowerCase();
  const authors = ("authors" in item ? (item as { authors?: string }).authors ?? "" : "").toLowerCase();
  return (
    title.includes(lower) ||
    tags.includes(lower) ||
    description.includes(lower) ||
    summary.includes(lower) ||
    authors.includes(lower)
  );
}

export default function WorkClient({ content, allTags }: WorkClientProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [typeFilter, setTypeFilter] = useState<ContentType>("all");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return content.filter((item) => {
      const matchesType = typeFilter === "all" || item._type === typeFilter;
      const matchesTag = !tagFilter || getItemTags(item).includes(tagFilter);
      const matchesQ = !query || matchesQuery(item, query);
      return matchesType && matchesTag && matchesQ;
    });
  }, [content, query, typeFilter, tagFilter]);

  return (
    <div>
      {/* Search */}
      <div className="mb-8 space-y-4">
        <GlobalSearch
          placeholder="Search everything…"
          onSearch={setQuery}
        />
        {/* Type tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by type">
          {(Object.keys(TYPE_LABELS) as ContentType[]).map((type) => (
            <button
              key={type}
              role="tab"
              aria-selected={typeFilter === type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                typeFilter === type
                  ? "bg-[var(--navy)] text-white"
                  : "bg-white border border-[var(--border)] text-[var(--muted)] hover:text-[var(--navy)]"
              }`}
            >
              {TYPE_LABELS[type]}
            </button>
          ))}
        </div>
        {/* Tag chips */}
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 20).map((tag) => (
            <TagChip
              key={tag}
              label={tag}
              active={tagFilter === tag}
              onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
            />
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-[var(--muted)] mb-5">
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        {query && ` for "${query}"`}
      </p>

      {/* Results grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => {
          if (item._type === "publication") {
            return <PublicationCard key={i} publication={item as Publication & { _type: "publication" }} compact />;
          }
          if (item._type === "repo") {
            return <RepoCard key={i} repo={item as Repo & { _type: "repo" }} />;
          }
          if (item._type === "project") {
            return <ProjectCard key={i} project={item as Project & { _type: "project" }} />;
          }
          if (item._type === "video") {
            return <VideoCard key={i} video={item as Video & { _type: "video" }} />;
          }
          if (item._type === "presentation") {
            return <PresentationCard key={i} presentation={item as Presentation & { _type: "presentation" }} />;
          }
          return null;
        })}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-[var(--muted)]">
          No results found. Try a different query or clear the filters.
        </div>
      )}
    </div>
  );
}
