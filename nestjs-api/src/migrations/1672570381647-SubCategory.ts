import { MigrationInterface, QueryRunner } from "typeorm"

export class SubCategory1672570381647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `sub_categories` (`id` VARCHAR(36) NOT NULL , `name` VARCHAR(255) NOT NULL,`categoryId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `sub_categories` ADD CONSTRAINT`Sub_categories_TypeId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`sub_categories\``);
        await queryRunner.query(`ALTER TABLE \`sub_categories\` DROP FOREIGN KEY \`Sub_categories_TypeId_fkey\``);

    }  
}
