import { IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";

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

    order: Order;

}