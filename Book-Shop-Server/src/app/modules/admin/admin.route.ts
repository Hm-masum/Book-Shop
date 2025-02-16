import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/users', AdminController.getAllUser);
router.get('/user/:userId', AdminController.getSingleUser);

router.patch('/user/:userId/block', AdminController.blockUser);

export const AdminRoutes = router;
