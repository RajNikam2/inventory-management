import { IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";

export class ReminderDto{

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    action:string;
    
    order: Order;

}