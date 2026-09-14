UPDATE `portfolio_items`
SET `link_url` = 'https://www.linkedin.com/feed/update/urn:li:activity:7463585459378769920/',
    `sort_order` = 1
WHERE `id` = 302;
--> statement-breakpoint
UPDATE `portfolio_items` SET `sort_order` = 4 WHERE `id` = 301;
--> statement-breakpoint
INSERT OR IGNORE INTO `portfolio_items`
(`id`,`kind`,`title`,`subtitle`,`description`,`image_url`,`link_url`,`accent`,`sort_order`,`published`)
VALUES
(303,'post','Girişimcilik Fikirleri Buluşuyor’da aktif görev aldım','Sunuculuk · Organizasyon · Liderlik','Gençlik ve Spor Bakanlığı destekli projede sunuculuk görevini üstlendim; planlama, koordinasyon ve operasyon süreçlerine katkı sağladım. Bu deneyim iletişim, kriz yönetimi ve profesyonel ağ kurma becerilerimi güçlendirdi.','','https://www.linkedin.com/feed/update/urn:li:activity:7457090029480374272/','yellow',2,true),
(304,'post','C# eğitim programımızı başarıyla tamamladık','C# · OOP · Eğitim · Mentorluk','19 Aralık 2025–13 Mart 2026 arasında her cuma yürüttüğüm programda temel programlama, nesne yönelimli programlama, uygulama geliştirme ve problem çözme üzerine çalıştık; katılımcılara sertifikalarını takdim ettim.','','https://www.linkedin.com/feed/update/urn:li:activity:7457085022525808640/','blue',3,true);
--> statement-breakpoint
PRAGMA optimize;
