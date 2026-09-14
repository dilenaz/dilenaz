import { getPortfolioContent, type PortfolioContent } from "../lib/content";

export const dynamic = "force-dynamic";

const experiences = [
  {
    period: "Tem 2026 — Ağu 2026",
    role: "Yazılım / Bilgi İşlem Stajyeri",
    company: "Karakaya86",
    copy: "Endüstriyel otomasyon, gerçek zamanlı veri işleme, SQL tabanlı raporlama ve Next.js kurumsal web projelerinde uçtan uca görev aldım.",
  },
  {
    period: "Ara 2025 — Mar 2026",
    role: "Eğitim Koordinatörü",
    company: "Kampüs360 Kulübü",
    copy: "40'tan fazla öğrenci için C# ve MySQL eğitimleri planladım, uygulamalı oturumlar yürüttüm ve proje mentorluğu yaptım.",
  },
];

function Visual({ item }: { item: PortfolioContent }) {
  if (item.imageUrl) {
    return <img src={item.imageUrl} alt={`${item.title} görseli`} loading="lazy" />;
  }
  return (
    <div className="projectVisualFallback" aria-hidden="true">
      <span>{item.title.slice(0, 1)}</span>
      <i />
    </div>
  );
}

export default async function Home() {
  const content = await getPortfolioContent();
  const projects = content.filter((item) => item.kind === "project");
  const achievements = content.filter((item) => item.kind === "achievement");
  const posts = content.filter((item) => item.kind === "post");

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dilenaz Özdemir",
          url: "https://dilenazozdemir.com.tr",
          image: "https://dilenazozdemir.com.tr/profile-dilenaz.jpg",
          jobTitle: "Yazılım Mühendisliği Öğrencisi",
          alumniOf: { "@type": "CollegeOrUniversity", name: "Aksaray Üniversitesi" },
          sameAs: ["https://www.linkedin.com/in/dilenazözdemir", "https://github.com/dilenaz"],
          knowsAbout: ["Web geliştirme", "Endüstriyel otomasyon", "Yapay zekâ", "Veri sistemleri", "C#", "Python"]
        }).replace(/</g, "\\u003c") }}
      />
      <nav className="nav" aria-label="Ana navigasyon">
        <a className="wordmark" href="#top">Dilenaz<span>.</span></a>
        <div className="navLinks">
          <a href="#projeler">Projeler</a>
          <a href="#deneyim">Deneyim</a>
          <a href="#basarilar">Başarılar</a>
          <a href="#linkedin">LinkedIn</a>
          <a className="navCta" href="mailto:dilenazozdemir@gmail.com">İletişim ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroIntro">
          <div className="heroMeta"><span className="statusDot" /> Yazılım mühendisliği öğrencisi · Aksaray</div>
          <h1>Meraktan <span>çalışan ürünlere.</span></h1>
          <p>Üretim verisini anlık izleyen sistemlerden yapay zekâ destekli asistanlara; fikirleri tasarlıyor, kodluyor ve uçtan uca hayata geçiriyorum.</p>
          <div className="heroActions"><a className="navCta" href="#projeler">Projeleri gör ↓</a><a href="mailto:dilenazozdemir@gmail.com">İletişim ↗</a></div>
        </div>
        <div className="heroShowcase">
          <div className="heroArtwork"><img src="/dilenaz-hero.png" alt="Dilenaz Özdemir — Yazılım, otomasyon ve gerçek dünya çözümleri" /></div>
          <figure className="profilePortrait">
            <img src="/profile-dilenaz.jpg" alt="Dilenaz Özdemir portresi" />
          </figure>
        </div>
      </section>

      <section className="workSection" id="projeler">
        <header className="sectionHead"><p>Seçili projeler</p><span>({String(projects.length).padStart(2, "0")})</span></header>
        <div className="portfolioGrid">
          {projects.map((project, index) => (
            <article className={`portfolioCard ${project.accent}`} key={project.id}>
              <div className="portfolioVisual"><Visual item={project} /></div>
              <div className="portfolioCopy">
                <div className="cardTop"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.linkUrl ? "↗" : "•"}</span></div>
                <p>{project.subtitle}</p>
                <h2>{project.title}</h2>
                <span>{project.description}</span>
                {project.linkUrl && <a className="textLink" href={project.linkUrl} target="_blank" rel="noreferrer">Projeyi incele ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experienceSection" id="deneyim">
        <header className="sectionHead darkHead"><p>Deneyim & eğitim</p><span>(2025—2028)</span></header>
        <div className="experienceList">
          {experiences.map((item) => (
            <article key={item.company}>
              <span>{item.period}</span><div><p>{item.company}</p><h3>{item.role}</h3></div><p>{item.copy}</p>
            </article>
          ))}
          <article>
            <span>Beklenen mezuniyet · 2028</span><div><p>Aksaray Üniversitesi</p><h3>Yazılım Mühendisliği</h3></div><p>Lisans programı. Veri yapıları, algoritmalar, görsel programlama, veri tabanları ve gömülü sistemler odağı.</p>
          </article>
        </div>
      </section>

      <section className="achievementSection" id="basarilar">
        <header className="sectionHead lightHead"><p>Başarılar & belgeler</p></header>
        <div className="achievementGrid">
          {achievements.map((item) => (
            <article className={`achievementCard ${item.accent}`} key={item.id}>
              <Visual item={item} />
              <small>{item.subtitle}</small><h3>{item.title}</h3><p>{item.description}</p>
              {item.linkUrl && <a href={item.linkUrl} target="_blank" rel="noreferrer">Belgeyi gör ↗</a>}
            </article>
          ))}
          <article className="achievementCard certificateCard">
            <div className="certificateSeal">✓</div><small>Sertifika & teşekkür</small><h3>UNIDES & C# Eğitimi</h3><p>Girişimcilik Fikirleri Buluşuyor projesi organizasyon sertifikası ve C# eğitimi eğitmenliği teşekkür belgesi.</p>
          </article>
        </div>
      </section>

      <section className="linkedinSection" id="linkedin">
        <header className="sectionHead darkHead"><p>LinkedIn’den son paylaşımlar</p><a href="https://linkedin.com/in/dilenazözdemir" target="_blank" rel="noreferrer">Profili aç ↗</a></header>
        {posts.length > 0 ? <div className="postGrid">{posts.map((post) => <article className="postCard" key={post.id}>{post.imageUrl && <img src={post.imageUrl} alt={`${post.title} gönderi görseli`} loading="lazy" />}<div><small>{post.subtitle || "LinkedIn gönderisi"}</small><h3>{post.title}</h3><p>{post.description}</p>{post.linkUrl && <a href={post.linkUrl} target="_blank" rel="noreferrer">LinkedIn’de oku ↗</a>}</div></article>)}</div> : <div className="linkedinEmpty"><span>in</span><div><h3>Gönderiler için alan hazır.</h3><p>Yönetim panelinden “LinkedIn gönderisi” seçerek gönderi bağlantısı, kısa metin ve ekran görüntüsünü ekleyebilirsin.</p><a href="/admin">Gönderi ekle ↗</a></div></div>}
      </section>

      <section className="contact" id="iletisim">
        <p>Yeni bir proje, staj veya iş birliği için</p><a href="mailto:dilenazozdemir@gmail.com">Konuşalım<span>↗</span></a>
      </section>

      <footer>
        <a className="wordmark footerMark" href="#top">Dilenaz<span>.</span></a>
        <div className="socials"><a href="mailto:dilenazozdemir@gmail.com">E-posta ↗</a><a href="https://github.com/dilenaz" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/dilenazözdemir" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <p>© {new Date().getFullYear()} Dilenaz Özdemir · Aksaray</p>
        <p className="siteCredit">Designed &amp; Developed by <a href="https://dilenazozdemir.com.tr">Dilenaz Özdemir</a></p>
      </footer>
    </main>
  );
}
