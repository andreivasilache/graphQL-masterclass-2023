import { Injectable } from '@nestjs/common';
import { Post } from 'src/graphql/graphql';

@Injectable()
export class PostsService {
  posts: Post[] = [
    { id: 4, title: 'asd', content: 'asd1', authorID: 1, likes: 1 },
    { id: 5, title: 'asd', content: 'asd2asd', authorID: 1, likes: 2 },
    { id: 6, title: 'asd', content: 'asd3asd', authorID: 3, likes: 999 },
  ];

  async getPostsByAuthorId(authorId: number) {
    return this.posts.filter((post) => post.authorID === authorId);
  }

  async createPost(post: Post) {
    this.posts.push(post);
    return post;
  }

  async getPosts() {
    return this.posts;
  }
}
