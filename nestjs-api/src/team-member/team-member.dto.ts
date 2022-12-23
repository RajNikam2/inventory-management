import { IsAlpha, IsNotEmpty, IsString } from "class-validator";
import { Country } from "src/country/country.entity";

export class TeamMemberDto{

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
    @IsAlpha()
    position:string;

    @IsNotEmpty()
    @IsString()
    assigned_territories: string; 

    @IsNotEmpty()
    @IsString()
    notes: string;

    // @IsNotEmpty()
    country: Country;
}