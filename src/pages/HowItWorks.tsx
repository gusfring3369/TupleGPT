import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Send, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Share your context",
    description: "Fill out our intake form with your product details, current schema (if any), and pain points.",
    details: [
      "Complete the DB intake checklist",
      "Export your current schema (pg_dump --schema-only)",
      "List your main tables and relationships",
      "Describe your tenancy model (or desired model)",
    ],
    timeline: "15-30 minutes",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Requirements call",
    description: "We hop on a 30-minute call to clarify requirements, discuss constraints, and align on goals.",
    details: [
      "Review your product roadmap",
      "Discuss compliance/security requirements",
      "Clarify expected scale and performance needs",
      "Document assumptions and constraints",
    ],
    timeline: "30 minutes",
  },
  {
    number: "03",
    icon: Send,
    title: "First ERD draft",
    description: "Within 48 hours, you receive the first visual ERD with our design rationale.",
    details: [
      "Visual entity-relationship diagram",
      "Written explanation of key decisions",
      "Questions for your review",
      "Alternative approaches considered",
    ],
    timeline: "48 hours",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Review & iterate",
    description: "We schedule a review call, incorporate your feedback, and refine until you're satisfied.",
    details: [
      "Walk through the design together",
      "Discuss trade-offs and alternatives",
      "Incorporate your domain knowledge",
      "Unlimited revisions until approved",
    ],
    timeline: "1-3 revision cycles",
  },
  {
    number: "05",
    icon: Video,
    title: "Delivery & handoff",
    description: "You receive the complete package: ERD, migrations, ORM models, and a recorded walkthrough.",
    details: [
      "Final ERD with all relationships",
      "SQL migration files (up and down)",
      "ORM models for your stack",
      "30-minute recorded walkthrough video",
      "Written design rationale document",
    ],
    timeline: "Final delivery",
  },
];

const whatWeNeed = [
  "Product description or PRD",
  "Current schema export (if exists)",
  "Tech stack details (DB, ORM, language)",
  "User flows or wireframes (optional)",
  "Compliance requirements (if any)",
  "Expected user count and data volume",
];

const whatYouGet = [
  "Visual ERD with all tables and relationships",
  "SQL migrations with up/down scripts",
  "ORM models (Prisma, Drizzle, etc.)",
  "RLS policies for tenant isolation",
  "Index recommendations",
  "Constraint definitions",
  "Seed data scripts",
  "Written design documentation",
  "30-minute video walkthrough",
  "30 days of async support",
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How it works
            </h1>
            <p className="text-xl text-muted-foreground">
              A clear, repeatable process from intake to delivery. 
              No surprises, no ambiguity.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-8 rounded-2xl bg-secondary/20 border border-border"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-primary">
                        Step {step.number}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        • {step.timeline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 -bottom-8 w-0.5 h-8 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need / What You Get */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* What we need */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What we need from you</h2>
              <ul className="space-y-3">
                {whatWeNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you get */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What you receive</h2>
              <ul className="space-y-3">
                {whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optional add-on */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need implementation support?
            </h2>
            <p className="text-muted-foreground mb-6">
              Don't want to run migrations yourself? We offer implementation support 
              as an add-on. We'll set up your database, run migrations, and verify 
              everything works in your environment.
            </p>
            <Link to="/services">
              <Button variant="outline">
                View service add-ons
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Request a schema audit and we'll take it from there.
            </p>
            <Link to="/contact">
              <Button size="xl">
                Request a Schema Audit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
