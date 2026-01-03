import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Productized database design services
            </h1>
            <p className="text-xl text-muted-foreground">
              Clear deliverables. Fixed timelines. No hourly billing surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative p-8 lg:p-12 rounded-2xl bg-secondary/20 border border-border"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {service.priceNote}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                      {service.name}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="text-4xl font-bold gradient-text">
                      {service.price}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.timeline}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left column */}
                  <div className="space-y-8">
                    {/* Best for */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Best for
                      </h3>
                      <ul className="space-y-2">
                        {service.bestFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inputs needed */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        What we need from you
                      </h3>
                      <ul className="space-y-2">
                        {service.inputsNeeded.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-8">
                    {/* Deliverables */}
                    <div>
                      <h3 className="font-semibold mb-4">Deliverables</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Add-ons */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Plus className="h-5 w-5 text-primary" />
                        Add-ons
                      </h3>
                      <div className="space-y-3">
                        {service.addOns.map((addon, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-lg bg-card/50 border border-border"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="font-medium">{addon.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {addon.description}
                                </div>
                              </div>
                              <div className="text-primary font-medium whitespace-nowrap">
                                {addon.price}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-border">
                  <Link to="/contact">
                    <Button size="lg">
                      Get started with {service.name}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom pricing note */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-xl font-bold mb-4">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              For complex systems, legacy migrations, or enterprise requirements, 
              we offer custom scoping and pricing. Let's talk about your specific needs.
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Discuss custom project
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
