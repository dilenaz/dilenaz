import { asc } from "drizzle-orm";
import { getDb } from "../../../db";
import { portfolioItems } from "../../../db/schema";
import { getPortfolioAdmin } from "../../../lib/admin-auth";

const kinds = new Set(["project", "achievement", "post"]);
const accents = new Set(["lavender", "pink", "yellow", "blue", "mint"]);

export async function GET() {
  try {
    const rows = await getDb().select().from(portfolioItems).orderBy(asc(portfolioItems.kind), asc(portfolioItems.sortOrder));
    return Response.json({ items: rows });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "İçerikler alınamadı." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await getPortfolioAdmin())) return Response.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 });

  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const kind = String(payload.kind ?? "");
    const title = String(payload.title ?? "").trim();
    const accent = String(payload.accent ?? "lavender");
    if (!kinds.has(kind) || !title) return Response.json({ error: "Tür ve başlık zorunludur." }, { status: 400 });

    const [item] = await getDb().insert(portfolioItems).values({
      kind: kind as "project" | "achievement" | "post",
      title,
      subtitle: String(payload.subtitle ?? "").trim(),
      description: String(payload.description ?? "").trim(),
      imageUrl: String(payload.imageUrl ?? "").trim(),
      linkUrl: String(payload.linkUrl ?? "").trim(),
      accent: accents.has(accent) ? accent : "lavender",
      sortOrder: Number(payload.sortOrder) || 0,
      published: payload.published !== false,
    }).returning();
    return Response.json({ item }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "İçerik kaydedilemedi." }, { status: 500 });
  }
}
