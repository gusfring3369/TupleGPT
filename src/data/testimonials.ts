export const testimonials = [
  {
    quote: "We were dreading our multi-tenant migration. ModelGPT delivered a production-ready schema in 4 days that would have taken us months to figure out. Worth every penny.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Acme Analytics",
    avatar: "/avatars/sarah.jpg",
    isPlaceholder: true,
  },
  {
    quote: "The RBAC schema they designed is elegant. We've added 15 new permission types since launch with zero migrations. That's the power of good upfront design.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer",
    company: "TeamSync",
    avatar: "/avatars/marcus.jpg",
    isPlaceholder: true,
  },
  {
    quote: "Our queries went from 800ms to 50ms after implementing their indexing recommendations. The ROI was immediate.",
    author: "Emily Watson",
    role: "Founder",
    company: "DataPipe",
    avatar: "/avatars/emily.jpg",
    isPlaceholder: true,
  },
];

export type Testimonial = typeof testimonials[number];
