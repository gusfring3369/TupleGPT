// Site configuration - Edit these values to customize the entire site
export const siteConfig = {
  // Brand
  name: "TupleGPT",
  tagline:
    "AI powered production-ready SaaS database design in days—not months.",
  description:
    "Get multi-tenant, secure schemas + ORM models for your stack. Avoid rewrites and data leaks.",

  // Contact
  email: "sriramofficial101@gmail.com",
  phone: "+1 (555) 123-4567",

  // Social
  twitter: "https://twitter.com/tuplegpt",
  linkedin: "https://linkedin.com/company/tuplegpt",
  github: "https://github.com/tuplegpt",

  // URLs
  baseUrl: "https://tuplegpt.com",
  calendarUrl: "https://cal.com/tuplegpt/intro",

  // Pricing (in USD)
  pricing: {
    audit: {
      name: "Schema Audit",
      price: 1500,
      priceLabel: "Starting at $1,500",
      description:
        "Complete audit of your existing schema with actionable fix plan",
    },
    endToEnd: {
      name: "End-to-End Design",
      price: 5000,
      priceLabel: "Starting at $5,000",
      description:
        "Full database architecture from requirements to production-ready schema",
    },
    partner: {
      name: "Database Partner",
      price: 2000,
      priceLabel: "Starting at $2,000/mo",
      description: "Ongoing database architecture support and optimization",
    },
  },

  // Founder (for about page)
  founder: {
    name: "Sriram",
    role: "Founder & Principal Engineer",
    bio: "5+ years building data systems at scale. Passionate about helping SaaS teams avoid the costly mistakes I've seen repeated hundreds of times.",
    image: "/founder.jpg", // placeholder
  },

  // Lead magnet
  leadMagnet: {
    title: "SaaS Database Intake Checklist",
    description:
      "The 47-point checklist we use before designing any schema. Covers tenancy, auth, billing, and migrations.",
    downloadUrl: "/downloads/db-intake-checklist.pdf",
  },

  // Guarantees
  guarantees: {
    revision: "Unlimited revisions until you're satisfied with the design",
    timeline: "First ERD draft within 48 hours of kickoff",
    support: "30 days of async support after delivery",
  },
} as const;

export type SiteConfig = typeof siteConfig;
