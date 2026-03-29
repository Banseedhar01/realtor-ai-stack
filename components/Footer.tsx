import Link from "next/link";
import { categoryPages, comparisonPages } from "@/data/pages";

const footerSections = [
  {
    title: "Topical Guides",
    links: categoryPages.map((page) => ({ href: `/${page.slug}`, label: page.h1 }))
  },
  {
    title: "Comparisons",
    links: comparisonPages.map((page) => ({ href: `/${page.slug}`, label: page.h1 }))
  }
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-200">
      {/* Newsletter CTA */}
      <div className="relative overflow-hidden border-b border-slate-800/50">
        <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-10 h-36 w-36 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">Stay Updated on AI for Real Estate</h2>
            <p className="mt-1 max-w-md text-sm text-slate-400">
              Get curated AI tool reviews and workflow strategies for US realtors—no spam.
            </p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 sm:w-64"
            />
            <button className="whitespace-nowrap rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-2.5 text-sm font-bold text-white transition hover:from-primary-600 hover:to-primary-700 hover:shadow-glow">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Link Columns */}
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div className="sm:col-span-2">
          <h2 className="font-heading text-xl font-bold text-white">AI Tools for Real Estate Agents</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Practical AI software recommendations for US realtors focused on lead generation, listing
            quality, and faster campaign execution.
          </p>
          <div className="mt-5 inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-primary-200">
            Updated for 2026 market workflows
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-100">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-primary-300">
                    <span className="inline-block h-1 w-1 rounded-full bg-slate-600 transition group-hover:bg-primary-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400">
            Copyright {new Date().getFullYear()} AI Realtor Stack. Built for educational comparisons.
          </p>
          <div className="flex gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-primary-500 hover:text-primary-400" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-primary-500 hover:text-primary-400" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
