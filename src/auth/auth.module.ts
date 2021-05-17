import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
	controllers: [AuthController],
	imports: [
		UsersModule,
		PassportModule,
		JwtModule.registerAsync({
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('JWT_SECRET'),
				signOptions: {
					expiresIn: configService.get<string>(
						'JWT_ACCESS_TOKEN_EXPIRES_IN',
					),
				},
			}),
			inject: [ConfigService],
		}),
	],
	exports: [AuthService, JwtModule],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
