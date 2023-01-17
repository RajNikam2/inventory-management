import { MigrationInterface, QueryRunner } from "typeorm"

export class Url1672570449037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `urls` (`id` VARCHAR(36) NOT NULL,`url` varchar(1000) DEFAULT NULL,`entityType` varchar(255) NOT NULL,`customerId` varchar(36) DEFAULT NULL,`supplierId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `urls` ADD CONSTRAINT `urls_CustomerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ");
        await queryRunner.query("ALTER TABLE `urls` ADD CONSTRAINT`urls_SupplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `suppliers` (`id`)");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`urls\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`urls_CustomerId_fkey\``);
        await queryRunner.query(`ALTER TABLE \`suppliers\` DROP FOREIGN KEY \`urls_SupplierId_fkey\``);

    }  

}
