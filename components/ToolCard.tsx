import type { Tool } from "@/lib/types";

type ToolCardProps = {
  tool: Tool;
};

export default function ToolCard({ tool }: ToolCardProps) {
  const keyFeatures =
    tool.keyFeatures && tool.keyFeatures.length > 0
      ? tool.keyFeatures
      : ["AI-assisted workflow", "Faster execution", "Agent productivity gains"];

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_22px_45px_rgba(30,64,175,0.16)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/80 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-20 w-20 rounded-full bg-accent-100/70 blur-2xl" />

      <div className="relative mb-3 inline-flex w-fit rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
        {tool.category.replace(/-/g, " ")}
      </div>
      <h3 className="relative font-heading text-xl font-bold text-slate-950">{tool.name}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
      <p className="relative mt-3 text-sm text-slate-700">
        <span className="font-semibold">Best for:</span> {tool.bestFor ?? "Real estate automation"}
      </p>
      <h4 className="relative mt-4 text-xs font-bold uppercase tracking-wide text-slate-900">
        Key Features
      </h4>
      <ul className="relative mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
        {keyFeatures.slice(0, 3).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="relative mt-4 text-sm font-semibold text-slate-900">Pricing: {tool.pricing}</p>
      <div className="relative mt-auto flex gap-3 pt-6">
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2 text-sm font-semibold text-white transition hover:from-primary-700 hover:to-primary-800"
        >
          Try Tool
        </a>
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-500 hover:text-primary-700"
        >
          View Pricing
        </a>
      </div>
    </article>
  );
}
