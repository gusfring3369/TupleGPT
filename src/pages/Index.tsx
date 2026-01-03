import { Link } from "react-router-dom";
import { ArrowRight, Database, Shield, GitBranch, Zap, CheckCircle2, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { caseStudies } from "@/data/case-studies";
import { faqs } from "@/data/faqs";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const painPoints = [
  "Schema changes break things in production",
  "Multi-tenant design is unclear—worried about data leaks",
  "RBAC and permissions are a mess of conditionals",
  "Migrations are risky; deployments are stressful",
  "Slow queries eating your server budget",
  "Technical debt slowing down feature shipping",
];

const deliverables = [
  { icon: Database, text: "Visual ERD with all relationships" },
  { icon: Shield, text: "RLS policies for tenant isolation" },
  { icon: GitBranch, text: "SQL migrations (up and down)" },
  { icon: Zap, text: "Optimized indexes for your queries" },
  { icon: Users, text: "ORM models for your stack" },
];

const credibilityBadges = [
  { icon: Database, text: "Multi-tenancy" },
  { icon: Shield, text: "RBAC & Permissions" },
  { icon: GitBranch, text: "Migrations & Constraints" },
];

const whoFor = [
  "Indie hackers building their first SaaS",
  "Small teams (1-10 devs) using Postgres/MySQL",
  "Teams struggling with multi-tenancy or permissions",
  "Anyone tired of schema rewrites",
];

const whoNotFor = [
  "Enterprise with dedicated DBA teams",
  "Projects with no database needs",
  "Looking for managed database hosting",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Credibility badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
              {credibilityBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-balance">
              {siteConfig.tagline.split("—")[0]}—
              <span className="gradient-text">not months.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Schema Audit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero-secondary" size="xl">
                  Book a call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              Sound familiar?
            </h2>
            <p className="text-muted-foreground text-center mb-12 text-lg">
              These are the problems we solve every week.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How {siteConfig.name} works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three steps to a production-ready database.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Share your context",
                description: "Tell us about your product, stack, and pain points. We'll review your existing schema if you have one.",
              },
              {
                step: "02",
                title: "We design & iterate",
                description: "First ERD draft within 48 hours. We refine together until the schema fits your needs perfectly.",
              },
              {
                step: "03",
                title: "Ship with confidence",
                description: "Get migrations, ORM models, and documentation. Deploy knowing your data layer is solid.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-secondary/30 border border-border group hover:border-primary/50 transition-colors"
              >
                <span className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                What you get
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Everything you need to ship a production-ready database—no guesswork, no technical debt.
              </p>

              <div className="space-y-4">
                {deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schema Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary/30 border border-border p-8 grid-pattern">
                <div className="h-full flex flex-col items-center justify-center gap-6">
                  <div className="w-full max-w-xs p-4 rounded-lg bg-card border border-border font-mono text-sm">
                    <div className="text-primary mb-2">// users table</div>
                    <div className="text-muted-foreground">id: uuid</div>
                    <div className="text-muted-foreground">tenant_id: uuid</div>
                    <div className="text-muted-foreground">email: text</div>
                    <div className="text-muted-foreground">role_id: uuid</div>
                  </div>
                  <div className="w-full max-w-xs p-4 rounded-lg bg-card border border-border font-mono text-sm">
                    <div className="text-primary mb-2">// RLS policy</div>
                    <div className="text-muted-foreground">tenant_id = </div>
                    <div className="text-muted-foreground pl-2">current_tenant()</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who For / Not For */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                This is for you if...
              </h3>
              <ul className="space-y-3">
                {whoFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <X className="h-6 w-6 text-destructive" />
                Not the right fit if...
              </h3>
              <ul className="space-y-3">
                {whoNotFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Recent work
            </h2>
            <p className="text-muted-foreground text-lg">
              Real problems. Real solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.slice(0, 2).map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="group p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Read case study
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What clients say
            </h2>
            <p className="text-sm text-muted-foreground">
              (Placeholder testimonials—actual client quotes coming soon)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-secondary/30 border border-border"
              >
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                {testimonial.isPlaceholder && (
                  <div className="mt-4 text-xs text-muted-foreground/50">
                    * Placeholder testimonial
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Questions & answers
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6 bg-secondary/20"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to fix your database?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get a production-ready schema that scales. No more rewrites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Schema Audit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/resources/db-intake-checklist">
                <Button variant="hero-secondary" size="xl">
                  Get free checklist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
