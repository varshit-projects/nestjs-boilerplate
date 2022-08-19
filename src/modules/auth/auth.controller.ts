import { Body, Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto, token } from "./dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGaurd } from "./guards/local-auth.guard";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getHello(@Request() req): any {
        return req.user
    }

    @UseGuards(LocalAuthGaurd)
    @ApiBody({ type: AuthDto, required: true })
    @Post('login')
    async login(@Request() req): Promise<token> {

        const result: token = await this.authService.login(req.user);
        return result;
    }

}