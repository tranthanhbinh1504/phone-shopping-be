import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

const mongoose = MongooseModule.forRoot('mongodb://localhost/shopping');
@Module({
  imports: [mongoose, TodoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
