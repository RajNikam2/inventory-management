import { Order } from "src/orders/orders.entity";
import { Product } from "src/products/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'order_Items'})
export class OrderItem{
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    unit:string;

    @Column()
    quantity:number;

    @ManyToOne(() => Product, (product) => product.orderItem)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Order, (order) => order.orderItem)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}