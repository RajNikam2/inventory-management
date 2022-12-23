import { IsEmail, IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class ContactDto{

    @IsNotEmpty()
    entityId: number;

    @IsNotEmpty()
    entityType: string;

    @IsNotEmpty()
    contact_person: string;

    @IsNotEmpty()
    position: string;

    @IsNotEmpty()
    @IsEmail()
    mail:string;

    @IsNotEmpty()
    @MaxLength(10, { message: 'please enter 10 digits mobile no' })
    @MinLength(10, { message: 'please enter 10 digits mobile no' })
    @IsNumberString()
    phone:number;

}