DELETE FROM `portfolio_items`
WHERE `id` = 5 AND `kind` = 'project';
--> statement-breakpoint
DELETE FROM `portfolio_items`
WHERE `kind` = 'reference';
--> statement-breakpoint
PRAGMA optimize;
