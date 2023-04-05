import { Module } from '@nestjs/common';
import { PostsService } from 'src/services/posts.service';
import { PostsResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PostMongooseModel,
  PostSchema,
} from 'src/mongoose/schemas/post.schema';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [
    MongooseModule.forFeature([
      { name: PostMongooseModel.name, schema: PostSchema },
    ]),
  ],
})
export class PostModule {}
