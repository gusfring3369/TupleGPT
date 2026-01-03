import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 max-w-4xl">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {study.description}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-8 border-y border-border bg-card/30">
        <div className="container">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {study.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground/50 mt-1">
                  ({metric.note})
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Context</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Product</div>
                <div className="font-medium">{study.context.product}</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Stack</div>
                <div className="font-medium">{study.context.stack}</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                <div className="font-medium">{study.context.timeline}</div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Team Size</div>
                <div className="font-medium">{study.context.teamSize}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 lg:py-16 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Problems</h2>
            <ul className="space-y-3">
              {study.problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <span className="text-destructive font-bold">{i + 1}.</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 lg:py-16 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Solution</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{
                  __html: study.solution
                    .replace(/## (.*)/g, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
                    .replace(/### (.*)/g, '<h4 class="text-lg font-semibold mt-6 mb-3">$1</h4>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="p-4 rounded-lg bg-secondary/50 border border-border overflow-x-auto font-mono text-sm"><code>$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary/50 font-mono text-sm">$1</code>')
                    .replace(/\n\n/g, '</p><p class="text-muted-foreground">')
                    .replace(/^/, '<p class="text-muted-foreground">')
                    .replace(/$/, '</p>')
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 lg:py-16 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Deliverables</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {study.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-16 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <ul className="space-y-3">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span>{result.text}</span>
                    {result.illustrative && (
                      <span className="text-xs text-muted-foreground ml-2">
                        (illustrative)
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Facing similar challenges?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help with your database architecture.
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
