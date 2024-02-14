-- Table structure for table `admin`


CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) NOT NULL,
  `loginID` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `phone` (`phone`),
  KEY `a_login` (`loginID`),
  CONSTRAINT `a_login` FOREIGN KEY (`loginID`) REFERENCES `login` (`loginID`)
)

CREATE TABLE `customer` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `loginID` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `phone` (`phone`),
  KEY `c_login` (`loginID`),
  CONSTRAINT `c_login` FOREIGN KEY (`loginID`) REFERENCES `login` (`loginID`)
) 