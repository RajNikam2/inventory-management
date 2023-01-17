import { IsNotEmpty, IsString } from "class-validator";
import { type } from "os";
import { Country } from "src/country/country.entity";
import { Type } from "src/type/type.entity";
import { Url } from "src/urls/urls.entity";

export class SulpplierDto {
    
    @IsNotEmpty()
    @IsString()
    organization: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    notes:string;
    
    country: Country;
    type:Type;

    urls: Url[];
}