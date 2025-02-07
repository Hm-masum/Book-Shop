import { TUser } from '../user/user.interface';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (user: TUser, payload: Partial<IOrder>) => {
  console.log(user, payload);
};

const getUserOrderFromDB = async (id: string) => {
  const result = await Order.find({ user: id });
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await Order.aggregate([
    { $unwind: '$products' },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
        totalProductSells: { $sum: '$products.quantity' },
      },
    },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  calculateRevenueFromDB,
  getAllOrderFromDB,
  getUserOrderFromDB,
};
