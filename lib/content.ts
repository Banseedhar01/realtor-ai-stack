import toolsData from "@/data/tools.json";
import { categoryPages, comparisonPages } from "@/data/pages";
import type { SeoPage, Tool } from "@/lib/types";

type ToolInsight = {
  bestFor: string;
  keyFeatures: string[];
};

const toolInsights: Record<string, ToolInsight> = {
  Jasper: {
    bestFor: "Brand-consistent real estate copywriting",
    keyFeatures: ["Brand voice controls", "Template workflows", "Campaign-level consistency"]
  },
  "Copy.ai": {
    bestFor: "Quick listing headlines and ad copy variants",
    keyFeatures: ["Instant templates", "Easy onboarding", "Bulk copy generation"]
  },
  "Canva Magic Studio": {
    bestFor: "Social visuals and listing graphics",
    keyFeatures: ["Magic Design", "One-click resizing", "Brand kit support"]
  },
  Descript: {
    bestFor: "Walkthrough videos and short clips",
    keyFeatures: ["Text-based editing", "Auto captions", "Multichannel export"]
  },
  OpusClip: {
    bestFor: "Turning tours into short-form video",
    keyFeatures: ["AI clip detection", "Social aspect ratios", "Virality scoring"]
  },
  "HubSpot AI": {
    bestFor: "Lead scoring and CRM follow-up automation",
    keyFeatures: ["AI lead insights", "Email drafting", "Workflow automation"]
  },
  Structurely: {
    bestFor: "Real estate lead qualification by SMS and voice",
    keyFeatures: ["24/7 outreach", "Lead intent scoring", "Appointment-ready handoff"]
  },
  Ylopo: {
    bestFor: "Paid lead nurture campaigns",
    keyFeatures: ["Behavior-based retargeting", "Pipeline automation", "Ad-to-CRM sync"]
  },
  "Roof AI": {
    bestFor: "Website lead capture and routing",
    keyFeatures: ["Conversational bots", "Instant qualification", "Team routing logic"]
  },
  "Follow Up Boss AI": {
    bestFor: "CRM accountability for agent teams",
    keyFeatures: ["Automated reminders", "Pipeline visibility", "Team follow-up controls"]
  },
  "HighLevel AI": {
    bestFor: "All-in-one marketing and nurture funnels",
    keyFeatures: ["SMS/email automation", "Pipeline triggers", "Multi-step campaign builder"]
  },
  REimagineHome: {
    bestFor: "Virtual staging and redesign concepts",
    keyFeatures: ["Photoreal staging", "Style variations", "Listing-ready output"]
  },
  "Restb.ai": {
    bestFor: "Photo intelligence and listing metadata",
    keyFeatures: ["Image tagging", "Room/object recognition", "MLS data enrichment"]
  },
  Offrs: {
    bestFor: "Predictive seller prospecting",
    keyFeatures: ["Likely-to-list signals", "Territory targeting", "Agent routing"]
  },
  "CallRail Conversation Intelligence": {
    bestFor: "Inbound call analytics and coaching",
    keyFeatures: ["Call summaries", "Keyword tracking", "Lead source attribution"]
  },
  Gong: {
    bestFor: "Performance coaching for call teams",
    keyFeatures: ["Call scoring", "Coaching insights", "Pipeline risk alerts"]
  },
  "Dialpad Ai Voice": {
    bestFor: "Real-time calling support",
    keyFeatures: ["Live transcription", "Post-call insights", "Agent assist prompts"]
  },
  Balto: {
    bestFor: "Live script guidance on calls",
    keyFeatures: ["Real-time prompts", "Objection handling cues", "Talk-track consistency"]
  },
  "Air AI": {
    bestFor: "High-volume inbound and outbound voice workflows",
    keyFeatures: ["Voice agents", "24/7 call coverage", "Automated call handling"]
  },
  "Buffer AI Assistant": {
    bestFor: "Social caption generation and scheduling",
    keyFeatures: ["Caption assistant", "Platform scheduling", "Post optimization"]
  },
  "Hootsuite OwlyWriter": {
    bestFor: "Cross-channel social idea generation",
    keyFeatures: ["Post prompts", "Content planning", "Multi-channel workflows"]
  },
  "AdCreative.ai": {
    bestFor: "Ad creative testing for listings",
    keyFeatures: ["Creative variants", "Conversion-focused layouts", "Performance feedback loops"]
  },
  "Mailchimp AI": {
    bestFor: "Email nurture and listing alerts",
    keyFeatures: ["Subject line generation", "Email drafting", "Lifecycle automation"]
  }
};

const withInsights = (tool: Tool): Tool => {
  const insight = toolInsights[tool.name];

  if (!insight) {
    return {
      ...tool,
      bestFor: "Real estate workflow automation",
      keyFeatures: ["AI-assisted output", "Workflow speedup", "Team productivity gains"]
    };
  }

  return {
    ...tool,
    bestFor: insight.bestFor,
    keyFeatures: insight.keyFeatures
  };
};

export const allTools: Tool[] = (toolsData as Tool[]).map(withInsights);
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
