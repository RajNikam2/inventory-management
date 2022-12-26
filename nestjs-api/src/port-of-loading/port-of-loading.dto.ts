import { IsNotEmpty } from "class-validator";

export class PortOfLoadingDto{

    @IsNotEmpty()
    loading_port: string;
}