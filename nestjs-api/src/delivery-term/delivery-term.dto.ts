import { IsNotEmpty } from "class-validator";

export class DeliveryTermDto{

    @IsNotEmpty()
    delivery:string;

}