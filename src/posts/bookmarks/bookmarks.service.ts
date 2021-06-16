import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarksService {
    create(postId: number): string {
        return `Creating a authenticated user bookmark for post: ${postId}`;
    }

    delete(id: number): string {
        return `Deleting bookmark: ${id}`;
    }
}
