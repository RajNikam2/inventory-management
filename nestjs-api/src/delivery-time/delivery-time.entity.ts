import { IsDate } from "class-validator";
import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'delivery_times'})
export class DeliveryTime{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    @IsDate()
    time:Date;

    @OneToMany(() => Order, (order) => order.deliveryTime, {
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