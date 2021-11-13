CREATE SCHEMA `ensolvers` ;
USE `ensolvers` ;
CREATE TABLE `folder` (
  `folder_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(45) NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`folder_id`)
)
AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
CREATE TABLE `work` (
  `work_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(45) NOT NULL,
  `mark` BOOLEAN NOT NULL,
  `folder_id` smallint unsigned NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`work_id`),
  KEY `idx_fk_folder_id` (`folder_id`),
  CONSTRAINT `fk_work_folder` FOREIGN KEY (`folder_id`) REFERENCES `folder` (`folder_id`) ON DELETE CASCADE
)
AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
flush privileges;

INSERT INTO folder
(`description`)
VALUES
('Work');
INSERT INTO folder
(`description`)
VALUES
('Daily Tasks');

INSERT INTO `ensolvers`.`work`
(`description`,
`mark`,
`folder_id`)
VALUES
('Prepare weekly report',
true,
1);
INSERT INTO `ensolvers`.`work`
(`description`,
`mark`,
`folder_id`)
VALUES
('Write to Candidates',
true,
1);
INSERT INTO `ensolvers`.`work`
(`description`,
`mark`,
`folder_id`)
VALUES
('Buy groceries',
false,
2);

