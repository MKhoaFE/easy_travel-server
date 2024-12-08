const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, ref: 'User' },
  trainId: { type: String, required: true, ref: 'Train' },
  seatNumber: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['confirmed', 'cancelled', 'pending'], default: 'pending' },
  price: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  transactionId: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);
