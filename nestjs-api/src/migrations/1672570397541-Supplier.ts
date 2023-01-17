import { MigrationInterface, QueryRunner } from "typeorm"

export class Supplier1672570397541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `suppliers` (`id` VARCHAR(36) NOT NULL,`organization` varchar(255) NOT NULL,`address` varchar(255) DEFAULT NULL,`notes` varchar(255) DEFAULT NULL,`countryId` VARCHAR(36) DEFAULT NULL,`TypeId` VARCHAR(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `suppliers` ADD CONSTRAINT`suppliers_type_Id_fkey` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `suppliers` ADD CONSTRAINT`suppliers_country_Id_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`suppliers\``);
        await queryRunner.query(`ALTER TABLE \`suppliers\` DROP FOREIGN KEY \`suppliers_country_Id_fkey\``);

    }  

}
