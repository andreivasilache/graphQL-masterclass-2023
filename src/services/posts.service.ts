import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  posts = [
    { id: 1, title: 'asd', content: 'asd1' },
    { id: 2, title: 'asd', content: 'asd2asd' },
    { id: 3, title: 'asd', content: 'asd3asd' },
  ];

  async getPostsByAuthorId(authorId: number) {
    return this.posts.filter((post) => post.id === authorId);
  }

  getPosts() {
    return this.posts;
  }
}
