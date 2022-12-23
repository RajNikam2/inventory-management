import { IsNotEmpty, IsString } from "class-validator";

export class CountryDto {

    @IsNotEmpty()
    @IsString()
    name: string;
}