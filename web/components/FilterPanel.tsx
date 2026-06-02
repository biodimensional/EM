interface FilterPanelProps {
  filters: {
    label: string;
    key: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }[];
}

export default function FilterPanel({ filters }: FilterPanelProps) {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      {filters.map((filter) => (
        <div key={filter.key} className="flex flex-col gap-1">
          <label
            htmlFor={`filter-${filter.key}`}
            className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wide"
          >
            {filter.label}
          </label>
          <select
            id={`filter-${filter.key}`}
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            className="text-sm border border-[var(--border)] rounded-lg px-3 py-1.5 bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-accent)] cursor-pointer"
          >
            <option value="">All {filter.label}s</option>
            {filter.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
