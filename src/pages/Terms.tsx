import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";

export default function Terms() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1>Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
            <p className="p-4 rounded-lg bg-secondary/30 border border-border text-sm">This is a placeholder terms of service. Please customize this content with your actual terms and have it reviewed by legal counsel.</p>
            <h2>Services</h2>
            <p>{siteConfig.name} provides database design consulting services as described on our website.</p>
            <h2>Payment</h2>
            <p>Payment terms are agreed upon before project commencement. All fees are due as specified in your project agreement.</p>
            <h2>Intellectual Property</h2>
            <p>Upon full payment, all deliverables become your property. We retain no rights to the schemas and code we create for you.</p>
            <h2>Contact</h2>
            <p>For questions about these terms, contact us at {siteConfig.email}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
