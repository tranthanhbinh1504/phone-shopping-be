import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { Item, ItemSchema } from 'src/item/schemas/item.schema';
import { Cart, CartSchema } from 'src/cart/schemas/cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Item.name,
        schema: ItemSchema,
      },
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class DataModule {}
