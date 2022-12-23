import { Contact} from "src/contacts/contacts.entity";
import { Order } from "src/orders/orders.entity";
import { Country } from "src/country/country.entity";
import { Industry } from "src/industry/industry.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { PolymorphicChildren } from "typeorm-polymorphic";

@Entity({ name: 'customers' })
export class Customer{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    organization: string;

    @Column()
    address: string;

    @Column({ type: "enum", enum: ["new","exiting"], default: null })
    customer_type: string;

    @Column()
    notes: string;

    @PolymorphicChildren(() => Contact, {
        eager: false,
    })
    contact: Contact[];

    @ManyToOne(() => Country, (country) => country.customer)
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @ManyToOne(() => Industry, (industry) => industry.customer)
    @JoinColumn({ name: 'industryId' })
    Industry: Industry;

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