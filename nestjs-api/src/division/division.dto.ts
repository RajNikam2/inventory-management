import { IsAlpha, IsNotEmpty, IsString } from "class-validator";

export class DivistionDto{
    
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    name: string;
}