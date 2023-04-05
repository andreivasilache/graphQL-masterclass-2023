import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<PostMongooseModel>;

@Schema({
  collection: 'posts',
})
export class PostMongooseModel {
  _id: Types.ObjectId;
  @Prop()
  /**Declare this as a string instead of ObjectId, in this way we are going to be able to query data more easily from playground / create mock posts */
  authorID: string;
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  likes?: number;
}

export const PostSchema = SchemaFactory.createForClass(PostMongooseModel);
