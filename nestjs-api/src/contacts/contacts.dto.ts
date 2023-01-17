import { IsAlpha, IsAlphanumeric, isAlphanumeric, IsEmail, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ContactDto{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @IsNotEmpty()
    @IsAlpha()
    contact_person: string;

    @IsNotEmpty()
    @IsEmail()
    mail:string;

    // @IsNotEmpty()
    @IsString()
    position: string;

    // @IsNotEmpty()
    @MaxLength(10, { message: 'please enter 10 digits mobile no' })
    @MinLength(10, { message: 'please enter 10 digits mobile no' })
    @IsNumberString()
    phone:number;

    @IsString()
    entityType:string

}