import { Controller, Get, UseGuards, Request, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RegisterDto, UserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }


    @Get('protected')
    getHello(@Request() req): UserDto {
        return req.user
    }
    @ApiBody({ type: RegisterDto })
    @Post('signup')
    async signup(@Body() dto: RegisterDto) {

        return await this.userService.registerUser(dto);
    }

}
