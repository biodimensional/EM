import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  MapPin,
  Building2,
} from "lucide-react";
import EmailLink from "@/components/EmailLink";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Eros Montin PhD — biomedical imaging researcher, software engineer, and cloud platform developer at NYU Langone Health.",
};

const profileLinks = [
  {
    href: "https://github.com/erosmontin",
    label: "GitHub",
    icon: <GithubIcon size={16} />,
  },
  {
    href: "https://scholar.google.com/citations?user=erosmontin",
    label: "Google Scholar",
    icon: <BookOpen size={16} />,
  },
  {
    href: "https://orcid.org/0000-0002-1773-0064",
    label: "ORCID: 0000-0002-1773-0064",
    icon: <span className="text-xs font-bold">iD</span>,
  },
  {
    href: "https://www.linkedin.com/in/eros-montin-46645aab",
    label: "LinkedIn",
    icon: <LinkedinIcon size={16} />,
  },
  {
    href: "https://cai2r.net/about/team/#eros-montin",
    label: "CAI2R Profile",
    icon: <Building2 size={16} />,
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Sidebar */}
        <aside className="md:col-span-1 flex flex-col items-center md:items-start gap-5 md:sticky md:top-24">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-[var(--blue-light)] border border-[var(--border)] shadow">
            <Image
              src="/images/me.png"
              alt="Eros Montin"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[var(--navy)]">
              Eros Montin, PhD
            </h1>
            <p className="text-sm text-[var(--muted)] mt-1 flex items-center gap-1">
              <Building2 size={13} /> NYU Langone Health
            </p>
            <p className="text-sm text-[var(--muted)] flex items-center gap-1">
              <MapPin size={13} /> New York, NY
            </p>
          </div>

          <div className="w-full border-t border-[var(--border)] pt-4 flex flex-col gap-2">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
            <EmailLink
              label="Email me"
              iconSize={16}
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <a
              href="https://erosmontin.s3.us-east-1.amazonaws.com/CV_short.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--navy)] hover:bg-[var(--blue-light)] transition-colors"
            >
              <FileText size={14} /> Short CV
            </a>
            <a
              href="https://erosmontin.s3.us-east-1.amazonaws.com/CV_long.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--navy)] hover:bg-[var(--blue-light)] transition-colors"
            >
              <FileText size={14} /> Full CV
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
              About
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I am a biomedical imaging researcher and software engineer
                working at the intersection of MRI physics, artificial
                intelligence, and cloud computing. My work spans the full stack
                — from the electromagnetic fundamentals of MRI signal generation
                to deployed, production-grade research platforms.
              </p>
              <p>
                At NYU Langone Health&apos;s{" "}
                <a
                  href="https://cai2r.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--blue-accent)] hover:underline"
                >
                  Center for Advanced Imaging Innovation and Research (CAI²R)
                </a>
                , I develop open-source tools and methods that make complex MRI
                research more accessible, reproducible, and clinically relevant.
              </p>
              <p>
                My research has been published in journals including the{" "}
                <em>Journal of Orthopaedic Research</em>,{" "}
                <em>Frontiers in Radiology</em>,{" "}
                <em>Journal of Magnetic Resonance Imaging</em>, and{" "}
                <em>Journal of Clinical Medicine</em>, and presented at ISMRM,
                IEEE, and other international conferences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy)] mb-4">
              Research Interests
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--muted)] text-sm leading-relaxed">
              <li>Radiomics and quantitative imaging biomarkers</li>
              <li>Machine learning for medical image analysis</li>
              <li>MRI simulation and sequence development</li>
              <li>Electromagnetic safety in MRI (SAR analysis)</li>
              <li>Cloud-native scientific software platforms</li>
              <li>Deep learning for segmentation and registration</li>
              <li>Femoroacetabular impingement (FAI) and musculoskeletal MRI</li>
              <li>Multiple sclerosis neuroimaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy)] mb-4">
              Affiliations
            </h2>
            <div className="space-y-3">
              {[
                {
                  org: "NYU Langone Health — CAI²R",
                  role: "Research Scientist",
                  url: "https://cai2r.net",
                },
                {
                  org: "Politecnico di Milano",
                  role: "PhD, Bioengineering",
                  url: "https://www.polimi.it",
                },
              ].map(({ org, role, url }) => (
                <div
                  key={org}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-white"
                >
                  <Building2
                    size={16}
                    className="text-[var(--blue-accent)] mt-0.5 shrink-0"
                  />
                  <div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--navy)] hover:underline text-sm"
                    >
                      {org}
                    </a>
                    <p className="text-xs text-[var(--muted)]">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--blue-accent)] text-white text-sm font-medium hover:bg-[var(--navy-light)] transition-colors"
            >
              View Publications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--navy)] text-sm font-medium hover:bg-[var(--blue-light)] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
