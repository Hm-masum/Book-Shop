import { model, Schema } from 'mongoose';
import { IOrder, IProducts } from './order.interface';

const productSchema = new Schema<IProducts>({
  product: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true },
});

const bookSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [productSchema],
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export const Order = model<IOrder>('Order', bookSchema);
