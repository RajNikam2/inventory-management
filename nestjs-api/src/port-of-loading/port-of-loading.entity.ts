import { Shipment } from "src/shipment/shipment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'ports_of_loading' })
export class PortOfLoading{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    loading_port: string;

    @OneToMany(() => Shipment, (shipment) => shipment.portOfLoading, {
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