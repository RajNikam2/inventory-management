import { MigrationInterface, QueryRunner } from "typeorm"

export class Comment1672569400156 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `comments` (`id` VARCHAR(36) NOT NULL,`comment` VARCHAR(255) NOT NULL,`action` enum('edit','cancel') DEFAULT NULL,`orderId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `Comments_OrderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`comments\``);
        await queryRunner.query(`ALTER TABLE \`comments\` DROP FOREIGN KEY \`Comments_OrderId_fkey\``);
    }

}
