-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`UserType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UserType` (
  `idUserType` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUserType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `cellphone` VARCHAR(8) NOT NULL,
  `active` TINYINT NOT NULL,
  `idUserType` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  INDEX `fk_User_UserType_idx` (`idUserType` ASC) VISIBLE,
  CONSTRAINT `fk_User_UserType`
    FOREIGN KEY (`idUserType`)
    REFERENCES `mydb`.`UserType` (`idUserType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`brand` (
  `idBrand` INT NOT NULL AUTO_INCREMENT,
  `nameBrand` VARCHAR(45) NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`idBrand`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carSell`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carSell` (
  `idCarSell` INT NOT NULL AUTO_INCREMENT,
  `year` VARCHAR(4) NOT NULL,
  `color` VARCHAR(20) NOT NULL,
  `transmission` VARCHAR(20) NOT NULL,
  `licensePlate` VARCHAR(20) NOT NULL,
  `bodyShape` VARCHAR(20) NOT NULL,
  `version` VARCHAR(20) NOT NULL,
  `passangers` INT NOT NULL,
  `model` VARCHAR(20) NOT NULL,
  `price` INT NOT NULL,
  `active` TINYINT NOT NULL,
  `idBrand` INT NOT NULL,
  PRIMARY KEY (`idCarSell`),
  INDEX `fk_carSell_brand1_idx` (`idBrand` ASC) VISIBLE,
  CONSTRAINT `fk_carSell_brand1`
    FOREIGN KEY (`idBrand`)
    REFERENCES `mydb`.`brand` (`idBrand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carPhoto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carPhoto` (
  `idCarPhoto` INT NOT NULL AUTO_INCREMENT,
  `photo` LONGBLOB NOT NULL,
  `idCarSell` INT NOT NULL,
  PRIMARY KEY (`idCarPhoto`),
  INDEX `fk_carPhoto_carSell1_idx` (`idCarSell` ASC) VISIBLE,
  CONSTRAINT `fk_carPhoto_carSell1`
    FOREIGN KEY (`idCarSell`)
    REFERENCES `mydb`.`carSell` (`idCarSell`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`part`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`part` (
  `idPart` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `car` VARCHAR(50) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `bodyShape` VARCHAR(45) NOT NULL,
  `version` VARCHAR(45) NOT NULL,
  `generation` VARCHAR(45) NOT NULL,
  `idBrand` INT NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`idPart`),
  INDEX `fk_part_brand1_idx` (`idBrand` ASC) VISIBLE,
  CONSTRAINT `fk_part_brand1`
    FOREIGN KEY (`idBrand`)
    REFERENCES `mydb`.`brand` (`idBrand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`partPhoto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`partPhoto` (
  `idPartPhoto` INT NOT NULL AUTO_INCREMENT,
  `photo` LONGBLOB NOT NULL,
  `idPart` INT NOT NULL,
  PRIMARY KEY (`idPartPhoto`),
  INDEX `fk_partPhoto_part1_idx` (`idPart` ASC) VISIBLE,
  CONSTRAINT `fk_partPhoto_part1`
    FOREIGN KEY (`idPart`)
    REFERENCES `mydb`.`part` (`idPart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`review` (
  `idReview` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(100) NOT NULL,
  `stars` TINYINT(1) NOT NULL,
  `date` DATE NOT NULL,
  `active` TINYINT NOT NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`idReview`),
  INDEX `fk_review_User1_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `fk_review_User1`
    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carUser` (
  `idCarUser` INT NOT NULL AUTO_INCREMENT,
  `year` VARCHAR(4) NOT NULL,
  `licensePlate` VARCHAR(15) NOT NULL,
  `active` TINYINT NOT NULL,
  `idBrand` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idCarUser`),
  INDEX `fk_carUser_brand1_idx` (`idBrand` ASC) VISIBLE,
  INDEX `fk_carUser_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_carUser_brand1`
    FOREIGN KEY (`idBrand`)
    REFERENCES `mydb`.`brand` (`idBrand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carUser_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`service` (
  `idService` INT NOT NULL AUTO_INCREMENT,
  `service` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idService`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`appointment` (
  `idAppointment` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `hour` VARCHAR(45) NOT NULL,
  `active` TINYINT NOT NULL,
  `idCarUser` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  `idService` INT NOT NULL,
  PRIMARY KEY (`idAppointment`),
  INDEX `fk_appointment_carUser1_idx` (`idCarUser` ASC) VISIBLE,
  INDEX `fk_appointment_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_appointment_service1_idx` (`idService` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_carUser1`
    FOREIGN KEY (`idCarUser`)
    REFERENCES `mydb`.`carUser` (`idCarUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_service1`
    FOREIGN KEY (`idService`)
    REFERENCES `mydb`.`service` (`idService`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`favoriteCar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favoriteCar` (
  `idCarSell` INT NOT NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`idCarSell`, `idUser`),
  INDEX `fk_carSell_has_User_User1_idx` (`idUser` ASC) VISIBLE,
  INDEX `fk_carSell_has_User_carSell1_idx` (`idCarSell` ASC) VISIBLE,
  CONSTRAINT `fk_carSell_has_User_carSell1`
    FOREIGN KEY (`idCarSell`)
    REFERENCES `mydb`.`carSell` (`idCarSell`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carSell_has_User_User1`
    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`favoritePart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favoritePart` (
  `idPart` INT NOT NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`idPart`, `idUser`),
  INDEX `fk_part_has_User_User1_idx` (`idUser` ASC) VISIBLE,
  INDEX `fk_part_has_User_part1_idx` (`idPart` ASC) VISIBLE,
  CONSTRAINT `fk_part_has_User_part1`
    FOREIGN KEY (`idPart`)
    REFERENCES `mydb`.`part` (`idPart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_part_has_User_User1`
    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`repairCar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`repairCar` (
  `idRepairCar` INT NOT NULL AUTO_INCREMENT,
  `idAppointment` INT NOT NULL,
  `idCarUser` INT NOT NULL,
  PRIMARY KEY (`idRepairCar`),
  INDEX `fk_repairCar_appointment1_idx` (`idAppointment` ASC) VISIBLE,
  INDEX `fk_repairCar_carUser1_idx` (`idCarUser` ASC) VISIBLE,
  CONSTRAINT `fk_repairCar_appointment1`
    FOREIGN KEY (`idAppointment`)
    REFERENCES `mydb`.`appointment` (`idAppointment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_repairCar_carUser1`
    FOREIGN KEY (`idCarUser`)
    REFERENCES `mydb`.`carUser` (`idCarUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO UserType (name) values ("Administrador");
INSERT INTO UserType (name) values ("Cliente");