import { Resolver, Query } from '@nestjs/graphql';
import { Post } from './post.model';
import { PostsService } from 'src/services/posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async getAllPosts() {
    return this.postsService.getPosts();
  }
}
