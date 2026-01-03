import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { caseStudies } from "@/data/case-studies";
import { useState } from "react";
import { cn } from "@/lib/utils";

const allTags = ["All", "Multi-tenancy", "RBAC", "Billing", "Migrations", "Performance"];

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredStudies = activeTag === "All"
    ? caseStudies
    : caseStudies.filter((study) => study.tags.includes(activeTag));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case studies
            </h1>
            <p className="text-xl text-muted-foreground">
              Real problems we've solved. See how we approach database design challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-xl z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="group p-8 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-all"
              >
                {/* Tags */}
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

                {/* Title & Description */}
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-card/50 border border-border">
                      <div className="text-2xl font-bold gradient-text">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  Read full case study
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No case studies found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center p-6 rounded-lg bg-secondary/20 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> These are example scenarios with illustrative metrics 
              to demonstrate our approach. Actual client work is covered by NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
