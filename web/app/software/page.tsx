import type { Metadata } from "next";
import { getRepos } from "@/lib/content";
import RepoCard from "@/components/RepoCard";
import TagChip from "@/components/TagChip";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Open-source research software and tools by Eros Montin — cloud MRI simulation, radiomics pipelines, deep learning segmentation, and more.",
};

export default function SoftwarePage() {
  const repos = getRepos();
  const featured = repos.filter((r) => r.featured);
  const rest = repos.filter((r) => !r.featured);
  const allTags = [...new Set(repos.flatMap((r) => r.tags))].sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="section-title">Software &amp; Tools</h1>
        <p className="section-subtitle">
          Open-source research software for MRI simulation, radiomics,
          deep learning, and cloud-native biomedical platforms.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--navy)] mb-5">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* All */}
      {rest.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-[var(--navy)] mb-5">
            More Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* GitHub CTA */}
      <div className="mt-14 text-center">
        <p className="text-[var(--muted)] mb-4">
          More repositories and contributions on GitHub
        </p>
        <a
          href="https://github.com/erosmontin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--navy)] text-white font-medium hover:bg-[var(--navy-light)] transition-colors"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}
