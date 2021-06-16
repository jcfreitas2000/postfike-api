import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    private readonly users: UserEntity[] = [
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

    async findByEmail(email: string): Promise<UserEntity> {
        return this.users.find(user => user.email === email);
    }
}
