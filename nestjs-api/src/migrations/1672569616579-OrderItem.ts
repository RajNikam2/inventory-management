import { MigrationInterface, QueryRunner } from "typeorm"

export class OrderItem1672569616579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `order_Items` (`id` VARCHAR(36) NOT NULL,`unit` varchar(255) DEFAULT NULL,`quantity` int DEFAULT NULL,`productId` varchar(36) DEFAULT NULL,`orderId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `order_Items` ADD CONSTRAINT `OrderItem_order_Id_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

        await queryRunner.query("ALTER TABLE `order_Items` ADD CONSTRAINT `OrderItem_product_Id_fkey` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`orderItems\``);
        await queryRunner.query(`ALTER TABLE \`orderItems\` DROP FOREIGN KEY \`OrderItem_order_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orderItems\` DROP FOREIGN KEY \`OrderItem_product_Id_fkey\``);

    }

}
