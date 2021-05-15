import { Controller, Delete, Post } from '@nestjs/common';

@Controller('posts/:postId/views')
export class ViewsController {
	@Post()
	create(): string {
		return 'create';
	}

	@Delete(':id')
	delete(): string {
		return 'delete';
	}
}
