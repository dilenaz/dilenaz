CREATE TABLE `portfolio_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kind` text NOT NULL,
	`title` text NOT NULL,
	`subtitle` text DEFAULT '' NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`image_url` text DEFAULT '' NOT NULL,
	`link_url` text DEFAULT '' NOT NULL,
	`accent` text DEFAULT 'lavender' NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`published` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_portfolio_published_kind_sort` ON `portfolio_items` (`published`,`kind`,`sort_order`);
--> statement-breakpoint
INSERT INTO `portfolio_items` (`id`,`kind`,`title`,`subtitle`,`description`,`accent`,`sort_order`) VALUES
(1,'project','PLC-SQL Gerçek Zamanlı Veri Sistemi','Python · PLC · Microsoft SQL Server · Modbus TCP / S7','Üretim hattındaki PLC, sensör ve robot verilerini gerçek zamanlı işleyen; analiz, süreç grafikleri ve otomatik performans raporları üreten endüstriyel sistem.','lavender',1),
(2,'project','Karabük Eflani Hayır Vakfı','Next.js · React · PHP · REST API · Tailwind CSS','Vakfın faaliyet, kampanya, bağış ve başvuru süreçlerini dijitale taşıyan; veri tabanı ve API entegrasyonlarına sahip kurumsal web platformu.','pink',2),
(3,'project','Auto Tokyo','Next.js · React · MySQL · REST API','Araç listeleme, filtreleme, favoriler, karşılaştırma ve randevu akışlarını tek yerde buluşturan; yönetim paneline sahip otomotiv web platformu.','yellow',3),
(4,'project','NAZ Kişisel Asistan','Yapay zekâ · Telegram Bot · Web Panel · Otomasyon','Görev, zamanlanmış hatırlatma ve kişiselleştirilmiş önerileri bir araya getirerek manuel planlama süresini yaklaşık %80 azaltan yapay zekâ destekli asistan.','blue',4),
(5,'project','Sağlık Takip Bilekliği','Arduino · MAX30102 · ADXL345 · DS18B20 · OLED','Nabız, vücut sıcaklığı ve hareket verilerini gerçek zamanlı izleyen; kritik değerlerde sesli ve titreşimli uyarı veren taşınabilir gömülü sistem.','mint',5),
(101,'achievement','40+ öğrenci','Eğitim koordinasyonu','Kampüs360 bünyesinde C# ve MySQL odaklı uygulamalı eğitim oturumları düzenledim; öğrencilere proje rehberliği ve mentorluk verdim.','pink',1),
(102,'achievement','100+ müşteri','Otomatik raporlama','Üretim verilerinden hazırlanan haftalık performans raporlarının yüzü aşkın müşteriye otomatik ulaştırılmasını sağlayan akışı geliştirdim.','yellow',2),
(103,'achievement','%80 daha az süre','NAZ otomasyonu','Kişisel asistan otomasyonuyla günlük planlama ve manuel görev takibine ayırdığım süreyi yaklaşık yüzde seksen azalttım.','lavender',3),
(201,'reference','Referanslar','Talep üzerine paylaşılabilir','Birlikte çalıştığım ekip ve proje paydaşlarının iletişim bilgilerini talep hâlinde paylaşabilirim. Yeni referansları yönetim panelinden buraya ekleyebilirim.','mint',1);
--> statement-breakpoint
PRAGMA optimize;
