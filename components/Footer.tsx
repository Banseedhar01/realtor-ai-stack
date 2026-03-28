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
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
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
                  <Link href={link.href} className="text-sm text-slate-300 transition hover:text-primary-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} AI Realtor Stack. Built for educational comparisons.
      </div>
    </footer>
  );
}
