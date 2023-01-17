import { MigrationInterface, QueryRunner } from "typeorm"

export class Complaint1672569433971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `complaints` (`id` VARCHAR(36) NOT NULL,`date` datetime NOT NULL,`invoice_number` int DEFAULT NULL,`complaint` varchar(255) DEFAULT NULL,`note` varchar(255) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`complaints\``);
    }

}
