const rooms = [
  { 
    id: "1", 
    numberOfSeats: 50, 
    amenities: ["AC", "Heater", "WiFi"], 
    pricePerHour: 100, 
    bookings: [] 
  },
  { 
    id: "2", 
    numberOfSeats: 30, 
    amenities: ["Heater", "WiFi"], 
    pricePerHour: 70, 
    bookings: [] 
  },
  { 
    id: "3", 
    numberOfSeats: 20, 
    amenities: ["AC", "WiFi"], 
    pricePerHour: 50, 
    bookings: [] 
  }
];

export const createRoom = (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const newRoom = {
    id: (rooms.length + 1).toString(),
    numberOfSeats,
    amenities,
    pricePerHour,
    bookings: []
  };
  rooms.push(newRoom);
  res.status(201).json({ message: "Room created successfully", data: newRoom });
};

export const listRoomsWithBookings = (req, res) => {
  const roomList = rooms.map(room => ({
    roomName: room.id,
    bookedStatus: room.bookings.length > 0 ? 'Booked' : 'Available',
    bookings: room.bookings
  }));
  res.status(200).json(roomList);
};

export { rooms };
