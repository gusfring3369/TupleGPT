import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";

const tiers = [
  {
    id: "audit",
    name: siteConfig.pricing.audit.name,
    price: "$1,500",
    priceNote: "starting at",
    description: siteConfig.pricing.audit.description,
    cta: "Request audit",
    popular: false,
    features: [
      { text: "Complete schema analysis", included: true },
      { text: "Prioritized issue list", included: true },
      { text: "Fix recommendations with SQL", included: true },
      { text: "Index optimization", included: true },
      { text: "Security review", included: true },
      { text: "30-min walkthrough call", included: true },
      { text: "ORM models", included: false },
      { text: "Migration files", included: false },
      { text: "Async support", included: false },
    ],
  },
  {
    id: "end-to-end",
    name: siteConfig.pricing.endToEnd.name,
    price: "$5,000",
    priceNote: "starting at",
    description: siteConfig.pricing.endToEnd.description,
    cta: "Get started",
    popular: true,
    features: [
      { text: "Everything in Audit", included: true },
      { text: "Requirements session", included: true },
      { text: "Visual ERD", included: true },
      { text: "SQL migrations (up & down)", included: true },
      { text: "ORM models for your stack", included: true },
      { text: "RLS policies", included: true },
      { text: "Design rationale doc", included: true },
      { text: "Handoff video", included: true },
      { text: "30 days async support", included: true },
    ],
  },
  {
    id: "partner",
    name: siteConfig.pricing.partner.name,
    price: "$2,000",
    priceNote: "per month",
    description: siteConfig.pricing.partner.description,
    cta: "Book a call",
    popular: false,
    features: [
      { text: "Unlimited async questions", included: true },
      { text: "Schema reviews", included: true },
      { text: "Migration review & approval", included: true },
      { text: "Monthly architecture call", included: true },
      { text: "Priority response (< 4 hrs)", included: true },
      { text: "Proactive recommendations", included: true },
      { text: "Dedicated Slack channel", included: true },
      { text: "Hands-on implementation", included: "addon" },
      { text: "On-call support", included: "addon" },
    ],
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick the service that fits your needs. No hidden fees, no hourly surprises.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? "border-primary bg-secondary/40 shadow-lg shadow-primary/10"
                    : "border-border bg-secondary/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Most popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-text">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">
                      {tier.priceNote}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included === true ? (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : feature.included === "addon" ? (
                        <HelpCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included === false
                            ? "text-muted-foreground/50"
                            : feature.included === "addon"
                            ? "text-muted-foreground"
                            : ""
                        }
                      >
                        {feature.text}
                        {feature.included === "addon" && (
                          <span className="text-xs ml-1">(add-on)</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/contact">
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our guarantees
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-secondary/20 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Unlimited revisions</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.guarantees.revision}
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/20 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast turnaround</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.guarantees.timeline}
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/20 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Post-delivery support</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.guarantees.support}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom pricing */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-xl font-bold mb-4">
              Complex project? Need custom scope?
            </h3>
            <p className="text-muted-foreground mb-6">
              For legacy migrations, enterprise requirements, or multi-database systems, 
              we provide custom proposals after a discovery call.
            </p>
            <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                Schedule discovery call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
