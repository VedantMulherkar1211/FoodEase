create database foodease;
use foodease;

CREATE TABLE role (
  role_id INT NOT NULL AUTO_INCREMENT,
  role_name VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (role_id),
  UNIQUE INDEX role_name (role_name)
);

insert into role values(1,'admin');
insert into role values(2,'customer');
insert into role values(3,'restaurant');
insert into role values(4,'delivery');


CREATE TABLE login (
  loginID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(100) NOT NULL,
  status_approve BIT(1) NULL DEFAULT NULL,
  role_id INT NULL DEFAULT NULL,
  PRIMARY KEY (loginID),
  UNIQUE INDEX username (username),
  UNIQUE INDEX email (email),
  INDEX fk_roleid (role_id),
  CONSTRAINT fk_roleid FOREIGN KEY (role_id) REFERENCES role (role_id)
);

CREATE TABLE admin (
  admin_id INT NOT NULL AUTO_INCREMENT,
  phone VARCHAR(20) NOT NULL,
  loginID INT NULL DEFAULT NULL,
  PRIMARY KEY (admin_id),
  UNIQUE INDEX phone (phone),
  INDEX loginID (loginID),
  CONSTRAINT admin_ibfk_1 FOREIGN KEY (loginID) REFERENCES login (loginID)
);

CREATE TABLE customer (
  user_id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  address VARCHAR(225) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  username VARCHAR(20) NOT NULL,
  loginID INT NULL DEFAULT NULL,
  PRIMARY KEY (user_id),
  UNIQUE INDEX phone (phone),
  INDEX c_loginid (loginID),
  CONSTRAINT c_loginid FOREIGN KEY (loginID) REFERENCES login (loginID)
);



CREATE TABLE delivery_boy (
  driver_id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  vehicle_License_No VARCHAR(50) NOT NULL,
  photo_id_number VARCHAR(50) NOT NULL,
  loginID INT NULL DEFAULT NULL,
  PRIMARY KEY (driver_id),
  UNIQUE INDEX phone (phone),
  UNIQUE INDEX vehicle_License_No (vehicle_License_No),
  UNIQUE INDEX photo_id_number (photo_id_number),
  INDEX loginID (loginID),
  CONSTRAINT delivery_boy_ibfk_1 FOREIGN KEY (loginID) REFERENCES login (loginID)
);

CREATE TABLE address (
  address_id INT NOT NULL AUTO_INCREMENT,
  address_name LONGTEXT NOT NULL,
  area VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  pincode INT NOT NULL,
  PRIMARY KEY (address_id)
);

CREATE TABLE restaurant_owner (
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  address_id INT NOT NULL,
  phone VARCHAR(20) NOT NULL,
  loginID INT NULL DEFAULT NULL,
  PRIMARY KEY (restaurant_id),
  UNIQUE INDEX phone (phone),
  INDEX loginID (loginID),
  CONSTRAINT restaurant_owner_ibfk_1 FOREIGN KEY (loginID) REFERENCES login (loginID),
  CONSTRAINT restaurant_owner_address_fk FOREIGN KEY (address_id) REFERENCES address (address_id)
);

CREATE TABLE area (
  area_id INT NOT NULL AUTO_INCREMENT,
  area_name VARCHAR(45) NOT NULL,
  pincode INT NOT NULL,
  PRIMARY KEY (area_id),
  INDEX area_name_fk_idx (area_name)
);

CREATE TABLE state (
  state_id INT NOT NULL AUTO_INCREMENT,
  state_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (state_id)
);

CREATE TABLE city (
  city_id INT NOT NULL AUTO_INCREMENT,
  city_name VARCHAR(45) NOT NULL,
  state_id INT NOT NULL,
  PRIMARY KEY (city_id),
  INDEX state_id_idx (state_id),
  CONSTRAINT state_id FOREIGN KEY (state_id) REFERENCES state (state_id)
);

CREATE TABLE restaurant (
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  address_id INT NOT NULL,
  licence_no VARCHAR(45) NOT NULL,
  phone VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  area_id INT NOT NULL,
  city_id INT NOT NULL,
  state_id INT NOT NULL,
  PRIMARY KEY (restaurant_id),
  INDEX area_id_fk_idx (area_id),
  INDEX city_id_fk_idx (city_id),
  INDEX state_id_fk_idx (state_id),
  CONSTRAINT area_id_fk FOREIGN KEY (area_id) REFERENCES area (area_id),
  CONSTRAINT city_id_fk FOREIGN KEY (city_id) REFERENCES city (city_id),
  CONSTRAINT state_id_fk FOREIGN KEY (state_id) REFERENCES state (state_id),
  CONSTRAINT restaurant_owner_fk FOREIGN KEY (restaurant_id) REFERENCES restaurant_owner (restaurant_id),
  CONSTRAINT restaurant_address_fk FOREIGN KEY (address_id) REFERENCES address (address_id)
);

CREATE TABLE category (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (category_id)
);

CREATE TABLE menu (
  menu_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  category_id INT NOT NULL,
  description LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (menu_id),
  INDEX category_id_fk_idx (category_id),
  CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE restaurant_menu (
  restaurant_menu_id INT NOT NULL AUTO_INCREMENT,
  restaurant_id INT NOT NULL,
  menu_id INT NOT NULL,
  price DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (restaurant_menu_id),
  INDEX restaurant_id_fk_idx (restaurant_id),
  INDEX menu_id_fk_idx (menu_id),
  CONSTRAINT restaurant_menu_restaurant_fk FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id),
  CONSTRAINT restaurant_menu_menu_fk FOREIGN KEY (menu_id) REFERENCES menu (menu_id)
);










