import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'complaint' })
export class Complaint {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    date:Date;

    @Column()
    invoice_number: number;

    @Column()
    complaint: string;

    @Column()
    note: string;

    //question about file, invoice

}