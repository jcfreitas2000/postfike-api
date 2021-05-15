import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
	@Get()
	find(): string {
		return 'find';
	}

	@Post()
	create(): string {
		return 'create';
	}

	@Put()
	update(): string {
		return 'update';
	}
}
