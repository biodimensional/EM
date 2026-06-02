"use client";

import { useState, useMemo } from "react";
import type { Publication } from "@/lib/types";
import PublicationCard from "@/components/PublicationCard";
import GlobalSearch from "@/components/GlobalSearch";
import FilterPanel from "@/components/FilterPanel";
import TagChip from "@/components/TagChip";

interface PublicationsClientProps {
  publications: Publication[];
  allTags: string[];
  allYears: string[];
  allTypes: string[];
}

export default function PublicationsClient({
  publications,
  allTags,
  allYears,
  allTypes,
}: PublicationsClientProps) {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

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
      const matchesType = !typeFilter || p.type === typeFilter;
      const matchesTag = !tagFilter || p.tags.includes(tagFilter);
      return matchesQuery && matchesYear && matchesType && matchesTag;
    });
  }, [publications, query, yearFilter, typeFilter, tagFilter]);

  const sortedFiltered = [...filtered].sort((a, b) => b.year - a.year);

  return (
    <div>
      {/* Featured */}
      {featured.length > 0 && !query && !yearFilter && !typeFilter && !tagFilter && (
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
          placeholder="Search by title, author, journal, tag…"
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
            {
              label: "Type",
              key: "type",
              options: allTypes,
              value: typeFilter,
              onChange: setTypeFilter,
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
