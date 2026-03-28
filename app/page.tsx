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
    context: "Industry analysts project strong global adoption across sales, valuation, and portfolio operations."
  },
  {
    metric: "34.3%",
    label: "Projected CAGR",
    context: "Growth is being driven by automation, data intelligence, and tighter enterprise workflows."
  },
  {
    metric: "+40%",
    label: "Lead Capture Improvement",
    context: "AI-first lead response workflows frequently outperform manual-only intake models."
  },
  {
    metric: "-50%",
    label: "Response Time Reduction",
    context: "Automated follow-up and triage help teams respond in minutes instead of hours."
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
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-900 p-8 text-white shadow-soft sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-accent-400/20 blur-3xl" />
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">
          US Real Estate AI Playbook
        </p>
        <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
          Best AI Tools for Real Estate Agents (2026)
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
          Build an AI stack that combines practical tools with agentic workflows. This guide helps
          US brokerages and teams choose what to implement first, how much to budget, and where to
          expect measurable ROI.
        </p>
        <div className="mt-3 text-sm text-slate-300">
          Last updated: March 2026 | Author: Avery Collins, US Real Estate AI Research Desk
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ai-tools-for-lead-generation"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-3 text-sm font-bold text-white transition hover:from-primary-600 hover:to-primary-700"
          >
            Explore Lead Gen Tools
          </Link>
          <Link
            href="/jasper-vs-copy-ai"
            className="inline-flex items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Compare Jasper vs Copy.ai
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          Global Market Data and Statistics
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The market has moved beyond basic experimentation. Real estate teams are now implementing
          full AI workflows tied to growth, conversion, and operating efficiency.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {marketStats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary-300">
              <p className="font-heading text-3xl font-extrabold text-slate-950">{item.metric}</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">{item.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          The Strategic Shift in 2026
        </h2>
        <p className="mt-3 text-slate-600">
          Winning teams are no longer asking which single AI tool to buy. They are designing systems
          where tools work together around sales, compliance, and operations.
        </p>
        <div className="mt-5 space-y-3">
          {strategicShiftPoints.map((point) => (
            <p key={point} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          Top 10 Agentic AI Solutions for Real Estate
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Use these as initiative themes when planning your roadmap. Each one can be mapped to a
          measurable business outcome.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topAgenticSolutions.map((solution, index) => (
            <article key={solution.title} className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary-300">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                Solution {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">{solution.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{solution.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">Top 10 AI Tools for Realtors</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          If you want immediate implementation wins, these are the practical tools teams deploy first.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">AI Tools Comparison Table</h2>
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

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">Real-World Use Cases</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Lead Response Automation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Broker teams use AI assistants to respond to leads in minutes and route by location or budget.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Listing Content Production</h3>
            <p className="mt-2 text-sm text-slate-600">
              Agents generate MLS drafts, ad variants, and email follow-up copy in one workflow.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">CRM Follow-Up Consistency</h3>
            <p className="mt-2 text-sm text-slate-600">
              AI workflows keep contact records active and trigger reminders before opportunities go cold.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Social Media at Scale</h3>
            <p className="mt-2 text-sm text-slate-600">
              Teams repurpose one property tour into multiple posts, reels, and localized captions.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">Implementation Roadmap</h2>
        <div className="mt-5 space-y-3">
          {implementationRoadmap.map((step, index) => (
            <p key={step} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="mr-2 font-semibold text-slate-900">Step {index + 1}:</span>
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-slate-950">How Much Does It Cost?</h2>
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

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-slate-950">Explore by Use Case</h2>
        <p className="mt-3 text-slate-600">
          Jump into focused guides built around real estate workflows.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-primary-500 hover:bg-primary-50"
            >
              <h3 className="font-heading text-lg font-bold text-slate-900">{page.h1}</h3>
              <p className="mt-2 text-sm text-slate-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <FAQ items={homeFaqs} />
      </section>

      <section className="mt-14">
        <RelatedTools items={linkCards.slice(0, 6)} />
      </section>
    </>
  );
}
