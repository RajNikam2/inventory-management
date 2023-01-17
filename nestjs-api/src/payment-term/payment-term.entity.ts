import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'payment_terms'})
export class PaymentTerm{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    name:string;

    @OneToMany(() => Order, (order) => order.paymentTerm, {
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