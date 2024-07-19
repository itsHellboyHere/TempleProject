// routes/donationRoutes.js
const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/create-order', donationController.createOrder);
router.post('/verify-payment', donationController.verifyPayment);
router.get('/all-donations', donationController.getAllDonations);
module.exports = router;
