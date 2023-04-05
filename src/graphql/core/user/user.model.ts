import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostGraphQlModel } from '../post/post.model';
import { Types } from 'mongoose';
import { UserMongooseModel } from 'src/mongoose/schemas/user.schema';
import { BookGraphQlModel } from '../book/book.model';

@ObjectType()
export class UserGraphQLModel implements UserMongooseModel {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field(() => Int, { nullable: true })
  age: number;

  @Field(() => [String], { defaultValue: [] })
  postsIDs: Types.ObjectId[];

  @Field(() => [String], { defaultValue: [] })
  booksIDs: string[];

  @Field(() => [PostGraphQlModel], { nullable: true })
  posts?: PostGraphQlModel[];

  @Field(() => [BookGraphQlModel], { nullable: true })
  books?: BookGraphQlModel[];
}
