import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import PageTrust from "@/components/PageTrust";
import RelatedTools from "@/components/RelatedTools";
import SeoHead from "@/components/SeoHead";
import ToolCard from "@/components/ToolCard";
import { allPages, getPageBySlug, getRelatedPages, getToolByName, getToolsByNames } from "@/lib/content";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildToolListSchema } from "@/lib/seo";
import type { ComparisonPage } from "@/lib/types";

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getPageBySlug(params.slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.keywords
  });
}

const renderComparisonContent = (page: ComparisonPage) => {
  const leftTool = getToolByName(page.leftTool);
  const rightTool = getToolByName(page.rightTool);

  if (!leftTool || !rightTool) {
    notFound();
  }

  const directRows = page.comparisonRows.map((row) => [
    row.feature,
    row.left,
    row.right,
    row.winner === "tie" ? "Tie" : row.winner === "left" ? page.leftTool : page.rightTool
  ]);

  const alternatives = getToolsByNames(page.alternativeToolNames);
  const alternativesRows = alternatives.map((tool) => [
    tool.name,
    tool.bestFor ?? "Real estate operations",
    tool.pricing,
    tool.keyFeatures?.[0] ?? "AI-assisted workflow"
  ]);

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-slate-950">Feature Comparison</h2>
        <p className="mt-2 text-slate-600">
          Compare strengths by the tasks that matter most to US real estate teams.
        </p>
        <div className="mt-5">
          <ComparisonTable
            headers={["Feature", page.leftTool, page.rightTool, "Winner"]}
            rows={directRows}
            caption={`${page.leftTool} vs ${page.rightTool}`}
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-slate-950">Top Tools in This Category</h2>
        <p className="mt-2 text-slate-600">
          If you want alternatives beyond this head-to-head, these tools are the most relevant next options.
        </p>
        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {alternatives.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-slate-950">
          Tool Comparison Table for Real Estate Teams
        </h2>
        <div className="mt-4">
          <ComparisonTable
            headers={["Tool", "Best For", "Pricing", "Key Feature"]}
            rows={alternativesRows}
            caption="Tool | Best for | Pricing | Key feature"
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-slate-950">Real-World Use Cases</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {page.useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-primary-200 hover:bg-primary-50/30">
              <h3 className="font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="card-glow rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">{page.leftTool} Pros & Cons</h2>
          <h3 className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pros
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {page.leftPros.map((pro) => (
              <li key={pro} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {pro}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-600">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Cons
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {page.leftCons.map((con) => (
              <li key={con} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {con}
              </li>
            ))}
          </ul>
          <a
            href={leftTool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-primary-700 hover:to-primary-800 hover:shadow-glow"
          >
            Try {page.leftTool} →
          </a>
        </article>

        <article className="card-glow rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">{page.rightTool} Pros & Cons</h2>
          <h3 className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pros
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {page.rightPros.map((pro) => (
              <li key={pro} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {pro}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-600">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Cons
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {page.rightCons.map((con) => (
              <li key={con} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {con}
              </li>
            ))}
          </ul>
          <a
            href={rightTool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-primary-700 hover:to-primary-800 hover:shadow-glow"
          >
            Try {page.rightTool} →
          </a>
        </article>
      </section>

      <section className="mt-10 overflow-hidden rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-accent-50 p-6">
        <h2 className="font-heading text-2xl font-bold text-slate-950">Final Verdict</h2>
        <p className="mt-2 text-slate-700">{page.verdict}</p>
      </section>
    </>
  );
};

export default function DynamicSeoPage({ params }: PageProps) {
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getRelatedPages(page.relatedSlugs);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: page.pageType === "comparison" ? "Comparisons" : "Guides", path: "/" },
    { name: page.h1, path: `/${page.slug}` }
  ];

  const schemaBlocks: Record<string, unknown>[] = [
    buildFaqSchema(page.faqs),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.h1, path: `/${page.slug}` }
    ])
  ];

  if (page.pageType === "category") {
    const tools = getToolsByNames(page.toolNames);
    const rows = tools.map((tool) => [
      tool.name,
      tool.bestFor ?? "Real estate operations",
      tool.pricing,
      page.tableHighlights[tool.name] ?? tool.keyFeatures?.[0] ?? "AI-assisted workflow"
    ]);

    schemaBlocks.push(buildToolListSchema(page.h1, tools, `/${page.slug}`));

    return (
      <>
        <SeoHead schemas={schemaBlocks} />
        <Breadcrumbs items={breadcrumbs} />

        {/* Enhanced Header */}
        <header className="relative max-w-4xl overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 p-6 shadow-soft sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-accent-200/20 blur-2xl" />
          <h1 className="relative font-heading text-3xl font-extrabold text-slate-950 sm:text-5xl">{page.h1}</h1>
          <p className="relative mt-4 text-lg leading-8 text-slate-600">{page.introProblem}</p>
          <p className="relative mt-3 text-lg leading-8 text-slate-700">{page.introBenefit}</p>
          <PageTrust lastUpdated={page.lastUpdated} author={page.author} />
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">
            Why AI Matters for This Real Estate Workflow
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <svg className="h-5 w-5 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Common Agent Pain Points
              </h3>
              <p className="mt-2 text-slate-600">
                US agents usually struggle with response speed, repetitive manual work, and inconsistent message quality.
              </p>
            </div>
            <div className="rounded-xl bg-accent-50/50 p-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <svg className="h-5 w-5 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Where AI Improves Results
              </h3>
              <p className="mt-2 text-slate-600">
                With the right setup, AI improves consistency, shortens execution time, and increases qualified conversations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Top AI Tools</h2>
          <p className="mt-2 text-slate-600">
            These tools are commonly used by US agents and brokerage teams for this workflow.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Comparison Table</h2>
          <div className="mt-4">
            <ComparisonTable
              headers={["Tool", "Best For", "Pricing", "Key Feature"]}
              rows={rows}
              caption="Tool | Best for | Pricing | Key feature"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Real-World Use Cases</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {page.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-primary-200 hover:bg-primary-50/30">
                <h3 className="font-semibold text-slate-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <FAQ items={page.faqs} />
        </section>

        <section className="mt-10">
          <RelatedTools items={relatedPages} />
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-primary-50/40 to-accent-50/30 p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Next Step for Your Team</h2>
          <p className="mt-2 text-slate-600">
            Shortlist 2 tools, run a 14-day pilot, and compare response time plus conversion metrics.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-tools-for-lead-generation"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-primary-700 hover:to-primary-800 hover:shadow-glow"
            >
              Explore Lead Gen Tools →
            </Link>
            <Link
              href="/ai-tools-for-crm"
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary-500 hover:text-primary-700"
            >
              Compare AI CRM Tools
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SeoHead schemas={schemaBlocks} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Enhanced Header */}
      <header className="relative max-w-4xl overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 p-6 shadow-soft sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-accent-200/20 blur-2xl" />
        <h1 className="relative font-heading text-3xl font-extrabold text-slate-950 sm:text-5xl">{page.h1}</h1>
        <p className="relative mt-4 text-lg leading-8 text-slate-600">{page.introProblem}</p>
        <p className="relative mt-3 text-lg leading-8 text-slate-700">{page.introBenefit}</p>
        <PageTrust lastUpdated={page.lastUpdated} author={page.author} />
      </header>

      <div className="mt-10">{renderComparisonContent(page)}</div>

      <section className="mt-10">
        <FAQ items={page.faqs} />
      </section>

      <section className="mt-10">
        <RelatedTools items={relatedPages} />
      </section>
    </>
  );
}
