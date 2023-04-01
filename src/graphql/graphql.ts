
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Post {
    content?: Nullable<string>;
    id: number;
    likes?: Nullable<number>;
    title?: Nullable<string>;
}

export interface IQuery {
    author(id: number): User | Promise<User>;
    getAllPosts(): Post[] | Promise<Post[]>;
    getAllUsers(): User[] | Promise<User[]>;
}

export interface User {
    age?: Nullable<number>;
    firstName?: Nullable<string>;
    id: number;
    lastName?: Nullable<string>;
    posts: Post[];
}

type Nullable<T> = T | null;
