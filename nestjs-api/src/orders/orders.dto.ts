import { Type } from "class-transformer";
import { IsAlpha, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderDto{

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    order_date: Date

    @IsNotEmpty()
    @IsString()
    order_status: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    proforma_invoice: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    proforma_invoice_date: Date;

    @IsNotEmpty()
    @IsNumber()
    proforma_invoice_value: number;

    @IsNotEmpty()
    @IsNumber()
    excepted_commission: number;

    @IsNotEmpty()
    po_number: number;

    @IsNotEmpty()
    @IsNumber()
    advance_payment: number;

    @IsNotEmpty()
    @IsNumber()
    advance_balance: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    container40: number;

    @IsNotEmpty()
    @IsNumber()
    container20: number

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    pallets_or_skids: number;

    @IsNotEmpty()
    @IsString()
    others: string;

}