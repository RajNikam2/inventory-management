import { IsDate, IsNotEmpty } from "class-validator";

export class DeliveryTimeDto{
    
    @IsNotEmpty()
    time:number;
}