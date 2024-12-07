import { rooms } from './Room.js';

const bookings = [
  {
    id: "1",
    customerId: "1",
    roomId: "1",
    date: "2024-06-01",
    startTime: "10:00",
    endTime: "12:00",
    bookingDate: new Date(),
    status: "Booked"
  },
  {
    id: "2",
    customerId: "2",
    roomId: "2",
    date: "2024-06-01",
    startTime: "14:00",
    endTime: "16:00",
    bookingDate: new Date(),
    status: "Booked"
  }
];

export const bookRoom = (req, res) => {
  const { customerId, roomId, date, startTime, endTime } = req.body;
  const room = rooms.find(r => r.id == roomId);
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }
  const booking = {
    id: (bookings.length + 1).toString(),
    customerId,
    roomId,
    date,
    startTime,
    endTime,
    bookingDate: new Date(),
    status: 'Booked'
  };
  room.bookings.push(booking);
  bookings.push(booking);
  res.status(201).json({ message: "Room booked successfully", data: booking });
};

export const listCustomerBookings = (req, res) => {
  const { customerId } = req.params;
  const customerBookings = bookings.filter(booking => booking.customerId == customerId);
  res.status(200).json(customerBookings);
};

export { bookings };
