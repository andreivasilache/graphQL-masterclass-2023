
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    authorID?: Nullable<string>;
    content: string;
    likes: number;
    title: string;
}

export interface CreateUserInput {
    age: number;
    firstName: string;
    lastName: string;
}

export interface BookGraphQlModel {
    author: string;
    country: string;
    id: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
}

export interface IMutation {
    createPost(postFormData: CreatePostInput): PostGraphQlModel | Promise<PostGraphQlModel>;
    createUser(userData: CreateUserInput): UserGraphQLModel | Promise<UserGraphQLModel>;
}

export interface PostGraphQlModel {
    _id: string;
    content: string;
    likes?: Nullable<number>;
    title: string;
}

export interface IQuery {
    getAllBooks(): BookGraphQlModel[] | Promise<BookGraphQlModel[]>;
    getAllPosts(): PostGraphQlModel[] | Promise<PostGraphQlModel[]>;
    getAllUsers(): UserGraphQLModel[] | Promise<UserGraphQLModel[]>;
    getBook(bookID: string): BookGraphQlModel | Promise<BookGraphQlModel>;
    seedUsers(): UserGraphQLModel | Promise<UserGraphQLModel>;
}

export interface UserGraphQLModel {
    _id: string;
    age?: Nullable<number>;
    books?: Nullable<BookGraphQlModel[]>;
    booksIDs: string[];
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<PostGraphQlModel[]>;
    postsIDs: string[];
}

type Nullable<T> = T | null;
