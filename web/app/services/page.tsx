import type { Metadata } from "next";
import { getServices } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Scientific software prototyping, AI/radiomics workflows, MRI simulation, and cloud-native research platform development by Eros Montin.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle mt-3">
          I help research teams translate complex biomedical imaging ideas into
          usable software, reproducible pipelines, and interpretable scientific
          outputs.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
          With deep expertise in MRI physics, radiomics, cloud infrastructure,
          and software engineering, I bring a rare combination of scientific
          rigor and technical execution to every collaboration.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Process */}
      <section className="bg-white border border-[var(--border)] rounded-2xl p-8 md:p-12 mb-14">
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
          How I Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Understand",
              body: "I start with your scientific question or engineering challenge — not a template. We define goals, constraints, and success criteria together.",
            },
            {
              step: "02",
              title: "Build",
              body: "Iterative prototyping with clear milestones. Modular, documented code you can extend. Reproducible workflows you can publish.",
            },
            {
              step: "03",
              title: "Deliver",
              body: "Working software, deployment-ready pipelines, and clear handover documentation so your team can maintain and build on what we create.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex flex-col gap-3">
              <span className="text-3xl font-bold text-[var(--blue-light)] text-[var(--blue-accent)] opacity-50">
                {step}
              </span>
              <h3 className="font-semibold text-[var(--navy)]">{title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">
          Ready to start?
        </h2>
        <p className="text-[var(--muted)] mb-6 max-w-lg mx-auto">
          Get in touch to discuss your project. I&apos;m open to research
          collaborations, consulting engagements, and advisory roles.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--blue-accent)] text-white font-medium hover:bg-[var(--navy-light)] transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
