import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { tools } from "@/data/tools";
import { toolRegistry } from "@/tools/registry";

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = tools.find((item) => item.slug === slug);
  const ToolComponent = slug ? toolRegistry[slug] : undefined;

  if (!tool) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Tool not found</h1>
            <p className="text-muted-foreground mb-6">
              The tool you are looking for does not exist.
            </p>
            <Link to="/tools" className="text-primary font-medium">
              Back to free tools
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />

        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
              Free tool
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{tool.name}</h1>
            <p className="text-lg text-muted-foreground">{tool.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-border">
        <div className="container">
          {ToolComponent ? (
            <ToolComponent />
          ) : (
            <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-secondary/20 p-8">
              <h2 className="text-2xl font-bold mb-3">Tool coming soon</h2>
              <p className="text-muted-foreground mb-6">
                This tool will run right here on TupleGPT. Add the tool logic in
                the tools folder and register it for this slug.
              </p>
              <Link to="/contact" className="text-primary font-medium">
                Request early access
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
