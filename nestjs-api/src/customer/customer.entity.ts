import { Contact } from "src/contacts/contacts.entity";
import { Order } from "src/orders/orders.entity";
import { Country } from "src/country/country.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Industry } from "src/industry/industry.entity";
import { Type } from "src/type/type.entity";
import { Url } from "src/urls/urls.entity";

@Entity({ name: 'customers' })
export class Customer {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    organization: string;

    @Column()
    address: string;

    @Column()
    notes: string;

    @OneToMany(() => Url, (urls) => urls.customer,{
        eager: true, 
        cascade: true
    })
    urls?:Url[]

    @OneToMany(() => Contact, (contact) => contact.customer,{
        eager: true, 
        cascade: true
    })
    contacts?:Contact[]
    
    @ManyToOne(() => Country, (country) => country.customer)
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @ManyToOne(() => Industry, (industry) => industry.customer)
    @JoinColumn({ name: 'industryId' })
    industry: Industry;

    @ManyToOne(() => Type, (type) => type.customer)
    @JoinColumn({ name: 'typeId' })
    type: Type;

    @OneToMany(() => Order, (order) => order.customer, {
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