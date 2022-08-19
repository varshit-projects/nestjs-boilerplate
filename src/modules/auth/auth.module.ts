import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PGModule } from 'src/modules/pg/pg.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtSecret } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports:[UserModule,PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({
        secret:jwtSecret,
        signOptions:{expiresIn:'3600s'}
    })],
    controllers: [AuthController],
    providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
