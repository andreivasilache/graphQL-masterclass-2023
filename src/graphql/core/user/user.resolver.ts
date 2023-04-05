import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql/common/inputTypes/user.input';
import { PostsService } from 'src/services/posts.service';
import { UsersService } from 'src/services/users.service';
import { UserGraphQLModel } from './user.model';

@Resolver(() => UserGraphQLModel)
export class UsersResolver {
  constructor(
    private usersServices: UsersService,
    private postsService: PostsService,
  ) {}

  async attachPostsToUser(user: UserGraphQLModel) {
    /** Deep copy the user, getting rid of all the mongoose meta proprieties */
    const deepCopiedUser: UserGraphQLModel = JSON.parse(JSON.stringify(user));
    const posts = await this.postsService.getPostsByAuthorId(
      deepCopiedUser._id.toString(),
    );

    return { ...deepCopiedUser, posts };
  }

  @Query(() => [UserGraphQLModel])
  async getAllUsers() {
    const fetchedUsers = await this.usersServices.getUsers();
    const usersWithAttachedPostsPromises = fetchedUsers.map(
      this.attachPostsToUser,
      this,
    );
    const toBeReturned = await Promise.all(usersWithAttachedPostsPromises);

    return toBeReturned;
  }

  @Mutation(() => UserGraphQLModel)
  async createUser(
    @Args('userData') user: CreateUserInput,
  ): Promise<UserGraphQLModel> {
    const newUser = await this.usersServices.createUser(user);

    return Promise.resolve(newUser);
  }
}
