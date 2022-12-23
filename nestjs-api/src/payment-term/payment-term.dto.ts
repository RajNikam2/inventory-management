import { IsNotEmpty } from "class-validator";

export class PaymentTermDto{

    @IsNotEmpty()
    name:string;
}