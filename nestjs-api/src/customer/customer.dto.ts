import { IsAlpha, IsNotEmpty,IsString, MinLength } from "class-validator";
import { Country } from "src/country/country.entity";
import { Industry } from "src/industry/industry.entity";
import { Order } from "src/orders/orders.entity";
import { Url } from "src/urls/urls.entity";

export class CustomerDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    organization: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    address: string;

    @IsString()
    notes: string;

    urls?: Url[]; 
    order?: Order[];
    country: Country;
    industry: Industry;
}