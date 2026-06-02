import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./icons";
import type { Repo } from "@/lib/types";
import TagChip from "./TagChip";
import { slugify } from "@/lib/utils";

interface RepoCardProps {
  repo: Repo;
}

export default function RepoCard({ repo: r }: RepoCardProps) {
  return (
    <article className="card overflow-hidden flex flex-col h-full group relative">
      {/* Stretched link to detail page */}
      <Link
        href={`/software/${slugify(r.name)}`}
        className="absolute inset-0 z-0"
        aria-label={r.name}
      />

      {/* Thumbnail */}
      {r.thumbnail && r.thumbnail !== "/images/default-image.png" && (
        <div className="relative aspect-video bg-slate-100 overflow-hidden shrink-0 pointer-events-none">
          <Image
            src={r.thumbnail}
            alt={r.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <GithubIcon size={15} className="text-[var(--muted)] shrink-0 mt-0.5" />
            <h3 className="font-semibold text-[var(--navy)] text-sm leading-snug group-hover:text-[var(--blue-accent)] transition-colors">
              {r.name}
            </h3>
          </div>
          {r.language && (
            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {r.language}
            </span>
          )}
        </div>

        <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
          {r.description}
        </p>

        {r.tags && r.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 relative z-10">
            {r.tags.slice(0, 5).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}

        <div className="pt-2 border-t border-[var(--border)] relative z-10">
          {r.github && r.github !== "https://github.com/erosmontin" ? (
            <a
              href={r.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
              
            >
              <GithubIcon size={13} /> View on GitHub
            </a>
          ) : (
            <a
              href="https://github.com/erosmontin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
              
            >
              <ExternalLink size={13} /> GitHub profile
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
