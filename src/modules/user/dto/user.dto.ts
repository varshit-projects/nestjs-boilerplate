import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto{
    id:string;
    firstName:string;
    lastName:string;
    phone:string;
    role:string;
    email:string;
    
}
export class UserConfedentialDto extends UserDto{
    hash:string;

}
