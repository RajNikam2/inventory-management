import { IsEmail, IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/customer.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PolymorphicParent } from "typeorm-polymorphic";
import { PolymorphicChildInterface } from "typeorm-polymorphic/dist/polymorphic.interface";

@Entity({ name: 'contacts' })
export class Contact{
    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    contact_person: string;

    @Column()
    position: string;

    @Column({ type: "varchar", length: 100, name: "email", unique: true })
    mail: string;

    @Column({ type: "varchar", length: 10, name: "phone", unique: true })
    phone: number;

    @Column()
    entityType:string;
    
    @ManyToOne(() => Customer, (customer) => customer.contacts)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @ManyToOne(() => Customer, (customer) => customer.contacts)
    @JoinColumn({ name: 'supplierId' })
    supplier: Supplier;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}