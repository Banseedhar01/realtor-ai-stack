import Link from "next/link";

type RelatedLink = {
  slug: string;
  title: string;
  description: string;
};

type RelatedToolsProps = {
  items: RelatedLink[];
};

const keywordAnchorText: Record<string, string> = {
  "ai-tools-for-lead-generation": "Check out these AI tools for real estate lead generation",
  "ai-tools-for-property-description": "Explore AI tools for property listing descriptions",
  "ai-tools-for-real-estate-marketing": "See AI tools for real estate marketing campaigns",
  "ai-tools-for-marketing": "Discover AI tools for real estate marketing automation",
  "ai-tools-for-cold-calling": "Compare AI tools for real estate cold calling",
  "ai-tools-for-social-media": "Browse AI tools for realtor social media growth",
  "ai-tools-for-crm": "Review AI tools for real estate CRM workflows",
  "ai-tools-for-copywriting": "Find AI copywriting tools for real estate agents",
  "jasper-vs-copy-ai": "Read our Jasper vs Copy.ai comparison for real estate",
};

export default function RelatedTools({ items }: RelatedToolsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="font-heading text-2xl font-bold text-slate-950">
        Related AI Tools for Real Estate
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Keep exploring with focused pages built for US real estate teams.
      </p>
      <div className="mt-5 space-y-3">
        {items.slice(0, 5).map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="block rounded-xl border border-slate-200 p-4 transition hover:border-primary-500 hover:bg-primary-50"
          >
            <h3 className="text-base font-semibold text-primary-700">
              {keywordAnchorText[item.slug] ?? `Explore ${item.title}`}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
