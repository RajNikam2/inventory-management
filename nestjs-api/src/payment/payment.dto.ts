import { IsNotEmpty } from "class-validator";

export class PaymentDto{
    
    @IsNotEmpty()
    eta:number;  
    
    @IsNotEmpty()
    bl:number;  

    @IsNotEmpty()
    invoice_number:number;

    @IsNotEmpty()
    invoice_amount:number;

    @IsNotEmpty()
    balance:number;

    @IsNotEmpty()
    due_date:Date;

    @IsNotEmpty()
    no_of_days:number;

}
