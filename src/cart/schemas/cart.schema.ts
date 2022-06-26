import { Item } from './../../item/schemas/item.schema';
import { User } from './../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({
    required: true,
    type: [{ type: MongooseSchema.Types.ObjectId, ref: User.name }],
  })
  userId: string;

  @Prop({
    required: true,
    type: [{ type: MongooseSchema.Types.ObjectId, ref: Item.name }],
  })
  itemId: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
