import { env } from "cloudflare:workers";
import { getPortfolioAdmin } from "../../../lib/admin-auth";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(request: Request) {
  if (!(await getPortfolioAdmin())) return Response.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 });
  const form = await request.formData();
  const file = form.get("image");
  if (!(file instanceof File) || !allowedTypes.has(file.type)) return Response.json({ error: "JPG, PNG, WEBP veya GIF yükleyin." }, { status: 400 });
  if (file.size > 5 * 1024 * 1024) return Response.json({ error: "Görsel en fazla 5 MB olabilir." }, { status: 400 });

  const extension = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const key = `portfolio/${crypto.randomUUID()}.${extension}`;
  await env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: file.type } });
  return Response.json({ url: `/api/media?key=${encodeURIComponent(key)}` }, { status: 201 });
}
