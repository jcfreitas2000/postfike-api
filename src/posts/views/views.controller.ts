import { Controller, Delete, Param, Post } from '@nestjs/common';
import { ViewsService } from './views.service';

@Controller('posts/:postId/views')
export class ViewsController {
    constructor(private viewsService: ViewsService) {}

    @Post()
    create(@Param('postId') postId: number): string {
        return this.viewsService.create(postId);
    }

    @Delete(':id')
    delete(@Param('id') id: number): string {
        return this.viewsService.delete(id);
    }
}
