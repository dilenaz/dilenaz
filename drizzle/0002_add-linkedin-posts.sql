INSERT OR IGNORE INTO `portfolio_items`
(`id`,`kind`,`title`,`subtitle`,`description`,`image_url`,`link_url`,`accent`,`sort_order`,`published`)
VALUES
(301,'post','C# eğitim serimizin ilk oturumunu gerçekleştirdik','Kampüs360 · C# Eğitimi','Temel C# konularını gerçek hayat örnekleri ve uygulamalarla ele aldığım ilk eğitim oturumunda, katılımcıların yazılım dünyasında sağlam bir temel oluşturmasını hedefledik.','','https://tr.linkedin.com/posts/dilenaz%C3%B6zdemir_csharp-softwareengineering-kariyer-activity-7406231874005553152-VXke','lavender',1,true),
(302,'post','42 saatlik EBST Hackathon deneyimi','Hackathon · Yapay zekâ · Afet teknolojileri','Afet sonrası iletişim ve kurtarma süreçleri için SOS çağrıları, harita tabanlı konum, yapay zekâ destekli mesaj sınıflandırma, çevrimdışı mesajlaşma ve drone termal görüntü entegrasyonu içeren mobil çözüm geliştirdik.','','https://www.linkedin.com/in/dilenaz%C3%B6zdemir/recent-activity/all/','pink',2,true);
--> statement-breakpoint
PRAGMA optimize;
