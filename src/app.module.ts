import { Module } from '@nestjs/common';
import { AuthModule, PGModule, UserModule } from './modules';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [AuthModule,UserModule,  PGModule],
  providers: [UserService],
  controllers: [UserController],
 
})
export class AppModule {}
