import { Category } from "src/category/category.entity";
import { Product } from "src/products/products.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'sub_categories'})
export class SubCategory{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    name:string;

    @ManyToOne(() => Category, (category) => category.subCategory)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @OneToMany(() => Product,(product) => product.subcategory,{
        eager: true,
        cascade: false
    })
    product?: Product[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
}