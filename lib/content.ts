import { asc, eq } from "drizzle-orm";
import { getDb } from "../db";
import { portfolioItems, type PortfolioItem } from "../db/schema";

export type ContentKind = "project" | "achievement" | "post";
export type PortfolioContent = Omit<PortfolioItem, "createdAt"> & { createdAt?: string };

export const fallbackContent: PortfolioContent[] = [
  {
    id: 1,
    kind: "project",
    title: "PLC-SQL Gerçek Zamanlı Veri Sistemi",
    subtitle: "Python · PLC · Microsoft SQL Server · Modbus TCP / S7",
    description: "Üretim hattındaki PLC, sensör ve robot verilerini gerçek zamanlı işleyen; analiz, süreç grafikleri ve otomatik performans raporları üreten endüstriyel sistem.",
    imageUrl: "",
    linkUrl: "",
    accent: "lavender",
    sortOrder: 1,
    published: true,
  },
  {
    id: 2,
    kind: "project",
    title: "Karabük Eflani Hayır Vakfı",
    subtitle: "Next.js · React · PHP · REST API · Tailwind CSS",
    description: "Vakfın faaliyet, kampanya, bağış ve başvuru süreçlerini dijitale taşıyan; veri tabanı ve API entegrasyonlarına sahip kurumsal web platformu.",
    imageUrl: "",
    linkUrl: "",
    accent: "pink",
    sortOrder: 2,
    published: true,
  },
  {
    id: 3,
    kind: "project",
    title: "Auto Tokyo",
    subtitle: "Next.js · React · MySQL · REST API",
    description: "Araç listeleme, filtreleme, favoriler, karşılaştırma ve randevu akışlarını tek yerde buluşturan; yönetim paneline sahip otomotiv web platformu.",
    imageUrl: "",
    linkUrl: "",
    accent: "yellow",
    sortOrder: 3,
    published: true,
  },
  {
    id: 4,
    kind: "project",
    title: "NAZ Kişisel Asistan",
    subtitle: "Yapay zekâ · Telegram Bot · Web Panel · Otomasyon",
    description: "Görev, zamanlanmış hatırlatma ve kişiselleştirilmiş önerileri bir araya getirerek manuel planlama süresini yaklaşık %80 azaltan yapay zekâ destekli asistan.",
    imageUrl: "",
    linkUrl: "",
    accent: "blue",
    sortOrder: 4,
    published: true,
  },
  {
    id: 101,
    kind: "achievement",
    title: "40+ öğrenci",
    subtitle: "Eğitim koordinasyonu",
    description: "Kampüs360 bünyesinde C# ve MySQL odaklı uygulamalı eğitim oturumları düzenledim; öğrencilere proje rehberliği ve mentorluk verdim.",
    imageUrl: "",
    linkUrl: "",
    accent: "pink",
    sortOrder: 1,
    published: true,
  },
  {
    id: 102,
    kind: "achievement",
    title: "100+ müşteri",
    subtitle: "Otomatik raporlama",
    description: "Üretim verilerinden hazırlanan haftalık performans raporlarının yüzü aşkın müşteriye otomatik ulaştırılmasını sağlayan akışı geliştirdim.",
    imageUrl: "",
    linkUrl: "",
    accent: "yellow",
    sortOrder: 2,
    published: true,
  },
  {
    id: 103,
    kind: "achievement",
    title: "%80 daha az süre",
    subtitle: "NAZ otomasyonu",
    description: "Kişisel asistan otomasyonuyla günlük planlama ve manuel görev takibine ayırdığım süreyi yaklaşık yüzde seksen azalttım.",
    imageUrl: "",
    linkUrl: "",
    accent: "lavender",
    sortOrder: 3,
    published: true,
  },
  {
    id: 301,
    kind: "post",
    title: "C# eğitim serimizin ilk oturumunu gerçekleştirdik",
    subtitle: "Kampüs360 · C# Eğitimi",
    description: "Temel C# konularını gerçek hayat örnekleri ve uygulamalarla ele aldığım ilk eğitim oturumunda, katılımcıların yazılım dünyasında sağlam bir temel oluşturmasını hedefledik.",
    imageUrl: "",
    linkUrl: "https://tr.linkedin.com/posts/dilenaz%C3%B6zdemir_csharp-softwareengineering-kariyer-activity-7406231874005553152-VXke",
    accent: "lavender",
    sortOrder: 4,
    published: true,
  },
  {
    id: 302,
    kind: "post",
    title: "42 saatlik EBST Hackathon deneyimi",
    subtitle: "Hackathon · Yapay zekâ · Afet teknolojileri",
    description: "Afet sonrası iletişim ve kurtarma süreçleri için SOS çağrıları, harita tabanlı konum, yapay zekâ destekli mesaj sınıflandırma, çevrimdışı mesajlaşma ve drone termal görüntü entegrasyonu içeren mobil çözüm geliştirdik.",
    imageUrl: "",
    linkUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7463585459378769920/",
    accent: "pink",
    sortOrder: 1,
    published: true,
  },
  {
    id: 303,
    kind: "post",
    title: "Girişimcilik Fikirleri Buluşuyor’da aktif görev aldım",
    subtitle: "Sunuculuk · Organizasyon · Liderlik",
    description: "Gençlik ve Spor Bakanlığı destekli projede sunuculuk görevini üstlendim; planlama, koordinasyon ve operasyon süreçlerine katkı sağladım. Bu deneyim iletişim, kriz yönetimi ve profesyonel ağ kurma becerilerimi güçlendirdi.",
    imageUrl: "",
    linkUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7457090029480374272/",
    accent: "yellow",
    sortOrder: 2,
    published: true,
  },
  {
    id: 304,
    kind: "post",
    title: "C# eğitim programımızı başarıyla tamamladık",
    subtitle: "C# · OOP · Eğitim · Mentorluk",
    description: "19 Aralık 2025–13 Mart 2026 arasında her cuma yürüttüğüm programda temel programlama, nesne yönelimli programlama, uygulama geliştirme ve problem çözme üzerine çalıştık; katılımcılara sertifikalarını takdim ettim.",
    imageUrl: "",
    linkUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7457085022525808640/",
    accent: "blue",
    sortOrder: 3,
    published: true,
  },
];

export async function getPortfolioContent(): Promise<PortfolioContent[]> {
  try {
    return await getDb()
      .select()
      .from(portfolioItems)
      .where(eq(portfolioItems.published, true))
      .orderBy(asc(portfolioItems.kind), asc(portfolioItems.sortOrder), asc(portfolioItems.id));
  } catch {
    return [...fallbackContent].sort((a, b) => a.kind.localeCompare(b.kind) || a.sortOrder - b.sortOrder || a.id - b.id);
  }
}
