CREATE TABLE `meals2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `meal_type` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `usercity` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `userhotel` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4;