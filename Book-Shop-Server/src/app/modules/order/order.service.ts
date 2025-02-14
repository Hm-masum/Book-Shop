import { JwtPayload } from 'jsonwebtoken';
import { Book } from '../book/book.model';
import { User } from '../user/user.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (
  user: JwtPayload,
  payload: Partial<IOrder>,
) => {
  const existUser = await User.findById(user?.id);

  const products = payload.products;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item) => {
      const product = await Book.findById(item.product);
      if (product) {
        const subtotal = product ? (product.price || 0) * item.quantity : 0;
        totalPrice += subtotal;
        return item;
      }
    }),
  );

  let order = await Order.create({
    user,
    products: productDetails,
    totalPrice,
  });
  // payment integration
  const shurjopayPayload = {
    amount: totalPrice,
    order_id: order._id,
    currency: 'BDT',
  };
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
