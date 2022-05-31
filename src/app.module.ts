import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './item/item.module';

const mongoose = MongooseModule.forRoot('mongodb://localhost/shopping');
@Module({
  imports: [mongoose, UserModule, AuthModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
