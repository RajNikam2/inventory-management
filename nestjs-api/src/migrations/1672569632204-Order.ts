import { MigrationInterface, QueryRunner } from "typeorm"

export class Order1672569632204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `orders` (`id` VARCHAR(36) NOT NULL,`order_date` datetime NOT NULL,`order_status` enum('pending','delivered') DEFAULT NULL,`proforma_invoice` varchar(255) DEFAULT NULL, `proforma_invoice_date` datetime DEFAULT NULL, `proforma_invoice_value` int DEFAULT NULL,`excepted_commission` decimal(10,0) DEFAULT NULL,`po_number` int DEFAULT NULL,`advance_payment` decimal(10,0) DEFAULT NULL,  `advance_balance` decimal(10,0) DEFAULT NULL,`container40` int DEFAULT NULL,`container20` int DEFAULT NULL,`pallets_or_skids` int DEFAULT NULL,`others` varchar(255) DEFAULT NULL,`team-memberId` varchar(36) DEFAULT NULL,`divisionId` varchar(36) DEFAULT NULL, `countryId` VARCHAR(36) DEFAULT NULL,`regionId` varchar(36) DEFAULT NULL,`supplierId` varchar(36) DEFAULT NULL,`customerId` varchar(36) DEFAULT NULL,`salestypeId` varchar(36) DEFAULT NULL,`paymentTermId` varchar(36) DEFAULT NULL,`deliveryTermId` varchar(36) DEFAULT NULL,`deliveryTimeId` varchar(36) DEFAULT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");

        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_team-member_Id_fkey` FOREIGN KEY (`team-memberId`) REFERENCES `team_members` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_divisions_Id_fkey` FOREIGN KEY (`divisionId`) REFERENCES `divisions` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_country_Id_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_region_Id_fkey` FOREIGN KEY (`regionId`) REFERENCES `regions` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_supplier_Id_fkey` FOREIGN KEY (`supplierId`) REFERENCES `suppliers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_customers_Id_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_paymentTerms_Id_fkey` FOREIGN KEY (`paymentTermId`) REFERENCES `paymentTerms` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_delivery_terms_Id_fkey` FOREIGN KEY (`deliveryTermId`) REFERENCES `delivery_terms` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_deliveryTime_Id_fkey` FOREIGN KEY (`deliveryTimeId`) REFERENCES `delivery_times` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `orders` ADD CONSTRAINT `Order_salestype_Id_fkey` FOREIGN KEY (`salestypeId`) REFERENCES `sales_types` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE");

       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_team-member_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_divisions_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_country_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_region_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_supplier_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_customers_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_sales_types_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_paymentTerms_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_delivery_terms_Id_fkey\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`Order_deliveryTime_Id_fkey\``);
    }

}
