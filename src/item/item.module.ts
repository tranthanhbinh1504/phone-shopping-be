import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item, ItemSchema } from './schemas/item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [ItemService],
  controllers: [ItemController],
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
})
export class ItemModule {}
