import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class UrlDto {

    @Column()
    entityType: string

    @Column()
    entityTypeId: string

    @IsNotEmpty()
    url: string;

}