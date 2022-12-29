import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'files' })
export class File{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    file_name: string;

    @Column()
    description: string;

    @Column()
    file_type: string;

    @Column()
    file_path: string;

    @ManyToOne(() => Order, (order) => order.file)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;


}