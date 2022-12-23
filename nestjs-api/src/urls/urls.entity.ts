import { Customer } from "src/customer/customer.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PolymorphicParent } from "typeorm-polymorphic";
import { PolymorphicChildInterface } from "typeorm-polymorphic/dist/polymorphic.interface";

@Entity({name:'urls'})
export class Url implements PolymorphicChildInterface {
    
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @PolymorphicParent(() => [Customer, Supplier])
    owner: Customer| Supplier;

    @Column()
    entityId: number;
    
    @Column()
    entityType: string;

    @Column()
    url:string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;
    
}