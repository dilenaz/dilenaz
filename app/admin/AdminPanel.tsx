"use client";

import { FormEvent, useEffect, useState } from "react";

type Item = { id: number; kind: string; title: string; subtitle: string; imageUrl: string };

export default function AdminPanel({ userName, signOutPath }: { userName: string; signOutPath: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  async function loadItems() {
    const response = await fetch("/api/content");
    const data = await response.json() as { items?: Item[]; error?: string };
    if (response.ok) setItems(data.items ?? []); else setNotice(data.error ?? "İçerikler alınamadı.");
  }

  useEffect(() => { void loadItems(); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setNotice("");
    const form = new FormData(event.currentTarget);
    let imageUrl = "";
    const image = form.get("image");
    if (image instanceof File && image.size > 0) {
      const upload = new FormData(); upload.append("image", image);
      const uploadResponse = await fetch("/api/uploads", { method: "POST", body: upload });
      const uploadData = await uploadResponse.json() as { url?: string; error?: string };
      if (!uploadResponse.ok) { setNotice(uploadData.error ?? "Görsel yüklenemedi."); setBusy(false); return; }
      imageUrl = uploadData.url ?? "";
    }

    const response = await fetch("/api/content", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({
      kind: form.get("kind"), title: form.get("title"), subtitle: form.get("subtitle"), description: form.get("description"), linkUrl: form.get("linkUrl"), accent: form.get("accent"), sortOrder: Number(form.get("sortOrder")), imageUrl,
    }) });
    const data = await response.json() as { error?: string };
    if (response.ok) { event.currentTarget.reset(); setNotice("İçerik yayınlandı."); await loadItems(); } else setNotice(data.error ?? "İçerik kaydedilemedi.");
    setBusy(false);
  }

  async function remove(id: number) {
    if (!window.confirm("Bu içeriği kalıcı olarak silmek istiyor musun?")) return;
    const response = await fetch(`/api/content/${id}`, { method: "DELETE" });
    if (response.ok) { setNotice("İçerik silindi."); await loadItems(); } else setNotice("İçerik silinemedi.");
  }

  return (
    <main className="adminShell">
      <header className="adminHeader"><div><span>Dilenaz Studio</span><h1>İçerik paneli</h1><p>Hoş geldin, {userName}. Portföyünü buradan canlı tutabilirsin.</p></div><div><a href="/" target="_blank">Siteyi gör ↗</a><a href={signOutPath}>Çıkış</a></div></header>
      <div className="adminLayout">
        <form className="contentForm" onSubmit={submit}>
          <div className="formIntro"><span>Yeni içerik</span><h2>Vitrine bir şey ekle.</h2></div>
          <label>İçerik türü<select name="kind" required><option value="project">Proje</option><option value="achievement">Başarı / Belge</option><option value="post">LinkedIn gönderisi</option></select></label>
          <label>Başlık<input name="title" required placeholder="Örn. Akıllı Tarım Sistemi" /></label>
          <label>Alt başlık<input name="subtitle" placeholder="Teknolojiler, kurum veya belge türü" /></label>
          <label>Açıklama<textarea name="description" rows={5} placeholder="Ne yaptın, etkisi ne oldu?" /></label>
          <div className="formRow"><label>Renk<select name="accent"><option value="lavender">Lavanta</option><option value="pink">Pembe</option><option value="yellow">Sarı</option><option value="blue">Mavi</option><option value="mint">Mint</option></select></label><label>Sıra<input name="sortOrder" type="number" defaultValue="0" /></label></div>
          <label>Bağlantı<input name="linkUrl" type="url" placeholder="LinkedIn gönderisi veya proje adresi" /></label>
          <label className="fileField">Görsel <small>JPG, PNG, WEBP veya GIF · en fazla 5 MB</small><input name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif" /></label>
          <button disabled={busy}>{busy ? "Yayınlanıyor…" : "Yayınla ↗"}</button>{notice && <p className="formNotice" role="status">{notice}</p>}
        </form>
        <section className="contentList"><div className="listHead"><span>Yayındaki içerikler</span><b>{items.length}</b></div>{items.map((item) => <article key={item.id}>{item.imageUrl ? <img src={item.imageUrl} alt="" /> : <div className="miniVisual">{item.title.slice(0, 1)}</div>}<div><small>{item.kind}</small><h3>{item.title}</h3><p>{item.subtitle}</p></div><button type="button" onClick={() => remove(item.id)} aria-label={`${item.title} içeriğini sil`}>Sil</button></article>)}</section>
      </div>
    </main>
  );
}
