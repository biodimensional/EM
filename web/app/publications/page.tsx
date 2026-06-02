import type { Metadata } from "next";
import { getPublications } from "@/lib/content";
import PublicationsClient from "./PublicationsClient";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed articles, conference papers, and preprints by Eros Montin on MRI, radiomics, AI, and biomedical imaging.",
};

export default function PublicationsPage() {
  const publications = getPublications();

  const allYears = [...new Set(publications.map((p) => String(p.year)))].sort(
    (a, b) => Number(b) - Number(a)
  );
  const allTags = [
    ...new Set(publications.flatMap((p) => p.tags)),
  ].sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">Publications</h1>
        <p className="section-subtitle">
          Peer-reviewed articles, conference papers, and editorials on MRI,
          radiomics, AI, and cloud biomedical software.
        </p>
      </div>
      <PublicationsClient
        publications={publications}
        allTags={allTags}
        allYears={allYears}
      />
    </div>
  );
}
