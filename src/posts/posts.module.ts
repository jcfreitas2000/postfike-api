import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { ViewsModule } from './views/views.module';
import { ImagesModule } from './images/images.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
	imports: [BookmarksModule, ViewsModule, ImagesModule],
	controllers: [PostsController],
	providers: [PostsService],
})
export class PostsModule {}
