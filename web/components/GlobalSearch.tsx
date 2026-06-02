"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface GlobalSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  navigateToWork?: boolean;
}

export default function GlobalSearch({
  placeholder = "Search publications, software, projects…",
  onSearch,
  navigateToWork = false,
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (navigateToWork) {
      router.push(`/work?q=${encodeURIComponent(query.trim())}`);
    } else if (onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="relative w-full max-w-xl"
    >
      <label htmlFor="global-search" className="sr-only">
        Search all content
      </label>
      <div className="relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
        />
        <input
          ref={inputRef}
          id="global-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-accent)] focus:border-transparent text-sm shadow-sm"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              if (onSearch) onSearch("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </form>
  );
}
