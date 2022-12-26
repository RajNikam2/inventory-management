import { IsNotEmpty } from "class-validator";

export class ShipmentByDto{

    @IsNotEmpty()
    shipment_by: string;
}