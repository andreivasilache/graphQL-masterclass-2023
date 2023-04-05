import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostGraphQlModel } from './post.model';
import { PostsService } from 'src/services/posts.service';
import { CreatePostInput } from 'src/graphql/common/inputTypes/post.input';

@Resolver(() => PostGraphQlModel)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [PostGraphQlModel])
  async getAllPosts() {
    return this.postsService.getPosts();
  }

  @Mutation(() => PostGraphQlModel)
  async createPost(@Args('postFormData') postData: CreatePostInput) {
    return this.postsService.createPost(postData);
  }
}
