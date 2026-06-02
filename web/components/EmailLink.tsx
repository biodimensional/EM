"use client";

import { Mail } from "lucide-react";

const key = 23;
const encodedAddress = [
  114, 101, 120, 100, 57, 122, 120, 121, 99, 126, 121, 87, 112, 122, 118,
  126, 123, 57, 116, 120, 122,
];

type EmailLinkProps = {
  label?: string;
  description?: string;
  subject?: string;
  iconSize?: number;
  className?: string;
  variant?: "inline" | "card";
};

function getAddress() {
  return String.fromCharCode(...encodedAddress.map((code) => code ^ key));
}

export default function EmailLink({
  label = "Email",
  description,
  subject = "Hello",
  iconSize = 16,
  className = "",
  variant = "inline",
}: EmailLinkProps) {
  const openEmail = () => {
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    window.location.href = `mailto:${getAddress()}${query}`;
  };

  if (variant === "card") {
    return (
      <button
        type="button"
        onClick={openEmail}
        className={`card p-5 flex items-start gap-4 hover:shadow-md transition-shadow group text-left cursor-pointer ${className}`}
      >
        <span className="w-10 h-10 rounded-xl bg-[var(--blue-light)] flex items-center justify-center text-[var(--blue-accent)] shrink-0 group-hover:bg-[var(--blue-accent)] group-hover:text-white transition-colors">
          <Mail size={20} />
        </span>
        <span>
          <span className="block font-semibold text-[var(--navy)] text-sm">
            {label}
          </span>
          {description ? (
            <span className="block text-xs text-[var(--muted)] mt-0.5">
              {description}
            </span>
          ) : null}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openEmail}
      className={`inline-flex items-center gap-2 text-left cursor-pointer ${className}`}
    >
      <Mail size={iconSize} />
      {label}
    </button>
  );
}
