import type { Metadata } from "next";
import type { FaqItem, Tool } from "@/lib/types";

const DEFAULT_BASE_URL = "https://realestate-ai-tools.example";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export const getBaseUrl = (): string => {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_BASE_URL;

  try {
    return new URL(configured).origin;
  } catch {
    return DEFAULT_BASE_URL;
  }
};

export const buildMetadata = ({ title, description, path, keywords }: MetadataInput): Metadata => {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "AI Tools for Real Estate Agents",
      images: [
        {
          url: `${baseUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "AI Tools for Real Estate Agents"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-default.jpg`]
    }
  };
};

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
};

export const buildToolListSchema = (
  listName: string,
  tools: Tool[],
  path: string
) => {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: `${baseUrl}${path}`,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      description: tool.description,
      url: tool.affiliateLink
    }))
  };
};
