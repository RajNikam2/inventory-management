import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'payments'})
export class Payment{

    @PrimaryGeneratedColumn('uuid')
    id:number;
    
    @Column()
    eta:number;   //Electronic Transfer Account (ETA)...ask to sir

    @Column()
    bl:number;    //bill of lading 

    @Column()
    invoice_number:number;

    @Column('numeric')
    invoice_amount:number;

    @Column('numeric')
    balance:number;

    @Column()
    due_date:Date;

    @Column()
    no_of_days:number;

    @ManyToOne(() => Order, (order) => order.payment)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}