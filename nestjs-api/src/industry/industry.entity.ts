import { IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/customer.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'industries' })
export class Industry {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @OneToMany(() => Customer, (customer) => customer.industry, {
        eager: false,
        cascade: false
    })
    customer?: Customer[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}