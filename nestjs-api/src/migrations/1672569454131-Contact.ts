import { MigrationInterface, QueryRunner } from "typeorm"

export class Contact1672569454131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `contacts` (`id` VARCHAR(36) NOT NULL,`contact_person` varchar(255) NOT NULL,`position` varchar(255) DEFAULT NULL,`email` varchar(100) DEFAULT NULL,`phone` varchar(10) DEFAULT NULL,`customerId` varchar(36) DEFAULT NULL,`entityType` varchar(255) NOT NULL,`supplierId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`),UNIQUE KEY `IDX_752866c5247ddd34fd05559537`(`email`),UNIQUE KEY `IDX_84cae51c485079bdd8cdf1d828` (`phone`))");

        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `contacts_CustomerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ");
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT`contcats_SupplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `suppliers` (`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`contacts\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`contacts_CustomerId_fkey\``);
        await queryRunner.query(`ALTER TABLE \`suppliers\` DROP FOREIGN KEY \`contacts_SupplierId_fkey\``);
    }


}
