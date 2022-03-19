DROP DATABASE IF EXISTS funko_shop;
CREATE DATABASE funko_shop;
USE funko_shop;



CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `fullName` VARCHAR(255) NOT NULL,
   `userName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `profilePicture` VARCHAR(255),
   `categoryUserId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `productName` VARCHAR(255) NOT NULL,
   `decription` TEXT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `categoryProduct` VARCHAR(255) NOT NULL,
   `launching` VARCHAR(255) NOT NULL,
   `price` DOUBLE NOT NULL,
   `launchingDate` DATETIME NOT NULL,
   `launchingId` INT,
   `carritoDeComprasId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryProduct` (
   `id` INT,
   `categoryProductName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `launching` (
   `id` INT,
   `launchingName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users_products` (
   `id` INT,
   `usersId` INT,
   `productsId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryUser` (
   `id` INT AUTO_INCREMENT,
   `categoryUserName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_categoryProduct` (
   `id` INT,
   `productsId` INT,
   `categoryProductId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carritoDeCompras` (
   `id` INT AUTO_INCREMENT,
   `cantidadItems` INT NOT NULL,
   `precioUnitario` DOUBLE NOT NULL,
   `precioTotal` DOUBLE NOT NULL,
   `userNameId` INT,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_category_user_id` FOREIGN KEY (`categoryUserId`) REFERENCES `categoryUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products` ADD CONSTRAINT `FK_product_launching_id` FOREIGN KEY (`launchingId`) REFERENCES `launching`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products` ADD CONSTRAINT `FK_products_shopping_car_id` FOREIGN KEY (`carritoDeComprasId`) REFERENCES `carritoDeCompras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_user_products_user_id` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_users_products_products_id` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products_categoryProduct` ADD CONSTRAINT `FK_products_category_product_product_id` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products_categoryProduct` ADD CONSTRAINT `FK_products_category_product_category_id` FOREIGN KEY (`categoryProductId`) REFERENCES `categoryProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `carritoDeCompras` ADD CONSTRAINT `FK_shopping_car_user_id` FOREIGN KEY (`userNameId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;