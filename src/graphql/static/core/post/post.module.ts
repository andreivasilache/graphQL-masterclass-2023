import { Module } from '@nestjs/common';
import { PostsService } from 'src/services/posts.service';
import { PostsResolver } from './post.resolver';

@Module({
  providers: [PostsResolver, PostsService],
})
export class PostModule {}
