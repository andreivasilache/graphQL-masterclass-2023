import { PostMongooseModel } from 'src/mongoose/schemas/post.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostMongooseModel.name)
    private postModel: Model<PostMongooseModel>,
  ) {}

  async getPostsByAuthorId(authorID: string) {
    return this.postModel.find({ authorID }).exec();
  }

  async getPostById(postID: Types.ObjectId) {
    return this.postModel.findById(postID).exec();
  }

  async createPost(post: Omit<PostMongooseModel, '_id'>) {
    const newUser = new this.postModel(post);
    return newUser.save();
  }

  async getPosts() {
    return this.postModel.find().exec();
  }
}
