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
            <article key={useCase.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">{page.leftTool} Pros & Cons</h2>
          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-accent-600">Pros</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
            {page.leftPros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-rose-600">Cons</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
            {page.leftCons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
          <a
            href={leftTool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="mt-6 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Try {page.leftTool}
          </a>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">{page.rightTool} Pros & Cons</h2>
          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-accent-600">Pros</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
            {page.rightPros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-rose-600">Cons</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
            {page.rightCons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
          <a
            href={rightTool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="mt-6 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Try {page.rightTool}
          </a>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-primary-200 bg-primary-50 p-6">
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

        <header className="max-w-4xl">
          <h1 className="font-heading text-3xl font-extrabold text-slate-950 sm:text-5xl">{page.h1}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{page.introProblem}</p>
          <p className="mt-3 text-lg leading-8 text-slate-700">{page.introBenefit}</p>
          <PageTrust lastUpdated={page.lastUpdated} author={page.author} />
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">
            Why AI Matters for This Real Estate Workflow
          </h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">Common Agent Pain Points</h3>
          <p className="mt-2 text-slate-600">
            US agents usually struggle with response speed, repetitive manual work, and inconsistent message quality.
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">Where AI Improves Results</h3>
          <p className="mt-2 text-slate-600">
            With the right setup, AI improves consistency, shortens execution time, and increases qualified conversations.
          </p>
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
              <article key={useCase.title} className="rounded-xl border border-slate-200 bg-white p-5">
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

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-slate-950">Next Step for Your Team</h2>
          <p className="mt-2 text-slate-600">
            Shortlist 2 tools, run a 14-day pilot, and compare response time plus conversion metrics.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-tools-for-lead-generation"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Explore Lead Gen Tools
            </Link>
            <Link
              href="/ai-tools-for-crm"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-500 hover:text-primary-700"
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

      <header className="max-w-4xl">
        <h1 className="font-heading text-3xl font-extrabold text-slate-950 sm:text-5xl">{page.h1}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{page.introProblem}</p>
        <p className="mt-3 text-lg leading-8 text-slate-700">{page.introBenefit}</p>
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
