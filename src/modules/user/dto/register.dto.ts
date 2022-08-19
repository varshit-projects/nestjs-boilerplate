import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto{
    @ApiProperty()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty()
    @IsNotEmpty()
    lastName:string;

    @ApiProperty()
    @IsNotEmpty()
    phone:string;

    @ApiProperty()
    @IsNotEmpty()
    role:string;


    @ApiProperty({
        example:'varshitreddy27@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email:string; 

    @ApiProperty()
    @IsNotEmpty()
    password:string;

    hash:string;
}
