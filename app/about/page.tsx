import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, experience, and focus areas for Amir Karimi — senior backend and infrastructure engineer building AI-powered systems.",
  alternates: {
    canonical: "/about",
  },
};

const experience = [
  {
    company: "Mercor",
    role: "Senior Backend / Platform Engineer (contract)",
    period: "2026 — Present",
    detail:
      "Building infrastructure for a U.S. AI lab (via Mercor). Work is under NDA, focused on productionising agentic and LLM-driven systems at scale.",
  },
  {
    company: "Fitex (Coplanet)",
    role: "Senior Backend & AI Engineer — System Architect",
    period: "2025 — 2026",
    detail:
      "Redesigned the platform into an agentic architecture, wired Kafka-based coordination, and integrated 8+ MCP servers to hit key OKRs for enterprise AI assistants.",
  },
  {
    company: "Divar / Raqi",
    role: "Senior Software Engineer → Team Lead",
    period: "2022 — 2025",
    detail:
      "Led backend teams for regional marketplaces serving 50M+ users. Delivered 99.4% uptime, automated ad review with multi-agent workflows, and scaled infrastructure with observability-first tooling.",
  },
];

const focuses = [
  "Designing resilient distributed systems and microservices",
  "Shipping AI/ML integrations that improve reliability and revenue",
  "Modernising infrastructure on AWS with Pulumi, Kubernetes, and strong observability",
  "Building teams, hiring processes, and developer platforms that compound velocity",
];

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          About
        </p>
        <h1 className="title text-3xl md:text-4xl font-semibold tracking-tight">
          Amir Karimi
        </h1>
        <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">
          Senior backend and infrastructure engineer based in Dubai and open to relocation. I have 8+ years of experience operating high-scale platforms, integrating AI systems, and leading teams that favour pragmatic engineering over hype. I enjoy taking products from prototypes to resilient services with crisp APIs, clear ownership, and observable behaviour.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Focus areas</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
          {focuses.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Recent work</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <article key={job.company} className="space-y-1">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 md:w-40">
                  {job.period}
                </p>
                <div>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.company}</p>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed md:pl-40">
                {job.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Elsewhere</h2>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          You can reach me at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>, follow along on <a className="underline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>, or browse the work I’ve shared on <a className="underline" href={site.github} target="_blank" rel="noreferrer">GitHub</a>.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Curious about the writing? Start with the latest on the <Link className="underline" href="/blog">blog</Link> or subscribe via <Link className="underline" href="/rss.xml">RSS</Link>.
        </p>
      </section>
    </section>
  );
}
