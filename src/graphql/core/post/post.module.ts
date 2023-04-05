import { Module } from '@nestjs/common';
import { PostsService } from 'src/services/posts.service';
import { PostsResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PostMongooseModel,
  PostSchema,
} from 'src/mongoose/schemas/post.schema';
import { UsersService } from 'src/services/users.service';
import {
  UserMongooseModel,
  UserSchema,
} from 'src/mongoose/schemas/user.schema';

@Module({
  providers: [PostsResolver, PostsService, UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: PostMongooseModel.name, schema: PostSchema },
      { name: UserMongooseModel.name, schema: UserSchema },
    ]),
  ],
})
export class PostModule {}
