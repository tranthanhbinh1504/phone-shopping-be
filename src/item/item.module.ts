import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [ItemService],
  controllers: [ItemController],
  imports: [SharedModule],
})
export class ItemModule {}
