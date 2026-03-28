import toolsData from "@/data/tools.json";
import { categoryPages, comparisonPages } from "@/data/pages";
import type { SeoPage, Tool } from "@/lib/types";

export const allTools: Tool[] = toolsData as Tool[];
export const allPages: SeoPage[] = [...categoryPages, ...comparisonPages];

const pageLookup = new Map(allPages.map((page) => [page.slug, page]));
const toolLookup = new Map(allTools.map((tool) => [tool.name, tool]));

export const getPageBySlug = (slug: string): SeoPage | undefined => pageLookup.get(slug);

export const getToolByName = (name: string): Tool | undefined => toolLookup.get(name);

export const getToolsByNames = (names: string[]): Tool[] =>
  names.map((name) => getToolByName(name)).filter((tool): tool is Tool => Boolean(tool));

export const getTopTools = (limit: number): Tool[] => allTools.slice(0, limit);

export const getRelatedPages = (slugs: string[]) =>
  slugs
    .map((slug) => getPageBySlug(slug))
    .filter((page): page is SeoPage => Boolean(page))
    .map((page) => ({
      slug: page.slug,
      title: page.h1,
      description: page.description
    }));
