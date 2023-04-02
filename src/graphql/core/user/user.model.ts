import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => [Post])
  posts: Post[];
}
