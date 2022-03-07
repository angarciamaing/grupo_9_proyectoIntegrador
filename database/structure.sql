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


ALTER TABLE `users` ADD CONSTRAINT `FK_8c07278d-fcad-4f34-b484-fa6590b12a23` FOREIGN KEY (`categoryUserId`) REFERENCES `categoryUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products` ADD CONSTRAINT `FK_a91dc07d-3ccc-42bc-83cb-ff34fd5bbf60` FOREIGN KEY (`launchingId`) REFERENCES `launching`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products` ADD CONSTRAINT `FK_847900df-ad47-44d1-afc3-c91f49e28673` FOREIGN KEY (`carritoDeComprasId`) REFERENCES `carritoDeCompras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_866104a4-7c4e-44e7-aa47-994a34e5efd7` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users_products` ADD CONSTRAINT `FK_886dc693-c507-4ba9-b0fc-0178b7680558` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products_categoryProduct` ADD CONSTRAINT `FK_0a43fd0f-34d0-4a57-9ef9-9dc12d94b626` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products_categoryProduct` ADD CONSTRAINT `FK_d4128ae2-124f-4e3c-9d86-a91d5ea4e76e` FOREIGN KEY (`categoryProductId`) REFERENCES `categoryProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `carritoDeCompras` ADD CONSTRAINT `FK_dcfd8578-0b05-4980-9f7f-dd1c04a4c626` FOREIGN KEY (`userNameId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
