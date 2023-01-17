import { Order } from "src/orders/orders.entity";
import { Shipment } from "src/shipment/shipment.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'documents'})
export class Document{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    courier_service:string;

    @Column()
    tracking_referance:number;

    @Column()
    send_date:Date;

    @Column()
    send_to:string;

    @Column()
    recieved_by:string;

    @Column()
    doc_id:number;

    @Column()
    date:Date;  //ask to sir

    @Column()
    comments:string;

    @ManyToOne(() => Shipment, (shipment) => shipment.document)
    @JoinColumn({ name: 'shipmentId' })
    shipment: Shipment;

    @ManyToOne(() => Order, (order) => order.document)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}