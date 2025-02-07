import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const getAllUser = catchAsync(async (req, res) => {
  await AdminService.getAllUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'users fetches successfully',
    data: [],
  });
});

const blockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  await AdminService.blockUserIntoDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked successfully',
    data: [],
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  await AdminService.deleteBlogIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: [],
  });
});

export const AdminController = {
  getAllUser,
  blockUser,
  deleteBlog,
};
