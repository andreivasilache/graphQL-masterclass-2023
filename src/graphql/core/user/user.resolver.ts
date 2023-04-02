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
export class UsersResolver {
  constructor(
    private usersServices: UsersService,
    private postsService: PostsService,
  ) {}

  async getPostsOfUser(userID) {
    return this.postsService.getPostsByAuthorId(userID);
  }

  @Query(() => [User])
  async getAllUsers() {
    const fetchedUsers = await this.usersServices.getUsers();
    const users = fetchedUsers.map(async (user) => ({
      ...user,
      posts: await this.getPostsOfUser(user.id),
    }));

    return users;
  }

  @Query(() => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    const foundUser = await this.usersServices.getUser(id);

    return {
      foundUser,
      posts: await this.getPostsOfUser(foundUser.id),
    };
  }
}
