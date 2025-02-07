import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), AdminController.getAllUser);

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  AdminController.blockUser,
);

router.delete('/blogs/:id', auth(USER_ROLE.admin), AdminController.deleteBlog);

export const AdminRoutes = router;
