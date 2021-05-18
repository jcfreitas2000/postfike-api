import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string): Promise<UserEntity> {
		const user = await this.usersService.findByEmail(email);

		if (user && user.password === password) {
			return user;
		}
		return null;
	}

	async login(user: UserEntity) {
		const payload = { email: user.email, sub: user.id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}

	recoverPassword(email: string): string {
		return `Trying to recover password => ${email}`;
	}
}
