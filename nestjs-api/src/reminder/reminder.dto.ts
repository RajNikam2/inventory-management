import { Order } from "src/orders/orders.entity";

export class ReminderDto{
    reminder:string;
    action:string;
    order: Order;

}