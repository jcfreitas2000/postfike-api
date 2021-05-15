import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) {}

	@Get()
	find(): string {
		return this.profileService.find();
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
