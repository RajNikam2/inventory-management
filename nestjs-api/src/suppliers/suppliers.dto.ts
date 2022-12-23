import { IsNotEmpty, IsString } from "class-validator";
import { Country } from "src/country/country.entity";

export class sulpplierDto {
    
    @IsNotEmpty()
    @IsString()
    organization: string;

    @IsNotEmpty()
    supplier_type:string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    notes:string;
    
    country: Country;

}