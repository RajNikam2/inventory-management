import { IsNotEmpty } from "class-validator";

export class UnitDto{

    @IsNotEmpty()
    unit:string;
}