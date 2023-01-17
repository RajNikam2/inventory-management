import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TypeDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    code:number;
}