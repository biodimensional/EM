import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import TagChip from "@/components/TagChip";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects by Eros Montin — MRI simulation, FAI radiomics, SAR safety, and cloud-native biomedical platforms.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">Research Projects</h1>
        <p className="section-subtitle">
          End-to-end research initiatives spanning imaging physics, AI, and
          cloud software.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>

      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--navy)] mb-5">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-[var(--navy)] mb-5">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
