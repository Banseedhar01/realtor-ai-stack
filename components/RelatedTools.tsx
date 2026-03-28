import Link from "next/link";

type RelatedLink = {
  slug: string;
  title: string;
  description: string;
};

type RelatedToolsProps = {
  items: RelatedLink[];
};

export default function RelatedTools({ items }: RelatedToolsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="font-heading text-2xl font-bold text-slate-950">Related Tools & Guides</h2>
      <p className="mt-2 text-sm text-slate-600">
        Explore adjacent pages to compare options before you pick your stack.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="rounded-xl border border-slate-200 p-4 transition hover:border-primary-500 hover:bg-primary-50"
          >
            <h3 className="font-heading text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
