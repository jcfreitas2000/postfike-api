import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewsService {
    create(postId: number): string {
        return `Creating a authenticated user view for post: ${postId}`;
    }

    delete(id: number): string {
        return `Deleting view: ${id}`;
    }
}
