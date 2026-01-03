import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog-posts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const allTags = ["All", "Multi-tenancy", "RBAC", "Billing", "Prisma", "Migrations", "Performance"];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = activeTag === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.tags.some((tag) => tag.includes(activeTag)));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Technical deep-dives on database design, multi-tenancy, and SaaS architecture.
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

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-all flex flex-col"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No posts found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
