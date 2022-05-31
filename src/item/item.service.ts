import { Item, ItemDocument } from './schemas/item.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item.name) private readonly model: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateItemDto): Promise<Item> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateItemDto): Promise<Item> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
