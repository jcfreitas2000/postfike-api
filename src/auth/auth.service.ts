import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
import { JwtUserPayload } from './passport/jwt-user-payload';

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
		const payload: JwtUserPayload = {
			sub: user.id,
			name: user.name,
			email: user.email,
		};

		return {
			access_token: this.jwtService.sign(payload),
		};
	}

	recoverPassword(email: string): string {
		return `Trying to recover password => ${email}`;
	}
}
