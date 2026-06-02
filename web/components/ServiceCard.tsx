import { Mail } from "lucide-react";
import type { Service } from "@/lib/types";
import TagChip from "./TagChip";
import {
  Code2,
  BrainCircuit,
  Layers,
  Cloud,
  ScanLine,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  Layers: <Layers size={24} />,
  Cloud: <Cloud size={24} />,
  ScanLine: <ScanLine size={24} />,
  FileText: <FileText size={24} />,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service: s }: ServiceCardProps) {
  return (
    <article className="card p-6 flex flex-col gap-4 h-full">
      <div className="w-11 h-11 rounded-xl bg-[var(--blue-light)] flex items-center justify-center text-[var(--blue-accent)]">
        {iconMap[s.icon] ?? <Code2 size={24} />}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-[var(--navy)] text-base leading-snug mb-2">
          {s.title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          {s.description}
        </p>
      </div>

      {s.tags && s.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {s.tags.slice(0, 4).map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      )}

      <a
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue-accent)] hover:underline"
      >
        <Mail size={14} /> {s.call_to_action}
      </a>
    </article>
  );
}
