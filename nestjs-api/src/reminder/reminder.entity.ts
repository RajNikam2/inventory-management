import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'reminders'})
export class Reminder{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    reminder:string;

    @Column({ type: "enum", enum: ["edit", "completed","cancel"], default: null })
    action:string;
    
    @ManyToOne(() => Order, (order) => order.reminder)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

    
}