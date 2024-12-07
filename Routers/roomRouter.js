import express from 'express';
import { createRoom, listRoomsWithBookings } from '../Controller/Room.js';

const router = express.Router();

router.post('/create', createRoom);
router.get('/list', listRoomsWithBookings);

export default router;
