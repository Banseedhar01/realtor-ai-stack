import Link from "next/link";
import { categoryPages, comparisonPages } from "@/data/pages";

const popularGuides = categoryPages.slice(0, 5).map((page) => ({
  href: `/${page.slug}`,
  label: page.h1
}));

const comparisonLinks = comparisonPages.map((page) => ({
  href: `/${page.slug}`,
  label: page.h1
}));

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-soft sm:p-8">
          <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-12 h-36 w-36 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-200">
                AI Strategy for Realtors
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-white">
                Build a Smarter Real Estate AI Stack
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Explore practical tools for lead generation, listings, CRM workflows, and marketing
                execution in US markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ai-tools-for-lead-generation"
                className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-primary-600 hover:to-primary-700 hover:shadow-glow"
              >
                Explore Lead Tools
              </Link>
              <Link
                href="/jasper-vs-copy-ai"
                className="rounded-lg border border-slate-600 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-primary-500 hover:bg-slate-800/60 hover:text-primary-300"
              >
                View Top Comparison
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">AI Tools for Real Estate Agents</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
              Production-focused AI recommendations for US realtors who need better lead flow,
              faster content, and cleaner follow-up systems.
            </p>
            <div className="mt-5 inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-primary-200">
              Updated for 2026 market workflows
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-100">
              Popular Guides
            </h4>
            <ul className="mt-3 space-y-2">
              {popularGuides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-primary-300"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 transition-colors group-hover:bg-primary-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-100">
              Comparisons
            </h4>
            <ul className="mt-3 space-y-2">
              {comparisonLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-primary-300"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 transition-colors group-hover:bg-primary-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} AI Realtor Stack. Built for educational comparisons.</p>
          <div className="flex items-center gap-3">
            <Link href="/" className="transition hover:text-primary-300">
              Home
            </Link>
            <Link href="/ai-tools-for-crm" className="transition hover:text-primary-300">
              AI CRM Tools
            </Link>
            <Link href="/ai-tools-for-copywriting" className="transition hover:text-primary-300">
              AI Copywriting Tools
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
