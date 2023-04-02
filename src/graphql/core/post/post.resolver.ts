import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Post } from './post.model';
import { PostsService } from 'src/services/posts.service';
import { CreatePostInput } from 'src/graphql/common/inputTypes/post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async getAllPosts() {
    return this.postsService.getPosts();
  }

  @Mutation(() => Post)
  async createPost(@Args('postFormData') post: CreatePostInput) {
    return this.postsService.createPost({
      id: Math.floor(Math.random() * 1000),
      likes: 0,
      ...post,
    });
  }
}
