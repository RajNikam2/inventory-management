import { Order } from "src/orders/orders.entity";
import { Shipment } from "src/shipment/shipment.entity";

export class DocumentDto{
    courier_service:string;
    tracking_referance:number;
    send_date:Date;
    send_to:string;
    recieved_by:string;
    documentId:number;
    date:Date;  
    comments:string;
    shipment: Shipment;
    order: Order;
    





}