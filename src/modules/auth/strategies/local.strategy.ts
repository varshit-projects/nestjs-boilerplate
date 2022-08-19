import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserDto } from "src/modules/user/dto";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService:AuthService){
        super({ usernameField: 'email' });
    }

    async validate(email:string,password:string):Promise<UserDto>{
      
        const user = await this.authService.validateUser({email:email,password});

        if(!user){
            throw new UnauthorizedException('Credentials invalid');
        }
        return user;
    }

}