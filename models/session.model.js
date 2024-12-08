const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, ref: 'User' },
  trainId: { type: String, required: true, ref: 'Train' },
  selectedSeats: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'completed', 'expired'], default: 'pending' }
});

module.exports = mongoose.model('Session', sessionSchema);
