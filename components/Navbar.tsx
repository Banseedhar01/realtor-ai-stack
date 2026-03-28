import Link from "next/link";

const primaryLinks = [
  { href: "/ai-tools-for-lead-generation", label: "Lead Gen Tools" },
  { href: "/ai-tools-for-property-description", label: "Listing Copy Tools" },
  { href: "/ai-tools-for-social-media", label: "Social Media Tools" },
  { href: "/chatgpt-vs-claude-for-real-estate", label: "Top Comparison" }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg font-extrabold text-slate-950">
          AI Realtor Stack
        </Link>
        <nav className="hidden gap-6 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
