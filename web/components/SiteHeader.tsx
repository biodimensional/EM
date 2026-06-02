"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/publications", label: "Publications" },
  { href: "/software", label: "Software" },
  { href: "/projects", label: "Projects" },
  { href: "/videos", label: "Videos" },
  { href: "/presentations", label: "Presentations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[var(--navy)] tracking-tight hover:opacity-80 transition-opacity"
          >
            <span>Bi</span><span className="text-[var(--blue-accent)] text-[0.8em] align-super leading-none">(o)</span><span>Dimensional</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/work"
              aria-label="Search all content"
              className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
            >
              <Search size={16} />
              <span className="hidden md:inline">Search</span>
            </Link>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--blue-accent)] text-white text-sm font-medium hover:bg-[var(--navy-light)] transition-colors"
            >
              Contact
            </Link>
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-[var(--muted)] hover:text-[var(--navy)] hover:bg-[var(--blue-light)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-[var(--navy)] hover:bg-[var(--blue-light)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[var(--border)] flex flex-col gap-2">
              <Link
                href="/work"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:bg-[var(--blue-light)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Search size={15} /> Search all content
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-[var(--blue-accent)] text-white text-sm font-medium text-center hover:bg-[var(--navy-light)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
