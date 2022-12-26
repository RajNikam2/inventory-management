import { Shipment } from "src/shipment/shipment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'shipping_lines' })
export class ShippingLine{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    shipping_line: string;

    @OneToMany(() => Shipment, (shipment) => shipment.shppingLine,{
        eager: true, 
        cascade: true  
    })
    shipment?: Shipment[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}