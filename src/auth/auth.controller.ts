import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

class AuthRequest {
	email: string;
	password: string;
}

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	auth(@Body() authRequest: AuthRequest): string {
		return this.authService.auth(authRequest.email, authRequest.password);
	}

	@Post('recover-password')
	recoverPassword(@Body('email') email: string): string {
		return this.authService.recoverPassword(email);
	}
}
