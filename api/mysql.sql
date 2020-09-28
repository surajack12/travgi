triji_signup_1 | CREATE TABLE `triji_signup_1` (
  `uuid` varchar(15) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_num` varchar(13) NOT NULL,
  `phone_veri` tinyint(1) DEFAULT 0,
  `email` varchar(35) NOT NULL,
  `email_veri` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`uuid`)
)