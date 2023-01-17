import { IsNotEmpty, IsString } from "class-validator";
import { Order } from "src/orders/orders.entity";

export class CommentDto {

    @IsNotEmpty()
    @IsString()
    comment: string;

    @IsNotEmpty()
    action: string;

    order: Order;

}