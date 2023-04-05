import { Injectable } from '@nestjs/common';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import { BookGraphQlModel } from 'src/graphql/core/book/book.model';

@Injectable()
export class BooksService {
  JSONBooks: BookGraphQlModel[] = [];
  constructor() {
    const JSONBooksRaw = readFileSync(
      join(process.cwd(), './src/services/books.json'),
      'utf-8',
    );

    try {
      this.JSONBooks = JSON.parse(JSONBooksRaw);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllBooks() {
    return this.JSONBooks;
  }

  async getBook(bookID: string) {
    const foundBook = this.JSONBooks.find((book) => book.id === bookID);
    return foundBook;
  }

  pickRandomBook() {
    const randomIndex = Math.floor(Math.random() * this.JSONBooks.length);
    return this.JSONBooks[randomIndex];
  }
}
