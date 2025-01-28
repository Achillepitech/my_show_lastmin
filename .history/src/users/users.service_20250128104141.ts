import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './shemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserDocument | null> {
    return await this.userModel.findById(id).exec();
  }

  async create(user: User): Promise<UserDocument> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}