import { IsNotEmpty } from "class-validator";

export class ShippingLineDto{

    @IsNotEmpty()
    shipping_line: string;
}