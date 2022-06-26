import { ItemModule } from './../item/item.module';
import { Cart, CartSchema } from './schemas/cart.schema';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [SharedModule],
})
export class CartModule {}
