import type { FaqItem } from "@/lib/types";

type FAQProps = {
  title?: string;
  items: FaqItem[];
};

export default function FAQ({ title = "Frequently Asked Questions", items }: FAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 id="faq-heading" className="font-heading text-2xl font-bold text-slate-950">
        {title}
      </h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-slate-200 px-4 py-3">
            <summary className="cursor-pointer list-none font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
