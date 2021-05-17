import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	private readonly users = [
		{
			id: '1',
			name: 'José',
			email: 'jose@email.com',
			password: '123',
			phone: '17912341234',
		},
		{
			id: '2',
			name: 'Pedro',
			email: 'pedro@email.com',
			password: '123',
			phone: '32912341234',
		},
	];

	async findByEmail(email: string): Promise<any> {
		return this.users.find((user) => user.email === email);
	}
}
