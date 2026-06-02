import type { Metadata } from "next";
import { getPresentations } from "@/lib/content";
import PresentationCard from "@/components/PresentationCard";

export const metadata: Metadata = {
  title: "Presentations",
  description:
    "Slides and presentations by Eros Montin at scientific meetings and conferences.",
};

export default function PresentationsPage() {
  const presentations = getPresentations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">Presentations</h1>
        <p className="section-subtitle">
          Slides from conference talks, invited lectures, and scientific meetings.
        </p>
      </div>

      {presentations.length === 0 ? (
        <div className="text-center py-24 text-[var(--muted)]">
          <p className="text-lg font-medium mb-2">Coming soon</p>
          <p className="text-sm">
            Add Google Slides embed URLs to{" "}
            <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
              content/presentations.yaml
            </code>{" "}
            to populate this page.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {presentations.map((p) => (
            <PresentationCard key={p.title} presentation={p} />
          ))}
        </div>
      )}
    </div>
  );
}
