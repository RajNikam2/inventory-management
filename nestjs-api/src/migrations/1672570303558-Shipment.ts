import { MigrationInterface, QueryRunner } from "typeorm"

export class Shipment1672570303558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `shipments` (`id` VARCHAR(36) NOT NULL,`sale_date` datetime NOT NULL,`bl` int NOT NULL, `eta` int NOT NULL,`invoice_number` int NOT NULL,`invoice_amount` int NOT NULL,`balance_due_date` datetime NOT NULL,`ex_work_value` int NOT NULL,`commission_value` int NOT NULL,`container_number` int NOT NULL,`orderId` varchar(36) DEFAULT NULL,`shippingLineId` varchar(36) DEFAULT NULL,`shippingById` varchar(36) DEFAULT NULL,`destinationPortId` varchar(36) DEFAULT NULL,`portOfLoadingId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");


        await queryRunner.query("ALTER TABLE `shipments` ADD CONSTRAINT `Shipments_OrderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");  
        await queryRunner.query("ALTER TABLE `shipments` ADD CONSTRAINT `Shipments_ShippingLineId_fkey` FOREIGN KEY (`shippingLineId`) REFERENCES `shipping_lines` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");   
        await queryRunner.query("ALTER TABLE `shipments` ADD CONSTRAINT `Shipments_ShippingById_fkey` FOREIGN KEY (`shippingById`) REFERENCES `shipments_by` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `shipments` ADD CONSTRAINT `Shipments_destinationPort_Id_fkey` FOREIGN KEY (`destinationPortId`) REFERENCES `destination_ports` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `shipments` ADD CONSTRAINT `Shipments_portsOfLoading_Id_fkey` FOREIGN KEY (`portOfLoadingId`) REFERENCES `ports_of_loading` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`shipments\``);
        await queryRunner.query(`ALTER TABLE \`shipments\` DROP FOREIGN KEY \`Shipments_ShippingLineId_fkey\``);
        await queryRunner.query(`ALTER TABLE \`shipments\` DROP FOREIGN KEY \`Shipments_ShippingById_fkey\``);
        await queryRunner.query(`ALTER TABLE \`shipments\` DROP FOREIGN KEY \`Shipments_destinationPort_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`shipments\` DROP FOREIGN KEY \`Shipments_portsOfLoading_Id_fkey\``);

    }
}
