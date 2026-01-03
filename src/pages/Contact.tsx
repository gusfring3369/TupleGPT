import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Request received!</h1>
            <p className="text-muted-foreground">We'll review your submission and get back to you within 1 business day.</p>
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
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Request a Schema Audit</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">Tell us about your project. We'll get back to you within 1 business day.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-secondary/20 border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name *" required />
                <Input type="email" placeholder="Email *" required />
              </div>
              <Input placeholder="Company" />
              
              <Select>
                <SelectTrigger><SelectValue placeholder="Product stage" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="idea">Idea / Planning</SelectItem>
                  <SelectItem value="mvp">Building MVP</SelectItem>
                  <SelectItem value="launched">Launched</SelectItem>
                  <SelectItem value="scaling">Scaling</SelectItem>
                </SelectContent>
              </Select>

              <div className="grid sm:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Database" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="postgres">PostgreSQL</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="sqlite">SQLite</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Multi-tenancy needed?" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="unsure">Unsure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Input placeholder="Tech stack (e.g., Next.js, Prisma, Supabase)" />
              <Textarea placeholder="Tell us about your project and pain points..." rows={4} />
              <Input placeholder="Link to existing schema or repo (optional)" />

              <Button type="submit" size="lg" className="w-full">Submit request <ArrowRight className="h-4 w-4" /></Button>
              <p className="text-xs text-muted-foreground text-center">Or email us directly at {siteConfig.email}</p>
            </form>
          </div>
        </div>
      </section>
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
