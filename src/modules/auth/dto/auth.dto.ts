import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDto{
    @ApiProperty({
        example:'varshitreddy27@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email:string; 

    @ApiProperty({
        example:'varshit27'
    })
    @ApiProperty()
    @IsNotEmpty()
    password:string;
}
