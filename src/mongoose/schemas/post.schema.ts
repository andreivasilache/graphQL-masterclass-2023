import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  id: number;
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  authorID: number;
  @Prop()
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
