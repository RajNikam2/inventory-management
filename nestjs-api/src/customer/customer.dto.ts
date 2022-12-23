import { IsAlpha, IsNotEmpty,IsString, MinLength } from "class-validator";
import { Country } from "src/country/country.entity";
import { Industry } from "src/industry/industry.entity";

export class CustomerDto {

    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    @MinLength(1)
    organization: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    address: string;

    @IsString()
    @IsNotEmpty()
    customer_type: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    notes: string;

    // @IsNotEmpty()
    country: Country;

    // @IsNotEmpty()
    Industry: Industry;
}