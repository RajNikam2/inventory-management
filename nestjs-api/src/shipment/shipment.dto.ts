import { DestinationPort } from "src/destination-port/destination-port.entity";
import { Order } from "src/orders/orders.entity";
import { PortOfLoading } from "src/port-of-loading/port-of-loading.entity";
import { ShipmentBy } from "src/shipment-by/shipment-by.entity";
import { ShippingLine } from "src/shipping-line/shipping-line.entity";

export class Shipment {
    invoice: number;
    sale_date: Date;
    bl: number;
    eta: number;
    invoice_number: number;
    invoice_amount: number;
    balance_due_date: Date;
    ex_work_value: number;
    commission_value: number;
    container_number: number;
    order: Order;
    shppingLine: ShippingLine;
    shipmentBy: ShipmentBy;
    destinationPort: DestinationPort;
    portOfLoding: PortOfLoading;

}