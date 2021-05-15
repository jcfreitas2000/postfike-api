import { Controller, Delete, Param, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('posts/:postId/bookmarks')
export class BookmarksController {
	constructor(private bookmarkService: BookmarksService) {}

	@Post()
	create(@Param('postId') postId: number): string {
		return this.bookmarkService.create(postId);
	}

	@Delete(':id')
	delete(@Param('id') id: number): string {
		return this.bookmarkService.delete(id);
	}
}
