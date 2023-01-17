import { MigrationInterface, QueryRunner } from "typeorm"

export class Document1672569564099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `documents` (`id` VARCHAR(36) NOT NULL,`courier_service` VARCHAR(255) DEFAULT NULL, `tracking_referance` int DEFAULT NULL,  `send_date` datetime DEFAULT NULL,`send_to` varchar(255) DEFAULT NULL,`recieved_by` varchar(255) DEFAULT NULL,`doc_id` int DEFAULT NULL,`date` datetime DEFAULT NULL,`comments` varchar(255) DEFAULT NULL, `shipmentId` varchar(36) DEFAULT NULL,`orderId` varchar(36) DEFAULT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `documents` ADD CONSTRAINT `Documents_shipment_Id_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `shipments` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

        await queryRunner.query("ALTER TABLE `documents` ADD CONSTRAINT `Documents_order_Id_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`documents\``);
        await queryRunner.query(`ALTER TABLE \`documents\` DROP FOREIGN KEY \`Documents_shipment_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`documents\` DROP FOREIGN KEY \`Documents_order_Id_fkey\``);
    }

}
