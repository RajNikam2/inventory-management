import { MigrationInterface, QueryRunner } from "typeorm"

export class Reminder1672570259182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `reminders` (`id` VARCHAR(36) NOT NULL, `name` VARCHAR(255) NOT NULL, `action` enum('edit','completed','cancel') DEFAULT NULL,`orderId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `reminders` ADD CONSTRAINT `Reminders_OrderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`reminders\``);
        await queryRunner.query(`ALTER TABLE \`reminders\` DROP FOREIGN KEY \`Reminders_OrderId_fkey\``);

    }

}
