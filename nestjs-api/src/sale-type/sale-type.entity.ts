import { IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'sales_types'})
export class SaleType{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Order, (order) => order.saletype, {
        eager: true,
        cascade: false
    })
    order?: Order[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}