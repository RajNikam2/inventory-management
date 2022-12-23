import { IsNotEmpty } from "class-validator";

export class SaleTypeDto{
   
    @IsNotEmpty()
    name:string;
    
}