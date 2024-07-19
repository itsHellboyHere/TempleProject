// controllers/donationController.js
const Razorpay = require('razorpay');
const Donation = require('../models/Donation');

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

exports.createOrder = async (req, res) => {
    const { amount, currency } = req.body;

    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: currency,
        receipt: `receipt_${Math.random().toString(36).substring(7)}`
    };

    try {
        const order = await razorpay.orders.create(options);
        console.log("Order", order);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, name, email, contact } = req.body;

    try {
        const payment = await razorpay.payments.fetch(razorpay_payment_id);

        if (payment.status === 'captured') {
            const newDonation = new Donation({
                amount: payment.amount / 100,
                currency: payment.currency,
                razorpay_order_id: razorpay_order_id,
                payment_id: razorpay_payment_id,
                name: name,
                email: email,
                contact: contact
            });
            console.log("donation", newDonation);
            await newDonation.save();
            res.json({ status: 'success', message: 'Payment successful!' });
        } else {
            res.status(400).json({ status: 'failed', message: 'Payment not captured.' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (error) {
        res.status(500).send(error);
    }
};
