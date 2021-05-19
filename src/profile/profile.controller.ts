import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtUserPayload } from '../auth/passport/jwt-user-payload';

@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) {}

	@Get()
	find(@Request() request): string {
		const user: JwtUserPayload = request.user;
		return this.profileService.find(user.sub);
	}

	@Post()
	create(@Body() createProfileDto: CreateProfileDto): string {
		return this.profileService.create(createProfileDto);
	}

	@Put()
	update(@Body() updateProfileDto: UpdateProfileDto): string {
		return this.profileService.update(updateProfileDto);
	}
}
