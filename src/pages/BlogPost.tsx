import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Format the content
  const formattedContent = post.content
    .replace(/## TL;DR/g, '<div class="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-8"><h2 class="text-lg font-bold mb-3 text-primary">TL;DR</h2>')
    .replace(/## ([^#\n]+)/g, (match, p1, offset, string) => {
      // Close TL;DR div if it was opened
      const beforeMatch = string.substring(0, offset);
      if (beforeMatch.includes('TL;DR') && !beforeMatch.includes('</div>')) {
        return `</div><h2 class="text-2xl font-bold mt-12 mb-6">${p1}</h2>`;
      }
      return `<h2 class="text-2xl font-bold mt-12 mb-6">${p1}</h2>`;
    })
    .replace(/### ([^\n]+)/g, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="p-4 rounded-lg bg-secondary/50 border border-border overflow-x-auto font-mono text-sm my-4"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary/50 font-mono text-sm">$1</code>')
    .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4 leading-relaxed">');

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: `<p class="text-muted-foreground mb-4 leading-relaxed">${formattedContent}</p>`
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-secondary/30 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need help with your database architecture?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a production-ready schema designed by experts. No more guesswork.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Request a Schema Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 lg:py-16 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group p-5 rounded-xl bg-secondary/20 border border-border hover:border-primary/50 transition-all"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readTime}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
