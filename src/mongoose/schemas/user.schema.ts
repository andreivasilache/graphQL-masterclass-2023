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
}

export const UserSchema = SchemaFactory.createForClass(UserMongooseModel);
