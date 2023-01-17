import { IsAlpha, IsNotEmpty, IsString } from "class-validator";
import { Country } from "src/country/country.entity";
import { Column } from "typeorm";

export class TeamMemberDto {

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    // @IsAlpha()
    position: string;

    @IsNotEmpty()
    @IsString()
    assigned_territories: string;

    @IsNotEmpty()
    @IsString()
    notes: string;

    @Column({ type: 'varchar', nullable: false, unique: true})
    username: string;
    
    @Column({ type: 'varchar', nullable: false }) 
    password: string;  

    country: Country;
}