import { MigrationInterface, QueryRunner } from "typeorm"

export class Payment1672569646297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `payments` (`id` VARCHAR(36) NOT NULL, `eta` VARCHAR(255) NOT NULL, `bl` int DEFAULT NULL,`invoice_number` int DEFAULT NULL,`invoice_amount` decimal(10,0) DEFAULT NULL,`balance` decimal(10,0) DEFAULT NULL, `due_date` datetime DEFAULT NULL,`no_of_days` int DEFAULT NULL,`orderId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `payments` ADD CONSTRAINT `payment_OrderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP FOREIGN KEY \`payment_OrderId_fkey\``);

    }

}
