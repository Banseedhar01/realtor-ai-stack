import type { Tool } from "@/lib/types";

type ToolCardProps = {
  tool: Tool;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
        {tool.category.replace(/-/g, " ")}
      </div>
      <h3 className="font-heading text-xl font-bold text-slate-950">{tool.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
      <p className="mt-4 text-sm font-semibold text-slate-900">Pricing: {tool.pricing}</p>
      <div className="mt-auto flex gap-3 pt-6">
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
        >
          Try Tool
        </a>
        <a
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-500 hover:text-primary-700"
        >
          View Pricing
        </a>
      </div>
    </article>
  );
}
