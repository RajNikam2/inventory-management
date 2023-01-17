import { Contact } from "src/contacts/contacts.entity";
import { Country } from "src/country/country.entity";
import { Order } from "src/orders/orders.entity";
import { Type } from "src/type/type.entity";
import { Url } from "src/urls/urls.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'suppliers' })
export class Supplier {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    organization: string;

    @Column()
    address: string;

    @Column()
    notes: string;

    @OneToMany(() => Url, (url) => url.supplier,{
        eager: true, 
        cascade: true  
    })
    urls?: Url[];

    @OneToMany(() => Contact, (contact) => contact.supplier,{
        eager: true, 
        cascade: true  
    })
    contacts?: Contact[];

    @ManyToOne(() => Country, (country) => country.supplier)
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @ManyToOne(() => Type, (type) => type.supplier)
    @JoinColumn({ name: 'typeId' })
    type: Type;

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