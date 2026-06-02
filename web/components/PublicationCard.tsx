import Link from "next/link";
import { ExternalLink, FileText, BookOpen } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./icons";
import type { Publication } from "@/lib/types";
import TagChip from "./TagChip";

interface PublicationCardProps {
  publication: Publication;
  compact?: boolean;
}

export default function PublicationCard({
  publication: p,
  compact = false,
}: PublicationCardProps) {
  const typeLabel =
    p.type === "conference"
      ? "Conference"
      : p.type === "preprint"
      ? "Preprint"
      : p.type === "book-chapter"
      ? "Book Chapter"
      : "Article";

  const doiHref = p.doi ? `https://doi.org/${p.doi}` : p.pubmed ?? null;

  return (
    <article className="card overflow-hidden flex flex-col h-full group">
      {/* ── Thumbnail ── */}
      {p.thumbnail && (
        <div className="relative aspect-video bg-slate-100 overflow-hidden shrink-0">
          <Image
            src={p.thumbnail}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Type badge overlaid on image */}
          <div className="absolute top-2.5 left-2.5 flex gap-1.5">
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-white/90 text-slate-700 shadow-sm uppercase tracking-wide">
              {typeLabel}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-white/90 text-slate-700 shadow-sm">
              {p.year}
            </span>
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Type + year when no thumbnail */}
        {!p.thumbnail && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600 uppercase tracking-wide">
              {typeLabel}
            </span>
            <span className="text-xs text-[var(--muted)]">{p.year}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold text-[var(--navy)] text-sm leading-snug line-clamp-3">
          {doiHref ? (
            <a
              href={doiHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--blue-accent)] transition-colors"
            >
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>

        {/* Authors */}
        <p className="text-xs text-[var(--muted)] line-clamp-2">{p.authors}</p>

        {/* Journal */}
        <p className="text-xs font-medium text-[var(--blue-accent)] italic line-clamp-2">
          {p.journal}
        </p>

        {/* Abstract / summary */}
        {!compact && p.summary && (
          <p className="text-sm text-[var(--muted)] line-clamp-4 leading-relaxed flex-1">
            {p.summary}
          </p>
        )}

        {/* Tags */}
        {p.tags && p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {p.tags.slice(0, 4).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
            {p.tags.length > 4 && (
              <span className="text-xs text-[var(--muted)] self-center">
                +{p.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-[var(--border)]">
          {p.doi && (
            <a
              href={`https://doi.org/${p.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--blue-accent)] hover:underline"
            >
              <ExternalLink size={11} /> DOI
            </a>
          )}
          {p.pubmed && (
            <a
              href={p.pubmed}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--blue-accent)] hover:underline"
            >
              <BookOpen size={11} /> PubMed
            </a>
          )}
          {p.pdf && (
            <a
              href={p.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--blue-accent)] hover:underline"
            >
              <FileText size={11} /> PDF
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
