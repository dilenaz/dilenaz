import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { portfolioItems } from "../../../../db/schema";
import { getPortfolioAdmin } from "../../../../lib/admin-auth";

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await getPortfolioAdmin())) return Response.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 });
  const { id } = await context.params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) return Response.json({ error: "Geçersiz içerik." }, { status: 400 });
  await getDb().delete(portfolioItems).where(eq(portfolioItems.id, numericId));
  return Response.json({ ok: true });
}
