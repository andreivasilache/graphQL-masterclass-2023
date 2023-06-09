import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { UsersService } from 'src/services/users.service';
import { PostsService } from 'src/services/posts.service';
import {
  UserMongooseModel,
  UserSchema,
} from 'src/mongoose/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PostMongooseModel,
  PostSchema,
} from 'src/mongoose/schemas/post.schema';
import { BooksService } from 'src/services/books.service';

@Module({
  providers: [UsersResolver, UsersService, PostsService, BooksService],
  imports: [
    MongooseModule.forFeature([
      { name: UserMongooseModel.name, schema: UserSchema },
      { name: PostMongooseModel.name, schema: PostSchema },
    ]),
  ],
})
export class UserModule {}
