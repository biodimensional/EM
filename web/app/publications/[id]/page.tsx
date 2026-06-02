import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FileText, BookOpen } from "lucide-react";
import { getPublicationById, getPublications } from "@/lib/content";
import TagChip from "@/components/TagChip";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const pubs = getPublications();
  return pubs.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pub = getPublicationById(Number(id));
  if (!pub) return {};
  return {
    title: pub.title,
    description: pub.summary.slice(0, 160),
  };
}

const TYPE_LABEL: Record<string, string> = {
  article: "Journal Article",
  conference: "Conference Paper",
  preprint: "Preprint",
  "book-chapter": "Book Chapter",
};

export default async function PublicationDetailPage({ params }: Props) {
  const { id } = await params;
  const pub = getPublicationById(Number(id));
  if (!pub) notFound();

  const doiUrl = pub.doi ? `https://doi.org/${pub.doi}` : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/publications"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 transition-colors"
      >
        <ArrowLeft size={15} /> Back to Publications
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Media */}
        <div className="flex flex-col gap-6">
          {pub.thumbnail && pub.thumbnail !== "/images/default-image.png" ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow">
              <Image
                src={pub.thumbnail}
                alt={pub.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          ) : (
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center shadow">
              <BookOpen size={48} className="text-slate-300" />
            </div>
          )}

          {/* Links panel */}
          <div className="card p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Access
            </p>
            <div className="flex flex-col gap-2">
              {doiUrl && (
                <a
                  href={doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                >
                  <ExternalLink size={13} /> DOI: {pub.doi}
                </a>
              )}
              {pub.pubmed && (
                <a
                  href={pub.pubmed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                >
                  <ExternalLink size={13} /> View paper
                </a>
              )}
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                >
                  <FileText size={13} /> Download PDF
                </a>
              )}
              {!doiUrl && !pub.pubmed && !pub.pdf && (
                <p className="text-sm text-[var(--muted)]">No links available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          {/* Type + Year badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--blue-accent)]/10 text-[var(--blue-accent)]">
              {TYPE_LABEL[pub.type] ?? pub.type}
            </span>
            <span className="text-xs font-medium text-[var(--muted)]">
              {pub.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[var(--navy)] leading-snug">
            {pub.title}
          </h1>

          {/* Authors */}
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {pub.authors}
          </p>

          {/* Journal */}
          <p className="text-sm font-medium text-[var(--navy)] italic">
            {pub.journal}
          </p>

          {/* Primary action links */}
          {(doiUrl || pub.pubmed || pub.pdf) && (
            <div className="flex flex-wrap gap-3">
              {doiUrl && (
                <a
                  href={doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--blue-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
              )}
              {pub.pubmed && !doiUrl && (
                <a
                  href={pub.pubmed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--blue-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
              )}
              {pub.pubmed && doiUrl && (
                <a
                  href={pub.pubmed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--navy)] text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <BookOpen size={14} /> PubMed
                </a>
              )}
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--navy)] text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <FileText size={14} /> PDF
                </a>
              )}
            </div>
          )}

          {/* Tags */}
          {pub.tags && pub.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <TagChip key={tag} label={tag} />
              ))}
            </div>
          )}

          {/* Abstract */}
          {pub.summary && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                Abstract
              </h2>
              <p className="text-sm text-[var(--text)] leading-relaxed">
                {pub.summary}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
