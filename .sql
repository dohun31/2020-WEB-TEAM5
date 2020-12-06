CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) 
