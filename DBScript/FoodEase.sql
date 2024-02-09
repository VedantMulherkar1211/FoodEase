show databases;
use foodease;

/*Role Table*/
create table Role(
	role_id INT PRIMARY KEY,
    role_name varchar(25) unique);
    
    insert into Role values(1,'User');
      insert into Role values(2,'Restaurants');
        insert into Role values(3,'Drivers');
        insert into Role values(4,'Admin');
        select * from role;
/*------------------------------------------------------------------------------------*/

/*Login table*/
CREATE TABLE Login (
    loginID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(100),
    roleID INT,
    FOREIGN KEY (roleID) REFERENCES Role(roleID)
);
/*------------------------------------------------------------------------------------*/


/*Customer Table*/
CREATE TABLE Customer (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    username VARCHAR(50),
    password VARCHAR(100),
    FOREIGN KEY (username) REFERENCES Login(username),
    FOREIGN KEY (password) REFERENCES Login(password)
);

/*-----------------------------------------------------------------------------------------------*/
/*Restaurants*/
CREATE TABLE Restaurant_Owner (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    restaurant_license VARCHAR(50) UNIQUE NOT NULL,
    FOREIGN KEY (username) REFERENCES Login(username),
    FOREIGN KEY (password) REFERENCES Login(password)
);


/*-----------------------------------------------------------------------------*/
/*Orders*/
CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    order_total DECIMAL(10,2) NOT NULL,
    delivery_status VARCHAR(20) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id)    );



select * from Orders;
/*-----------------------------------------------------------------------------*/
/*Delivery*/

CREATE TABLE Delivery_boy (
    driver_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    location VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    vehicle_License_No VARCHAR(50) UNIQUE NOT NULL,
    photo_id_number VARCHAR(50) UNIQUE NOT NULL,
    FOREIGN KEY (username) REFERENCES Login(username),
    FOREIGN KEY (password) REFERENCES Login(password)
);


select * from Delivery_boy;
/*-------------------------------------------------------------------------------*/
/*Admin*/
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    customer_id
);

select * from Admin;
/*-------------------------------------------------------------------------------*/
/*Payment*/
CREATE TABLE Payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    payment_method VARCHAR(20) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

select * from Payment;
/*----------------------------------------------------------------------*/
/*Rating*/
CREATE TABLE Rating (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    rating INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id)
);

select * from Rating;
/*-------------------------------------------------------------------------*/
/*Address*/
CREATE TABLE Address (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    state VARCHAR(255) NOT NULL,
    city  VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode INT NOT NULL,FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

select * from Address;
/*-----------------------------------------------------------------------------*/
/*Menu*/
CREATE TABLE Menu (
    menu_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT NOT NULL, FOREIGN KEY (restaurant_id) REFERENCES Restaurants (restaurant_id),
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

select * from Menu;
show tables;

