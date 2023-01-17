import { DestinationPort } from "src/destination-port/destination-port.entity";
import { Document } from "src/documents/documents.entity";
import { Order } from "src/orders/orders.entity";
import { PortOfLoading } from "src/port-of-loading/port-of-loading.entity";
import { ShipmentBy } from "src/shipment-by/shipment-by.entity";
import { ShippingLine } from "src/shipping-line/shipping-line.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'shipments' })
export class Shipment{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    // @Column()
    // invoice: number; //ask to sir about invoice table

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
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @ManyToOne(() => ShippingLine, (shippingLine) => shippingLine.shipment)
    @JoinColumn({ name: 'shippingLineId' })
    shppingLine: ShippingLine;

    @ManyToOne(() => ShipmentBy, (shipmentBy) => shipmentBy.shipment)
    @JoinColumn({ name: 'shippingById' })
    shipmentBy: ShipmentBy;

    @ManyToOne(() => DestinationPort, (destinationPort) => destinationPort.shipment)
    @JoinColumn({ name: 'destinationPortId' })
    destinationPort: DestinationPort;

    @ManyToOne(() => PortOfLoading, (portOfLoding) => portOfLoding.shipment)
    @JoinColumn({ name: 'portOfLoadingId' })
    portOfLoading: PortOfLoading;

    @OneToMany(() => Document, (docment) => docment.shipment, {
        eager: true,
        cascade: false
    })
    document?: Document[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}