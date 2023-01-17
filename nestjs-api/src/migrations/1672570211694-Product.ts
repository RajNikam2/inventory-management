import { MigrationInterface, QueryRunner } from "typeorm"

export class Product1672570211694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`id` VARCHAR(36) NOT NULL , `desciptions` VARCHAR(255) NOT NULL,`categoryId` varchar(36) DEFAULT NULL,`sub_categoryId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `products_category_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `products_sub_category_fkey` FOREIGN KEY (`sub_categoryId`) REFERENCES `sub_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`products_category_fkey\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`products_sub_category_fkey\``);
    }

}
