CREATE TABLE `breakfast` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item1` text DEFAULT NULL,
  `item2` text DEFAULT NULL,
  `item3` text DEFAULT NULL,
  `item4` text DEFAULT NULL,
  `item5` text DEFAULT NULL,
  `item6` text DEFAULT NULL,
  `item7` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

CREATE TABLE `dinner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item1` text DEFAULT NULL,
  `item2` text DEFAULT NULL,
  `item3` text DEFAULT NULL,
  `item4` text DEFAULT NULL,
  `item5` text DEFAULT NULL,
  `item6` text DEFAULT NULL,
  `item7` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

CREATE TABLE `lunch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item1` text DEFAULT NULL,
  `item2` text DEFAULT NULL,
  `item3` text DEFAULT NULL,
  `item4` text DEFAULT NULL,
  `item5` text DEFAULT NULL,
  `item6` text DEFAULT NULL,
  `item7` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;