import { Types } from 'mongoose';

export interface IProducts {
  product: Types.ObjectId;
  quantity: number;
}

export interface IOrder {
  user: Types.ObjectId;
  products: [IProducts];
  totalPrice: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
