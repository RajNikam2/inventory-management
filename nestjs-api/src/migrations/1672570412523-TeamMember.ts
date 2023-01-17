import { MigrationInterface, QueryRunner } from "typeorm"

export class TeamMember1672570412523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `team_members` (`id` VARCHAR(36) NOT NULL, `first_name` varchar(255) NOT NULL,`last_name` varchar(255) NOT NULL,`position` varchar(255) NOT NULL,`assigned_territories` varchar(255) NOT NULL,`notes` varchar(255) NOT NULL,`username` varchar(255) DEFAULT NULL,`password` varchar(255) DEFAULT NULL,`countryId` VARCHAR(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `team_members` ADD CONSTRAINT`Team_members_country_Id_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`team_members\``);
        await queryRunner.query(`ALTER TABLE \`team_members\` DROP FOREIGN KEY \`Team_members_country_Id_fkey\``);

    }  

}
