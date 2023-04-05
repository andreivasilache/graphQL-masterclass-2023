import { Args, Query, Resolver } from '@nestjs/graphql';
import { BookGraphQlModel } from './book.model';
import { BooksService } from 'src/services/books.service';

@Resolver(() => BookGraphQlModel)
export class BookResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [BookGraphQlModel])
  async getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Query(() => BookGraphQlModel)
  async getBook(@Args('bookID') bookID: string) {
    return this.booksService.getBook(bookID);
  }
}
