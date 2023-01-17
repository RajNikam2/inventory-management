import { isNotEmpty, IsNotEmpty } from "class-validator";
import { Order } from "src/orders/orders.entity";
import { Shipment } from "src/shipment/shipment.entity";

export class DocumentDto{

    @IsNotEmpty()
    courier_service:string;

    @IsNotEmpty()
    tracking_referance:number;

    @IsNotEmpty()
    send_date:Date;

    @IsNotEmpty()
    send_to:string;

    @IsNotEmpty()
    recieved_by:string;
    
    @IsNotEmpty()
    doc_id:number;

    @IsNotEmpty()
    date:Date; 
    
    @IsNotEmpty()
    comments:string;

    shipment: Shipment;
    
    order: Order;
    





}