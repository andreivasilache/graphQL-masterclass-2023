import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Post } from './post.schema';

export type UserDocument = HydratedDocument<Post>;

@Schema()
export class User {
  @Prop()
  id: number;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
