import { BooksService } from 'src/services/books.service';
import { BookResolver } from './book.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [BookResolver, BooksService],
})
export class BookModule {}
