create database parcInformatique;
CREATE TABLE admin (
   id_ad int(11)  PRIMARY KEY,
    nom_ad VARCHAR(50),
    email_ad VARCHAR(50) unique,
    mot_de_passe VARCHAR(50),  
    numero_ad VARCHAR(50),
   role varchar(30)
);
CREATE TABLE user (
  id_user int(11)  PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(100),
  role varchar(30)
);
CREATE TABLE fournisseur (
 id_fournisseur int(11) PRIMARY KEY,
  nom_fournisseur VARCHAR(50),
  numero_fournisseur int(11)
);
CREATE TABLE intervention (
   id_inter int(11)  PRIMARY KEY,
    date_inter datetime,
    description VARCHAR(250),
    id_tech INT(21),  
    nom_tech INT(11),
   salle varchar(30),
   machine varchar(30),
    FOREIGN KEY (id_tech) REFERENCES technicien (id_technicien)
);
CREATE TABLE demande (
   id_demande int(11)  PRIMARY KEY,
    dateDemande datetime,
    demandeur VARCHAR(250),
    machine varchar(50),  
   salle varchar(30),
   etat varchar(30)
);
CREATE TABLE technicien (
   id_technicien int(11)  PRIMARY KEY,
    nom_technicen VARCHAR(50),
    num_technicien int(11),
    mot_de_passe VARCHAR(50)
);
CREATE TABLE logiciel (
    id_logiciel int(11)  PRIMARY KEY,
    nom_logiciel varchar(40),
	date_installation datetime,
	poste VARCHAR(250),
	dernieres_mises_a_jours varchar(50)
);
CREATE TABLE materiel (
    id_materiel int(11)  PRIMARY KEY,
    modele varchar(40),
	date_achat datetime,
    date_expiration_garantie datetime,
	emplacement VARCHAR(250),
	nom_materiel varchar(50)
);
CREATE TABLE message (
  id_message int(11)  PRIMARY KEY NOT NULL AUTO_INCREMENT,
  contenu_message varchar(250) NOT NULL,
  username varchar(20) NOT NULL,
  message_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  recipient varchar(50) NOT NULL
);

create table contrats;
create table reseource;
create table commentaire;