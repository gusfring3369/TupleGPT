export const faqs = [
  {
    question: "What if we're using MySQL or another database?",
    answer: "We work with PostgreSQL, MySQL, and SQLite. The core design principles are the same—tenancy isolation, proper indexing, constraint-based integrity. We'll adapt our recommendations to your specific database's features and limitations.",
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Schema audits take 2-3 days. End-to-end design projects run 5-10 business days depending on complexity. We deliver a first ERD draft within 48 hours of kickoff so you can provide feedback early.",
  },
  {
    question: "What stack do you support?",
    answer: "We're stack-agnostic for the database layer. For ORM models, we support Prisma, Drizzle, TypeORM, SQLAlchemy, and raw SQL. If you're using something else, we can usually adapt.",
  },
  {
    question: "What about multi-tenancy? Do you recommend schema-per-tenant or row-level?",
    answer: "It depends. Row-level (with RLS) is simpler operationally and works for 90% of SaaS apps. Schema-per-tenant makes sense when you have strict compliance requirements or need to support tenant-specific customizations. We'll recommend the right approach for your situation.",
  },
  {
    question: "How do revisions work?",
    answer: "We include unlimited revisions until you're satisfied. After the initial delivery, we schedule a review call, incorporate your feedback, and iterate until the schema meets your requirements. Most projects need 2-3 revision cycles.",
  },
  {
    question: "What format do you deliver in?",
    answer: "You get: (1) Visual ERD diagram, (2) SQL migration files (up and down), (3) ORM models for your stack, (4) Written documentation explaining design decisions, (5) 30-minute recorded walkthrough video.",
  },
  {
    question: "Do you handle the actual migration to production?",
    answer: "Our core deliverable is the design and migration files. We can provide implementation support as an add-on, including running migrations against staging/production and troubleshooting issues. This is priced separately.",
  },
  {
    question: "What about security and data access?",
    answer: "We only need read access to your schema (not your data). For audits, a pg_dump of schema-only is sufficient. We sign NDAs before any engagement and can work within your security requirements.",
  },
];

export type FAQ = typeof faqs[number];
