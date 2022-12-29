import { IsNotEmpty } from "class-validator";

export class IndustryDto{

    @IsNotEmpty()
    name:string;
}