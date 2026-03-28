export type Tool = {
  name: string;
  description: string;
  pricing: string;
  category: string;
  affiliateLink: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonRow = {
  feature: string;
  left: string;
  right: string;
  winner: "left" | "right" | "tie";
};

type BaseSeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  faqs: FaqItem[];
  relatedSlugs: string[];
};

export type CategoryPage = BaseSeoPage & {
  pageType: "category";
  toolNames: string[];
  tableHighlights: Record<string, string>;
};

export type ComparisonPage = BaseSeoPage & {
  pageType: "comparison";
  leftTool: string;
  rightTool: string;
  comparisonRows: ComparisonRow[];
  leftPros: string[];
  leftCons: string[];
  rightPros: string[];
  rightCons: string[];
  verdict: string;
};

export type SeoPage = CategoryPage | ComparisonPage;
