import { Comment } from "src/comments/comments.entity";
import { Commission } from "src/commission/commission.entity";
import { Country } from "src/country/country.entity";
import { Customer } from "src/customer/customer.entity";
import { DeliveryTerm } from "src/delivery-term/delivery-term.entity";
import { DeliveryTime } from "src/delivery-time/delivery-time.entity";
import { Division } from "src/division/division.entity";
import { Document } from "src/documents/documents.entity";
import { File } from "src/files/files.entity";
import { OrderItem } from "src/order-item/order-item.entity";
import { PaymentTerm } from "src/payment-term/payment-term.entity";
import { Payment } from "src/payment/payment.entity";
import { Region } from "src/region/region.entity";
import { Reminder } from "src/reminder/reminder.entity";
import { SaleType } from "src/sale-type/sale-type.entity";
import { Shipment } from "src/shipment/shipment.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { TeamMember } from "src/team-member/team-member.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'orders' })
export class Order{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    order_date: Date;

    @Column({ type: "enum", enum: ["pending", "delivered"], default: null })
    order_status: string;

    @Column()
    proforma_invoice: string;

    @Column()
    proforma_invoice_date: Date;

    @Column()
    proforma_invoice_value: number;

    @Column('numeric')
    excepted_commission: number;

    @Column()
    po_number: number;

    @Column('numeric')
    advance_payment: number;

    @Column('numeric')
    advance_balance: number;

    @Column()
    container40: number;

    @Column()
    container20: number

    @Column()
    pallets_or_skids: number;

    @Column()
    others: string;

    @ManyToOne(() => TeamMember, (teamMember) => teamMember.order)
    @JoinColumn({ name: 'team-memberId' })
    teamMember: TeamMember;

    @ManyToOne(() => Division, (division) => division.order)
    @JoinColumn({ name: 'divisionId' })
    division: Division; 

    @ManyToOne(() => Country, (country) => country.order)
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @ManyToOne(() => Region, (region) => region.order)
    @JoinColumn({ name: 'regionId' })
    region: Region;

    @ManyToOne(() => Supplier, (supplier) => supplier.order)
    @JoinColumn({ name: 'supplierId' })
    supplier: Supplier;

    @ManyToOne(() => Customer, (customer) => customer.order)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @ManyToOne(() => SaleType, (salestype) => salestype.order)
    @JoinColumn({ name: 'salestypeId' })
    saletype: SaleType;

    @ManyToOne(() => PaymentTerm, (paymentTerm) => paymentTerm.order)
    @JoinColumn({ name: 'paymentTermId' })
    paymentTerm: PaymentTerm;

    @ManyToOne(() => DeliveryTerm, (deliveryTerm) => deliveryTerm.order)
    @JoinColumn({ name: 'deliveryTermId' })
    deliveryTerm: DeliveryTerm;

    @ManyToOne(() => DeliveryTime, (deliveryTime) => deliveryTime.order)
    @JoinColumn({ name: 'deliveryTimeId' })
    deliveryTime: DeliveryTime;

    @OneToMany(() => Comment,(comment) => comment.order,{
        eager: true,
        cascade: true
    })
    comment?: Comment[];

    @OneToMany(() => Reminder,(reminder) => reminder.order,{
        eager: true,
        cascade: true
    })
    reminder?: Reminder[];

     @OneToMany(() => File,(file) => file.order,{
        eager: true,
        cascade: true
    })
    file?: File[];

    @OneToMany(() => Shipment,(shipment) => shipment.order,{
        eager: true,
        cascade: true
    })
    shipment?: Shipment[];

    @OneToMany(() => Payment,(payment) => payment.order,{
        eager: true,
        cascade: true
    })
    payment?: Payment[];

    @OneToMany(() => Commission,(commission) => commission.order,{
        eager: true,
        cascade: true
    })
    commission?: Commission[];

    @OneToMany(() => Document,(document) => document.order,{
        eager: true,
        cascade: true
    })
    document?: Document[];
    
    @OneToMany(() => OrderItem,(orderItem) => orderItem.order,{
        eager: true,
        cascade: true
    })
    orderItem?: OrderItem[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;


}