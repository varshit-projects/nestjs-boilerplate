import { Injectable } from '@nestjs/common';
import { RegisterDto, UserConfedentialDto, UserDto } from './dto';
import { UserRepository } from './repository/user.repository';
import { UserTransformer } from './transformer/user.transformer';

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepository) {

    }
    async findUserByEmail(email: string):Promise<UserConfedentialDto> {
        const data = await this.userRepo.findUserByEmail(email);        
        return data;

    }
    
    async registerUser(dto:RegisterDto){
        
        const data = await this.userRepo.registerUser(dto);
        return data;
    }


}
