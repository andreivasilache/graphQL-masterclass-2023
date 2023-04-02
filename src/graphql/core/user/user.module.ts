import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { UsersService } from 'src/services/users.service';
import { PostsService } from 'src/services/posts.service';

@Module({
  providers: [UsersResolver, UsersService, PostsService],
})
export class UserModule {}
