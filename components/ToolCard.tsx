import type { Tool } from "@/lib/types";

type ToolCardProps = {
  tool: Tool;
};

const starRating = (name: string): number => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 4 + (Math.abs(hash) % 2); // 4 or 5 stars
};

export default function ToolCard({ tool }: ToolCardProps) {
  const keyFeatures =
    tool.keyFeatures && tool.keyFeatures.length > 0
      ? tool.keyFeatures
      : ["AI-assisted workflow", "Faster execution", "Agent productivity gains"];

  const stars = starRating(tool.name);

  return (
    <article className="card-glow relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(30,64,175,0.16)]">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/80 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-accent-100/70 blur-2xl" />

      {/* Category + Rating Row */}
      <div className="relative mb-3 flex items-center gap-2">
        <span className="inline-flex rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
          {tool.category.replace(/-/g, " ")}
        </span>
        <span className="ml-auto flex items-center gap-0.5 text-amber-400" aria-label={`${stars} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < stars ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
              <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
            </svg>
          ))}
        </span>
      </div>

      <h3 className="relative font-heading text-xl font-bold text-slate-950">{tool.name}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
      <p className="relative mt-3 text-sm text-slate-700">
        <span className="font-semibold">Best for:</span> {tool.bestFor ?? "Real estate automation"}
      </p>

      <h4 className="relative mt-4 text-xs font-bold uppercase tracking-wide text-slate-900">
        Key Features
      </h4>
      <ul className="relative mt-2 space-y-1.5 text-sm text-slate-700">
        {keyFeatures.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative mt-4 rounded-lg bg-slate-50 px-3 py-2">
        <p className="text-sm font-semibold text-slate-900">Pricing: {tool.pricing}</p>
      </div>

      <div className="relative mt-auto flex gap-3 pt-5">
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:from-primary-700 hover:to-primary-800 hover:shadow-glow"
        >
          Try Tool →
        </a>
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-primary-500 hover:text-primary-700"
        >
          View Pricing
        </a>
      </div>
    </article>
  );
}
