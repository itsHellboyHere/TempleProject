// Location.js
import React from 'react';

const Location = () => {
  return (
    <div className="h-96 w-full mb-11">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8613798080105!2d86.05213724970858!3d25.265891384390383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21786bceb8355%3A0x81aebb98ffe5b75a!2sKhutaha%20West%2C%20Bihar!5e0!3m2!1sen!2sin!4v1721383860588!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
    </div>
  );
};

export default Location;
