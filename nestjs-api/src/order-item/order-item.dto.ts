import { Order } from "src/orders/orders.entity";
import { Product } from "src/products/products.entity";

export class OrderItemDto{
    unit:string;
    quantity:number;
    product: Product;
    order: Order;

}