import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemService } from './item.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.service.create(createItemDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return await this.service.update(id, updateItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
