"use client";

import { useState, useMemo } from "react";
import type { Publication } from "@/lib/types";
import PublicationCard from "@/components/PublicationCard";
import GlobalSearch from "@/components/GlobalSearch";
import FilterPanel from "@/components/FilterPanel";
import TagChip from "@/components/TagChip";

type Tab = "all" | "articles" | "conferences";

interface PublicationsClientProps {
  publications: Publication[];
  allTags: string[];
  allYears: string[];
}

export default function PublicationsClient({
  publications,
  allTags,
  allYears,
}: PublicationsClientProps) {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const featured = publications.filter((p) => p.featured);

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        (p.summary && p.summary.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesYear = !yearFilter || String(p.year) === yearFilter;
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "conferences"
          ? p.type === "conference"
          : p.type !== "conference");
      const matchesTag = !tagFilter || p.tags.includes(tagFilter);
      return matchesQuery && matchesYear && matchesTab && matchesTag;
    });
  }, [publications, query, yearFilter, activeTab, tagFilter]);

  const sortedFiltered = [...filtered].sort((a, b) => b.year - a.year);

  const TABS: { key: Tab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "articles", label: "Articles" },
    { key: "conferences", label: "Conferences" },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--border)] mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.key
                ? "border-[var(--blue-accent)] text-[var(--blue-accent)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--navy)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && !query && !yearFilter && !tagFilter && activeTab === "all" && (
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--navy)] mb-5">
            Featured Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.slice(0, 3).map((p) => (
              <PublicationCard key={p.id} publication={p} />
            ))}
          </div>
        </section>
      )}

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <GlobalSearch
          placeholder="Search by title, author, journal, tagâ€¦"
          onSearch={setQuery}
        />
        <FilterPanel
          filters={[
            {
              label: "Year",
              key: "year",
              options: allYears,
              value: yearFilter,
              onChange: setYearFilter,
            },
          ]}
        />
        {/* Topic chips */}
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 15).map((tag) => (
            <TagChip
              key={tag}
              label={tag}
              active={tagFilter === tag}
              onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
            />
          ))}
          {tagFilter && !allTags.slice(0, 15).includes(tagFilter) && (
            <TagChip label={tagFilter} active onClick={() => setTagFilter("")} />
          )}
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-[var(--muted)] mb-4">
        {sortedFiltered.length} publication{sortedFiltered.length !== 1 ? "s" : ""}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedFiltered.map((p) => (
          <PublicationCard key={p.id} publication={p} />
        ))}
      </div>
      {sortedFiltered.length === 0 && (
        <div className="text-center py-16 text-[var(--muted)]">
          No publications match your filters.
        </div>
      )}
    </div>
  );
}
