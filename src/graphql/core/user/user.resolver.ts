import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql/common/inputTypes/user.input';
import { PostsService } from 'src/services/posts.service';
import { UsersService } from 'src/services/users.service';
import { UserGraphQLModel } from './user.model';
import { BooksService } from 'src/services/books.service';
import { faker } from '@faker-js/faker';
import { CreatePostInput } from 'src/graphql/common/inputTypes/post.input';

@Resolver(() => UserGraphQLModel)
export class UsersResolver {
  constructor(
    private usersServices: UsersService,
    private postsService: PostsService,
    private booksService: BooksService,
  ) {}

  async attachAllDataToUser(user: UserGraphQLModel) {
    /** Deep copy the user, getting rid of all the mongoose meta proprieties */
    const deepCopiedUser: UserGraphQLModel = JSON.parse(JSON.stringify(user));

    const postPromises = deepCopiedUser.postsIDs.map((postID) =>
      this.postsService.getPostById(postID),
    );

    const posts = await Promise.all(postPromises);

    const books = user.booksIDs.map((bookID) =>
      this.booksService.getBook(bookID),
    );

    return { ...deepCopiedUser, posts, books };
  }

  @Query(() => [UserGraphQLModel])
  async getAllUsers() {
    const fetchedUsers = await this.usersServices.getUsers();
    const usersWithAttachedPostsPromises = fetchedUsers.map(
      this.attachAllDataToUser,
      this,
    );
    const toBeReturned = await Promise.all(usersWithAttachedPostsPromises);

    return toBeReturned;
  }

  @Mutation(() => UserGraphQLModel)
  async createUser(
    @Args('userData') user: CreateUserInput,
  ): Promise<UserGraphQLModel> {
    const newUser = await this.usersServices.createUser({
      ...user,
      booksIDs: [],
      postsIDs: [],
    });

    return Promise.resolve(newUser);
  }

  /* 
  Please dont run the seedUsers query, it's just for testing purposes
  By doing this you might end up our presentation and most probably our careers.
*/
  @Query(() => UserGraphQLModel)
  async seedUsers() {
    const generateRandomNumberInRange = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const NUMBER_OF_USERS = 10;

    const MAX_NUMBER_OF_POSTS = 4;
    const MAX_NUMBER_OF_BOOKS = 2;

    const mockUsers = Array.from({ length: NUMBER_OF_USERS }).map(
      () =>
        ({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          age: parseInt(faker.random.numeric(2)),
        } as CreateUserInput),
    );

    for (const user of mockUsers) {
      const numberOfBooks = generateRandomNumberInRange(0, MAX_NUMBER_OF_BOOKS);
      const numberOfPosts = generateRandomNumberInRange(0, MAX_NUMBER_OF_POSTS);

      const mockPosts = Array.from({ length: numberOfPosts }).map(
        () =>
          ({
            title: faker.random.words(generateRandomNumberInRange(3, 10)),
            content: faker.random.words(generateRandomNumberInRange(10, 40)),
            likes: parseInt(faker.random.numeric(2)),
          } as CreatePostInput),
      );

      const createdPostsPromises = mockPosts.map((post) =>
        this.postsService.createPost(post),
      );
      const mockPostIds = (await Promise.all(createdPostsPromises)).map(
        (post) => post._id,
      );

      const mockBooksIds = Array.from({ length: numberOfBooks }).map(
        () => this.booksService.pickRandomBook().id,
      );

      await this.usersServices.createUser({
        ...user,
        booksIDs: mockBooksIds,
        postsIDs: mockPostIds,
      });
    }

    return Promise.resolve();
  }
}
