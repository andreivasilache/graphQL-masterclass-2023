import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserMongooseModel } from 'src/mongoose/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserMongooseModel.name)
    private userModel: Model<UserMongooseModel>,
  ) {}

  async getUser(_id: Types.ObjectId) {
    return this.userModel.findOne({ _id }).exec();
  }

  async getUsers() {
    return this.userModel.find().exec();
  }

  async createUser(user: Omit<UserMongooseModel, '_id'>) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async addPostIDToUser(_id: Types.ObjectId, postID: Types.ObjectId) {
    return this.userModel
      .findOneAndUpdate({ _id }, { $push: { postsIDs: postID } })
      .exec();
  }
}
