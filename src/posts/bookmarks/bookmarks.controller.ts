import { Controller, Delete, Post } from '@nestjs/common';

@Controller('posts/:postId/bookmarks')
export class BookmarksController {
	@Post()
	create(): string {
		return 'create';
	}

	@Delete(':id')
	delete(): string {
		return 'delete';
	}
}
