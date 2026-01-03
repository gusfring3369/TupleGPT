import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1>Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
            <p className="p-4 rounded-lg bg-secondary/30 border border-border text-sm">This is a placeholder privacy policy. Please customize this content to reflect your actual data practices and legal requirements.</p>
            <h2>Information We Collect</h2>
            <p>When you use {siteConfig.name}, we may collect information you provide directly, such as your name, email, and project details when you submit a contact form.</p>
            <h2>How We Use Information</h2>
            <p>We use the information we collect to provide our services, communicate with you, and improve our offerings.</p>
            <h2>Contact</h2>
            <p>For privacy-related questions, contact us at {siteConfig.email}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
