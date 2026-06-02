import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getRepoBySlug, getRepos } from "@/lib/content";
import { slugify } from "@/lib/utils";
import TagChip from "@/components/TagChip";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const repos = getRepos();
  return repos.map((r) => ({ slug: slugify(r.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const repo = getRepoBySlug(slug);
  if (!repo) return {};
  return {
    title: repo.name,
    description: repo.description.slice(0, 160),
  };
}

export default async function RepoDetailPage({ params }: Props) {
  const { slug } = await params;
  const repo = getRepoBySlug(slug);
  if (!repo) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/software"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 transition-colors"
      >
        <ArrowLeft size={15} /> Back to Software
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Media */}
        <div className="flex flex-col gap-6">
          {repo.thumbnail ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow">
              <Image
                src={repo.thumbnail}
                alt={repo.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          ) : (
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center shadow">
              <Code size={48} className="text-slate-300" />
            </div>
          )}

          {/* Links panel */}
          <div className="card p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Links
            </p>
            <div className="flex flex-col gap-2">
              {repo.github && (
                <a
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                >
                  <GithubIcon size={13} /> View on GitHub
                </a>
              )}
              {!repo.github && (
                <p className="text-sm text-[var(--muted)]">
                  No public repository link.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          {/* Language badge */}
          {repo.language && (
            <span className="inline-flex items-center gap-1.5 w-fit text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {repo.language}
            </span>
          )}

          {/* Name */}
          <h1 className="text-2xl font-bold text-[var(--navy)]">{repo.name}</h1>

          {/* Description */}
          <p className="text-base text-[var(--text)] leading-relaxed">
            {repo.description}
          </p>

          {/* Tags */}
          {repo.tags && repo.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {repo.tags.map((tag) => (
                <TagChip key={tag} label={tag} />
              ))}
            </div>
          )}

          {/* Stars */}
          {typeof repo.stars === "number" && (
            <p className="text-sm text-[var(--muted)]">
              ★ {repo.stars.toLocaleString()} stars
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
