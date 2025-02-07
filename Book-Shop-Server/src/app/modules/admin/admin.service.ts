import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { Book } from '../book/book.model';

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const blockUserIntoDB = async (id: string) => {
  const existingUser = await User.findById(id);
  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }

  if (existingUser.role == 'admin') {
    throw new AppError(httpStatus.BAD_REQUEST, 'You Can Not Block Admin');
  }

  const result = await User.findByIdAndUpdate(id, { isBlocked: true });
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const existingBlog = await Book.findById(id);
  if (!existingBlog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Book is not found');
  }

  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const AdminService = {
  getAllUserFromDB,
  blockUserIntoDB,
  deleteBlogIntoDB,
};
