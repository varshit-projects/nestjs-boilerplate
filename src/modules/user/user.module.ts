import { Module } from '@nestjs/common';
import { PGModule } from '../pg/pg.module';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[PGModule],
    controllers:[UserController],
    providers: [UserService,UserRepository],
    exports:[UserService,UserRepository]
})
export class UserModule {}
