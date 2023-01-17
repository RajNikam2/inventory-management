import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'comments' })
export class Comment{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    comment: string;

    @Column({ type: "enum", enum: ["edit", "cancel"], default: null })
    action: string;

    @ManyToOne(() => Order, (order) => order.comment)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}