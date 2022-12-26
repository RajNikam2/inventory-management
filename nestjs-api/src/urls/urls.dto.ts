import { IsNotEmpty } from "class-validator";

export class UrlDto{

    @IsNotEmpty()
    entityId: number;

    @IsNotEmpty()
    entityType: string;

    @IsNotEmpty()
    url:string;

}