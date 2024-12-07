import { bookings } from './Booking.js';

const customers = [
  { id: "1", name: "karan" },
  { id: "2", name: "vicky" },
  { id: "3", name: "sathish" },
];

export const listBookings = (req, res) => {
  const customerList = customers.map(customer => {
    const customerBookings = bookings.filter(booking => booking.customerId == customer.id);
    return {
      customerName: customer.name,
      bookings: customerBookings
    };
  });
  res.status(200).json(customerList);
};

export const listCustomerCount = (req, res) => {
  const { customerId } = req.params;
  const customerBookings = bookings.filter(booking => booking.customerId == customerId);
  const bookingDetails = customerBookings.map(booking => ({
    customerName: customers.find(c => c.id == booking.customerId).name,
    roomName: booking.roomId,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    bookingId: booking.id,
    bookingDate: booking.bookingDate,
    bookingStatus: booking.status
  }));
  res.status(200).json(bookingDetails);
};

export { customers };
