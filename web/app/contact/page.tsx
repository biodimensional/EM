import type { Metadata } from "next";
import { BookOpen, FileText } from "lucide-react";
import EmailLink from "@/components/EmailLink";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eros Montin — research collaborations, consulting, and scientific project inquiries.",
};

const links = [
  {
    href: "https://www.linkedin.com/in/eros-montin-46645aab",
    label: "LinkedIn",
    description: "Professional network",
    icon: <LinkedinIcon size={20} />,
  },
  {
    href: "https://github.com/erosmontin",
    label: "GitHub",
    description: "Open-source code and repositories",
    icon: <GithubIcon size={20} />,
  },
  {
    href: "https://scholar.google.com/citations?user=erosmontin",
    label: "Google Scholar",
    description: "Publication list and citations",
    icon: <BookOpen size={20} />,
  },
  {
    href: "https://erosmontin.s3.us-east-1.amazonaws.com/CV_long.pdf",
    label: "Download Full CV",
    description: "PDF curriculum vitae",
    icon: <FileText size={20} />,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-12">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle mt-3">
          I&apos;m open to research collaborations, consulting engagements,
          advisory roles, and speaking invitations. The best way to reach me is
          by email.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        <EmailLink
          variant="card"
          label="Email me"
          description="Best for project discussions"
        />
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--blue-light)] flex items-center justify-center text-[var(--blue-accent)] shrink-0 group-hover:bg-[var(--blue-accent)] group-hover:text-white transition-colors">
              {link.icon}
            </div>
            <div>
              <p className="font-semibold text-[var(--navy)] text-sm">
                {link.label}
              </p>
              <p className="text-xs text-[var(--muted)] mt-0.5">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-[var(--blue-light)] rounded-2xl p-8 text-center">
        <p className="text-[var(--navy)] font-medium mb-1">
          Based in New York, NY
        </p>
        <p className="text-sm text-[var(--muted)]">
          Available for remote collaborations worldwide.
        </p>
      </div>
    </div>
  );
}
