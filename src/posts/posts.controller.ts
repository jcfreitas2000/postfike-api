import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
	constructor(private postsService: PostsService) {}

	@Get(':id')
	find(@Param('id') id: number): string {
		return this.postsService.find(id);
	}

	@Get()
	list(): string {
		return this.postsService.list();
	}

	@Post()
	create(@Body() createPostDto: CreatePostDto): string {
		return this.postsService.create(createPostDto);
	}

	@Put(':id')
	update(
		@Param('id') id: number,
		@Body() updatePostDto: UpdatePostDto,
	): string {
		return this.postsService.update(id, updatePostDto);
	}

	@Delete(':id')
	delete(@Param('id') id: number): string {
		return this.postsService.delete(id);
	}
}
