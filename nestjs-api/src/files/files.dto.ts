import { IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";

export class FileDto{

    @IsNotEmpty()
    file_name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    file_type: string;

    @IsNotEmpty()
    file_path: string;

    order: Order;

}