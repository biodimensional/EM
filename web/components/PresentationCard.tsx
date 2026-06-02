"use client";

import { useState } from "react";
import { ExternalLink, Presentation as PresentIcon } from "lucide-react";
import Image from "next/image";
import type { Presentation } from "@/lib/types";
import TagChip from "./TagChip";

interface PresentationCardProps {
  presentation: Presentation;
}

export default function PresentationCard({
  presentation: p,
}: PresentationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card overflow-hidden flex flex-col h-full">
      {/* Slide embed / thumbnail */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {expanded && p.embed_url ? (
          <iframe
            src={p.embed_url}
            title={p.title}
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {p.thumbnail && (
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-cover"
              />
            )}
            {!p.thumbnail && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--blue-light)]">
                <PresentIcon size={40} className="text-[var(--blue-accent)] opacity-50" />
              </div>
            )}
            {p.embed_url && (
              <button
                onClick={() => setExpanded(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group"
                aria-label={`View slides: ${p.title}`}
              >
                <span className="px-4 py-2 rounded-full bg-white/90 text-sm font-medium text-[var(--navy)] shadow group-hover:scale-105 transition-transform">
                  View Slides
                </span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Presentation
          </span>
          <span className="text-xs text-[var(--muted)]">{p.year}</span>
        </div>
        <h3 className="font-semibold text-[var(--navy)] text-sm leading-snug line-clamp-2">
          {p.title}
        </h3>
        {p.event && (
          <p className="text-xs text-[var(--blue-accent)] line-clamp-1">
            {p.event}
          </p>
        )}
        {p.description && (
          <p className="text-xs text-[var(--muted)] line-clamp-2 flex-1">
            {p.description}
          </p>
        )}
        {p.tags && p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {p.tags.slice(0, 3).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}
        {p.embed_url && (
          <a
            href={p.embed_url.replace("/embed", "/pub")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[var(--blue-accent)] hover:underline mt-1"
          >
            <ExternalLink size={11} /> Open slides
          </a>
        )}
      </div>
    </article>
  );
}
