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
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-xl font-bold text-slate-950">
            AI Tools for Real Estate Agents
          </h2>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Practical AI software recommendations for US realtors who want more leads, faster
            marketing output, and better client communication.
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-900">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} AI Realtor Stack. Built for educational comparisons.
      </div>
    </footer>
  );
}
