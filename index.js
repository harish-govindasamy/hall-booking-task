import express from 'express';
import cors from 'cors';
import roomRouter from './Routers/roomRouter.js';
import bookingRouter from './Routers/bookingRouter.js';
import userRouter from './Routers/userRouter.js';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).send("API is running successfully");
});

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
