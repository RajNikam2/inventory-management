import { IsNotEmpty } from "class-validator";
import { DestinationPort } from "src/destination-port/destination-port.entity";
import { Order } from "src/orders/orders.entity";
import { PortOfLoading } from "src/port-of-loading/port-of-loading.entity";
import { ShipmentBy } from "src/shipment-by/shipment-by.entity";
import { ShippingLine } from "src/shipping-line/shipping-line.entity";

export class ShipmentDto{

    // @IsNotEmpty()
    // invoice: number;

    @IsNotEmpty()
    sale_date: Date;

    @IsNotEmpty()
    bl: number;

    @IsNotEmpty()
    eta: number;

    @IsNotEmpty()
    invoice_number: number;

    @IsNotEmpty()
    invoice_amount: number;

    @IsNotEmpty()
    balance_due_date: Date;

    @IsNotEmpty()
    ex_work_value: number;

    @IsNotEmpty()
    commission_value: number;

    @IsNotEmpty()
    container_number: number;

    order: Order;

    shppingLine: ShippingLine;

    shipmentBy: ShipmentBy;

    destinationPort: DestinationPort;

    portOfLoding: PortOfLoading;

}