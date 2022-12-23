import { IsEmail, IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/customer.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PolymorphicParent } from "typeorm-polymorphic";
import { PolymorphicChildInterface } from "typeorm-polymorphic/dist/polymorphic.interface";

@Entity({ name: 'contacts' })
export class Contact implements PolymorphicChildInterface {
    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @PolymorphicParent(() => [Customer, Supplier])
    owner: Customer | Supplier;

    @Column()
    entityId: number;

    @Column()
    entityType: string;

    @Column()
    contact_person: string;

    @Column()
    position: string;

    @Column({ type: "varchar", length: 100, name: "email", unique: true })
    mail: string;

    @Column({ type: "varchar", length: 10, name: "phone", unique: true })
    phone: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}