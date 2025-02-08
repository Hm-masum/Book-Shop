import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/users', auth(USER_ROLE.admin), AdminController.getAllUser);

router.patch(
  '/user/:userId/block',
  auth(USER_ROLE.admin),
  AdminController.blockUser,
);

export const AdminRoutes = router;
