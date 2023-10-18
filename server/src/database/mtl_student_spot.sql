CREATE DATABASE IF NOT EXISTS `mtl_student_spot_database`;
USE `mtl_student_spot_database`;

-- Dumping structure for table mtl_student_spot_database.users

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `first_name` varchar(16) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Dumping data for table mtl_student_spot_database.users: ~0 rows (approximately)


INSERT INTO `mtl_student_spot_database`.`users` (`user_id`, `last_name`, `first_name`, `email`, `phone_number`, `password`) VALUES ('1', 'Munto', 'Kevin', 'muntokevin@gmail.com', '0762563717', 'azerty12');
INSERT INTO `mtl_student_spot_database`.`users` (`user_id`, `last_name`, `first_name`, `email`, `phone_number`, `password`) VALUES ('2', 'Damois', 'Quentin', 'damoisquentin@gmail.com', '0612345678', 'qsdfgh12');
INSERT INTO `mtl_student_spot_database`.`users` (`user_id`, `last_name`, `first_name`, `email`, `phone_number`, `password`) VALUES ('3', 'Leroi--Morant', 'Olivier', 'olivier@gmail.com', '0678541587', 'wxcvbn12');

DROP TABLE IF EXISTS `rating`;





-- Dumping structure for table mtl_student_spot_database.places
DROP TABLE IF EXISTS `places`;

CREATE TABLE `places` (
  `place_id` int NOT NULL,
  `place_name` varchar(45) NOT NULL,
  `place_address` varchar(45) NOT NULL,
  `photo_url` varchar(45) NOT NULL,
  `place_type` varchar(45) NOT NULL,
  PRIMARY KEY (`place_id`),
  UNIQUE KEY `place_id_UNIQUE` (`place_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table mtl_student_spot_database.places: ~0 rows (approximately)

INSERT INTO `mtl_student_spot_database`.`places` (`place_id`, `place_name`, `place_address`, `photo_url`, `place_type`) VALUES ('1', 'Tim Hortons ', 'Rue St Cath', 'urlTimmy', 'Restaurant');
INSERT INTO `mtl_student_spot_database`.`places` (`place_id`, `place_name`, `place_address`, `photo_url`, `place_type`) VALUES ('2', 'Casino', '1 Place du Casino', 'urlCasino', 'Activity');
INSERT INTO `mtl_student_spot_database`.`places` (`place_id`, `place_name`, `place_address`, `photo_url`, `place_type`) VALUES ('3', 'Mont Royal', 'Colline du Mont Royal', 'urlMroyal', 'Travel');


CREATE TABLE `rating` (
  `id` int NOT NULL,
  `idPlace` int NOT NULL,
  `CommentRate` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `HygieneRating` int,
  `AmbianceRating` int,
  `PriceRating` int,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `mtl_student_spot_database`.`rating` (`id`, `idPlace`, `CommentRate`, `HygieneRating`, `AmbianceRating`, `PriceRating`) VALUES ('1', '3', 'I like to go hiking here.', '3', '3', '3');
INSERT INTO `mtl_student_spot_database`.`rating` (`id`, `idPlace`, `CommentRate`, `HygieneRating`, `AmbianceRating`, `PriceRating`) VALUES ('2','1', 'They make my favorite coffee.', '5', '2', '2');
INSERT INTO `mtl_student_spot_database`.`rating` (`id`, `idPlace`, `CommentRate`, `HygieneRating`, `AmbianceRating`, `PriceRating`) VALUES ('3', '2', 'I lost one hundred dollar here.', '4', '4', '1');