import { MigrationInterface, QueryRunner } from "typeorm"

export class Customer1672911204434 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `customers` (`id` VARCHAR(36) NOT NULL ,`organization` VARCHAR(255) NOT NULL,`address` VARCHAR(255) DEFAULT NULL,`notes` VARCHAR(255) DEFAULT NULL,`countryId` VARCHAR(36) DEFAULT NULL,`industryId` VARCHAR(36) DEFAULT NULL,`typeId` VARCHAR(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL, PRIMARY KEY(`id`))");
        
        await queryRunner.query("ALTER TABLE `customers` ADD CONSTRAINT `Customer_CountryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `customers` ADD CONSTRAINT`Customer_IndustryId_fkey` FOREIGN KEY (`industryId`) REFERENCES `industries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `customers` ADD CONSTRAINT`Customer_TypeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`Customer_CountryId_fkey\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`Customer_IndustryId_fkey\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`Customer_TypeId_fkey\``);
    }

}



