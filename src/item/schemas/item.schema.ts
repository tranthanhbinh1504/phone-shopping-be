import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  image?: string;

  @Prop()
  name?: string;

  @Prop()
  price?: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  createdAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
