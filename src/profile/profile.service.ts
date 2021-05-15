import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
	find(): string {
		return 'Authenticated user: userName';
	}

	create(createProfileDto: CreateProfileDto) {
		return `Creating user: ${createProfileDto.name}`;
	}

	update(updateProfileDto: UpdateProfileDto) {
		return `Updating user: ${updateProfileDto.name}`;
	}
}
