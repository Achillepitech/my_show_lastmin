import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';
import { Concert, ConcertSchema } from './schemas/concert.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Concert.name, schema: ConcertSchema }])
  ],
  controllers: [ConcertsController],
  providers: [ConcertsService]
})
export class ConcertsModule {}
