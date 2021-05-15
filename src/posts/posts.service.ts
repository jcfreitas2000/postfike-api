import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
	find(id: number): string {
		return `Find by id: ${id}`;
	}

	list(): string {
		return 'list all posts: []';
	}

	create(createPostDto: CreatePostDto): string {
		return `Creating post: ${createPostDto.title}`;
	}

	update(id: number, updatePostDto: UpdatePostDto): string {
		return `Updating post: ${updatePostDto.title}`;
	}

	delete(id: number): string {
		return `Deleting post: ${id}`;
	}
}
