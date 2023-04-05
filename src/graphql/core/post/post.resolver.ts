import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostGraphQlModel } from './post.model';
import { PostsService } from 'src/services/posts.service';
import { CreatePostInput } from 'src/graphql/common/inputTypes/post.input';
import { UsersService } from 'src/services/users.service';
import { Types } from 'mongoose';

@Resolver(() => PostGraphQlModel)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {}

  @Query(() => [PostGraphQlModel])
  async getAllPosts() {
    return this.postsService.getPosts();
  }

  @Mutation(() => PostGraphQlModel)
  async createPost(@Args('postFormData') postData: CreatePostInput) {
    const createdPost = await this.postsService.createPost(postData);
    const { _id: createdPostID } = createdPost;

    if (postData.authorID) {
      this.usersService.addPostIDToUser(
        new Types.ObjectId(postData.authorID),
        createdPostID,
      );
    }

    return this.postsService.createPost(postData);
  }
}
