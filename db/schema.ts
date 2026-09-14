import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const portfolioItems = sqliteTable(
  "portfolio_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    kind: text("kind", { enum: ["project", "achievement", "post"] }).notNull(),
    title: text("title").notNull(),
    subtitle: text("subtitle").notNull().default(""),
    description: text("description").notNull().default(""),
    imageUrl: text("image_url").notNull().default(""),
    linkUrl: text("link_url").notNull().default(""),
    accent: text("accent").notNull().default("lavender"),
    sortOrder: integer("sort_order").notNull().default(0),
    published: integer("published", { mode: "boolean" }).notNull().default(true),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("idx_portfolio_published_kind_sort").on(
      table.published,
      table.kind,
      table.sortOrder,
    ),
  ],
);

export type PortfolioItem = typeof portfolioItems.$inferSelect;
