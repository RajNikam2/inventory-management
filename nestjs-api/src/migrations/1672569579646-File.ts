import { MigrationInterface, QueryRunner } from "typeorm"

export class File1672569579646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `files` (`id` VARCHAR(36) NOT NULL,`file_name` VARCHAR(255) NOT NULL,`description` varchar(255) NOT NULL,`file_type` varchar(255) NOT NULL, `file_path` varchar(255) NOT NULL,`orderId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `files` ADD CONSTRAINT `Files_order_Id_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`files\``);
        await queryRunner.query(`ALTER TABLE \`files\` DROP FOREIGN KEY \`Files_order_Id_fkey\``);
    }

}
