interface TagChipProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  size?: "sm" | "md";
}

export default function TagChip({
  label,
  onClick,
  active = false,
  size = "sm",
}: TagChipProps) {
  const base =
    "inline-flex items-center rounded-full font-medium transition-colors whitespace-nowrap cursor-default";
  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm",
  };
  const colors = active
    ? "bg-[var(--blue-accent)] text-white"
    : "bg-[var(--blue-light)] text-[var(--blue-accent)] hover:bg-blue-200";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${sizes[size]} ${colors} cursor-pointer`}
      >
        {label}
      </button>
    );
  }

  return (
    <span className={`${base} ${sizes[size]} ${colors}`}>{label}</span>
  );
}
