import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from 'src/services/posts.service';
import { UsersService } from 'src/services/users.service';
import { User } from './user.model';

@Resolver(() => User)
export class AuthorsResolver {
  constructor(
    private usersServices: UsersService,
    private postsService: PostsService,
  ) {}

  @Query(() => [User])
  async getAllUsers() {
    return this.usersServices.getUsers();
  }

  @Query(() => User)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.usersServices.getUser(id);
  }

  @ResolveField()
  async posts(@Parent() author: User) {
    const { id } = author;
    return this.postsService.getPostsByAuthorId(id);
  }
}
