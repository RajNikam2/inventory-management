import { Type } from "class-transformer";
import { IsAlpha, IsDate, IsDateString, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";
import { Customer } from "src/customer/customer.entity";
import { DeliveryTerm } from "src/delivery-term/delivery-term.entity";
import { DeliveryTime } from "src/delivery-time/delivery-time.entity";
import { Division } from "src/division/division.entity";
import { PaymentTerm } from "src/payment-term/payment-term.entity";
import { Payment } from "src/payment/payment.entity";
import { Region } from "src/region/region.entity";
import { Country } from "src/country/country.entity";
import { Supplier } from "src/suppliers/suppliers.entity";
import { TeamMember } from "src/team-member/team-member.entity";
import { SaleType } from "src/sale-type/sale-type.entity";

export class OrderDto {

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

    teamMember: TeamMember;
    division: Division;
    country: Country;
    region: Region;
    supplier: Supplier;
    customer: Customer;
    salestype: SaleType;
    paymentTerm: PaymentTerm;
    deliveryTerm: DeliveryTerm;
    deliveryTime: DeliveryTime;
    payments: Payment;

}