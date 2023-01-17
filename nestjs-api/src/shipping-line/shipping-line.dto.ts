import { IsNotEmpty } from "class-validator";

export class ShippingLineDto{

    @IsNotEmpty()
    name: string;
}