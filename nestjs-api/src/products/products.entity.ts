import { Category } from "src/category/category.entity";
import { OrderItem } from "src/order-item/order-item.entity";
import { SubCategory } from "src/sub-category/sub-category.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'products'})
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    desciptions:number;

    @ManyToOne(() => Category, (category) => category.product)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @ManyToOne(() => SubCategory, (subcategory) => subcategory.product)
    @JoinColumn({ name: 'sub_category_id' })
    subcategory: SubCategory;

    // @ManyToOne(() => Unit, (unit) => unit.product)
    // @JoinColumn({ name: 'unit_id' })
    // unit: Unit;

    // @ManyToOne(() => Order, (order) => order.product)
    // @JoinColumn({ name: 'order_id' })
    // order: Order;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product, {
        eager: true,
        cascade: true
    })
    orderItem?: OrderItem[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}