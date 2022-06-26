import { BaseCartDto } from './base-cart.dto';

export class UpdateCartDto extends BaseCartDto {
  completedAt: Date;
}
