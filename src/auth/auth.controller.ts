import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post()
	auth(): string {
		return 'auth';
	}

	@Post('recover-password')
	recoverPassword(): string {
		return 'recover-password';
	}
}
