import express from 'express';
import { bookRoom, listCustomerBookings } from '../Controller/Booking.js';

const router = express.Router();

router.post('/book', bookRoom);
router.get('/list/:customerId', listCustomerBookings);

export default router;
