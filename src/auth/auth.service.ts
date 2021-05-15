import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	auth(email: string, password: string): string {
		return `Trying to login => ${email}:${password}`;
	}

	recoverPassword(email: string): string {
		return `Trying to recover password => ${email}`;
	}
}
