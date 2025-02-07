import { TUser } from './../user/user.interface';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;
  const body = req.body;
  const result = await OrderServices.createOrderIntoDB(user as TUser, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrderFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Order Retrieve successfully',
    data: result,
  });
});

const getUserOrder = catchAsync(async (req, res) => {
  const id = req.user.id;
  const result = await OrderServices.getUserOrderFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Order Retrieve successfully',
    data: result,
  });
});

const calculateRevenue = catchAsync(async (req, res) => {
  const result = await OrderServices.calculateRevenueFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Calculated Revenue successfully',
    data: result,
  });
});

export const OrderController = {
  calculateRevenue,
  getAllOrder,
  getUserOrder,
  createOrder,
};
