import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";
import { jwtSecret } from "./constants";
import { UserService } from "../user/user.service";
import { token } from "./dto";
import { UserTransformer } from "../user/transformer/user.transformer";
import { UserDto } from "../user/dto";
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService) {
    }
    async validateUser(authDto):Promise<UserDto> {
        //get user based on email
        const user = await this.userService.findUserByEmail(authDto.email);

        //user doesn't exist
        if (!user) {
            throw new UnauthorizedException('Credentials incorrect');
        }

        //validate user password with hash value
        const isUserValid = await argon.verify(user.hash, authDto.password);

        //generate token if password is correct
        if (isUserValid) {
            return UserTransformer.toUser(user);
        }

        //password incorrect
        else {
            throw new UnauthorizedException('Credentials incorrect');
        }
    }
    async login(user): Promise<token> {
        const payload = {
            email: user.email,
            sub: user.id
        }
        return {
            access_token: this.jwtService.sign(payload)
        }

    }
   
  
}