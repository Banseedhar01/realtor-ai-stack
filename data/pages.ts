import type { CategoryPage, ComparisonPage, FaqItem } from "@/lib/types";

export const categoryPages: CategoryPage[] = [
  {
    pageType: "category",
    slug: "ai-tools-for-lead-generation",
    title: "AI Tools for Real Estate Lead Generation (2026 Guide)",
    description:
      "Compare the best AI tools for real estate lead generation in the US. Discover automation platforms for nurturing, qualifying, and converting leads faster.",
    h1: "Best AI Tools for Real Estate Lead Generation",
    intro:
      "If your pipeline depends on fast response times, AI can handle first-touch conversations, lead scoring, and follow-up so no inquiry goes cold. These tools are top picks for agents and broker teams in the US.",
    keywords: [
      "AI tools for real estate agents",
      "best AI tools for realtors",
      "real estate lead generation AI"
    ],
    toolNames: [
      "Structurely",
      "Roof AI",
      "Ylopo",
      "Offrs",
      "HubSpot AI",
      "Follow Up Boss AI"
    ],
    tableHighlights: {
      Structurely: "Two-way SMS and voice qualification",
      "Roof AI": "24/7 website lead capture",
      Ylopo: "Ad-to-appointment nurturing",
      Offrs: "Predictive seller targeting",
      "HubSpot AI": "Scoring and CRM automation",
      "Follow Up Boss AI": "Agent accountability workflows"
    },
    faqs: [
      {
        question: "What is the best AI lead generation tool for solo agents?",
        answer:
          "Solo agents usually get the fastest ROI from tools with built-in nurture automation and simple CRM workflows, like Structurely or Follow Up Boss AI."
      },
      {
        question: "Can AI replace ISA teams in real estate?",
        answer:
          "AI can handle first-response and basic qualification, but most teams still rely on humans for nuanced objections, negotiation, and relationship building."
      },
      {
        question: "How quickly can I see ROI from lead-gen AI tools?",
        answer:
          "Most agents see measurable improvements within 30 to 90 days when they pair AI response automation with consistent human follow-up."
      },
      {
        question: "Do these platforms integrate with Zillow and CRMs?",
        answer:
          "Many do. Check each vendor's native integrations or Zapier compatibility before purchase."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-cold-calling",
      "ai-tools-for-real-estate-marketing",
      "chatgpt-vs-claude-for-real-estate"
    ]
  },
  {
    pageType: "category",
    slug: "ai-tools-for-property-description",
    title: "AI Tools for Property Descriptions and Listing Copy",
    description:
      "Find the best AI tools for writing property descriptions, MLS-friendly copy, and listing headlines that attract serious buyers.",
    h1: "Best AI Tools for Property Listings and Descriptions",
    intro:
      "Great listing copy sells the lifestyle, not just the square footage. These AI tools help real estate agents write faster while keeping brand voice and compliance in mind.",
    keywords: [
      "AI for property listings",
      "best AI tools for realtors",
      "real estate listing description generator"
    ],
    toolNames: [
      "Jasper",
      "Copy.ai",
      "ChatGPT",
      "Claude",
      "REimagineHome",
      "Restb.ai"
    ],
    tableHighlights: {
      Jasper: "Brand voice templates for listings",
      "Copy.ai": "Fast listing and ad copy workflows",
      ChatGPT: "Flexible prompting for neighborhood context",
      Claude: "Long-form, nuanced listing narratives",
      REimagineHome: "Visual staging support for copy context",
      "Restb.ai": "Auto-tag photos to enrich listing details"
    },
    faqs: [
      {
        question: "Can AI-generated listing descriptions be used directly in MLS?",
        answer:
          "Yes, but agents should review for Fair Housing language, factual accuracy, and local MLS policy before publishing."
      },
      {
        question: "Which tool is better for luxury listings?",
        answer:
          "Jasper and Claude often perform better for premium tone and longer storytelling, especially with strong brand prompts."
      },
      {
        question: "How do I avoid repetitive AI listing copy?",
        answer:
          "Feed each draft with property-specific details, target-buyer context, and neighborhood differentiators to keep copy unique."
      },
      {
        question: "Can these tools help with ad headlines too?",
        answer:
          "Yes, most tools on this page also generate variants for social ads, email subject lines, and flyer copy."
      }
    ],
    relatedSlugs: [
      "jasper-vs-copy-ai",
      "ai-tools-for-social-media",
      "chatgpt-vs-claude-for-real-estate"
    ]
  },
  {
    pageType: "category",
    slug: "ai-tools-for-real-estate-marketing",
    title: "AI Tools for Real Estate Marketing Campaigns",
    description:
      "Explore AI marketing tools for real estate agents to build better ads, nurture sequences, and multi-channel campaigns.",
    h1: "Best AI Tools for Real Estate Marketing",
    intro:
      "From social creatives to email campaigns, marketing AI helps teams launch faster and test more ideas without adding headcount.",
    keywords: [
      "AI tools for real estate agents",
      "real estate marketing AI software",
      "best AI tools for realtors"
    ],
    toolNames: [
      "Jasper",
      "Canva Magic Studio",
      "AdCreative.ai",
      "HighLevel AI",
      "Mailchimp AI",
      "Hootsuite OwlyWriter"
    ],
    tableHighlights: {
      Jasper: "Conversion-focused ad copy",
      "Canva Magic Studio": "Quick listing graphics and reels assets",
      "AdCreative.ai": "Performance-oriented ad concepts",
      "HighLevel AI": "Nurture funnels and SMS automation",
      "Mailchimp AI": "Email lifecycle campaign drafts",
      "Hootsuite OwlyWriter": "Cross-channel social ideation"
    },
    faqs: [
      {
        question: "What is the best AI stack for real estate marketing teams?",
        answer:
          "A practical stack is one copy tool, one design/creative tool, and one automation CRM to cover content, creatives, and conversion."
      },
      {
        question: "Do AI ad tools improve ROI immediately?",
        answer:
          "They usually improve testing speed first. ROI improves when teams review results weekly and iterate headlines, creatives, and audience segments."
      },
      {
        question: "Can AI tools keep our brokerage brand voice consistent?",
        answer:
          "Yes. Save brand style guides and approved messaging prompts to keep output consistent across agents."
      },
      {
        question: "Are these tools useful for open house campaigns?",
        answer:
          "Absolutely. Agents commonly use them for event pages, reminder emails, and social countdown posts."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-social-media",
      "ai-tools-for-property-description",
      "jasper-vs-copy-ai"
    ]
  },
  {
    pageType: "category",
    slug: "ai-tools-for-cold-calling",
    title: "AI Tools for Real Estate Cold Calling and Follow-Up",
    description:
      "Compare AI-powered call tools for real estate teams, including coaching, summaries, and conversion-focused conversation analytics.",
    h1: "Best AI Tools for Real Estate Cold Calling",
    intro:
      "Cold calling still works when scripts, objection handling, and follow-up are consistent. These AI tools help agents improve call quality and close more appointments.",
    keywords: [
      "AI cold calling tools for real estate",
      "best AI tools for realtors",
      "real estate call automation AI"
    ],
    toolNames: [
      "CallRail Conversation Intelligence",
      "Gong",
      "Dialpad Ai Voice",
      "Balto",
      "Air AI",
      "ChatGPT"
    ],
    tableHighlights: {
      "CallRail Conversation Intelligence": "Inbound call summaries and tagging",
      Gong: "Deal coaching and call analytics",
      "Dialpad Ai Voice": "Real-time transcripts and insights",
      Balto: "Script adherence in live calls",
      "Air AI": "High-volume voice automation",
      ChatGPT: "Role-play scripts and objection handling"
    },
    faqs: [
      {
        question: "Can AI help me improve objection handling on calls?",
        answer:
          "Yes. Use AI to review call transcripts, surface patterns, and practice better responses before your next calling block."
      },
      {
        question: "Is voice AI legal for outbound calls in the US?",
        answer:
          "It depends on federal and state regulations plus carrier rules. Always verify consent and disclosure requirements before deployment."
      },
      {
        question: "Which tool is best for broker teams with call managers?",
        answer:
          "Teams with managers often prefer Gong or Dialpad for performance dashboards and coaching workflows."
      },
      {
        question: "Can solo agents use these platforms affordably?",
        answer:
          "Yes, especially with entry plans like CallRail plus AI assistants for script prep and post-call analysis."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-lead-generation",
      "chatgpt-vs-claude-for-real-estate",
      "ai-tools-for-real-estate-marketing"
    ]
  },
  {
    pageType: "category",
    slug: "ai-tools-for-social-media",
    title: "AI Tools for Real Estate Social Media Content",
    description:
      "Discover the best AI tools for real estate social media content creation, scheduling, and short-form video production.",
    h1: "Best AI Tools for Real Estate Social Media",
    intro:
      "Consistent posting builds trust long before a prospect fills out a form. These AI tools help you produce high-quality social content in less time.",
    keywords: [
      "AI tools for real estate agents",
      "real estate social media AI",
      "best AI tools for realtors"
    ],
    toolNames: [
      "Canva Magic Studio",
      "Buffer AI Assistant",
      "Hootsuite OwlyWriter",
      "OpusClip",
      "Descript",
      "ChatGPT"
    ],
    tableHighlights: {
      "Canva Magic Studio": "Design and copy in one workflow",
      "Buffer AI Assistant": "Caption and scheduling support",
      "Hootsuite OwlyWriter": "Platform-specific post ideas",
      OpusClip: "Turn tours into short clips",
      Descript: "Fast video editing with captions",
      ChatGPT: "Hooks, CTAs, and content calendars"
    },
    faqs: [
      {
        question: "What AI tool is best for listing reels?",
        answer:
          "Many agents combine Canva Magic Studio for visuals with OpusClip or Descript for video clipping and edits."
      },
      {
        question: "How many posts per week should a realtor publish?",
        answer:
          "A consistent 3 to 5 posts weekly often outperforms sporadic bursts, especially when supported by local market insights."
      },
      {
        question: "Can AI write social captions in my brand voice?",
        answer:
          "Yes. Save your tone and sample posts, then prompt AI with listing details and audience intent."
      },
      {
        question: "Do these tools help with YouTube Shorts and TikTok?",
        answer:
          "Yes, clip-generation and auto-caption features are especially useful for short-form channels."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-real-estate-marketing",
      "ai-tools-for-property-description",
      "jasper-vs-copy-ai"
    ]
  }
];

export const comparisonPages: ComparisonPage[] = [
  {
    pageType: "comparison",
    slug: "jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai for Real Estate Agents",
    description:
      "Compare Jasper vs Copy.ai for real estate copywriting, listing descriptions, and campaign messaging. See features, pros, cons, and final verdict.",
    h1: "Jasper vs Copy.ai for Real Estate (2026)",
    intro:
      "Both Jasper and Copy.ai can speed up listing and marketing content, but they shine in different workflows. This side-by-side breakdown helps you choose the right fit for your team.",
    keywords: [
      "Jasper vs Copy.ai",
      "best AI copywriter for real estate",
      "AI for property listings"
    ],
    leftTool: "Jasper",
    rightTool: "Copy.ai",
    comparisonRows: [
      {
        feature: "Listing Description Quality",
        left: "Excellent brand voice control",
        right: "Fast and clean first drafts",
        winner: "left"
      },
      {
        feature: "Workflow Templates",
        left: "Strong campaign frameworks",
        right: "Wide variety of quick templates",
        winner: "tie"
      },
      {
        feature: "Ease for New Agents",
        left: "Moderate learning curve",
        right: "Very beginner friendly",
        winner: "right"
      },
      {
        feature: "Long-Form Content",
        left: "More consistent for long pages",
        right: "Better for shorter copy blocks",
        winner: "left"
      },
      {
        feature: "Price-to-Value",
        left: "Higher cost, higher control",
        right: "Lower barrier for small teams",
        winner: "right"
      }
    ],
    leftPros: [
      "Strong brand voice and style controls",
      "Reliable for long-form pages and campaigns",
      "Good collaboration for growing teams"
    ],
    leftCons: [
      "Higher starting price",
      "Setup takes longer to optimize",
      "Can feel heavyweight for simple tasks"
    ],
    rightPros: [
      "Very fast for daily listing and ad drafts",
      "Simple interface for individual agents",
      "Great template variety for quick wins"
    ],
    rightCons: [
      "Less brand control for advanced teams",
      "Long-form consistency can vary",
      "May require heavier editing for premium listings"
    ],
    verdict:
      "Choose Jasper if your brokerage needs consistent brand voice across many campaigns. Choose Copy.ai if speed, simplicity, and lower upfront cost matter most.",
    faqs: [
      {
        question: "Is Jasper better than Copy.ai for luxury listings?",
        answer:
          "Jasper usually offers better control for tone and premium storytelling, which can be useful for luxury inventory."
      },
      {
        question: "Can I use both tools together?",
        answer:
          "Yes. Some teams use Copy.ai for first drafts and Jasper for final polish and campaign standardization."
      },
      {
        question: "Which is better for solo realtors?",
        answer:
          "Copy.ai is often easier for solo agents who need quick output with minimal setup."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-property-description",
      "ai-tools-for-real-estate-marketing",
      "chatgpt-vs-claude-for-real-estate"
    ]
  },
  {
    pageType: "comparison",
    slug: "chatgpt-vs-claude-for-real-estate",
    title: "ChatGPT vs Claude for Real Estate Agents",
    description:
      "ChatGPT vs Claude for real estate agents: compare content quality, market analysis workflows, and day-to-day productivity for US teams.",
    h1: "ChatGPT vs Claude for Real Estate Agents (2026)",
    intro:
      "ChatGPT and Claude are both strong general AI assistants, but they differ in style and workflow strengths. Use this breakdown to pick the one that fits your day-to-day operations.",
    keywords: [
      "ChatGPT vs Claude for real estate",
      "AI tools for real estate agents",
      "best AI assistant for realtors"
    ],
    leftTool: "ChatGPT",
    rightTool: "Claude",
    comparisonRows: [
      {
        feature: "Prompt Flexibility",
        left: "Highly adaptable across tasks",
        right: "Strong structured responses",
        winner: "left"
      },
      {
        feature: "Long Document Handling",
        left: "Good with chunked workflows",
        right: "Excellent context retention",
        winner: "right"
      },
      {
        feature: "Content Speed",
        left: "Very fast draft generation",
        right: "Fast with thoughtful tone",
        winner: "tie"
      },
      {
        feature: "Client Communication Tone",
        left: "Great for concise outreach",
        right: "Great for nuanced explanations",
        winner: "right"
      },
      {
        feature: "Creative Marketing Ideation",
        left: "Strong for campaign brainstorming",
        right: "Strong for messaging refinement",
        winner: "left"
      }
    ],
    leftPros: [
      "Excellent breadth across listing, marketing, and ops tasks",
      "Very flexible prompt patterns for agents",
      "Strong ecosystem and integrations"
    ],
    leftCons: [
      "Output quality depends heavily on prompt quality",
      "Can be overly concise by default",
      "Needs guardrails for consistent team use"
    ],
    rightPros: [
      "Great for long-form and nuanced client messaging",
      "Often produces polished first drafts",
      "Useful for analysis-heavy workflows"
    ],
    rightCons: [
      "May be slower to iterate for rapid brainstorming",
      "Fewer preset workflows for some teams",
      "Requires clear instructions to stay concise"
    ],
    verdict:
      "Pick ChatGPT for high-volume daily production and ideation. Pick Claude if your team values long-form quality, context depth, and polished communication drafts.",
    faqs: [
      {
        question: "Which is better for writing listing descriptions quickly?",
        answer:
          "ChatGPT is often faster for high-volume listing drafts, while Claude can be stronger for polished long-form narratives."
      },
      {
        question: "Which tool handles market report summaries better?",
        answer:
          "Claude is often preferred for structured, detailed summaries when handling larger documents."
      },
      {
        question: "Do I need both ChatGPT and Claude?",
        answer:
          "Many teams start with one. Add the second only if you need specialized workflows that your first tool cannot cover efficiently."
      }
    ],
    relatedSlugs: [
      "ai-tools-for-property-description",
      "ai-tools-for-lead-generation",
      "jasper-vs-copy-ai"
    ]
  }
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What is the difference between AI tools and agentic AI in real estate?",
    answer:
      "AI tools usually handle single tasks such as writing or image generation, while agentic AI coordinates multi-step workflows like lead qualification, routing, and follow-up."
  },
  {
    question: "Should small brokerages start with custom AI development?",
    answer:
      "Most small teams should begin with proven SaaS tools, then move toward custom orchestration once they have stable workflows and clear ROI metrics."
  },
  {
    question: "How do I reduce risk when using AI for listings and contracts?",
    answer:
      "Use a human-in-the-loop review process for compliance-sensitive outputs, especially pricing, legal disclosures, and contract-adjacent communication."
  },
  {
    question: "How long does it take to see ROI from AI in real estate?",
    answer:
      "Teams commonly see operational improvements in 1 to 3 months, with broader revenue impact often visible in 6 to 12 months when adoption is disciplined."
  }
];
