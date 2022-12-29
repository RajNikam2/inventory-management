import { IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";
import { Product } from "src/products/products.entity";

export class OrderItemDto{

    @IsNotEmpty()
    unit:string;

    @IsNotEmpty()
    quantity:number;

    product: Product;

    order: Order;

}