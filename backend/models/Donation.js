// models/Donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    razorpay_order_id: {
        type: String,
        required: true
    },
    payment_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Donation', donationSchema);
