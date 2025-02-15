import { JwtPayload } from 'jsonwebtoken';
import { Book } from '../book/book.model';
import { User } from '../user/user.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';
import { orderUtils } from './order.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createOrderIntoDB = async (
  user: JwtPayload,
  payload: Partial<IOrder>,
  client_ip: string,
) => {
  if (!payload?.products?.length) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Order is not specified');
  }

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

  const existUser = await User.findById(user?.id);

  // payment integration
  const shurjopayPayload = {
    amount: totalPrice,
    order_id: order._id,
    currency: 'BDT',
    customer_name: existUser?.name,
    customer_address: existUser?.address,
    customer_email: existUser?.email,
    customer_phone: existUser?.phone,
    customer_city: existUser?.address,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);

  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      },
    );
  }
  return verifiedPayment;
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
  verifyPayment,
};
