import { useState } from "react";
import { ArrowRight, CheckCircle2, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";

const benefits = [
  "47-point checklist covering tenancy, auth, billing, and migrations",
  "Questions to ask before designing any schema",
  "Common mistakes to avoid",
  "Stack-specific considerations (Prisma, Drizzle, etc.)",
];

export default function DBIntakeChecklist() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", stack: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Download className="h-4 w-4" />
                Free resource
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{siteConfig.leadMagnet.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{siteConfig.leadMagnet.description}</p>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Check your email!</h3>
                  <p className="text-muted-foreground">The checklist is on its way to your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Get the free checklist</h3>
                  <Input placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <Input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <Input placeholder="Company (optional)" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  <Input placeholder="Tech stack (e.g., Next.js + Prisma)" value={formData.stack} onChange={(e) => setFormData({...formData, stack: e.target.value})} />
                  <Button type="submit" className="w-full" size="lg">Download checklist <ArrowRight className="h-4 w-4" /></Button>
                  <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 lg:hidden" />
    </Layout>
  );
}
