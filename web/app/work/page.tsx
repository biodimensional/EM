import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Search and browse all publications, software, projects, videos, and presentations by Eros Montin.",
};

export default function WorkPage() {
  const content = getAllContent();
  const allTags = [
    ...new Set(
      content.flatMap((item) =>
        "tags" in item ? (item as { tags: string[] }).tags ?? [] : []
      )
    ),
  ].sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">All Work</h1>
        <p className="section-subtitle">
          Search and filter publications, software, projects, videos, and
          presentations in one place.
        </p>
      </div>
      <Suspense fallback={<div className="text-[var(--muted)]">Loading…</div>}>
        <WorkClient content={content} allTags={allTags} />
      </Suspense>
    </div>
  );
}
