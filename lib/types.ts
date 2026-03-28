export type Tool = {
  name: string;
  description: string;
  pricing: string;
  category: string;
  affiliateLink: string;
  bestFor?: string;
  keyFeatures?: string[];
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
  introProblem: string;
  introBenefit: string;
  keywords: string[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  lastUpdated: string;
  author: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type CategoryPage = BaseSeoPage & {
  pageType: "category";
  toolNames: string[];
  tableHighlights: Record<string, string>;
  useCases: UseCase[];
};

export type ComparisonPage = BaseSeoPage & {
  pageType: "comparison";
  leftTool: string;
  rightTool: string;
  alternativeToolNames: string[];
  comparisonRows: ComparisonRow[];
  leftPros: string[];
  leftCons: string[];
  rightPros: string[];
  rightCons: string[];
  verdict: string;
  useCases: UseCase[];
};

export type SeoPage = CategoryPage | ComparisonPage;
