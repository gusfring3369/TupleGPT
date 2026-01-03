import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";

const principles = [
  { title: "Data integrity first", description: "Constraints and foreign keys aren't optional. Your schema should prevent bad data, not just store it." },
  { title: "Least privilege", description: "RLS policies, minimal permissions, secure defaults. Security is built in, not bolted on." },
  { title: "Migrations-first thinking", description: "Every schema decision considers how it will be deployed. No lock-heavy changes, always reversible." },
];

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About {siteConfig.name}</h1>
            <p className="text-xl text-muted-foreground mb-12">We exist because database rewrites are expensive. And preventable.</p>
            
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-muted-foreground">After 15+ years building and fixing data systems, we've seen the same patterns repeat: teams move fast, skip the schema design, and pay for it later with migrations that take weeks, performance issues that require rewrites, and security gaps that should never have existed.</p>
              <p className="text-muted-foreground">{siteConfig.name} is the service we wished existed when we were in the trenches. Expert database design, delivered as a productized service with clear deliverables and fixed timelines.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Our principles</h2>
            <div className="space-y-4 mb-16">
              {principles.map((p, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div><h3 className="font-bold mb-1">{p.title}</h3><p className="text-muted-foreground text-sm">{p.description}</p></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">{siteConfig.founder.name[0]}</div>
                <div>
                  <h3 className="text-xl font-bold">{siteConfig.founder.name}</h3>
                  <p className="text-primary text-sm mb-3">{siteConfig.founder.role}</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.founder.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
