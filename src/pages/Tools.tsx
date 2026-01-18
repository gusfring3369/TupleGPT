import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />

        <div className="container relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight flex items-center gap-3">
              <span className="inline-block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                Free Tools
              </span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="inline-block align-middle text-primary"><circle cx="18" cy="18" r="18" fill="currentColor" fillOpacity="0.12"/><path d="M10 19l4.5 4.5L26 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </h1>
            <p className="text-xl font-semibold mb-4">Free tools for the community</p>
            <p className="text-lg text-muted-foreground">
              Discover a suite of free, powerful tools tailored for SaaS companies, designed to streamline your workflow and boost your productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container">
          <div className="grid gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => (
              <div
                key={tool.slug}
                className="p-6 rounded-2xl bg-secondary/20 border border-border"
              >
                <h2 className="text-2xl font-bold mb-3">{tool.name}</h2>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Link to={`/tools/${tool.slug}`} className="text-primary font-medium">
                  Try tool
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
