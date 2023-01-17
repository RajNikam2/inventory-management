import { MigrationInterface, QueryRunner } from "typeorm"

export class Commission1672569416612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `commissions` (`id` VARCHAR(36) NOT NULL,`bl` INTEGER NOT NULL,`invoice` INTEGER NOT NULL,`commission` decimal(10,0) NOT NULL,`amount` decimal(10,0) NOT NULL,`percentage` int NOT NULL,`orderId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `commissions` ADD CONSTRAINT `Commissions_OrderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`commissions\``);
        await queryRunner.query(`ALTER TABLE \`commissions\` DROP FOREIGN KEY \`Commissions_OrderId_fkey\``);
    }


}
