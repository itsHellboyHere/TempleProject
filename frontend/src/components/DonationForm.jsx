import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { redirect, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const apiKey = import.meta.env.VITE_SECRET_KEY;
  const navigate = useNavigate()
  const createOrder = async () => {
    if (!amount || !name || !email || !contact) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/donations/create-order', {
        amount: amount,
        currency: 'INR' // Assuming currency is INR for temple donations
      });
      const { data } = response;
      const options = {
        key: apiKey, // Your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: 'Temple Donation',
        description: 'Donation for temple',
        order_id: data.id,
        handler: function (response) {
          verifyPayment(response.razorpay_order_id, response.razorpay_payment_id);
        },
        prefill: {
          name: name,
          email: email,
          contact: contact
        },
        notes: {
          address: 'Temple Address'
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  const verifyPayment = async (razorpay_order_id, razorpay_payment_id) => {
    try {
      const response = await axios.post('http://localhost:5000/donations/verify-payment', {
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
        name: name,
        email: email,
        contact: contact
      });
      console.log(response.data);
      toast.success('Donation successful!');
      return navigate('/')
    } catch (error) {
      console.error(error);
      toast.error('Donation failed. Please try again.');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center donate-bg">
      <Helmet>
        <title>Donate - Temple Donation</title>
      </Helmet>
      <div className=" bg-opacity-75 p-10 rounded-lg shadow-lg">
        <input
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Enter your contact number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <button
          onClick={createOrder}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationForm;
