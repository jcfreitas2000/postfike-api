import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
	@Get(':id')
	find(): string {
		return 'find';
	}

	@Get()
	list(): string {
		return 'list';
	}

	@Post()
	create(): string {
		return 'create';
	}

	@Put(':id')
	update(): string {
		return 'update';
	}

	@Delete(':id')
	delete(): string {
		return 'delete';
	}
}
