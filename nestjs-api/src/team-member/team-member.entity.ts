import { Country } from "src/country/country.entity";
import { Order } from "src/orders/orders.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'team_members'})
export class TeamMember{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string; 

    @Column()
    position:string;

    @Column()
    assigned_territories: string; 
    
    @Column()
    notes: string; 

    @Column()
    username:string;

    @Column()
    password:string;

    @ManyToOne(() => Country, (country) => country.teamMember)
    @JoinColumn({ name: 'countryId' })
    country: Country;

    @OneToMany(() => Order, (order) => order.teamMember,{
        eager: true, 
        cascade: false  
    })
    order?: Order[];
 
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: Date;

}