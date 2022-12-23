import { Order } from "src/orders/orders.entity";

export class FileDto{
    file_name: string;
    description: string;
    file_type: string;
    file_path: string;
    order: Order;

}