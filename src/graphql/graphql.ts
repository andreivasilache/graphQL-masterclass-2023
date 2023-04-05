
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    authorID: string;
    content: string;
    likes: number;
    title: string;
}

export interface CreateUserInput {
    age: number;
    firstName: string;
    lastName: string;
}

export interface IMutation {
    createPost(postFormData: CreatePostInput): PostGraphQlModel | Promise<PostGraphQlModel>;
    createUser(userData: CreateUserInput): UserGraphQLModel | Promise<UserGraphQLModel>;
}

export interface PostGraphQlModel {
    _id: string;
    authorID: string;
    content: string;
    likes?: Nullable<number>;
    title: string;
}

export interface IQuery {
    getAllPosts(): PostGraphQlModel[] | Promise<PostGraphQlModel[]>;
    getAllUsers(): UserGraphQLModel[] | Promise<UserGraphQLModel[]>;
}

export interface UserGraphQLModel {
    _id: string;
    age?: Nullable<number>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<PostGraphQlModel[]>;
}

type Nullable<T> = T | null;
