import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FlaskConical, Layers, Cloud, GitBranch, Brain } from "lucide-react";
import {
  getPublications,
  getRepos,
  getFeaturedContent,
} from "@/lib/content";
import PublicationCard from "@/components/PublicationCard";
import RepoCard from "@/components/RepoCard";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import GlobalSearch from "@/components/GlobalSearch";

const researchAreas = [
  {
    icon: <Brain size={22} />,
    title: "Radiomics & AI",
    description:
      "Quantitative image feature extraction and machine learning for precision diagnostics.",
    href: "/work?q=radiomics",
  },
  {
    icon: <Layers size={22} />,
    title: "MRI Simulation",
    description:
      "End-to-end open-source pipelines simulating the full MRI experiment in the cloud.",
    href: "/work?q=simulation",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Image Registration",
    description:
      "Patient-specific body model registration for SAR and safety simulation.",
    href: "/work?q=registration",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud Software",
    description:
      "Serverless, scalable research platforms on AWS for reproducible science.",
    href: "/work?q=cloud",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Open Source",
    description:
      "Modular, documented tools freely available for the research community.",
    href: "/software",
  },
];

export default function HomePage() {
  const allPublications = getPublications();
  const latestPubs = [...allPublications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  const allRepos = getRepos();
  const featuredRepos = allRepos.filter((r) => r.featured).slice(0, 4);

  const featuredContent = getFeaturedContent();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f5ff] to-[#e8f0fe] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--blue-light)] text-[var(--blue-accent)] text-xs font-semibold tracking-wide uppercase">
                Biomedical Imaging Research
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] leading-tight tracking-tight">
                Building tools and insights{" "}
                <span className="text-[var(--blue-accent)]">across dimensions</span>{" "}
                of biomedical imaging.
              </h1>
              <p className="text-lg text-[var(--muted)] leading-relaxed max-w-lg">
                I develop AI-powered, cloud-native software and imaging methodologies
                that translate complex biomedical data into meaningful clinical and
                scientific impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--blue-accent)] text-white font-medium hover:bg-[var(--navy-light)] transition-colors"
                >
                  Explore My Work <ArrowRight size={16} />
                </Link>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--navy)] font-medium hover:bg-white transition-colors"
                >
                  View Publications
                </Link>
              </div>
            </div>

            {/* Hero visual: profile photo + MRI motif */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-[380px] h-[340px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] border border-[#bfdbfe]" />
                {[280, 220, 160, 100, 52].map((size, i) => (
                  <div
                    key={size}
                    className="absolute rounded-full border border-[#93c5fd]"
                    style={{
                      width: size,
                      height: size,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0.15 + i * 0.12,
                    }}
                  />
                ))}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={`h${i}`}
                    className="absolute left-8 right-8 border-t border-[#bfdbfe] opacity-25"
                    style={{ top: `${15 + i * 14}%` }}
                  />
                ))}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`v${i}`}
                    className="absolute top-8 bottom-8 border-l border-[#bfdbfe] opacity-25"
                    style={{ left: `${18 + i * 16}%` }}
                  />
                ))}
                {/* Profile photo centred over the MRI motif */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/images/me.png"
                      alt="Eros Montin"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Search ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-[var(--border)] p-6">
          <p className="text-sm font-medium text-[var(--muted)] mb-3">
            Search publications, software, projects, videos, and more
          </p>
          <GlobalSearch navigateToWork placeholder="e.g. radiomics, MRI simulation, FAI…" />
        </div>
      </section>

      {/* ── Research Areas ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="section-title">Research Areas</h2>
          <p className="section-subtitle">
            Connecting imaging physics, AI, and cloud computing for biomedical impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {researchAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="card p-5 flex flex-col gap-3 hover:border-[var(--blue-accent)] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--blue-light)] flex items-center justify-center text-[var(--blue-accent)] group-hover:bg-[var(--blue-accent)] group-hover:text-white transition-colors">
                {area.icon}
              </div>
              <h3 className="font-semibold text-[var(--navy)] text-sm">{area.title}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed flex-1">{area.description}</p>
              <span className="text-xs font-medium text-[var(--blue-accent)] group-hover:underline">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Work Carousel ── */}
      {featuredContent.length > 0 && (
        <section className="bg-white border-y border-[var(--border)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedCarousel title="Featured Work">
              {featuredContent.map((item, i) => {
                if (item._type === "publication") {
                  return <PublicationCard key={i} publication={item} compact />;
                }
                if (item._type === "repo") {
                  return <RepoCard key={i} repo={item} />;
                }
                return null;
              })}
            </FeaturedCarousel>
          </div>
        </section>
      )}

      {/* ── Latest Publications ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">Latest Publications</h2>
            <p className="section-subtitle">
              Recent peer-reviewed work and conference contributions.
            </p>
          </div>
          <Link
            href="/publications"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
          >
            All publications <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestPubs.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
          >
            All publications <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Software / Repos ── */}
      <section className="bg-white border-y border-[var(--border)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Software &amp; Tools</h2>
              <p className="section-subtitle">
                Open-source research software for the biomedical imaging community.
              </p>
            </div>
            <Link
              href="/software"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue-accent)] hover:underline"
            >
              All software <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            I help research teams translate complex biomedical imaging ideas into
            usable software, reproducible pipelines, and interpretable scientific outputs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--navy)] font-medium hover:bg-blue-50 transition-colors"
            >
              View Services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

