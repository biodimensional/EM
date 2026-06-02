import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { slugify } from "@/lib/utils";
import TagChip from "@/components/TagChip";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--navy)] mb-8 transition-colors"
      >
        <ArrowLeft size={15} /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Media */}
        <div className="flex flex-col gap-6">
          {project.thumbnail ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          ) : (
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center shadow">
              <Layers size={48} className="text-slate-300" />
            </div>
          )}

          {/* Links panel */}
          {project.links && project.links.length > 0 && (
            <div className="card p-4 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Links
              </p>
              <div className="flex flex-col gap-2">
                {project.links.map(
                  (link: { label: string; url: string }, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
                    >
                      <ExternalLink size={13} /> {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          {/* Title */}
          <h1 className="text-2xl font-bold text-[var(--navy)] leading-snug">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="text-base font-medium text-[var(--text)] leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag: string) => (
                <TagChip key={tag} label={tag} />
              ))}
            </div>
          )}

          {/* Long description / explanation */}
          {project.long_description && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                About
              </h2>
              <p className="text-sm text-[var(--text)] leading-relaxed whitespace-pre-line">
                {project.long_description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
