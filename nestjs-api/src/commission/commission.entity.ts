import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'commissions' })
export class Commission {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    bl: number;

    @Column()
    invoice:number;

    @Column('numeric')
    commission:number;

    @Column('numeric')
    amount:number;

    @Column()
    percentage:number;

    @ManyToOne(() => Order, (order) => order.commission)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}