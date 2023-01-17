import { Customer } from "src/customer/customer.entity";
import { Order } from "src/orders/orders.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { TeamMember } from "src/team-member/team-member.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'countries' })
export class Country{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Customer, (customer) => customer.country, {
        eager: true,
        cascade: false
    })
    customer?: Customer[];

    @OneToMany(() => Order, (order) => order.country, {
        eager: true,
        cascade: false
    })
    order?: Order[];

    @OneToMany(() => Supplier, (supplier) => supplier.country, {
        eager: true,
        cascade: false
    })
    supplier?: Supplier[];

    @OneToMany(() => TeamMember, (teamMember) => teamMember.country, {
        eager: true,
        cascade: false
    })
    teamMember?: TeamMember[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}