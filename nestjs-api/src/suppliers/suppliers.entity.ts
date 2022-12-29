import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"
import { Contact } from "src/contacts/contacts.entity";
import { Country } from "src/country/country.entity";
import { Order } from "src/orders/orders.entity";
import { Url } from "src/urls/urls.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { PolymorphicChildren } from "typeorm-polymorphic";

@Entity({ name: 'suppliers' })
export class Supplier {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    organization: string;

    @Column()
    supplier_type: string;

    @Column()
    address: string;

    @Column()
    notes: string;


    @PolymorphicChildren(() => Contact, {
        eager: false,
    })
    contact: Contact[];

    @ManyToOne(() => Country, (country) => country.supplier)
    @JoinColumn({ name: 'countryid' })
    country: Country;

    @OneToMany(() => Order, (order) => order.supplier, {
        eager: true,
        cascade: true
    })
    order?: Order[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}