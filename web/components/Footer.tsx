import Link from "next/link";
import { BookOpen, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socialLinks = [
  {
    href: "https://github.com/erosmontin",
    label: "GitHub",
    icon: <GithubIcon size={18} />,
  },
  {
    href: "https://scholar.google.com/citations?user=erosmontin",
    label: "Google Scholar",
    icon: <BookOpen size={18} />,
  },
  {
    href: "https://orcid.org/0000-0002-1773-0064",
    label: "ORCID",
    icon: (
      <span className="text-xs font-bold leading-none">iD</span>
    ),
  },
  {
    href: "https://www.linkedin.com/in/eros-montin-46645aab",
    label: "LinkedIn",
    icon: <LinkedinIcon size={18} />,
  },
  {
    href: "mailto:eros.montin@gmail.com",
    label: "Email",
    icon: <Mail size={18} />,
  },
  {
    href: "https://erosmontin.s3.us-east-1.amazonaws.com/CV_long.pdf",
    label: "CV PDF",
    icon: <FileText size={18} />,
  },
];

const footerLinks = [
  { href: "/publications", label: "Publications" },
  { href: "/software", label: "Software" },
  { href: "/projects", label: "Projects" },
  { href: "/videos", label: "Videos" },
  { href: "/presentations", label: "Presentations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-bold text-xl text-[var(--navy)] tracking-tight"
            >
            Bi<span className="text-[var(--blue-accent)] text-[0.8em] align-super leading-none">(o)</span>Dimensional
            </Link>
            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Complex biomedical imaging, made understandable. Research,
              software, and services by Eros Montin PhD.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Eros Montin — BioDimensional
          </p>
          <p className="text-xs text-[var(--muted)]">
            Built with Next.js · Deployed on AWS Amplify
          </p>
        </div>
      </div>
    </footer>
  );
}
