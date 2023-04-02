
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    authorID: number;
    content: string;
    title: string;
}

export interface IMutation {
    createPost(postFormData: CreatePostInput): Post | Promise<Post>;
}

export interface Post {
    authorID: number;
    content?: Nullable<string>;
    id: number;
    likes?: Nullable<number>;
    title?: Nullable<string>;
}

export interface IQuery {
    getAllPosts(): Post[] | Promise<Post[]>;
    getAllUsers(): User[] | Promise<User[]>;
    getUser(id: number): User | Promise<User>;
}

export interface User {
    age?: Nullable<number>;
    firstName?: Nullable<string>;
    id: number;
    lastName?: Nullable<string>;
    posts: Post[];
}

type Nullable<T> = T | null;
