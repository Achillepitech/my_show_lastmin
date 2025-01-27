import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './schemas/concert.schema';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel(Concert.name) private concertModel: Model<ConcertDocument>
  ) {}

  async findAll(): Promise<ConcertDocument[]> {
    return await this.concertModel.find().exec();
  }

  async findOne(id: string): Promise<ConcertDocument | null> {
    return await this.concertModel.findById(id).exec();
  }

  async create(concert: Concert): Promise<ConcertDocument> {
    const newConcert = new this.concertModel(concert);
    return await newConcert.save();
  }
}