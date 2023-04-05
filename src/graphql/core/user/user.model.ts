import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostGraphQlModel } from '../post/post.model';
import { Types } from 'mongoose';
import { UserMongooseModel } from 'src/mongoose/schemas/user.schema';

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

  @Field(() => [PostGraphQlModel], { nullable: true })
  posts?: PostGraphQlModel[];
}
