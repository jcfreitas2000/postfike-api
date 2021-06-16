import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('posts/:postId/images')
export class ImagesController {
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

    @Delete(':id')
    delete(): string {
        return 'delete';
    }
}
