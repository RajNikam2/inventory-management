import { IsNotEmpty, IsString } from "class-validator";

export class CommentDto{

    @IsNotEmpty()
    @IsString()
    comments:string;

    @IsNotEmpty()
    action:string;
}