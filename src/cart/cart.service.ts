import { Item, ItemDocument } from './../item/schemas/item.schema';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CreateCartDto } from './dto/create-cart.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModule: Model<CartDocument>,
    @InjectModel(Item.name) private readonly ItemModule: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Cart[]> {
    return await this.cartModule.find().exec();
  }

  async findOne(id: string): Promise<Cart> {
    console.log(id);
    console.log(this.cartModule.findById(id));
    return await this.cartModule.findById(id).populate('item');
  }

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    return await new this.cartModule({
      ...createCartDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    return await this.cartModule.findByIdAndUpdate(id, updateCartDto).exec();
  }

  async delete(id: string): Promise<Cart> {
    return await this.cartModule.findByIdAndDelete(id).exec();
  }
}
