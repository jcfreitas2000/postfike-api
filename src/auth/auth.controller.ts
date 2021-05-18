import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	Request,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(HttpStatus.OK)
	async auth(@Request() request): Promise<any> {
		return this.authService.login(request.user);
	}

	@Post('recover-password')
	recoverPassword(@Body('email') email: string): string {
		return this.authService.recoverPassword(email);
	}
}
