import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserDto } from "src/modules/user/dto";
import { UserTransformer } from "src/modules/user/transformer/user.transformer";
import { UserService } from "src/modules/user/user.service";
import { AuthService } from "../auth.service";
import { jwtSecret } from "../constants";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService:AuthService,
        private readonly userService: UserService){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration:false,
                secretOrKey:jwtSecret
            }
        );
    }

    async validate({email}):Promise<UserDto>{
        const user = await this.userService.findUserByEmail(email);
        if(!user){
            throw new UnauthorizedException('Credentials invalid');
        }
        return UserTransformer.toUser(user);
    }
}