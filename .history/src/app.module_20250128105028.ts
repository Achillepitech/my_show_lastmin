import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertsModule } from './concerts/concert.module';
import { UsersModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/my_show_lastmin'),
    ConcertsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

