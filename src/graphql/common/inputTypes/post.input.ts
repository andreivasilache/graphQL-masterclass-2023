import { Field, InputType } from '@nestjs/graphql';
import { PostMongooseModel } from 'src/mongoose/schemas/post.schema';

@InputType()
export class CreatePostInput implements Partial<PostMongooseModel> {
  @Field(() => String, { nullable: true })
  authorID?: string;
  @Field()
  title: string;
  @Field()
  content: string;
  @Field(() => Number)
  likes: number;
}
