-- MySQL Script generated by MySQL Workbench
-- qua 17 abr 2019 15:24:27 -03
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema todo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `todo` ;

-- -----------------------------------------------------
-- Schema todo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todo` DEFAULT CHARACTER SET utf8 ;
USE `todo` ;

-- -----------------------------------------------------
-- Table `todo`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `todo`.`task` ;

CREATE TABLE IF NOT EXISTS `todo`.`task` (
  `idTask` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(60) NOT NULL,
  `status` TINYINT(2) NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idTask`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;