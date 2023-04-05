import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<PostMongooseModel>;

@Schema({
  collection: 'posts',
})
export class PostMongooseModel {
  _id: Types.ObjectId;

  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  likes?: number;
}

export const PostSchema = SchemaFactory.createForClass(PostMongooseModel);
