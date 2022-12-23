import { DestinationPort } from "src/destination-port/destination-port.entity";
import { Document } from "src/documents/documents.entity";
import { Order } from "src/orders/orders.entity";
import { PortOfLoading } from "src/port-of-loading/port-of-loading.entity";
import { ShipmentBy } from "src/shipment-by/shipment-by.entity";
import { ShippingLine } from "src/shipping-line/shipping-line.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'shipments' })
export class Shipment {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    // @Column()
    invoice: number; //ask to sir about invoice table

    @Column()
    sale_date: Date;

    @Column()
    bl: number;

    @Column()
    eta: number;

    @Column()
    invoice_number: number;

    @Column()
    invoice_amount: number;

    @Column()
    balance_due_date: Date;

    @Column()
    ex_work_value: number;

    @Column()
    commission_value: number;

    @Column()
    container_number: number;

    @ManyToOne(() => Order, (order) => order.shipment)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => ShippingLine, (shippingLine) => shippingLine.shipment)
    @JoinColumn({ name: 'shippingLine_id' })
    shppingLine: ShippingLine;

    @ManyToOne(() => ShipmentBy, (shipmentBy) => shipmentBy.shipment)
    @JoinColumn({ name: 'shippingBy_id' })
    shipmentBy: ShipmentBy;

    @ManyToOne(() => DestinationPort, (destinationPort) => destinationPort.shipment)
    @JoinColumn({ name: 'destinationPort_id' })
    destinationPort: DestinationPort;

    @ManyToOne(() => PortOfLoading, (portOfLoding) => portOfLoding.shipment)
    @JoinColumn({ name: 'portOfLoading_id' })
    portOfLoding: PortOfLoading;

    @OneToMany(() => Document, (docment) => docment.shipment, {
        eager: true,
        cascade: true
    })
    document?: Document[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}