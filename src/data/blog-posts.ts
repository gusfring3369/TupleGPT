export const blogPosts = [
  {
    slug: "multitenant-postgres-patterns",
    title: "Multi-Tenant Postgres Patterns That Actually Scale",
    description: "Row-level, schema-per-tenant, or database-per-tenant? A practical comparison with real tradeoffs.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Multi-tenancy", "Postgres", "Architecture"],
    image: "/blog/multitenant.jpg",
    content: `
## TL;DR

There's no one-size-fits-all approach to multi-tenancy. Row-level isolation is simplest, schema-per-tenant offers stronger boundaries, and database-per-tenant is for when you need true isolation. Pick based on your compliance requirements and scaling trajectory.

## The Three Patterns

### 1. Row-Level Isolation

Every table has a \`tenant_id\` column. Your app filters by it.

\`\`\`sql
-- Every query needs this
SELECT * FROM orders WHERE tenant_id = $1;
\`\`\`

**Pros:** Simple, single connection pool, easy migrations
**Cons:** RLS complexity, potential data leaks if you forget a filter

### 2. Schema-per-Tenant

Each tenant gets their own Postgres schema within the same database.

\`\`\`sql
SET search_path TO tenant_123;
SELECT * FROM orders;
\`\`\`

**Pros:** Stronger isolation, tenant-specific customizations
**Cons:** More complex migrations, schema drift risk

### 3. Database-per-Tenant

Complete isolation. Each tenant has their own database.

**Pros:** Maximum isolation, easy compliance, simple backups
**Cons:** Connection overhead, complex orchestration

## Making the Decision

Start with row-level unless you have specific compliance requirements (HIPAA, SOC2 with strict isolation) or enterprise customers demanding it.

The operational complexity of schema-per-tenant is often underestimated. You'll need:
- Migration tooling that runs across all schemas
- Monitoring for schema drift
- Connection routing logic

## Implementation Notes

For row-level, always use Row Level Security (RLS):

\`\`\`sql
CREATE POLICY tenant_isolation ON orders
  USING (tenant_id = current_setting('app.current_tenant')::uuid);
\`\`\`

This makes forgetting a filter impossible.
    `,
  },
  {
    slug: "rbac-schema-design",
    title: "RBAC Schema Design for SaaS Applications",
    description: "How to model roles, permissions, and team hierarchies without painting yourself into a corner.",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["RBAC", "Permissions", "Schema Design"],
    image: "/blog/rbac.jpg",
    content: `
## TL;DR

Don't build permissions as boolean flags on users. Use a proper role-permission model with inheritance support. Your future self will thank you.

## The Wrong Way

\`\`\`sql
-- Don't do this
ALTER TABLE users ADD COLUMN can_edit_posts BOOLEAN DEFAULT false;
ALTER TABLE users ADD COLUMN can_delete_posts BOOLEAN DEFAULT false;
ALTER TABLE users ADD COLUMN can_manage_users BOOLEAN DEFAULT false;
\`\`\`

This doesn't scale. Adding a new permission means a migration.

## The Right Way

\`\`\`sql
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tenant_id UUID REFERENCES tenants(id),
  UNIQUE(name, tenant_id)
);

CREATE TABLE permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE role_permissions (
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE user_roles (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, role_id)
);
\`\`\`

## Adding Role Hierarchy

If you need admins to inherit editor permissions:

\`\`\`sql
ALTER TABLE roles ADD COLUMN parent_role_id UUID REFERENCES roles(id);
\`\`\`

Then use a recursive CTE to check permissions.
    `,
  },
  {
    slug: "stripe-subscriptions-database-schema",
    title: "Designing a Stripe Subscriptions Database Schema",
    description: "Sync Stripe webhooks to your database without data loss or race conditions.",
    date: "2024-01-05",
    readTime: "8 min read",
    tags: ["Billing", "Stripe", "Webhooks"],
    image: "/blog/stripe.jpg",
    content: `
## TL;DR

Never query Stripe in real-time for subscription status. Store it locally, sync via webhooks, and handle idempotency correctly.

## Core Tables

\`\`\`sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT NOT NULL,
  tenant_id UUID REFERENCES tenants(id),
  status TEXT NOT NULL, -- active, past_due, canceled, etc.
  plan_id TEXT NOT NULL,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_event_id TEXT UNIQUE NOT NULL,
  event_type TEXT NOT NULL,
  processed_at TIMESTAMPTZ,
  payload JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

## Handling Webhooks

Always check for duplicate events:

\`\`\`typescript
// Check idempotency first
const existing = await db.webhookEvents.findByStripeId(event.id);
if (existing) return { status: 200 };
\`\`\`

Process events in order using \`created\` timestamp when possible.
    `,
  },
  {
    slug: "prisma-multitenancy-guide",
    title: "Prisma Multi-Tenancy: A Complete Guide",
    description: "Configure Prisma for row-level and schema-level multi-tenancy with practical examples.",
    date: "2023-12-28",
    readTime: "15 min read",
    tags: ["Prisma", "Multi-tenancy", "ORM"],
    image: "/blog/prisma.jpg",
    content: `
## TL;DR

Prisma supports both row-level and schema-level multi-tenancy. Row-level is simpler; schema-level requires client extensions.

## Row-Level Approach

Add tenant_id to your schema:

\`\`\`prisma
model Order {
  id        String   @id @default(cuid())
  tenantId  String   @map("tenant_id")
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  // ... other fields
}
\`\`\`

Then extend the client:

\`\`\`typescript
const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async $allOperations({ args, query }) {
        args.where = { ...args.where, tenantId: getCurrentTenantId() };
        return query(args);
      },
    },
  },
});
\`\`\`

## Schema-Level Approach

Use Prisma's \`$executeRaw\` to set the schema:

\`\`\`typescript
await prisma.$executeRaw\`SET search_path TO \${tenantSchema}\`;
\`\`\`

This requires careful connection pool management.
    `,
  },
  {
    slug: "safe-database-migrations-saas",
    title: "Safe Database Migrations for SaaS",
    description: "How to ship schema changes without downtime or data loss. Blue-green, expand-contract, and rollback strategies.",
    date: "2023-12-20",
    readTime: "11 min read",
    tags: ["Migrations", "DevOps", "Zero Downtime"],
    image: "/blog/migrations.jpg",
    content: `
## TL;DR

Never run migrations that lock tables for long. Use expand-contract pattern. Always have a rollback plan.

## The Expand-Contract Pattern

Instead of renaming a column directly:

**Bad:**
\`\`\`sql
ALTER TABLE users RENAME COLUMN name TO full_name;
\`\`\`

**Good (3-step process):**

1. **Expand:** Add new column, backfill
\`\`\`sql
ALTER TABLE users ADD COLUMN full_name TEXT;
UPDATE users SET full_name = name WHERE full_name IS NULL;
\`\`\`

2. **Migrate code:** Update app to write to both, read from new

3. **Contract:** Remove old column after verification
\`\`\`sql
ALTER TABLE users DROP COLUMN name;
\`\`\`

## Lock-Free Index Creation

Always use CONCURRENTLY:

\`\`\`sql
CREATE INDEX CONCURRENTLY idx_orders_tenant 
ON orders(tenant_id);
\`\`\`

This doesn't block reads or writes.

## Testing Migrations

Run against a copy of production data. Measure lock times. Have rollback SQL ready.
    `,
  },
  {
    slug: "indexes-for-multitenant-saas",
    title: "Index Strategies for Multi-Tenant SaaS",
    description: "Which indexes actually help? Composite keys, partial indexes, and avoiding common mistakes.",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Performance", "Indexes", "Multi-tenancy"],
    image: "/blog/indexes.jpg",
    content: `
## TL;DR

Always put tenant_id first in composite indexes. Use partial indexes for status filters. Monitor unused indexes.

## Composite Index Ordering

tenant_id should be the leading column:

\`\`\`sql
-- Good: filters tenant first, then date
CREATE INDEX idx_orders_tenant_date 
ON orders(tenant_id, created_at DESC);

-- Bad: date first means scanning all tenants
CREATE INDEX idx_orders_date_tenant 
ON orders(created_at DESC, tenant_id);
\`\`\`

## Partial Indexes

If you query by status frequently:

\`\`\`sql
-- Only index active orders
CREATE INDEX idx_orders_active 
ON orders(tenant_id, created_at) 
WHERE status = 'active';
\`\`\`

This is smaller and faster than a full index.

## Finding Unused Indexes

\`\`\`sql
SELECT schemaname, relname, indexrelname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0 AND indexrelname NOT LIKE 'pg_%';
\`\`\`

Remove indexes with zero scans (after confirming they're not used in rare queries).
    `,
  },
];

export type BlogPost = typeof blogPosts[number];
