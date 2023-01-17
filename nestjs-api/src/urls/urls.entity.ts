import { Customer } from "src/customer/customer.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'urls' })
export class Url {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    entityType: string;

    @Column()
    url: string

    @ManyToOne(() => Customer, (customer) => customer.urls)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @ManyToOne(() => Supplier, (supplier) => supplier.urls)
    @JoinColumn({ name: 'supplierId' })
    supplier:Supplier;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}







