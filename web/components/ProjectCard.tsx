import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import TagChip from "./TagChip";
import { slugify } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project: p }: ProjectCardProps) {
  return (
    <article className="card overflow-hidden flex flex-col h-full group relative">
      {/* Stretched link to detail page */}
      <Link
        href={`/projects/${slugify(p.title)}`}
        className="absolute inset-0 z-0"
        aria-label={p.title}
      />

      {/* Thumbnail */}
      {p.thumbnail && p.thumbnail !== "/images/default-image.png" && (
        <div className="relative aspect-video bg-slate-100 overflow-hidden shrink-0 pointer-events-none">
          <Image
            src={p.thumbnail}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-[var(--navy)] text-base leading-snug group-hover:text-[var(--blue-accent)] transition-colors">
          {p.title}
        </h3>

        <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
          {p.description}
        </p>

        {p.long_description && (
          <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3 border-l-2 border-[var(--blue-light)] pl-3">
            {p.long_description.trim().split("\n")[0]}
          </p>
        )}

        {p.tags && p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 relative z-10">
            {p.tags.slice(0, 5).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}

        {p.links && p.links.length > 0 && (
          <div className="pt-2 border-t border-[var(--border)] flex flex-wrap gap-3 relative z-10">
            {p.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                
              >
                <ExternalLink size={13} /> {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
