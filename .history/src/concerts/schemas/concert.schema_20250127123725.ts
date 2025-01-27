import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  availableTickets: number;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);