"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

type FAQProps = {
  title?: string;
  items: FaqItem[];
};

function FaqAccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 transition-colors hover:border-primary-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
        aria-expanded={open}
      >
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary-700">
          {index + 1}
        </span>
        <span className="flex-1 font-semibold text-slate-900">{item.question}</span>
        <svg
          className={`faq-chevron h-5 w-5 text-slate-400 ${open ? "open" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div>
          <p className="px-4 pb-4 pl-[3.25rem] text-sm leading-6 text-slate-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ title = "Frequently Asked Questions", items }: FAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 id="faq-heading" className="font-heading text-2xl font-bold text-slate-950">
        {title}
      </h2>
      <div className="mt-5 space-y-3">
        {items.map((item, index) => (
          <FaqAccordionItem key={item.question} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
