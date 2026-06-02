"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import type { Video } from "@/lib/types";
import TagChip from "./TagChip";

interface VideoCardProps {
  video: Video;
}

function getEmbedUrl(source: string, url: string): string {
  if (source === "youtube") {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  }
  if (source === "vimeo") {
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
  }
  return url;
}

export default function VideoCard({ video: v }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  const embedUrl = getEmbedUrl(v.source, v.url);

  return (
    <article className="card overflow-hidden flex flex-col h-full">
      {/* Thumbnail / player */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {playing && v.url ? (
          <iframe
            src={embedUrl}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {v.thumbnail && (
              <Image
                src={v.thumbnail}
                alt={v.title}
                fill
                className="object-cover"
              />
            )}
            {v.url && (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label={`Play: ${v.title}`}
              >
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Play size={24} className="text-[var(--navy)] ml-1" />
                </span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            {v.source === "youtube"
              ? "YouTube"
              : v.source === "vimeo"
              ? "Vimeo"
              : "Video"}
          </span>
          <span className="text-xs text-[var(--muted)]">{v.year}</span>
          {v.duration && (
            <span className="text-xs text-[var(--muted)]">· {v.duration}</span>
          )}
        </div>
        <h3 className="font-semibold text-[var(--navy)] text-sm leading-snug line-clamp-2">
          {v.title}
        </h3>
        {v.description && (
          <p className="text-xs text-[var(--muted)] line-clamp-2 flex-1">
            {v.description}
          </p>
        )}
        {v.tags && v.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {v.tags.slice(0, 3).map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
