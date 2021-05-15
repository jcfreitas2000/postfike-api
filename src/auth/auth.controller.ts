import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	auth(@Body() authDto: AuthDto): string {
		return this.authService.auth(authDto.email, authDto.password);
	}

	@Post('recover-password')
	recoverPassword(@Body('email') email: string): string {
		return this.authService.recoverPassword(email);
	}
}
