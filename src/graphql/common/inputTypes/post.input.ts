import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  authorID: number;
  @Field()
  title: string;
  @Field()
  content: string;
}
