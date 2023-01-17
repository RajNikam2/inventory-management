import { Customer } from "src/customer/customer.entity";
import { Order } from "src/orders/orders.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { TeamMember } from "src/team-member/team-member.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'types' })
export class Type{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    code:number;

    @OneToMany(() => Customer, (customer) => customer.type, {
        eager: true,
        cascade: false
    })
    customer?: Customer[];

    @OneToMany(() => Supplier, (supplier) => supplier.type, {
        eager: true,
        cascade: false
    })
    supplier?: Supplier[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}