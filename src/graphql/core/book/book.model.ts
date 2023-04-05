import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookGraphQlModel {
  @Field()
  id: string;
  @Field()
  author: string;
  @Field()
  country: string;
  @Field()
  imageLink: string;
  @Field()
  language: string;
  @Field()
  link: string;
  @Field()
  pages: number;
  @Field()
  title: string;
  @Field()
  year: number;
}
