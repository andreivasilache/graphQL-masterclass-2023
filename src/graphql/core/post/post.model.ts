import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { PostMongooseModel } from 'src/mongoose/schemas/post.schema';

@ObjectType()
export class PostGraphQlModel implements PostMongooseModel {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  authorID: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int, { nullable: true })
  likes?: number;
}
