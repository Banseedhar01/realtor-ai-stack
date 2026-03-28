import Link from "next/link";

const primaryLinks = [
  { href: "/ai-tools-for-lead-generation", label: "AI Lead Generation Tools" },
  { href: "/ai-tools-for-property-description", label: "AI Listing Copy Tools" },
  { href: "/ai-tools-for-social-media", label: "AI Social Media Tools" },
  { href: "/jasper-vs-copy-ai", label: "Top AI Comparison" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg font-extrabold tracking-tight text-slate-950">
          <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
            AI Realtor Stack
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/ai-tools-for-lead-generation"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700 sm:inline-flex"
        >
          Start With Lead Gen
        </Link>
      </div>

      <nav className="overflow-x-auto border-t border-slate-200/70 px-4 pb-3 pt-2 lg:hidden">
        <div className="flex min-w-max items-center gap-2">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-primary-400 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
