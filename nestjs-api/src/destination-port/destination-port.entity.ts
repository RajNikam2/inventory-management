import { Shipment } from "src/shipment/shipment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'ports'})
export class DestinationPort{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    destination_port:string;

    @OneToMany(() => Shipment, (shipment) => shipment.destinationPort,{
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