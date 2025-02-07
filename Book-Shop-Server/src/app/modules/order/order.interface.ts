import { Types } from 'mongoose';

export interface IProducts {
  product: Types.ObjectId;
  quantity: number;
}

export interface IOrder {
  user: Types.ObjectId;
  products: [IProducts];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
