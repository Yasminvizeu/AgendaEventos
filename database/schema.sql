CREATE DATABASE IF NOT EXISTS `projeto_web`;

USE `projeto_web`;

-- Tabela Agenda
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- Tabela Evento
CREATE TABLE IF NOT EXISTS `evento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `agendaId` INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_evento_agenda`
    FOREIGN KEY (`agendaId`) REFERENCES `agenda`(`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

