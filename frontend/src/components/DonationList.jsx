// src/components/DonationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { Helmet } from 'react-helmet-async';

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/donations/all-donations');
        setDonations(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch donations');
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto my-24 p-5 bg-white rounded-lg shadow-lg">
        <Helmet>
        <title>DonationList - Temple Donation</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-5">Confirmed Donations</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Currency</th>
              <th className="py-2 px-4 border-b">Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td className="py-2 px-4 border-b">{donation.name}</td>
                <td className="py-2 px-4 border-b">{donation.amount}</td>
                <td className="py-2 px-4 border-b">{donation.currency}</td>
                <td className="py-2 px-4 border-b">{donation.payment_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationList;
