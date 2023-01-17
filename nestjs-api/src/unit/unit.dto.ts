import { IsNotEmpty } from "class-validator";

export class UnitDto{

    @IsNotEmpty()
    name:string;
}