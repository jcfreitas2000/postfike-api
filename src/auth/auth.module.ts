import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './passport/jwt.strategy';
import { JwtAuthGuard } from './passport/jwt-auth.guard';

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
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy,
		{ provide: 'APP_GUARD', useClass: JwtAuthGuard },
	],
})
export class AuthModule {}
