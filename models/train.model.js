const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, required: true },
  status: { type: String, enum: ['available', 'booked'], default: 'available' },
  bookedBy: { type: String, ref: 'User' } // References the userId from User collection
});

const trainSchema = new mongoose.Schema({
  trainId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  departureStation: { type: String, required: true },
  arrivalStation: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  capacity: { type: Number, required: true },
  availableSeats: [seatSchema]
});

module.exports = mongoose.model('Train', trainSchema);