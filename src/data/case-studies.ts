export const caseStudies = [
  {
    slug: "multitenant-rbac-billing",
    title: "Multi-Tenant RBAC + Billing for a B2B SaaS",
    description: "How we designed a complete schema for a project management SaaS with team hierarchies, role-based access, and Stripe integration.",
    tags: ["Multi-tenancy", "RBAC", "Billing"],
    metrics: [
      { label: "Query latency reduced", value: "73%", note: "illustrative" },
      { label: "Schema tables", value: "24", note: "production" },
      { label: "Design to delivery", value: "5 days", note: "actual" },
    ],
    context: {
      product: "B2B project management SaaS for agencies",
      stack: "Next.js, Prisma, PostgreSQL, Stripe",
      timeline: "1 week engagement",
      teamSize: "2 developers",
    },
    problems: [
      "Existing schema had no tenant isolation—all data in shared tables with no RLS",
      "Permissions were hardcoded boolean flags, impossible to extend",
      "Billing logic scattered across application code with no single source of truth",
      "No audit trail for compliance requirements from enterprise prospects",
    ],
    solution: `
## Approach

We started with a comprehensive intake session to understand the product roadmap and compliance requirements. The client had enterprise prospects asking about SOC2, which drove some design decisions.

### Tenancy Model

We chose row-level isolation with RLS policies. The client didn't need schema-per-tenant isolation, and the operational simplicity was worth it.

\`\`\`sql
CREATE POLICY tenant_isolation ON projects
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant')::uuid);
\`\`\`

### RBAC Architecture

Instead of boolean flags, we implemented a proper role-permission model:

- **Roles** are tenant-specific (each org can customize)
- **Permissions** are system-defined (consistent across all tenants)
- **Role inheritance** via parent_role_id for hierarchical permissions

### Billing Sync

We created dedicated tables for Stripe sync with idempotent webhook handling:

- \`subscriptions\` table mirrors Stripe state
- \`webhook_events\` table prevents duplicate processing
- \`subscription_items\` for usage-based billing support

### Audit Trail

Every mutation goes through a trigger that writes to \`audit_logs\`:

\`\`\`sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  action TEXT NOT NULL, -- INSERT, UPDATE, DELETE
  old_data JSONB,
  new_data JSONB,
  actor_id UUID,
  tenant_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`
    `,
    deliverables: [
      "Complete ERD with 24 tables",
      "SQL migrations (up and down)",
      "Prisma schema with relations",
      "RLS policies for all tenant-scoped tables",
      "Stripe webhook handler boilerplate",
      "30-minute handoff video walkthrough",
    ],
    results: [
      { text: "Reduced average query latency by 73% with proper indexing", illustrative: true },
      { text: "Enabled enterprise sales with audit trail compliance", illustrative: false },
      { text: "Simplified permission checks from 50+ conditionals to 3 RLS policies", illustrative: false },
    ],
  },
  {
    slug: "migration-hardening",
    title: "Migration Hardening for a Growing SaaS",
    description: "Fixing a fragile migration setup that was blocking feature deployments and causing downtime.",
    tags: ["Migrations", "Performance", "DevOps"],
    metrics: [
      { label: "Deployment downtime", value: "0", note: "after fix" },
      { label: "Migration time", value: "< 2s", note: "p99" },
      { label: "Blocked deploys resolved", value: "12", note: "backlog" },
    ],
    context: {
      product: "Analytics SaaS with 500+ customers",
      stack: "Ruby on Rails, PostgreSQL 14",
      timeline: "3 days engagement",
      teamSize: "5 developers",
    },
    problems: [
      "Migrations taking 10+ minutes, blocking deployments",
      "Several migrations failed mid-way, leaving database in inconsistent state",
      "No rollback strategy—failed migrations required manual fixes",
      "Team afraid to make schema changes, causing technical debt accumulation",
    ],
    solution: `
## Approach

We audited the existing migration history and identified the core issues:

### Problem 1: Table Locks

Several migrations used patterns that locked tables for the entire duration:

\`\`\`ruby
# This locks the entire table
add_column :events, :processed, :boolean, default: false
\`\`\`

We rewrote these to be lock-free:

\`\`\`ruby
# Add column without default first
add_column :events, :processed, :boolean
# Then set default for new rows
change_column_default :events, :processed, false
# Backfill in batches
Event.in_batches.update_all(processed: false)
\`\`\`

### Problem 2: Missing Concurrency

All index creations were blocking. We converted to CONCURRENTLY:

\`\`\`ruby
disable_ddl_transaction!

def change
  add_index :events, :user_id, algorithm: :concurrently
end
\`\`\`

### Problem 3: No Rollbacks

We added explicit rollback methods and tested each one:

\`\`\`ruby
def up
  add_column :users, :email_verified, :boolean
end

def down
  remove_column :users, :email_verified
end
\`\`\`

### CI/CD Integration

We added migration testing to their CI pipeline:
- Run against a copy of production schema
- Measure lock duration
- Fail if any migration takes > 5 seconds
    `,
    deliverables: [
      "Audit report of 47 existing migrations",
      "Rewrote 12 blocking migrations",
      "Migration safety checklist for the team",
      "CI/CD pipeline configuration",
      "Runbook for handling failed migrations",
    ],
    results: [
      { text: "Zero-downtime deployments achieved", illustrative: false },
      { text: "Cleared 12-migration backlog that was blocking features", illustrative: false },
      { text: "Team confidence restored—now shipping schema changes weekly", illustrative: false },
    ],
  },
];

export type CaseStudy = typeof caseStudies[number];
