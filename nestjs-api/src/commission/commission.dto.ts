import { IsNotEmpty } from "class-validator";

export class CommissionDto{

    @IsNotEmpty()
    bl: number;

    @IsNotEmpty()
    invoice:number;

    @IsNotEmpty()
    commission:number;

    @IsNotEmpty()
    amount:number;

    @IsNotEmpty()
    percentage:number;

}