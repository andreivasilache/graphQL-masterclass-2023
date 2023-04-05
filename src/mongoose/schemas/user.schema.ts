import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { PostMongooseModel } from './post.schema';

export type UserDocument = HydratedDocument<PostMongooseModel>;

@Schema({
  collection: 'users',
})
export class UserMongooseModel {
  _id: Types.ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  postsIDs: Types.ObjectId[];

  @Prop()
  booksIDs: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserMongooseModel);
