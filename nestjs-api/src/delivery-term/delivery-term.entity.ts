import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'delivery_terms'})
export class DeliveryTerm{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    deliveryTerm:string;

    @OneToMany(() => Order, (order) => order.deliveryTerm, {
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