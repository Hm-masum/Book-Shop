import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderController.createOrder);

router.get('/all-order', OrderController.getAllOrder);
router.get('/user-order', OrderController.getAllOrder);

router.patch('/revenue', OrderController.calculateRevenue);

export const OrderRoutes = router;
