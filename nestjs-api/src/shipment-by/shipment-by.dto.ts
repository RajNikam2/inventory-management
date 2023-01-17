import { IsNotEmpty } from "class-validator";

export class ShipmentByDto{

    @IsNotEmpty()
    name: string;
}