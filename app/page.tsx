import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import RelatedTools from "@/components/RelatedTools";
import SeoHead from "@/components/SeoHead";
import ToolCard from "@/components/ToolCard";
import { categoryPages, comparisonPages, homeFaqs } from "@/data/pages";
import { allPages, getTopTools } from "@/lib/content";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildToolListSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "10 Best AI Tools for Real Estate Agents in the US (2026)",
  description:
    "Compare the best AI tools for real estate agents in the US. See top software for lead generation, CRM automation, marketing, and property listings.",
  path: "/",
  keywords: [
    "AI tools for real estate agents",
    "best AI tools for realtors",
    "AI for property listings",
    "agentic AI solutions for real estate"
  ]
});

const categoryLabelMap: Record<string, string> = {
  "general-ai-assistant": "Daily assistant and productivity",
  "property-description": "Listing descriptions and copy",
  "social-media": "Social media and video content",
  "lead-generation": "Lead capture and nurturing",
  "real-estate-marketing": "Campaigns and outbound marketing",
  "cold-calling": "Calling and conversation intelligence"
};

const marketStats = [
  {
    metric: "$404.9B",
    label: "Estimated AI in Real Estate Market (2026)",
    context: "Industry analysts project strong global adoption across sales, valuation, and portfolio operations.",
    icon: (
      <svg className="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    )
  },
  {
    metric: "34.3%",
    label: "Projected CAGR",
    context: "Growth is being driven by automation, data intelligence, and tighter enterprise workflows.",
    icon: (
      <svg className="h-8 w-8 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    )
  },
  {
    metric: "+40%",
    label: "Lead Capture Improvement",
    context: "AI-first lead response workflows frequently outperform manual-only intake models.",
    icon: (
      <svg className="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
      </svg>
    )
  },
  {
    metric: "-50%",
    label: "Response Time Reduction",
    context: "Automated follow-up and triage help teams respond in minutes instead of hours.",
    icon: (
      <svg className="h-8 w-8 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

const strategicShiftPoints = [
  "Data sovereignty is now a board-level concern for brokerages and developers with large proprietary datasets.",
  "Compliance logic is increasingly embedded into AI workflows to reduce legal risk before listing or contract release.",
  "Custom orchestration layers are replacing single-point chatbot tools for multi-step, high-value property workflows."
];

const topAgenticSolutions = [
  {
    title: "Autonomous Lead Lifecycle Workflows",
    summary: "Agents qualify, route, and nurture incoming leads with minimal manual handoffs."
  },
  {
    title: "Digital Twins and 3D Spatial Journeys",
    summary: "Immersive property experiences improve confidence for remote and off-plan buyers."
  },
  {
    title: "Predictive Valuation Intelligence",
    summary: "Custom valuation models combine market, visual, and behavioral signals for faster pricing decisions."
  },
  {
    title: "Live Generative Virtual Staging",
    summary: "Buyers preview multiple design styles on demand, reducing decision friction."
  },
  {
    title: "Automated Compliance Layers",
    summary: "Listings and documents are screened against regional policy guardrails before publication."
  },
  {
    title: "Prescriptive Asset Management",
    summary: "AI forecasts occupancy and operating shifts to protect NOI and portfolio health."
  },
  {
    title: "Vision AI Portfolio Inspection",
    summary: "Computer vision flags maintenance, structural, and thermal issues earlier."
  },
  {
    title: "Hyper-Local Sentiment Tracking",
    summary: "Neighborhood-level trend detection helps teams move before market shifts are obvious."
  },
  {
    title: "AI-Powered ESG Reporting",
    summary: "Sustainability metrics and optimization suggestions become part of ongoing asset strategy."
  },
  {
    title: "Private LLM Deployments",
    summary: "Enterprises host models privately to protect sensitive client and deal intelligence."
  }
];

const implementationRoadmap = [
  "Audit workflows to identify where speed-to-lead, compliance, or conversion breaks down.",
  "Prioritize one revenue-linked use case first (for example lead intake or listing content pipeline).",
  "Roll out with human-in-the-loop approval for contracts, pricing, and high-risk communication.",
  "Measure weekly: response time, appointment rate, and closed-won velocity."
];

const investmentRows = [
  ["Startup / MVP", "$25k-$50k", "Basic chatbot, recommendations, single-region rollout"],
  ["Mid-Market System", "$50k-$100k", "CRM/MLS integrations, predictive analytics, multi-agent workflows"],
  ["Enterprise Build", "$100k-$200k+", "Custom valuation engines, compliance modules, private cloud deployment"]
];

const SectionAccent = () => (
  <span className="mr-2 inline-block h-6 w-1 translate-y-0.5 rounded-full bg-gradient-to-b from-primary-500 to-accent-500 align-middle" aria-hidden="true" />
);

export default function HomePage() {
  const topTools = getTopTools(10);
  const comparisonRows = topTools.map((tool) => [
    tool.name,
    tool.bestFor ?? "Real estate operations",
    tool.pricing,
    tool.keyFeatures?.[0] ?? categoryLabelMap[tool.category] ?? "General real estate AI support"
  ]);

  const linkCards = [...categoryPages, ...comparisonPages].map((page) => ({
    slug: page.slug,
    title: page.h1,
    description: page.description
  }));

  const schemas: Record<string, unknown>[] = [
    buildFaqSchema(homeFaqs),
    buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
    buildToolListSchema("Top AI Tools for Real Estate Agents", topTools, "/")
  ];

  return (
    <>
      <SeoHead schemas={schemas} />

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="animate-fade-in-up relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-900 p-8 text-white shadow-soft sm:p-12">
        {/* Animated Orbs */}
        <div className="animate-pulse-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="animate-float pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="animate-float pointer-events-none absolute right-1/3 top-1/2 h-32 w-32 rounded-full bg-primary-300/10 blur-2xl" style={{ animationDelay: "3s" }} />

        <p className="relative mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100 backdrop-blur-sm">
          US Real Estate AI Playbook
        </p>
        <h1 className="relative font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
          Best AI Tools for Real Estate Agents{" "}
          <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">(2026)</span>
        </h1>
        <p className="relative mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
          Build an AI stack that combines practical tools with agentic workflows. This guide helps
          US brokerages and teams choose what to implement first, how much to budget, and where to
          expect measurable ROI.
        </p>
        <div className="relative mt-3 text-sm text-slate-300">
          Last updated: March 2026 | Author: Avery Collins, US Real Estate AI Research Desk
        </div>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <Link
            href="/ai-tools-for-lead-generation"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-primary-600 hover:to-primary-700 hover:shadow-glow-lg"
          >
            Explore Lead Gen Tools
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/jasper-vs-copy-ai"
            className="inline-flex items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Compare Jasper vs Copy.ai
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Market Stats ─────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Global Market Data and Statistics
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The market has moved beyond basic experimentation. Real estate teams are now implementing
          full AI workflows tied to growth, conversion, and operating efficiency.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {marketStats.map((item, index) => (
            <article
              key={item.label}
              className={`animate-fade-in-up card-glow rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-soft transition hover:-translate-y-0.5 stagger-${index + 1}`}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">{item.icon}</div>
              <p className="font-heading text-4xl font-extrabold tracking-tight text-slate-950">{item.metric}</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">{item.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.context}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Strategic Shift ──────────────────────────── */}
      <section className="mt-14 rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          The Strategic Shift in 2026
        </h2>
        <p className="mt-3 text-slate-600">
          Winning teams are no longer asking which single AI tool to buy. They are designing systems
          where tools work together around sales, compliance, and operations.
        </p>
        <div className="mt-5 space-y-3">
          {strategicShiftPoints.map((point, index) => (
            <div key={point} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 transition-colors hover:bg-slate-100">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-[10px] font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Agentic Solutions ────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Top 10 Agentic AI Solutions for Real Estate
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Use these as initiative themes when planning your roadmap. Each one can be mapped to a
          measurable business outcome.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topAgenticSolutions.map((solution, index) => (
            <article
              key={solution.title}
              className="card-glow rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                  Solution
                </p>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-950">{solution.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{solution.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Top Tools ────────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Top 10 AI Tools for Realtors
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          If you want immediate implementation wins, these are the practical tools teams deploy first.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          AI Tools Comparison Table
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Use this snapshot to shortlist tools by pricing model and strongest use case.
        </p>
        <div className="mt-6">
          <ComparisonTable
            headers={["Tool", "Best For", "Pricing", "Key Feature"]}
            rows={comparisonRows}
            caption="AI tools for real estate agents: side-by-side comparison"
          />
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────── */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Real-World Use Cases
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Lead Response Automation", desc: "Broker teams use AI assistants to respond to leads in minutes and route by location or budget." },
            { title: "Listing Content Production", desc: "Agents generate MLS drafts, ad variants, and email follow-up copy in one workflow." },
            { title: "CRM Follow-Up Consistency", desc: "AI workflows keep contact records active and trigger reminders before opportunities go cold." },
            { title: "Social Media at Scale", desc: "Teams repurpose one property tour into multiple posts, reels, and localized captions." }
          ].map((uc) => (
            <article key={uc.title} className="rounded-xl border border-slate-200 p-4 transition hover:border-primary-200 hover:bg-primary-50/30">
              <h3 className="font-semibold text-slate-900">{uc.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{uc.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Implementation Roadmap ────────────────────── */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Implementation Roadmap
        </h2>
        <div className="mt-5 space-y-3">
          {implementationRoadmap.map((step, index) => (
            <div key={step} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cost Table ───────────────────────────────── */}
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          How Much Does It Cost?
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Estimated 2026 ranges for real estate AI implementation. Actual pricing depends on
          integrations, data quality, and security requirements.
        </p>
        <div className="mt-6">
          <ComparisonTable
            headers={["Tier", "Estimated Investment", "Typical Scope"]}
            rows={investmentRows}
            caption="Estimated AI implementation cost bands"
          />
        </div>
      </section>

      {/* ── Explore by Use Case ──────────────────────── */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          <SectionAccent />
          Explore by Use Case
        </h2>
        <p className="mt-3 text-slate-600">
          Jump into focused guides built around real estate workflows.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-primary-400 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-base font-bold text-slate-900 transition group-hover:text-primary-700">{page.h1}</h3>
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="mt-2 text-sm text-slate-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="mt-14">
        <FAQ items={homeFaqs} />
      </section>

      {/* ── Related Tools ────────────────────────────── */}
      <section className="mt-14">
        <RelatedTools items={linkCards.slice(0, 6)} />
      </section>

      {/* ── Final CTA Banner ─────────────────────────── */}
      <section className="relative mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-primary-900 to-slate-950 p-8 text-center sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent-400/15 blur-3xl" />
        <h2 className="relative font-heading text-2xl font-bold text-white sm:text-3xl">
          Ready to Build Your AI Stack?
        </h2>
        <p className="relative mx-auto mt-3 max-w-xl text-sm text-slate-300">
          Start with one high-impact use case, measure results in 30 days, and expand from there.
        </p>
        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/ai-tools-for-lead-generation"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-bold text-white transition hover:from-primary-600 hover:to-primary-700 hover:shadow-glow-lg"
          >
            Get Started →
          </Link>
          <Link
            href="/ai-tools-for-crm"
            className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Compare CRM Tools
          </Link>
        </div>
      </section>
    </>
  );
}
