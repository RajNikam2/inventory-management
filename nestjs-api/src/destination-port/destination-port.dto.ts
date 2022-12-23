import { IsNotEmpty } from "class-validator";

export class DestinationPortDto{

    @IsNotEmpty()
    destination_port:string;
}