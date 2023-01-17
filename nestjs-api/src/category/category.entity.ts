import { Product } from "src/products/products.entity";
import { SubCategory } from "src/sub-category/sub-category.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'categories'})
export class Category{

    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    name:string;

    @OneToMany(() => SubCategory,(subCategory) => subCategory.category,{
        eager: true,
        cascade: false
    })
    subCategory?: SubCategory[];

    @OneToMany(() => Product,(product) => product.category,{
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