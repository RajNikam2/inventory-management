import { Shipment } from "src/shipment/shipment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'shipments_by' })
export class ShipmentBy {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Shipment, (shipment) => shipment.shipmentBy,{
        eager: true, 
        cascade: false  
    })
    shipment?: Shipment[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}